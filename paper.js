class Paper{
constructor(x,y,diameter){
var options={
isStatic:false,
  restitution:0.3,
  Density:1.2,
  friction:0.5,

}


this.body=Matter.Bodies.circle(x,y,diameter,options);
    this.diameter=this.diameter;
    this.image = loadImage("paper.png");
}
display(){
var pos =this.body.position;
push()
translate(pos.x,pos.y);
var angle=this.body.angle;
rotate(angle)
Pop()


}





















}







