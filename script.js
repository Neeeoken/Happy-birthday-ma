
let images = ["photo1.jpg", "photo2.jpg", "photo3.jpg", "photo4.jpg", "photo5.jpg"];
let index = 0;
let slideshowStarted = false;

function startSlideshow() {
    if (slideshowStarted) return;
    slideshowStarted = true;
    setInterval(() => {
        index = (index + 1) % images.length;
        document.getElementById("slide").src = images[index];
    }, 3000);
}


window.onload = function () {
    confetti({
        particleCount: 100,
        spread: 100,
        origin: { y: 0.5 }
    });

    createFloatingHearts();
};


let giftOpened = false;

function openGift() {
    if (giftOpened) return;
    giftOpened = true;

    
    document.querySelector(".gift-text").style.display = "none";

    const giftBox = document.querySelector(".gift-box");
    const letter = document.getElementById("letter");
    const slideshow = document.getElementById("slideshow");

  
    giftBox.classList.add("shake");

    setTimeout(() => {
        giftBox.classList.remove("shake");
        giftBox.classList.add("open");

        
        slideshow.classList.remove("hidden");
        startSlideshow();

        
        const photoBurst = document.querySelector(".photo-burst");
        const burstPhotos = ["photo1.jpg", "photo2.jpg", "photo3.jpg"];

        burstPhotos.forEach((src, i) => {
            setTimeout(() => {
                const img = document.createElement("img");
                img.src = src;
                img.style.left = Math.random() * 80 + "px";
                img.style.transform = "rotate(" + (Math.random() * 40 - 20) + "deg)";
                photoBurst.appendChild(img);

                setTimeout(() => {
                    img.remove();
                }, 2000);
            }, i * 300);
        });

        
        letter.classList.remove("hidden");
        
        setTimeout(() => {
            letter.classList.add("show");
        }, 50);

        
        let audio = new Audio("music.mp3");
        audio.loop = true;
        audio.play().catch(e => console.log("Autoplay blocked:", e));

        
        confetti({
            particleCount: 400,
            spread: 180,
            origin: { y: 0.6 }
        });

        setTimeout(() => {
            confetti({
                particleCount: 200,
                angle: 60,
                spread: 100,
                origin: { x: 0 }
            });
            confetti({
                particleCount: 200,
                angle: 120,
                spread: 100,
                origin: { x: 1 }
            });
        }, 300);

    }, 500);
}


function createFloatingHearts() {
    const container = document.querySelector(".floating-hearts");

    setInterval(() => {
        const heart = document.createElement("span");
        heart.innerHTML = "❤️";
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (Math.random() * 20 + 10) + "px";
        heart.style.animationDuration = (Math.random() * 5 + 5) + "s";

        container.appendChild(heart);

        setTimeout(() => {
            heart.remove();
        }, 8000);
    }, 500);
}
