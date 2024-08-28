const emojis = ['😁','😍','😊','🤣','😒'];
const emoji = document.querySelector('#emoji');

emoji.addEventListener(
    'mouseover', ()=>{
        let randomNo = Math.floor(Math.random()*emojis.length)
        emoji.innerHTML = emojis[randomNo]
    }
)