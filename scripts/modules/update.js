
let buoyancyConstant = 75.5 * 1.025 * .00015;
console.log(buoyancyConstant);


FD.update = function(a, b) {
    let depth = FD.circle1.body.position.y/15;
    let pressure = depth * 1025 * 9.8 + 100000;
    let pressureRatio = 100000/pressure;
    let airVolume = 10 * pressureRatio;
    let buoyancyVariable = airVolume * 1.025 * 0.00015;
    let buoyancyTotal = buoyancyConstant + buoyancyVariable;

    // console.log(airVolume);

    FD.circle1.applyForce({x:0, y: -buoyancyTotal});

    FD.data.setText([
        'Depth: ' + parseInt(FD.circle1.body.position.y / 15) + 'm',
        'Pressure: ' + (pressure/100000).toFixed(1) + 'BAR',
        'Lung volume: ' + airVolume.toFixed(1) + 'L',
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