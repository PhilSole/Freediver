FD.metre = 15;

FD.gameSceneConfig = {
    key: 'gameScene',
    physics: {
        default: 'matter',
        matter: {
            debug: { // See debug options.js example
                showAngleIndicator: true,
                showCollisions: true,
                showSleeping: true,
                showJoint: true,
            },
            enableSleeping: false, // Performance gain - Bodies that come to rest can sleep and wake. https://github.com/liabru/matter-js/issues/354
            gravity: { 
                // y: .15 
                y: 0
            },
            plugins: {
                attractors: true
            },
            constraintIterations: 10,
            positionIterations: 20,
            velocityIterations: 20,
        }
    },
    preload: FD.preload,
    create: FD.create,
    update: FD.update    
}

FD.pauseSceneConfig = {
    key: 'pauseScene',
    preload: FD.preloadPause,
    create: FD.createPause,
    update: FD.updatePause
}

FD.config = {
    type: Phaser.AUTO, // Either WebGL or canvas
    parent: 'gameContainer',
    width: 1280,
    height: 720,
    resolution: window.devicePixelRatio,
    backgroundColor: '#c4dedf',
    pixelArt: false, // pixel graphics won't blur when scaling. https://www.html5gamedevs.com/topic/36607-scaling-the-canvas-for-pixel-art/
    scale: {
        // parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        // width: 800,
        // height: 600
    },
    scene: [FD.gameSceneConfig, FD.pauseSceneConfig]
};