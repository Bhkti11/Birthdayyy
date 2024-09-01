document.getElementById('surpriseButton').addEventListener('click', function() {
    const message = document.getElementById('message');
    const sound = document.getElementById('birthdaySound');

    message.classList.remove('hidden');
    sound.play();

    this.style.display = 'none';
    document.body.style.backgroundImage = "url('https://source.unsplash.com/1600x900/?celebration,fireworks')";
    document.body.style.backgroundSize = 'cover';
});
