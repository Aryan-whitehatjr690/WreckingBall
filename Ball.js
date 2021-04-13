class Ball{
    constructor(x,y,radius){
        var options={
          restitution:1.0,
          density:1.0,
          friction:0.5 
        }
        this.body=Bodies.circle(x,y,25,options)
        World.add(world,this.body);
        this.x=x;
        this.y=y;
        this.radius=radius;

    }
    display(){
        var angle=this.body.angle;
        var pos=this.body.position;
        push();
        translate(pos.x,pos.y);
        ellipseMode(CENTER)
        rotate(angle);
        strokeWeight(4);
        stroke("blue");
        fill("red");
        ellipse(0,0,this.radius,this.radius)
        pop();
    }
}