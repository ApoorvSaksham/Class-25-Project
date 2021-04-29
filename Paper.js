class Paper{
    constructor(x,y){
var options = {
    'isStatic': false,
    'restitution' : 0.3,
    'friction' : 0,
    'density' : 1.2
}
this.body = Bodies.circle(x,y,25,options);
this.r = 50;
World.add(world,this.body);
this.image = loadImage("paper.png");

    }

display(){
    var pos = this.body.position;
    var angle = this.body.angle;
    push()
    translate(pos.x,pos.y);
    rotate(angle);
    imageMode(CENTER);
    image(this.image,0,0,this.r,this.r);
    pop()
    
  if(keyCode===UP_ARROW){
    Matter.body.applyForce(paperObject.body,paperObject.body.position,{x:85,y:-85});
}
    
}
}