# Freediver
Freediver is an idea for relaxing, fun, and challenging game where you are a freediver navigating a 2D underwater world.

## Credits

### Design Inspiration

* Swimmer sprite by [chasersgaming](https://opengameart.org/users/chasersgaming)

## Ideation

#### 2D Physics mechanics

* *Attractors* - Getting within a certain radius of enemies triggers an attractor object, e.g. shark. The shark sprite's "swim cycle" framerate increases as its velocity increases towards its prey. Could be our swimmer or another character. A "bite" action triggers at close proximity but the shark's motion has inertia and is an avoidable lunge. Our player may have to avoid the attack or rescue another character by trapping or neutralising the shark.

* *The swimmer* - might be a "chain" object or some system of bodies and constraints.

* *Body follow path* - Characters can follow a path until within a certain distance from other characters before breaking free of the path.

* *Raycasting* - Could be used to give AI characters awareness of surroundings e.g. proximity to walls causes change in motion.

* *Chamfer* - Could make for less janky friction between characters and terrain.

* *Sensor* - Bodies can act as collision sensors without physical properties. Similar use to raycasting idea above.