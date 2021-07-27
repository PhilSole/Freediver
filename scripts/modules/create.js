FD.create = function() {
    console.log('create');

    let theScene = this.scene;

    //===========================
    // World
    //===========================
    let worldWidth = 1280;
    let worldHeight = 720;

    this.cameras.main.setBounds(-2.5 * worldWidth, 0, 5 * worldWidth, 5 * worldHeight);
    this.matter.world.setBounds(-2.5 * worldWidth, 0, 5 * worldWidth, 5 * worldHeight, 64, true, true, true, true); 
    
    
    //===========================
    // Background
    //===========================
    let background = this.add.image(-2.5 * worldWidth, 0, 'water').setOrigin(0);

    background.displayWidth = 5 * worldWidth;
    background.displayHeight = 5 * worldHeight;


    //===========================
    // Terrain            
    //===========================


    //===========================
    // Player
    //===========================
    // let playerSprite = this.add.sprite(100, 150, 'swimmer');

    // FD.player = this.matter.add.gameObject(playerSprite, {
    //     frictionAir: 0.0027,
    //     density: .046
    // });

    // FD.player.anims.create({
    //     key: 'swimLeft',
    //     frames: this.anims.generateFrameNumbers('swimmer', { start: 0, end: 7 }),
    //     frameRate: 10,
    //     repeat: -1
    // });

    // FD.player.anims.create({
    //     key: 'swimRight',
    //     frames: this.anims.generateFrameNumbers('swimmer', { start: 8, end: 15 }),
    //     frameRate: 10,
    //     repeat: -1
    // });    

    //===========================
    // Other characters
    //===========================
    // const group = this.matter.world.nextGroup();
    // const particleOptions = { friction: 0.00001, collisionFilter: { group: group }, render: { visible: true } };
    // const constraintOptions = { stiffness: 0.5 };

    // this.cloth = this.matter.add.softBody(200, 140, 3, 2, 5, 5, false, 8, particleOptions, constraintOptions);

    upper = this.matter.add.rectangle(145, 100, 60, 20, {
        label: 'upper',
        mass: 40,
        ignoreGravity: true
    });

    lower = this.matter.add.rectangle(55, 100, 60, 20, {
        label: 'lower',
        mass: 40,
        ignoreGravity: true
    });

    groupBody = this.matter.world.nextGroup(true);

    lower.collisionFilter.group = groupBody;
    upper.collisionFilter.group = groupBody;

    this.matter.add.constraint(upper, lower, 30, .000015, {
        pointA: { x: -30, y: 0 },
        pointB: { x: 30, y: 0 },
        // angularStiffness: .15,
        // damping: .15
    });

    // this.matter.add.constraint(upper, lower, 10, .000015, {
    //     pointA: { x: 0, y: 10 },
    //     pointB: { x: 30, y: 10 },
    //     // angularStiffness: .15,
    //     // damping: .15
    // });
  
    // this.matter.add.constraint(upper, lower, 10, .000015, {
    //     pointA: { x: -30, y: 10 },
    //     pointB: { x: 0, y: 10 },
    //     // angularStiffness: .15,
    //     // damping: .15
    // });

    // this.matter.add.constraint(upper, lower, 10, .000015, {
    //     pointA: { x: 0, y: -10 },
    //     pointB: { x: 30, y: -10 },
    //     // angularStiffness: .15,
    //     // damping: .15
    // });    

    //===========================
    // Physics experiments
    //===========================
    // let circle = this.add.circle(60, 90, 15);

    // FD.circle1 = this.matter.add.gameObject(circle, {
    //     shape: 'circle',
    //     frictionAir: 0.0027,
    //     density: 0.1161
    // });

    //===========================
    // Camera
    //===========================    
    // this.cameras.main.setDeadzone(30, 30);
    // this.cameras.main.startFollow(FD.player, true, 0.05, 0.05); // lerp (linear interpolation for follow)
    this.cameras.main.setZoom(1);

    //===========================
    // Data
    //===========================
    FD.data = this.add.text(15, 15)
            .setText(['Depth: ', 'Pressure: ', 'Lung volume: ', 'Oxygen: '])
            .setScrollFactor(0);
            FD.data.setShadow(1, 1, '#000000', 2);

    
    //===========================
    // Controls
    //===========================
    // this.input.setDefaultCursor('url(assets/input/cursors/blue.cur), pointer');
    this.matter.add.mouseSpring({
        angularStiffness: .001,
        // stiffness: 0.00015,
    });

    // this.input.on('pointerdown', function (pointer) {
    //     console.log('click');
    // }, this);  

    this.input.setPollRate(200); // Fixed and issue where pointer wasn't polled if mouse wasn't moving for a few seconds
    
    let pause = this.add.image(worldWidth - 40, 40, 'stop').setScrollFactor(0).setInteractive();

    pause.displayWidth = 40;
    pause.displayHeight = 40;

    pause.on('pointerdown', function () { 
        theScene.pause();
        theScene.run('pauseScene');
    });
         
}

FD.createPause = function() {
    console.log('create pause');
    let theScene = this.scene;

    this.input.on('pointerdown', function (pointer) {
        theScene.pause();
        theScene.run('gameScene');
    }, this);    
}