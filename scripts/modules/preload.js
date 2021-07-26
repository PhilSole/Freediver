FD.preload = function() {
    console.log('preload');

    this.load.setBaseURL('./assets/');
    this.load.image('water', 'backgrounds/underwater.jpg');
    this.load.image('stop', 'sprites/hand-stop.png');
    this.load.spritesheet('swimmer', 'sprites/swimmer.png', { 
        frameWidth: 55, 
        frameHeight: 32 
    });
}

FD.preloadPause = function() {
    console.log('preload pause');
}