let text = true ; 
let empty1;
let empty2;
let empty3;
let number1;
let number2;
let number3;
let next;
let collide1 = false ;
let collide2 = false;
let collide3 = false ; 
let win1 = false ;
let win2 = false ;
let win3 = false ; 
let winText ; 
let sound1;
let sound2;
let sound3;

let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload : preload,     
        create: create,     
        update : update   
    }
};

let game = new Phaser.Game(config);




function preload(){

//this.load.svg('morty', 'images/Button.svg');

this.load.image('background' ,'/assets/jeux/images/blueBackground.png')
this.load.image('Instruction' , '/assets/jeux/images/Button.png')
this.load.image('Number1Fr' , '/assets/jeux/images/Number1Fr.png')
this.load.image('Number2Fr' , '/assets/jeux/images/Number2Fr.png')
this.load.image('Number3Fr' , '/assets/jeux/images/Number3Fr.png')
this.load.image('Button' , '/assets/jeux/images/Next_Button.png')
this.load.image('Number1Ch' , '/assets/jeux/images/Number1Ch.png')
this.load.image('Number2Ch' , '/assets/jeux/images/Number2Ch.png')
this.load.image('Number3Ch' , '/assets/jeux/images/Number3Ch.png')
this.load.audio('sound1', '/assets/jeux/Son/nb-1.mp3');
this.load.audio('sound2', '/assets/jeux/Son/nb-2.mp3');
this.load.audio('sound3', '/assets/jeux/Son/nb-3.mp3');
}
    
    
function create(){

sound1 = this.sound.add('sound1');
sound2 = this.sound.add('sound2');
sound3 = this.sound.add('sound3');
    
let backImage = this.add.image(0, 0,'background');
backImage.setOrigin(0, 0);
// let instruction = this.add.image(700,60,'Instruction')
// instruction.setInteractive();
// //instruction.on('pointerdown',lesson(fonction));
// instruction.setScale(0.3);
empty1 = this.physics.add.image(550,450,'Number1Ch')
empty1.setScale(1.8);
empty2 = this.physics.add.image(150,450,'Number2Ch')
empty2.setScale(1.8);
empty3 = this.physics.add.image(350,450,'Number3Ch')
empty3.setScale(1.8);
number1 = this.physics.add.image(200,250,'Number1Fr')
number1.setInteractive();
number1.setScale(1.8);
number2 = this.physics.add.image(350,250,'Number2Fr')
number2.setInteractive();
number2.setScale(1.8);
number3 = this.physics.add.image(500,250,'Number3Fr')
number3.setInteractive();
number3.setScale(1.8);
next = this.physics.add.image(700,500,'Button').setInteractive().setScale(0.4).setVisible(false);
next.on('pointerdown', nextLevel, this);
text = this.add.text(70, 100, 'Faites glisser les cartes au bon endroit ! ');
text.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
text.setScale(1.7);
//next.on('pointerdown',nextLevel());

//collision
collide1 = this.physics.add.collider(number1,empty1,colliderNumber1,null,this);
collide2 = this.physics.add.collider(number2,empty2,colliderNumber2,null,this);
collide3 = this.physics.add.collider(number3,empty3,colliderNumber3,null,this);

//drag
this.input.setDraggable([ number1, number2, number3 ]);
this.input.on('drag', function (pointer, gameObject, dragX, dragY) {
    
    gameObject.x = dragX;
    gameObject.y = dragY;
    
});

// Text level 1 
// text = this.add.text(100, 60, 'Chiffres - Level 1');
// text.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
// text.setScale(1.5);




}
function colliderNumber1(){
    number1.destroy();
    empty1.destroy();
    win1 = true ;
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    console.log(sound1);
    sound1.play();
}
function colliderNumber2(){
    number2.destroy();
    empty2.destroy();
    win2 = true ; 
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound2.play();
}
function colliderNumber3(){
    number3.destroy();
    empty3.destroy();
    win3 = true;
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound3.play();
    
    
    
}


function Win(t){
    
    next.setVisible(true);
    console.log (this.add);
    winText = t.add.text(200, 250, 'YOU WIN  你赢了 ');
    winText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
    winText.setScale(3); 
    
    
}
function nextLevel(){

    var url = 'https://twitter.com/';

    var s = window.open(url);

    if (s && s.focus)
    {
        s.focus();
    }
    else if (!s)
    {
        window.location.href = url;
    }
}







function update(){
    
}