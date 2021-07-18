function ready(callbackFunc) {
    if (document.readyState !== 'loading') {
        callbackFunc();
    } else {
        document.addEventListener('DOMContentLoaded', callbackFunc);
    }
}

ready(function () {
    console.log('under way');

    FD.game = new Phaser.Game(FD.config);
});