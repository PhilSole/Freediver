FD.metre = 15;

FD.config = {
    type: Phaser.AUTO, // Either WebGL or canvas
    width: 640,
    height: 360,
    backgroundColor: '#c4dedf',
    parent: 'gameContainer',
    pixelArt: true, // pixel graphics won't blur when scaling. https://www.html5gamedevs.com/topic/36607-scaling-the-canvas-for-pixel-art/
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
                y: .15 
            },
            plugins: {
                attractors: true
            }
        }
    },
    scale: {
        // parent: 'yourgamediv',
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        // width: 800,
        // height: 600
    },
    scene: {
        preload: FD.preload,
        create: FD.create,
        update: FD.update
    }
};