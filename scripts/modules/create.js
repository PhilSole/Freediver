FD.create = function() {
    console.log('create');

    //===========================
    // World
    //===========================
    let worldWidth = 640;
    let worldHeight = 360;

    this.cameras.main.setBounds(-2.5 * worldWidth, 0, 5 * worldWidth, 5 * worldHeight);
    this.matter.world.setBounds(-2.5 * worldWidth, 0, 5 * worldWidth, 5 * worldHeight, 64, true, true, false, true); 
    
    
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


    //===========================
    // Other characters
    //===========================


    //===========================
    // Physics experiments
    //===========================
    let circle = this.add.circle(60, 420, 15);

    FD.circle1 = this.matter.add.gameObject(circle, {
        shape: 'circle',
        frictionAir: 0.0027,
        density: 0.1161
    });

    //===========================
    // Camera
    //===========================    
    this.cameras.main.setDeadzone(100, 100);
    this.cameras.main.startFollow(FD.circle1, true);
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
    this.matter.add.mouseSpring();

    this.input.on('pointerdown', function (pointer) {
        console.log('click');
    }, this);    
         
}