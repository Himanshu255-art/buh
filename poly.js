class Ground {
  constructor(x,y,r) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.circle(x,y,r,options);
  
    this.r=r
    this.image=loadImage("polygon.png")
    World.add(world, this.body);
  }
  display(){
    var pos =this.body.position;
    push();
    translate(pos.x,pos.y)
   
    fill("yellow");
   
   circle(pos.x, pos.y, this.r);
    pop ()
  }
};
