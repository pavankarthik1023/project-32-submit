class Box extends Baseclass{
   
    constructor(x,y){
      super(x,y,50,50);
     this.visiblity=255;
    }
  
  
display(){
 // console.log(this.body.speed);
        if(this.body.speed <3){
        var angle = this.body.angle;
        var pos= this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        rectMode(CENTER);
        fill("red")
        rect(0,0,this.width, this.height);
        pop();
      }else{
        World.remove(world, this.body);
        push();
        this.visiblity = this.visiblity -5;
        pop();

}
}
score()
{
  if (this.Visiblity < 0 && this.Visiblity > -505){
    score++;
  }

}}
