class Dustbin{
    constructor(x,y,width,height){
    var options={
    isStatic:true,
      
    
    }
    
    
    this.body=Bodies.rectangle(x,y,width,height,options)
       this.width=width;
       this.height=height;
this.image=loadImage("dustbingreen.png");
    
    }
 display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      var angle=this.body.angle;
      rotate(angle);
      rectMode(CENTER);
      rect(0, 0, this.width, this.height);
      Pop();
    }
  };

