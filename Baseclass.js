class Baseclass {
    constructor(x, y,width,height,) {
      var options = {
        'density':1.0,
        'friction': 0.3,
        'restitution':0.8
      };
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image= loadImage("images/base.png")
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
     fill("blue");
    
  
      push();
      translate(pos.x, pos.y);
      
      
      
      pop();
    };
  };
  