function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        callbackFunc();
    } else {
        document.addEventListener('DOMContentLoaded', callbackFunc);
    }
}

ready(function () {
    console.log('under wayish');

    FD.game = new Phaser.Game(FD.config);

    // FD.game.events.on('step', function(time, delta){
    //     console.log('step: ' + time);
    // });    

    // FD.game.events.on('poststep', function(time, delta){
    //     console.log('poststep: ' + time);
    // });

    // FD.game.events.on('preupdate', function(time, delta){
    //     console.log('preupdate: ' + time);
    // });
    
    // FD.game.events.on('prerender', function(renderer, time, delta){
    //     console.log('prerender: ' + time);
    // });    
});