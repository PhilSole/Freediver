FD.preload = function() {
    console.log('preload');

    this.load.setBaseURL('/assets/');
    this.load.image('water', 'backgrounds/under-water-mob.png');
}