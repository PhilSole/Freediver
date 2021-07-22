FD.preload = function() {
    console.log('preload');

    this.load.setBaseURL('./assets/');
    this.load.image('water', 'backgrounds/underwater.jpg');
    this.load.image('stop', 'sprites/hand-stop.png');
}

FD.preloadPause = function() {
    console.log('preload pause');
}