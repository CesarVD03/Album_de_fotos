const cards = document.querySelectorAll('.cards li');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

// Empezamos con la primera foto
let activeIndex = 0; 

function updateGallery() {
    cards.forEach((card, index) => {
        // Limpiamos clases
        card.classList.remove('active', 'next', 'next-2', 'prev', 'prev-2');
        
        let diff = index - activeIndex;

        // Asignamos clases según la posición
        if (diff === 0) {
            card.classList.add('active');
        } else if (diff === 1) {
            card.classList.add('next');
        } else if (diff === 2) {
            card.classList.add('next-2');
        } else if (diff === -1) {
            card.classList.add('prev');
        } else if (diff === -2) {
            card.classList.add('prev-2');
        }
    });
}

nextBtn.addEventListener('click', () => {
    // Si no es la última foto, avanzamos
    if (activeIndex < cards.length - 1) {
        activeIndex++;
        updateGallery();
    }
});

prevBtn.addEventListener('click', () => {
    // Si no es la primera foto, retrocedemos
    if (activeIndex > 0) {
        activeIndex--;
        updateGallery();
    }
});

// Arrancar la galería al inicio
updateGallery();

// 🎵 PLAYLIST
const songs = [
    "multimedia/music/angel.mp3",
    "multimedia/music/contigo.mp3",
    "multimedia/music/follow_you.mp3",
    "multimedia/music/imagine.mp3",
    "multimedia/music/only_1.mp3",
    "multimedia/music/si_tu_quieres.mp3",
    "multimedia/music/sometimes.mp3",
    "multimedia/music/supernatural.mp3"
];

let songIndex = 0;
const audio = document.getElementById("audio");
const playPauseBtn = document.getElementById("playPause");
const nextSongBtn = document.getElementById("nextSong");
const prevSongBtn = document.getElementById("prevSong");
const songTitle = document.getElementById("song-title");

// Cargar canción
function loadSong(index) {
    audio.src = songs[index];
    let name = songs[index].split("/").pop();
    songTitle.textContent = "🎵 " + name;
}

// Play / Pause
playPauseBtn.addEventListener("click", () => {
    if (audio.paused) {
        audio.play();
        playPauseBtn.textContent = "⏸";
    } else {
        audio.pause();
        playPauseBtn.textContent = "▶️";
    }
});

// Next
nextSongBtn.addEventListener("click", () => {
    songIndex = (songIndex + 1) % songs.length;
    loadSong(songIndex);
    audio.play();
    playPauseBtn.textContent = "⏸";
});

// Prev
prevSongBtn.addEventListener("click", () => {
    songIndex = (songIndex - 1 + songs.length) % songs.length;
    loadSong(songIndex);
    audio.play();
    playPauseBtn.textContent = "⏸";
});

// Auto siguiente canción
audio.addEventListener("ended", () => {
    nextSongBtn.click();
});

// Inicializar
loadSong(songIndex);