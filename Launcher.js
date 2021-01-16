class Launcher{
     constructor(bodyA, projectedPoint){
            var options = {
                bodyA: bodyA,
                pointB: projectedPoint,
                stiffness: 0.03,
                length: 3
            }
            this.pointB = this.pointB;
            this.launcherObject= Constraint.create(options);
            World.add(world, this.launcherObject);
     }
        attach(body){
            this.launcherObject.bodyA=body;
        }

            fly(){
                this.launcherObject.bodyA = null;
            }

    
        display(){
            if(this.launcherObject.bodyA){
                var pointA = this.launcherObject.bodyA.position; // {position : {x:40, y:50}}
                var pointB = this.launcherObject.pointB;  // {x:30, y:50}
                strokeWeight(4);
                line(pointA.x, pointA.y, pointB.x, pointB.y);
            }
            
        }
    }


