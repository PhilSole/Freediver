
let buoyancyConstant = 75.5 * 1.025 * .00015;
console.log(buoyancyConstant);

FD.oxygen = 100;
FD.timeStart = 0;
FD.timeElapsed = 0

FD.update = function(time, delta) {

    // let player = FD.player;

    // if(player.body.velocity.x > 0.1) {
    //     player.anims.play('swimRight', true);
    // } else if(player.body.velocity.x < -0.1) {
    //     player.anims.play('swimLeft', true);
    // } else {
    //     player.anims.stop();
    // }

    

    // // Calculate buoyancy force
    // let depth = player.body.position.y/15;
    // let pressure = depth * 1025 * 9.8 + 100000;
    // let pressureRatio = 100000/pressure;
    // let airVolume = 10 * pressureRatio;
    // let buoyancyVariable = airVolume * 1.025 * 0.00015;
    // let buoyancyTotal = buoyancyConstant + buoyancyVariable;

    // // Pointer (swimming) force
    // let pointer = this.input.activePointer;
    // let swimVec = new Phaser.Math.Vector2();

    // if(pointer.isDown) {
    //     console.log(pointer);
    //     let pointerX = pointer.worldX;
    //     let pointerY = pointer.worldY;
    
    //     let playerX = player.body.position.x;
    //     let playerY = player.body.position.y;

    //     swimVec.set(pointerX - playerX, pointerY - playerY);
    //     swimVec.setLength(.0013);

    //     // console.log(swimVec.angle());

    //     player.setRotation(swimVec.angle());
    // }

    // swimVec.add({x:0, y: -buoyancyTotal});

    // // Apply total forces
    // player.applyForce(swimVec);

    // // Calculate remaining oxygen
    // if(FD.timeStart == 0) {
    //     FD.timeStart = time;
    //     console.log('start');
    // } else {
    //     FD.timeElapsed += delta;
    //     FD.oxygen -= FD.timeElapsed/12000000;
    // }


    // FD.data.setText([
    //     'Depth: ' + parseInt(player.body.position.y / 15) + 'm',
    //     'Pressure: ' + (pressure/100000).toFixed(1) + 'BAR',
    //     'Lung volume: ' + airVolume.toFixed(1) + 'L',
    //     'Oxygen: ' + Math.round(FD.oxygen) + '%',
    // ])
} 

// ======================================
// Calculate required gravity value
// ======================================

// var bla = 0;

// if(bla < 1) {
//     console.log('first update: ' + a);
//     console.log(FD.circle1);
//     // FD.game.destroy();
//     bla = 1;
// }

// if(FD.circle1.position.y >= 345) {
//     console.log('last update:' + a);
//     console.log(FD.circle1);
//     FD.game.destroy();
// }

FD.updatePause = function(time, delta) {
    // console.log('updating pause');
}