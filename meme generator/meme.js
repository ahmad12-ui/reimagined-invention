const button =document.querySelector(".meme-generator .generate-meme-btn");
const meme_title=document.querySelector(".meme-generator .meme-title");
const meme_author=document.querySelector(".meme-generator .meme-author");
const img= document.querySelector(".meme-generator img");

const updateDetails =(url, author, title)=>{
    img.setAttribute("src",url);
    meme_title.innerHTML=title;
    meme_author.innerHTML=author;
}

const generatememe =()=>{
    fetch("https://meme-api.com/gimme/wholesomememes")
    .then((response) =>response.json())
    .then(data =>{
        updateDetails(data.url, data.title,data.author)
});
};


button.addEventListener("click" , generatememe);
generatememe();
// const generateMemeBtn = document.querySelector(
//     ".meme-generator .generate-meme-btn"
//   );
//   const memeImage = document.querySelector(".meme-generator img");
//   const memeTitle = document.querySelector(".meme-generator .meme-title");
//   const memeAuthor = document.querySelector(".meme-generator .meme-author");
  
//   const updateDetails = (url, title, author) => {
//     memeImage.setAttribute("src", url);
//     memeTitle.innerHTML = title;
//     memeAuthor.innerHTML = `Meme by: ${author}`;
//   };
  
//   const generateMeme = () => {
//     fetch("https://meme-api.com/gimme/wholesomememes")
//       .then((response) => response.json())
//       .then((data) => {
//         updateDetails(data.url, data.title, data.author);
//       });
//   };
  
//   generateMemeBtn.addEventListener("click", generateMeme);
  
//   generateMeme();
