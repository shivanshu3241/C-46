class Player
 {
    constructor()
    {
     this.player = createSprite(600, 400, 33, 33);
    }
    

    play()
    {
        //arrow.x = player.palyer.x;
        //arrow.y = player.palyer.y;
        if(keyDown(UP_ARROW))
        {
           player.player.y = player.player.y-8;
        }
      
        if(keyDown(DOWN_ARROW))
        {
          player.player.y = player.player.y+8;
        }
      
        if(keyDown(LEFT_ARROW))
        {
          player.player.x = player.player.x-8;
        }
      
        if(keyDown(RIGHT_ARROW))
        {
          player.player.x = player.player.x+8;
        }
    }

    display(){
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
    }
}