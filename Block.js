class Block{
  constructor(x, y, width, height) {
      var options = {
          restitution :0.4,
          friction :0.0,
      }
      this.vis = 255
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.image = loadImage("block.png")
     
      World.add(world, this.body);


    }
    display(){
      console.log(this.vis)
      if(this.body.speed<5.5){
        imageMode(CENTER)
        image(this.image, this.body.position.x,this.body.position.y, this.width, this.height)
  
        }
        else{
          
      
      World.remove(world, this.body)
      push()
      this.vis = this.vis-5
      tint(255, this.vis) 
    
      imageMode(CENTER)
      image(this.image, this.body.position.x,this.body.position.y, this.width, this.height)
     pop()
    }
  }
}