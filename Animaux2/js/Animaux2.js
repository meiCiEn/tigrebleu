let config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    physics: {
        default: 'arcade'
    },
    scene: {
        preload : preload,     
        create: create
    }
};

let game = new Phaser.Game(config);
let text = true ; 
let matchCounter = 0;
let selectedAnimal = null;
let matched = false;

function preload(){
    
    this.load.svg('AnFrLion' , '/assets/Jeux/images/fr-lion.svg')
    this.load.svg('AnCnLion' , '/assets/Jeux/images/zh-lion.svg')
    this.load.svg('AnFrChat' , '/assets/Jeux/images/fr-chat.svg')
    this.load.svg('AnCnChat' , '/assets/Jeux/images/zh-chat.svg')
    this.load.svg('AnFrCheval' , '/assets/Jeux/images/fr-cheval.svg')
    this.load.svg('AnCnCheval' , '/assets/Jeux/images/zh-cheval.svg')
    this.load.svg('AnFrCochon' , '/assets/Jeux/images/fr-cochon.svg')
    this.load.svg('AnCnCochon' , '/assets/Jeux/images/zh-cochon.svg')
    this.load.svg('AnFrMouton' , '/assets/Jeux/images/fr-mouton.svg')
    this.load.svg('AnCnMouton' , '/assets/Jeux/images/zh-mouton.svg')
    this.load.svg('AnFrVache' , '/assets/jeux/images/fr-vache.svg')
    this.load.svg('AnCnVache' , '/assets/jeux/images/zh-vache.svg')
    
    this.load.image('Next' , '/assets/jeux/images/nextButton.png')
    this.load.image('background' ,'/assets/jeux/images/blueBackground.png')

    this.load.audio('soundLion', '/assets/jeux/son/an-lion-shizi.mp3');
    this.load.audio('soundChat', '/assets/jeux/son/an-chat-mao.mp3');
    this.load.audio('soundCochon', '/assets/jeux/son/an-cochon-chu.mp3');
    this.load.audio('soundMouton', '/assets/jeux/son/an-mouton-yang.mp3');
    this.load.audio('soundVache', '/assets/jeux/son/an-vache-niu.mp3');
    this.load.audio('soundCheval', '/assets/jeux/son/an-cheval-ma.mp3');
}

function create(){

    let backImage = this.add.image(0, 0,'background');
    backImage.setOrigin(0, 0);
    
    let animalFr0 = this.add.image(650,250,'AnFrLion').setInteractive().setScale(0.5);
    animalFr0.name = "pairLion";
    let animalCn0 = this.add.image(550,450,'AnCnLion').setInteractive().setScale(0.5);
    animalCn0.name = "pairLion";
    let animalFr4 = this.add.image(650,450,'AnFrChat').setInteractive().setScale(0.5);
    animalFr4.name = "pairChat";
    let animalCn4 = this.add.image(250,450,'AnCnChat').setInteractive().setScale(0.5);
    animalCn4.name = "pairChat";
    let animalFr5 = this.add.image(350,250,'AnFrCheval').setInteractive().setScale(0.5);
    animalFr5.name = "pairCheval";
    let animalCn5 = this.add.image(450,450,'AnCnCheval').setInteractive().setScale(0.5);
    animalCn5.name = "pairCheval";
    let animalFr6 = this.add.image(550,250,'AnFrCochon').setInteractive().setScale(0.5);
    animalFr6.name = "pairCochon";
    let animalCn6 = this.add.image(250,250,'AnCnCochon').setInteractive().setScale(0.5);
    animalCn6.name = "pairCochon";
    let animalFr7 = this.add.image(450,250,'AnFrMouton').setInteractive().setScale(0.5);
    animalFr7.name = "pairMouton";
    let animalCn7 = this.add.image(150,250,'AnCnMouton').setInteractive().setScale(0.5);
    animalCn7.name = "pairMouton";
    let animalFr8 = this.add.image(350,450,'AnFrVache').setInteractive().setScale(0.5);
    animalFr8.name = "pairVache";
    let animalCn8 = this.add.image(150,450,'AnCnVache').setInteractive().setScale(0.5);
    animalCn8.name = "pairVache";

    next = this.physics.add.image(700,500,'Next').setInteractive().setScale(0.4).setVisible(false);
    next.on('pointerdown', nextLevel, this);
    
    instructionText = this.add.text(70, 80, 'Cliquez sur les bonnes paires !');
    instructionText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430).setScale(1.7);

    this.input.on('gameobjectdown', selectAnimal, this);

    soundLion = this.sound.add('soundLion');
    soundChat = this.sound.add('soundChat');
    soundCheval = this.sound.add('soundCheval');
    soundCochon = this.sound.add('soundCochon');
    soundMouton = this.sound.add('soundMouton');
    soundVache = this.sound.add('soundVache');
}

function selectAnimal(pointer, animal , eventdata)
{
    if (!this.selectedAnimal)
    {
        //  1

        this.selectedAnimal = animal;
    }
    else if (animal !== this.selectedAnimal)
    {
        //  2

        if (animal.name == this.selectedAnimal.name)
        {

            this.tweens.add({
                targets: [ animal, this.selectedAnimal ],
                scale: 0.8,
                angle: '-=30',
                yoyo: true,
                ease: 'sine.inout',
                duration: 200,
                completeDelay: 200,
                onComplete: () => destroyMatch(animal, this.selectedAnimal)
            });
    
            var pair = animal.name;
            switch (pair){
                case "pairLion" : soundLion.play();
                break;
                case "pairChat" : soundChat.play();
                break;
                case "pairCheval" : soundCheval.play();
                break;
                case "pairCochon" : soundCochon.play();
                break;
                case "pairMouton" : soundMouton.play();
                break;
                case "pairVache" : soundVache.play();
                break;
            }
            matchCounter++;
            win(this);
        }
        else
        {

            this.tweens.add({
                targets: [ animal, this.selectedAnimal ],
                angle: 15,
                duration: 100,
                ease: 'Linear',
                yoyo: true,
                repeat: 1,
                paused: true
            });

            this.selectedAnimal = animal;
        }
    }
}

function destroyMatch(nb1, nb2){
    nb1.destroy();
    nb2.destroy();
}

function win(t)
{
    if(matchCounter >= 6){
        next.setVisible(true);
        winText = t.add.text(200, 250, 'YOU WIN  你赢了 ');
        winText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430);
        winText.setScale(3);
        dbUpdate();
    }
}

function nextLevel(){

    var url = 'https://twitter.com';

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

function dbUpdate(){
    
    // //win/lose fetch : user, category, level
    // fetch("http://fakestoreapi.com/products", { //api url
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json'
    //     },
    //     body: JSON.stringify({
    //         image: 'https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_.jpg' //what to add
    //     })
    // }).then(res => {
    //     return res.json()
    // })
    // .then(data => console.log(data)) //?
    // .catch(error => console.log('ERROR'))

    // //fetch assets.json
    // fetch("/students.json")
    // .then(response => {
    //    return response.json();
    // })
    // .then(jsondata => console.log(jsondata)); //then what?

}