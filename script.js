const audioBtn = document.querySelector('#audioBtn');
const song = document.querySelector('#song');
const icon = audioBtn.querySelector('i');

song.volume = 0.4;
let isPlaying = false;

function playMusic() {
    song.play().then(() => {
        isPlaying = true;
        icon.classList.add('spin');
    }).catch(() => {
       
    });
}

function pauseMusic() {
    song.pause();
    isPlaying = false;
    icon.classList.remove('spin');
}


audioBtn.addEventListener('click', (e) => {
    e.stopPropagation(); 
    isPlaying ? pauseMusic() : playMusic();
});

playMusic();

function startOnFirstInteraction() {
    if (!isPlaying) playMusic();
    ['click', 'touchend', 'keydown'].forEach(evt =>
        document.removeEventListener(evt, startOnFirstInteraction)
    );
}
['click', 'touchend', 'keydown'].forEach(evt =>
    document.addEventListener(evt, startOnFirstInteraction)
);



    const tanggalPernikahan = new Date(
        "2026-12-12T08:00:00"
    ).getTime();

    function updateCountdown() {
        const sekarang = new Date().getTime();
        const selisih = tanggalPernikahan - sekarang;

        if (selisih <= 0) {
            document.getElementById("hari").textContent = "00";
            document.getElementById("jam").textContent = "00";
            document.getElementById("menit").textContent = "00";
            document.getElementById("detik").textContent = "00";
            return;
        }

        const hari = Math.floor(
            selisih / (1000 * 60 * 60 * 24)
        );

        const jam = Math.floor(
            (selisih / (1000 * 60 * 60)) % 24
        );

        const menit = Math.floor(
            (selisih / (1000 * 60)) % 60
        );

        const detik = Math.floor(
            (selisih / 1000) % 60
        );

        document.getElementById("hari").textContent =
            String(hari).padStart(2, "0");

        document.getElementById("jam").textContent =
            String(jam).padStart(2, "0");

        document.getElementById("menit").textContent =
            String(menit).padStart(2, "0");

        document.getElementById("detik").textContent =
            String(detik).padStart(2, "0");
    }

    updateCountdown();
    setInterval(updateCountdown, 1000);