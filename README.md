# About Freediver
Freediver is an idea for relaxing, fun, and challenging game where you are a freediver navigating a 2D underwater world.

## Inspiration

* Swimmer sprite by [chasersgaming](https://opengameart.org/users/chasersgaming)

## Ideation

### 2D Physics mechanics

* **Attractors** - Getting within a certain radius of enemies triggers an attractor object, e.g. shark. The shark sprite's "swim cycle" framerate increases as its velocity increases towards its prey. Could be our swimmer or another character. A "bite" action triggers at close proximity but the shark's motion has inertia and is an avoidable lunge. Our player may have to avoid the attack or rescue another character by trapping or neutralising the shark.
* **The swimmer** - might be a "chain" object or some system of bodies and constraints.
* **Body follow path** - Characters can follow a path until within a certain distance from other characters before breaking free of the path.
* **Raycasting** - Could be used to give AI characters awareness of surroundings e.g. proximity to walls causes change in motion.
* **Chamfer** - Could make for less janky friction between characters and terrain.
* **Sensor** - Bodies can act as collision sensors without physical properties. Similar use to raycasting idea above.
* **Mechanisms** - Create and destroy mechanisms for things such as "pull along rope".
* **World constraint** - Could also be used for swimmer propulsion. When spring gets fully extended it temporarily becomes fixed to the world.
* **Multiple physics layers** - You can combine physics layers arcade/matter so a background scene can do it's own thing, for example.

### Freediving and swimming in the real world
* **How deep/long?** - World record 102m single breath no fins or weight (4 mins 10 secs). 220m with weights and floatation up. 11 minute breath hold without using energy.
* **Speed** 
    - Top speed (no fins, 25m pool with dive) 2.47m/s
    - Top speed (with fins, 25m pool with dive) 3.64m/s
* **Equipment**
    - Monofin
    - Bi-fins
    - Weights
    - Wetsuit
* **Technique**
    - Flutter kick - constant speed. Powerful bursts of speed. Kicks up silt near bottom.
    - Frog kick - has resting phase. Conserves oxygen.
    - Freefall - At certain depth become negatively buoyant.
* **Oxygen, pressure and body**
    - Total Lung capacity average is about 6 litres. Efficiency can be increased but not total volume. World record about 12 litres total volume.
    - Volume of air is divided by every 10m unit of depth. e.g 10m = 1/2 volume, 20m = 1/3 volume.

## General physics concepts
* Mass kg
* Weight N
* Density kg/m3 (pascal Pa)
* Pressure N/m2
* Volume m3
* Velocity m/s
* Acceleration m/s2
* Position x,y m
* Gravity 9.8 m/s2
* Force N
* Resistance

## Game physics units
* Distance is set to 15px per metre
* Gravity is set to 0.15
* Friction isn't calculated relative to shape. I'd need my own function for that.


### Swimmer movement/mechanics

* **Wall push-off** - The swimmer should be able to "boost" off walls as if they were pushing off.
* **Pick up rock** - Gives the swimmer weight to go deep quickly. Perhaps conserve oxygen. Run along sea floor. Drop somewhere to affect environment.
* **Pull along rope/beam etc** - 
* **Buoyancy** - The average density of the human body, after maximum inhalation of air, changes to 945 kg/m3 and the typical density of seawater is about 1020 kg/m3. Fresh water 1000 kg/m3. Upward force is equal to the weight of the water displaced.

### Resources

* **Physics on server, multiplayer** - [Youtube demo](https://www.youtube.com/watch?v=n8gJQEfA18s)

### Code structure

* **Finite state machine** - Is possibly a standard paradigm for games. Research how this could fit.
* **Scenes** - Phaser games use differenct scenes with their own physics, for sequential parts of the game.