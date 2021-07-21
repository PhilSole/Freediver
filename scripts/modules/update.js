
let buoyancyConstant = 75.5 * 1.025 * .00015;
console.log(buoyancyConstant);

FD.oxygen = 100;
FD.timeStart = 0;
FD.timeElapsed = 0

FD.update = function(time, delta) {
    // Calculate buoyancy force
    let depth = FD.circle1.body.position.y/15;
    let pressure = depth * 1025 * 9.8 + 100000;
    let pressureRatio = 100000/pressure;
    let airVolume = 10 * pressureRatio;
    let buoyancyVariable = airVolume * 1.025 * 0.00015;
    let buoyancyTotal = buoyancyConstant + buoyancyVariable;

    FD.circle1.applyForce({x:0, y: -buoyancyTotal});

    // Calculate remaining oxygen
    if(FD.timeStart == 0) {
        FD.timeStart = time;
        console.log('start');
    } else {
        FD.timeElapsed += delta;
        FD.oxygen -= FD.timeElapsed/12000000;
    }


    FD.data.setText([
        'Depth: ' + parseInt(FD.circle1.body.position.y / 15) + 'm',
        'Pressure: ' + (pressure/100000).toFixed(1) + 'BAR',
        'Lung volume: ' + airVolume.toFixed(1) + 'L',
        'Oxygen: ' + Math.round(FD.oxygen) + '%',
    ])
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