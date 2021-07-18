FD.create = function() {
    console.log('create');

    //===========================
    // World
    //===========================
    let worldWidth = 640;
    let worldHeight = 360;

    this.matter.world.setBounds(0, 0, worldWidth, worldHeight); 
    
    
    //===========================
    // Background
    //===========================
    // let background = this.add.image(worldWidth/2, worldHeight/2, 'water');

    // background.displayWidth = worldWidth;
    // background.displayHeight = worldHeight;


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
    FD.circle1 = this.matter.add.circle(100, 0, 15, {
        angle: 1,
        restitution: 1,
        frictionAir: .5
    });

    
    //===========================
    // Controls
    //===========================
    this.matter.add.mouseSpring();
         
}