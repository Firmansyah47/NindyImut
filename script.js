/* =================================
   ELEMENTS
================================= */

const opening = document.getElementById("opening");

const passwordInput =
    document.getElementById("passwordInput");

const enterButton =
    document.getElementById("enterButton");

const wrongPassword =
    document.getElementById("wrongPassword");

const albumPage =
    document.getElementById("albumPage");

const bgMusic =
    document.getElementById("bgMusic");

const musicButton =
    document.getElementById("musicButton");

const finalButton =
    document.getElementById("finalButton");

const finalPopup =
    document.getElementById("finalPopup");

const closePopup =
    document.getElementById("closePopup");


/* =================================
   PASSWORD
================================= */


/*
   GANTI PASSWORD DI SINI

   Contoh:
   const PASSWORD = "nindy";

*/

const PASSWORD = "sayang";


function enterGarden() {

    const enteredPassword =
        passwordInput.value.trim().toLowerCase();


    if (enteredPassword === PASSWORD) {

        wrongPassword.style.display = "none";


        /*
           Musik mulai setelah tombol
           ENTER ditekan.
        */

        bgMusic.volume = 1;

bgMusic.currentTime = 0;

bgMusic.play()
    .then(() => {
        musicButton.textContent = "🎵";
        console.log("Music berhasil diputar!");
    })
    .catch((error) => {
        console.log("Music gagal:", error);
    });


        /*
           Daun membuka
        */

        opening.classList.add("opened");


        /*
           Setelah animasi selesai,
           opening disembunyikan.
        */

        setTimeout(() => {

            opening.style.display = "none";

            albumPage.style.display = "block";

            window.scrollTo({
                top: 0,
                behavior: "instant"
            });

        }, 1800);


    } else {

        wrongPassword.style.display = "block";

        passwordInput.value = "";

        passwordInput.focus();

    }

}


/* tombol ENTER */

enterButton.addEventListener(
    "click",
    enterGarden
);


/* ENTER dari keyboard */

passwordInput.addEventListener(
    "keydown",
    function(event) {

        if (event.key === "Enter") {
            enterGarden();
        }

    }
);


/* =================================
   MUSIC
================================= */

let musicPlaying = true;


musicButton.addEventListener(
    "click",
    function() {

        if (musicPlaying) {

            bgMusic.pause();

            musicButton.textContent = "🔇";

            musicPlaying = false;

        } else {

            bgMusic.play();

            musicButton.textContent = "🎵";

            musicPlaying = true;

        }

    }
);


/* =================================
   FINAL POPUP
================================= */

finalButton.addEventListener(
    "click",
    function() {

        finalPopup.style.display = "flex";

    }
);


closePopup.addEventListener(
    "click",
    function() {

        finalPopup.style.display = "none";

    }
);


/*
   Kalau klik area luar popup,
   popup ditutup.
*/

finalPopup.addEventListener(
    "click",
    function(event) {

        if (event.target === finalPopup) {

            finalPopup.style.display = "none";

        }

    }
);
