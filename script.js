window.addEventListener("DOMContentLoaded", function () {
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");
  
    // Set the default banner image and text
    banner.style.backgroundImage = "url(images/Background.png)";
    bannerImage.setAttribute("src", "images/Logo.webp");
    bannerHeading.textContent = "Music Player";
    bannerText.textContent = "Enjoy and keep listening";
  });
  
function playAll(songNumber){
    var audioElement= document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    var songFileName = "music/"+songNumber+".mp3";
    var currentRow= document.getElementById("song"+songNumber);
    var banner = document.querySelector(".banner");
    var bannerImage = document.querySelector(".banner .left-img");
    var bannerHeading = document.querySelector(".banner .heading h1");
    var bannerText = document.querySelector(".banner .heading p");

    if(audioElement.getAttribute("src")==songFileName && !audioElement.paused){
        audioElement.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
        
        banner.style.backgroundImage = "url(images/pic1.webp)";
        bannerImage.setAttribute("src", "images\Spotify_Logo_RGB_Green.png");
        bannerHeading.textContent = "Spotifyy";
        bannerText.textContent = "Enjoy and keep listening";
    }
    else{
        audioElement.setAttribute("src",songFileName);
        audioElement.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
       
        if (songNumber === 1) {
            // banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Mike Posner - I took a pill in Ibiza (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        } else if (songNumber === 2) {
            // banner.style.backgroundImage = "url()";
            // bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Ghar (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 3) {
             banner.style.backgroundImage = "url()";
             bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Kahi to hogi woh (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 4) {
             banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Kasoor (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 5) {
            banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Tu Hai Kahan";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 6) {
             banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Baarishein - Anuv Jain (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 7) {
            banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Waqt Ki Baatein (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 8) {
            banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Lovely feat. Anika Vidyarthi (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 9) {
            banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Let me down slowly - Alec Benjamin (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 10) {
            banner.style.backgroundImage = "url()";
            bannerImage.setAttribute("src", "");
            bannerHeading.textContent = "Jee Le Zara - (Cover)";
            bannerText.textContent = "By Ishaan Kaushik";
        }
        else if (songNumber === 11) {
            //banner.style.backgroundImage = "url(images/b011.png)";
            bannerImage.setAttribute("src", "images/image 11.png");
            bannerHeading.textContent = "Behula - (Cover)";
            bannerText.textContent = "By Tanveer Chowdhury";
        }
    }
}

function playaudio(){
    var audio=document.getElementById("song");
    var playBtn=document.getElementById("play-pause");
    if(audio.paused){
        audio.play();
        playBtn.innerHTML='<img src="images/pause-button.svg">';
    }
    else{
        audio.pause();
        playBtn.innerHTML='<img src="images/play-button.svg">';
    }
}