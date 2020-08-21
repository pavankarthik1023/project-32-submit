class Hero extends Baseclass {
  constructor(x,y){
    super(x,y,50,50);
   
    this.smokeImage = loadImage("images/smoke.png");
    this.trajectory =[];
  }

  display() {
    
    var pos =this.body.position;
    rectMode(CENTER);
    fill(28,167,115);
    rect(pos.x, pos.y, this.width, this.height);

    if(this.body.velocity.x > 10 && this.body.position.x > 200){
      var position = [this.body.position.x, this.body.position.y];
      this.trajectory.push(position);
    }
   

    for(var i=0; i<this.trajectory.length; i++){
      image(this.smokeImage, this.trajectory[i][0], this.trajectory[i][1]);
    }
  }
}



