
(function(){

    const form=document.querySelector('#message_form')

    form.addEventListener('submit',function(e){
        e.preventDefault()
       

        const message=document.querySelector('#userinput');
        const feedback=document.querySelector('h5');
        const msg_content=document.querySelector('#msg_content');

    
        if(message.value === ''){
            feedback.classList.add('show');
            setTimeout(function(){
                feedback.classList.remove('show');
            },2500)
        }else{
            // msg_content.textContent= message.value;
            msg_content.innerText = message.value;
            message.value= '';
        }
     })
})()
