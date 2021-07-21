FD.preload = function() {
    console.log('preload');

    this.load.setBaseURL('/assets/');
    this.load.image('water', 'backgrounds/underwater.jpg');
}