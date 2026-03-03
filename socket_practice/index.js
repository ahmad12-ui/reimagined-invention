import express from "express";
import { createServer } from "node:http";
import { fileURLToPath } from "node:url";
import { dirname, join } from "node:path";
import { Server } from "socket.io";
import sqlite3 from "sqlite3";
import { open } from "sqlite";

const db = await open({
  filename: "chat.db",
  driver: sqlite3.Database,
});

await db.exec(`CREATE TABLE IF NOT EXISTS messages(id INTEGER PRIMARY KEY AUTOINCREMENT,
      client_offset TEXT UNIQUE,
      content TEXT);`);

const app = express();
const server = createServer(app, { connectionStateRecovery: {} });
const io = new Server(server);

const _dirname = dirname(fileURLToPath(import.meta.url));

// first we take the index file name then we remove the word file and take the directory name where index.js or inedx.html exist and in response we snd html file by joining them with directory name
app.get("/", (req, res) => {
  res.sendFile(join(_dirname, "index.html"));
});

// from server to client  means server listen from on user and provide it to another
io.on("connection", async (socket) => {
  socket.on("chat message", async (msg) => {
    let results;
    try {
      results = await db.run("INSERT INTO messages (content) VALUES (?)", msg);
    } catch (error) {
      console.log("this is error in storing file to database", error);
    }
    io.emit("chat message", msg, results.lastID);
  });
  if (!socket.recovered) {
    // if the connection state recovery was not successful
    try {
      await db.each(
        "SELECT id, content FROM messages WHERE id > ?",
        [socket.handshake.auth.serverOffset || 0],
        (_err, row) => {
          socket.emit("chat message", row.content, row.id);
        },
      );
    } catch (e) {
      // something went wrong
      console.log("this is error in reconnection ", e);
    }
  }
});

server.listen(3000, () => {
  console.log("server running at http://localhost:3000");
});
