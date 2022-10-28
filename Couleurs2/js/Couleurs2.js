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
    
    this.load.svg('ClFrBleu' , '/assets/Jeux/images/bleu.svg')
    this.load.svg('ClCnBleu' , '/assets/Jeux/images/zh-bleu.svg')
    this.load.svg('ClFrJaune' , '/assets/Jeux/images/jaune.svg')
    this.load.svg('ClCnJaune' , '/assets/Jeux/images/zh-jaune.svg')
    this.load.svg('ClFrMauve' , '/assets/Jeux/images/mauve.svg')
    this.load.svg('ClCnMauve' , '/assets/Jeux/images/zh-mauve.svg')
    this.load.svg('ClFrOrange' , '/assets/Jeux/images/orange.svg')
    this.load.svg('ClCnOrange' , '/assets/Jeux/images/zh-orange.svg')
    this.load.svg('ClFrRouge' , '/assets/Jeux/images/rouge.svg')
    this.load.svg('ClCnRouge' , '/assets/Jeux/images/zh-rouge.svg')
    this.load.svg('ClFrVert' , '/assets/jeux/images/vert.svg')
    this.load.svg('ClCnVert' , '/assets/jeux/images/zh-vert.svg')
    
    this.load.image('Next' , '/assets/jeux/images/nextButton.png')
    this.load.image('background' ,'/assets/jeux/images/blueBackground.png')

    this.load.audio('soundBleu', '/assets/jeux/son/cl-bleu-lanse.mp3');
    this.load.audio('soundJaune', '/assets/jeux/son/cl-jaune-huangse.mp3');
    this.load.audio('soundOrange', '/assets/jeux/son/cl-orange-chengse.mp3');
    this.load.audio('soundRouge', '/assets/jeux/son/cl-rouge-hongse.mp3');
    this.load.audio('soundVert', '/assets/jeux/son/cl-vert-lvse.mp3');
    this.load.audio('soundMauve', '/assets/jeux/son/cl-violet-zise.mp3');
}

function create(){

    let backImage = this.add.image(0, 0,'background');
    backImage.setOrigin(0, 0);
    
    let animalFr0 = this.add.image(650,250,'ClFrBleu').setInteractive().setScale(0.5);
    animalFr0.name = "pairBleu";
    let animalCn0 = this.add.image(550,450,'ClCnBleu').setInteractive().setScale(0.5);
    animalCn0.name = "pairBleu";
    let animalFr4 = this.add.image(650,450,'ClFrJaune').setInteractive().setScale(0.5);
    animalFr4.name = "pairJaune";
    let animalCn4 = this.add.image(250,450,'ClCnJaune').setInteractive().setScale(0.5);
    animalCn4.name = "pairJaune";
    let animalFr5 = this.add.image(350,250,'ClFrMauve').setInteractive().setScale(0.5);
    animalFr5.name = "pairMauve";
    let animalCn5 = this.add.image(450,450,'ClCnMauve').setInteractive().setScale(0.5);
    animalCn5.name = "pairMauve";
    let animalFr6 = this.add.image(550,250,'ClFrOrange').setInteractive().setScale(0.5);
    animalFr6.name = "pairOrange";
    let animalCn6 = this.add.image(250,250,'ClCnOrange').setInteractive().setScale(0.5);
    animalCn6.name = "pairOrange";
    let animalFr7 = this.add.image(450,250,'ClFrRouge').setInteractive().setScale(0.5);
    animalFr7.name = "pairRouge";
    let animalCn7 = this.add.image(150,250,'ClCnRouge').setInteractive().setScale(0.5);
    animalCn7.name = "pairRouge";
    let animalFr8 = this.add.image(350,450,'ClFrVert').setInteractive().setScale(0.5);
    animalFr8.name = "pairVert";
    let animalCn8 = this.add.image(150,450,'ClCnVert').setInteractive().setScale(0.5);
    animalCn8.name = "pairVert";
    // let animalFr9 = this.add.image(650,450,'ClFr9').setInteractive().setScale(0.5);
    // animalFr9.name = "pair9";
    // let animalCn9 = this.add.image(750,250,'ClCn9').setInteractive().setScale(0.5);
    // animalCn9.name = "pair9";
    // let animalFr10 = this.add.image(750,450,'ClFr10').setInteractive().setScale(0.5);
    // animalFr10.name = "pair10";
    // let animalCn10 = this.add.image(650,250,'ClCn10').setInteractive().setScale(0.5);
    // animalCn10.name = "pair10";

    next = this.physics.add.image(700,500,'Next').setInteractive().setScale(0.4).setVisible(false);
    next.on('pointerdown', nextLevel, this);
    
    instructionText = this.add.text(70, 80, 'Cliquez sur les bonnes paires !');
    instructionText.setTint(0xbb4430, 0xbb4430, 0xbb4430, 0xbb4430).setScale(1.7);

    this.input.on('gameobjectdown', selectAnimal, this);

    soundBleu = this.sound.add('soundBleu');
    soundJaune = this.sound.add('soundJaune');
    soundMauve = this.sound.add('soundMauve');
    soundOrange = this.sound.add('soundOrange');
    soundRouge = this.sound.add('soundRouge');
    soundVert = this.sound.add('soundVert');
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
                case "pairBleu" : soundBleu.play();
                break;
                case "pairJaune" : soundJaune.play();
                break;
                case "pairMauve" : soundMauve.play();
                break;
                case "pairOrange" : soundOrange.play();
                break;
                case "pairRouge" : soundRouge.play();
                break;
                case "pairVert" : soundVert.play();
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