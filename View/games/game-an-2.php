<?php $folder = "/tigrebleu/"?>

<!DOCTYPE html>
<html lang="en">

<head>
<meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="/Assets/css/reset.css">
    <link rel="stylesheet" href="/Assets/css/style.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" rel="stylesheet">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=Luckiest+Guy&display=swap" rel="stylesheet">

    <script src="<?php echo $folder . "JS/phaser.min.js" ?>"></script>
    <title>Document</title>
</head>

<body>
    <?php
    # trouver le chemin du serveur et du répertoire racine
    $path = (@$_SERVER["HTTPS"] == "on") ? "https://" : "http://";
    $path .= $folder . dirname($folder);
    echo $path;

    # Utiliser <?php echo $path . " "; pour des liens 
    ?>
    <header>
        <div class="inner-header">
            <nav class="navbar">
                <ul class="navbar__list">
                    <li class="navbar__item"><a href="#">Item 1</a></li>
                    <li class="navbar__item"><a href="#">Item 2</a></li>
                    <li class="navbar__item"><a href="#">Item 3</a></li>
                    </li>
                </ul>
            </nav>
        </div>
    </header>


    <section class="section section--page">
        <h4>"<?php echo $path . "/Assets/css/reset.css"; ?>"</h4>
        <div class="page__inner d-flex">
            <div class="text-box">
                <div d-flex>
                    <!-- <h2 class="h2--lesson">Couleurs : Niveau 1</h2> -->
                    <h3>Animaux : Leçon 2</h3>
                    <div id="game-wrapper">
                    </div>

                </div>
                <div class="tigre">
                    <img src="<?php echo $path . "/Assets/images/deco/tigre-bleu-lg.svg "; ?>" alt="tigre bleu">
                </div>
    </section>
    <script src="<?php echo $folder . "JS/Chiffres2.js" ?>"></script>
</body>

</html>