    ___    __                __     ______                   ___                
   /   |  / /_  ____  __  __/ /_   / ____/_______  ___  ____/ (_)   _____  _____
  / /| | / __ \/ __ \/ / / / __/  / /_  / ___/ _ \/ _ \/ __  / / | / / _ \/ ___/
 / ___ |/ /_/ / /_/ / /_/ / /_   / __/ / /  /  __/  __/ /_/ / /| |/ /  __/ /    
/_/  |_/_.___/\____/\__,_/\__/  /_/   /_/   \___/\___/\__,_/_/ |___/\___/_/     
                                                                                
# Freediver
Freediver is an idea for relaxing, fun, and challenging game where you are a freediver navigating a 2D underwater world.

## Credits

### Design Inspiration

* Swimmer sprite by [chasersgaming](https://opengameart.org/users/chasersgaming)

## Ideation

### 2D Physics mechanics

* *Attractors* - Getting within a certain radius of enemies triggers an attractor object, e.g. shark. The shark sprite's "swim cycle" framerate increases as its velocity increases towards its prey. Could be our swimmer or another character. A "bite" action triggers at close proximity but the shark's motion has inertia and is an avoidable lunge. Our player may have to avoid the attack or rescue another character by trapping or neutralising the shark.

* *The swimmer* - might be a "chain" object or some system of bodies and constraints.

* *Body follow path* - Characters can follow a path until within a certain distance from other characters before breaking free of the path.

* *Raycasting* - Could be used to give AI characters awareness of surroundings e.g. proximity to walls causes change in motion.

* *Chamfer* - Could make for less janky friction between characters and terrain.

* *Sensor* - Bodies can act as collision sensors without physical properties. Similar use to raycasting idea above.

* *Mechanisms* - Create and destroy mechanisms for things such as "pull along rope".

* *World constraint* - Could also be used for swimmer propulsion. When spring gets fully extended it temporarily becomes fixed to the world.

### Swimmer movement/mechanics

* *Wall push-off* - The swimmer should be able to "boost" off walls as if they were pushing off.
* *Pick up rock* - Gives the swimmer weight to go deep quickly. Perhaps conserve oxygen. Run along sea floor. Drop somewhere to affect environment.
* *Pull along rope/beam etc* - 

### Resources

* *Physics on server, multiplayer* - [Youtube demo](https://www.youtube.com/watch?v=n8gJQEfA18s)

### Code structure

* *Finite state machine* - Is possibly a standard paradigm for games. Research how this could fit.