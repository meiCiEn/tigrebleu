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
let text = true ; 
let empty1;
let empty2;
let empty3;
let animal1;
let animal2;
let animal3;
let next;
let collide1 = false ;
let collide2 = false;
let collide3 = false ; 
let win1 = false ;
let win2 = false ;
let win3 = false ; 
let winText ; 





function preload(){

//this.load.svg('morty', 'images/Button.svg');
this.load.image('background' ,'/assets/jeux/images/blueBackground.png')
this.load.image('Instruction' , '/assets/jeux/images/Button.png')
this.load.image('animal1' , '/assets/jeux/images/Chat.png')
this.load.image('animal2' , '/assets/jeux/images/Cheval.png')
this.load.image('animal3' , '/assets/jeux/images/Lion.png')
this.load.image('Button' , '/assets/jeux/images/Next_Button.png')
this.load.image('ChatCh' , '/assets/jeux/images/ChatCh.png')
this.load.image('ChevalCh' , '/assets/jeux/images/ChevalCh.png')
this.load.image('LionCh' , '/assets/jeux/images/LionCh.png')
this.load.audio('sound1', '/assets/jeux/Son/an-chat-mao.mp3');
this.load.audio('sound2', '/assets/jeux/Son/an-cheval-ma.mp3');
this.load.audio('sound3', '/assets/jeux/Son/an-lion-shizi.mp3');
}
    
    
function create(){
    sound1 = this.sound.add('sound1');
sound2 = this.sound.add('sound2');
sound3 = this.sound.add('sound3');

let backImage = this.add.image(0, 0,'background');
backImage.setOrigin(0, 0);
//backImage.setScale(1.5);

// let instruction = this.add.image(700,60,'Instruction')
// instruction.setInteractive();
// //instruction.on('pointerdown',lesson(fonction));
// instruction.setScale(0.3);

empty1 = this.physics.add.image(550,450,'ChatCh')
empty1.setScale(2);
empty2 = this.physics.add.image(150,450,'ChevalCh')
empty2.setScale(1.7);
empty3 = this.physics.add.image(350,450,'LionCh')
empty3.setScale(1.7);
animal1 = this.physics.add.image(200,250,'animal1')
animal1.setInteractive();
animal1.setScale(1.9);
animal2 = this.physics.add.image(350,250,'animal2')
animal2.setInteractive();
animal2.setScale(1.9);
animal3 = this.physics.add.image(500,250,'animal3')
animal3.setInteractive();
animal3.setScale(1.9);
next = this.physics.add.image(700,500,'Button').setInteractive().setScale(0.4).setVisible(false);
next.on('pointerdown', nextLevel, this);
//next.on('pointerdown',nextLevel());


//collision
collide1 = this.physics.add.collider(animal1,empty1,colliderNumber1,null,this);
collide2 = this.physics.add.collider(animal2,empty2,colliderNumber2,null,this);
collide3 = this.physics.add.collider(animal3,empty3,colliderNumber3,null,this);

//drag
this.input.setDraggable([ animal1, animal2, animal3 ]);
this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

    gameObject.x = dragX;
    gameObject.y = dragY;

});


// text = this.add.text(100, 60, 'Chiffres - Level 1 ');
// text.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
// text.setScale(1.5);
text = this.add.text(70, 100, 'Faites glisser les cartes au bon endroit ! ');
text.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
text.setScale(1.7);





}
function colliderNumber1(){
    animal1.destroy();
    empty1.destroy();
    win1 = true ;
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound1.play();
}
function colliderNumber2(){
    animal2.destroy();
    empty2.destroy();
    win2 = true ; 
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound2.play();
}
function colliderNumber3(){
    animal3.destroy();
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