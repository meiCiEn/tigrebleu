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
let red;
let green;
let bleu;
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





function preload(){

//this.load.svg('morty', 'images/Button.svg');
this.load.image('background' ,'./assets/jeux/images/blueBackground.png')
this.load.image('Instruction' , './assets/jeux/images/Button.png')
this.load.image('red' , './assets/jeux/images/Rouge.png')
this.load.image('green' , './assets/jeux/images/Vert.png')
this.load.image('Bleu' , './assets/jeux/images/Bleu.png')
this.load.image('Button' , './assets/jeux/images/Next_Button.png')
this.load.image('BleuCh' , './assets/jeux/images/BleuCh.png')
this.load.image('GreenCh' , './assets/jeux/images/GreenCh.png')
this.load.image('RedCh' , './assets/jeux/images/RougeCh.png')
this.load.audio('sound1', './assets/jeux/Son/cl-bleu-lanse.mp3');
this.load.audio('sound2', './assets/jeux/Son/cl-rouge-hongse.mp3');
this.load.audio('sound3', './assets/jeux/Son/cl-vert-lvse.mp3');
}


function create(){
    sound1 = this.sound.add('sound1');
sound2 = this.sound.add('sound2');
sound3 = this.sound.add('sound3');
    
let backImage = this.add.image(0, 0,'background');
backImage.setOrigin(0, 0);
    // backImage.setScale(1.5);
    
    
// let instruction = this.add.image(700,60,'Instruction')
// instruction.setInteractive();
// //instruction.on('pointerdown',lesson(fonction));
// instruction.setScale(0.3);

empty1 = this.physics.add.image(550,450,'RedCh')
empty1.setScale(1.1);
empty2 = this.physics.add.image(150,450,'GreenCh')
empty2.setScale(1.1);
empty3 = this.physics.add.image(350,450,'BleuCh')
empty3.setScale(1.1);
red = this.physics.add.image(200,250,'red')
red.setInteractive();
red.setScale(1.6);
green = this.physics.add.image(350,250,'green')
green.setInteractive();
green.setScale(1.6);
bleu = this.physics.add.image(500,250,'Bleu')
bleu.setInteractive();
bleu.setScale(1.6);
next = this.physics.add.image(700,500,'Button').setInteractive().setScale(0.4).setVisible(false);
next.on('pointerdown', nextLevel, this);
//next.on('pointerdown',nextLevel());


//collision
collide1 = this.physics.add.collider(red,empty1,colliderRed,null,this);
collide2 = this.physics.add.collider(green,empty2,colliderGreen,null,this);
collide3 = this.physics.add.collider(bleu,empty3,colliderYellow,null,this);

//drag
this.input.setDraggable([ red, green, bleu ]);
this.input.on('drag', function (pointer, gameObject, dragX, dragY) {

    gameObject.x = dragX;
    gameObject.y = dragY;

});


// text = this.add.text(100, 60, 'Chiffres - Level 1');
// text.setTint(0xff00ff, 0xffff00, 0x0000ff, 0xff0000);
// text.setScale(1.5);
text = this.add.text(70, 100, 'Faites glisser les cartes au bon endroit ! ');
text.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
text.setScale(1.7);




}
function colliderRed(){
    red.destroy();
    empty1.destroy();
    win1 = true ;
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound2.play();
}
function colliderGreen(){
    green.destroy();
    empty2.destroy();
    win2 = true ; 
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound3.play();
}
function colliderYellow(){
    bleu.destroy();
    empty3.destroy();
    win3 = true;
    if (win1 == true && win2 == true && win3 == true){
        Win(this);
    }
    sound1.play();


    
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