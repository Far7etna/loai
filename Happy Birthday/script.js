window.addEventListener("load", () => {
    setTimeout(() => {
        document.getElementById("loading").style.display = "none";}, 2500);
});

const startBtn = document.getElementById("startBtn");
const intro = document.getElementById("intro");
const main = document.getElementById("mainContent");
const music = document.getElementById("music");
const musicBtn = document.getElementById("musicBtn");
const messageBtn = document.getElementById("messageBtn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const topBtn = document.getElementById("topBtn");
const surpriseBtn = document.getElementById("surpriseBtn");

main.style.display = "none";
startBtn.onclick = () => {
    intro.style.display = "none";
    main.style.display = "block";
    music.play();
    typeWriter();
}
const text =
"Today is not just another day... It's your special day ❤️ I hope every dream you have comes true, and your smile never fades. Happy Birthday! 🎂";
let i = 0;
function typeWriter(){
    const typing = document.querySelector(".typing");
    typing.innerHTML = "";
    i = 0;
    function write(){
        if(i < text.length){
            typing.innerHTML += text.charAt(i);
            i++;
            setTimeout(write,40);
        }
    }
    write();
}
musicBtn.onclick = () => {
    if(music.paused){
        music.play();
        musicBtn.innerHTML =
        '<i class="fa-solid fa-music"></i>';
    }
    else{
        music.pause();
        musicBtn.innerHTML =
        '<i class="fa-solid fa-volume-xmark"></i>';
    }
}
messageBtn.onclick = ()=>{
    modal.style.display="flex";
}
closeModal.onclick = ()=>{
    modal.style.display="none";
}
window.onclick = (e)=>{
    if(e.target==modal){
        modal.style.display="none";
    }
}
const slides = document.querySelectorAll(".slide");
const next = document.querySelector(".next");
const prev = document.querySelector(".prev");
const dots = document.querySelector(".dots");
let current = 0;
slides.forEach((slide,index)=>{
    const dot = document.createElement("span");
    if(index==0){
        dot.classList.add("active");
    }
    dots.appendChild(dot);
});
const allDots = document.querySelectorAll(".dots span");
function showSlide(index){
    slides.forEach(slide=>{
        slide.classList.remove("active");
    });
    allDots.forEach(dot=>{
        dot.classList.remove("active");
    });
    slides[index].classList.add("active");
    allDots[index].classList.add("active");
}
next.onclick = ()=>{
    current++;
    if(current>=slides.length){
        current=0;
    }
    showSlide(current);
}
prev.onclick = ()=>{
    current--;
    if(current<0){
        current=slides.length-1;
    }
    showSlide(current);
}
allDots.forEach((dot,index)=>{
    dot.onclick=()=>{
        current=index;
        showSlide(current);
    }
});
setInterval(()=>{
    current++;
    if(current>=slides.length){
        current=0;
    }
    showSlide(current);
},10000);
window.addEventListener("scroll",()=>{
    if(window.scrollY>400){
        topBtn.style.display="block";
    }
    else{
        topBtn.style.display="none";
    }
});
topBtn.onclick=()=>{
    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
};
surpriseBtn.onclick=()=>{
    alert("🎉 Happy Birthday! أتمنى لك سنة مليئة بالسعادة والنجاح ❤️");
}
const hearts = document.querySelector(".hearts");
function createHeart() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.style.position = "absolute";
    heart.style.left = Math.random() * 100 + "%";
    heart.style.bottom = "-40px";
    heart.style.fontSize = (20 + Math.random() * 25) + "px";
    heart.style.opacity = Math.random();
    heart.style.transition = "transform 8s linear, opacity 8s";
    hearts.appendChild(heart);
    setTimeout(() => {
        heart.style.transform =
            `translateY(-120vh) rotate(${360 + Math.random()*360}deg)`;
        heart.style.opacity = "0";
    }, 100);
    setTimeout(() => {
        heart.remove();
    }, 8500);
}
setInterval(createHeart, 700);
surpriseBtn.addEventListener("click", () => {
    createConfetti();
    for(let i=0;i<6;i++){
        setTimeout(createConfetti, i*400);
    }
});
function createConfetti(){
    const container = document.getElementById("confetti");
    for(let i=0;i<120;i++){
        const confetti = document.createElement("div");
        const fromLeft = Math.random() > 0.5;
        confetti.style.position = "absolute";
        confetti.style.top = (20 + Math.random()*25) + "%";
        if(fromLeft){
            confetti.style.left = "-20px";
        }else{
            confetti.style.left = "calc(100% + 20px)";
        }
        confetti.style.width = "10px";
        confetti.style.height = "10px";
        confetti.style.background =
        `hsl(${Math.random()*360},100%,60%)`;
        confetti.style.borderRadius = "3px";
        confetti.style.transform =
        `rotate(${Math.random()*360}deg)`;
        confetti.style.transition =
        "3s ease-out";
        container.appendChild(confetti);
        setTimeout(()=>{
            if(fromLeft){
                confetti.style.left =
                (60 + Math.random()*40) + "%";
            }else{
                confetti.style.left =
                (Math.random()*40) + "%";
            }
            confetti.style.top =
            (40 + Math.random()*40) + "%";
            confetti.style.transform =
            `rotate(${Math.random()*720}deg)`;
            confetti.style.opacity="0";
        },100);
        setTimeout(()=>{
            confetti.remove();
        },3500);
    }
}
let touchStartX = 0;
let touchEndX = 0;
const slider = document.querySelector(".slides");
slider.addEventListener("touchstart",(e)=>{
    touchStartX = e.changedTouches[0].screenX;
});
slider.addEventListener("touchend",(e)=>{
    touchEndX = e.changedTouches[0].screenX;
    if(touchStartX-touchEndX>50){
        next.click();
    }
    if(touchEndX-touchStartX>50){
        prev.click();
    }
});
console.log("🎂 Happy Birthday ❤️");