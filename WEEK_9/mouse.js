document.getElementById('playVideoButton').addEventListener('click', function() {
    document.getElementById('video').play();
});
document.getElementById('pauseVideoButton').addEventListener('click', function() {
    document.getElementById('video').pause();
});
window.addEventListener('DOMContentLoaded', () => {
    const video = document.getElementById('video');
    video.style.width = '600px';
    video.style.height = '400px';
});