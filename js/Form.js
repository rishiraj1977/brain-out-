class Form {

  constructor() {
    this.input = createInput("Name");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h1');
    this.reset = createButton('Reset');
    this.text=createElement('h3');
    this.levelText=createElement('h1');
    this.level1=createButton('h2');
    this.level2=createButton('h2');
    this.level3=createButton('h2');
  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
    this.text.hide();
    this.levelText.hide();
    this.level1.hide();
    this.level2.hide();
    this.level3.hide();
  }

  display(){
    background("lightblue");
    image(background_image, 0,0,displayWidth, displayHeight);

    this.title.html("Brain Out Game");
    this.text.html("Give your name and press PLAY button to start");
    
    this.title.position(displayWidth/2 - 90, 0);
    this.text.position(displayWidth/2-130,displayHeight/2-200);

    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.button.position(displayWidth/2 + 20, displayHeight/2.2);
    this.reset.position(displayWidth-100,20);
  
    //going to level screen on pressing PLAY button 
    this.button.mousePressed(()=>{
     
      //hidding the input,button and text 
      this.input.hide();
      this.button.hide();
      this.text.hide();

      //getting the name of the player from the inupt value which was entered in text box
      player.name = this.input.value();

     // playerCount+=1;
     // player.index = playerCount;

     //updating the player with its name in the database
      player.update();

     // player.updateCount(playerCount);

     //displaying the text with the player name 
      this.greeting.html("Hello " + player.name)
      this.greeting.position(displayWidth/2 - 50, displayHeight/8);

      //displaying the level text 
      this.levelText.html("Choose your levels");
      this.levelText.position(displayWidth/2-100, displayHeight/5);

      //level 1 button
      this.level1.html("Level 1");
      this.level1.position(displayWidth/2-400,displayHeight/3);
      //this.level1.size(50);
      //image( level1_image,displayWidth/2-450,displayHeight/2,100,100)

      //level2 button 
      this.level2.html("Level 2");
      this.level2.position(displayWidth/2-50,displayHeight/3);

      //level3 button 
      this.level3.html("Level 3");
      this.level3.position(displayWidth-450,290,displayHeight/3);

      //giving the brain out image on the level screen 
      image(brainout_image,displayWidth/2-500,displayHeight/2.7,1000,400);

      player.getScore();
        console.log(player.getScore());
      if (player.score<100 || player.score===0){
         this.level2.disabled=true;
         this.level3.disabled=true;
      }
    });

    this.reset.mousePressed(()=>{
      //player.updateCount(0);
      game.update(0);
    });


  }

  
}
