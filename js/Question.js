class Question {

  constructor() {
    this.title = createElement('h1')
    this.input1 = createInput("Enter Your Name Here....");
   //Create a input box to enter the number



    this.button = createButton('Submit');
    //Create elements for One question (h3) and 4 options (h4)
   this.message = createElement("h2")    
   this.message = createElement("h3")
   this.message = createElement("h4")


    
  }

  hide(){
    this.title.hide();
    this.input1.hide();
    this.button.hide();
   
    this.message.hide();
    //Add hide() for questions, options & input box





  }

  display(){
    this.title.html("MyQuiz Game");
    this.title.position(350, 0);


    //Create html() and position() for each question, input and answers.
    this.input.html("what is the most popular game ever")
    this.input1.html("A-Minecraft")
    this.input2.html("B-Fortnite")
    this.input3.html("C-Roblox")
    this.input4.html("D-The Zelda Series")

    this.input.position(200,200)
    this.input1.position(150, 230);
    this.button.position(290, 300);
    this.input2.position(170,230);
    this.input3.position(190,230);
    this.input4.position(210,230)

    // Add a mousepressed action when the button is clicked Display the this.message
    this.button.mousePressed(()=>{
     
    })


  }
}
