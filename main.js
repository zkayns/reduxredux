addEventListener("error", (e)=>{alert(e.message)});
let assetIndex=[
    {
        name: "Town BGM",
        audio: true,
        id: "townBgm",
        url: "https://zkayns.github.io/reduxredux/assets/ReduxReduxMenu.mp3"
    },
    {
        name: "Burger Bot BGM",
        audio: true,
        id: "burgerBotBgm",
        url: "https://zkayns.github.io/reduxredux/assets/BurgerBot.mp3"
    },
    {
        name: "Snowy C BGM",
        audio: true,
        id: "snowyBgm",
        url: "https://zkayns.github.io/reduxredux/assets/SnowyC.mp3"
    },
    {
        name: "Mustard BGM",
        audio: true,
        id: "mustardBgm",
        url: "https://zkayns.github.io/reduxredux/assets/SnowyC.mp3"
    },
    {
        name: "Da Jim BGM",
        audio: true,
        id: "jimJam",
        url: "https://zkayns.github.io/reduxredux/assets/jimJam.mp3"
    },
    {
        name: "Town Board",
        id: "townBoard",
        url: "https://zkayns.github.io/reduxredux/assets/Sign.png"
    },
    {
        name: "Board UI",
        id: "boardUi",
        url: "https://zkayns.github.io/reduxredux/assets/boardUi.png"
    },
    {
        name: "Board Nameplate",
        id: "boardNameplate",
        url: "https://zkayns.github.io/reduxredux/assets/boardNameplate.svg"
    },
    {
        name: "Board Sheets",
        id: "boardSheets",
        url: "https://zkayns.github.io/reduxredux/assets/boardSheets.png"
    },
    {
        name: "Da Jim",
        id: "daJim",
        url: "https://zkayns.github.io/reduxredux/assets/daJim.png"
    },
    {
        name: "Pineapple Who Manages Da Jim",
        id: "pineappleWhoManagesDaJim",
        url: "https://zkayns.github.io/reduxredux/assets/pineappleWhoManagesDaJim.png"
    },
    {
        name: "Extra Life",
        id: "extraLife",
        url: "https://zkayns.github.io/reduxredux/assets/extraLife.png"
    },
    {
        name: "Shield Book",
        id: "shieldBook",
        url: "https://zkayns.github.io/reduxredux/assets/shieldBook.png"
    },
    {
        name: "Hyper Shield Book",
        id: "hyperShieldBook",
        url: "https://zkayns.github.io/reduxredux/assets/hyperShieldBook.png"
    },
    {
        name: "Hyper Charm Book",
        id: "hyperCharmBook",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharmBook.png"
    },
    {
        name: "Double Jump Book",
        id: "doubleJumpBook",
        url: "https://zkayns.github.io/reduxredux/assets/doubleJumpBook.png"
    },
    {
        name: "Slam Book",
        id: "slamBook",
        url: "https://zkayns.github.io/reduxredux/assets/slamBook.png"
    },
    {
        name: "Up Charm Book",
        id: "upCharmBook",
        url: "https://zkayns.github.io/reduxredux/assets/upCharmBook.png"
    },
    {
        name: "Hyper Up Charm Book",
        id: "hyperUpCharmBook",
        url: "https://zkayns.github.io/reduxredux/assets/hyperUpCharmBook.png"
    },
    {
        name: "Hyper Slam Book",
        id: "hyperSlamBook",
        url: "https://zkayns.github.io/reduxredux/assets/hyperSlamBook.png"
    },
    {
        name: "Devil Book",
        id: "devilBook",
        url: "https://zkayns.github.io/reduxredux/assets/devilBook.png"
    },
    {
        name: "Onion Coin",
        id: "onionCoin",
        url: "https://zkayns.github.io/reduxredux/assets/onionCoin.png"
    },
    {
        name: "Ring Coin",
        id: "ringCoin",
        url: "https://zkayns.github.io/reduxredux/assets/ringCoin.png"
    },
    {
        name: "Laser",
        id: "laser",
        url: "https://zkayns.github.io/reduxredux/assets/laser.png"
    },
    {
        name: "Charm L",
        id: "charmL",
        url: "https://zkayns.github.io/reduxredux/assets/charmL.png"
    },
    {
        name: "Charm R",
        id: "charmR",
        url: "https://zkayns.github.io/reduxredux/assets/charmR.png"
    },
    {
        name: "Up Charm",
        id: "charmUp",
        url: "https://zkayns.github.io/reduxredux/assets/charmUp.png"
    },
    {
        name: "Hyper Up Charm",
        id: "hyperCharmUp",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharmUp.png"
    },
    {
        name: "Devil Up Charm",
        id: "devilCharmUp",
        url: "https://zkayns.github.io/reduxredux/assets/devilCharmUp.png"
    },
    {
        name: "Hyper Charm L",
        id: "hyperCharmL",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharmL.png"
    },
    {
        name: "Hyper Charm R",
        id: "hyperCharmR",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharmR.png"
    },
    {
        name: "Devil Charm L",
        id: "devilCharmL",
        url: "https://zkayns.github.io/reduxredux/assets/devilCharmL.png"
    },
    {
        name: "Devil Charm R",
        id: "devilCharmR",
        url: "https://zkayns.github.io/reduxredux/assets/devilCharmR.png"
    },
    {
        name: "Shield L",
        id: "shieldL",
        url: "https://zkayns.github.io/reduxredux/assets/shieldL.png"
    },
    {
        name: "Shield R",
        id: "shieldR",
        url: "https://zkayns.github.io/reduxredux/assets/shieldR.png"
    },
    {
        name: "Hyper Shield",
        id: "hyperShield",
        url: "https://zkayns.github.io/reduxredux/assets/hyperShield.png"
    },
    {
        name: "Devil Shield",
        id: "devilShield",
        url: "https://zkayns.github.io/reduxredux/assets/devilShield.png"
    },
    {
        name: "Shockwave L",
        id: "shockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/shockwaveL.png"
    },
    {
        name: "Shockwave R",
        id: "shockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/shockwaveR.png"
    },
    {
        name: "Hyper Shockwave L",
        id: "hyperShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/hyperShockwaveL.png"
    },
    {
        name: "Hyper Shockwave R",
        id: "hyperShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/hyperShockwaveR.png"
    },
    {
        name: "Devil Shockwave L",
        id: "devilShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/devilShockwaveL.png"
    },
    {
        name: "Devil Shockwave R",
        id: "devilShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/devilShockwaveR.png"
    },
    {
        name: "Robo Shockwave L",
        id: "roboShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/roboShockwaveL.png"
    },
    {
        name: "Robo Shockwave R",
        id: "roboShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/roboShockwaveR.png"
    },
    {
        name: "Charisma L",
        id: "charismaL",
        url: "https://zkayns.github.io/reduxredux/assets/charismaL.png"
    },
    {
        name: "Charisma R",
        id: "charismaR",
        url: "https://zkayns.github.io/reduxredux/assets/charismaR.png"
    },
    {
        name: "Hyper Charisma L",
        id: "hyperCharismaL",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharismaL.png"
    },
    {
        name: "Hyper Charisma R",
        id: "hyperCharismaR",
        url: "https://zkayns.github.io/reduxredux/assets/hyperCharismaR.png"
    },
    {
        name: "Onion Idle R 1",
        id: "onionIdleR1",
        url: "https://zkayns.github.io/reduxredux/assets/onionIdleR1.png"
    },
    {
        name: "Onion Idle R 2",
        id: "onionIdleR2",
        url: "https://zkayns.github.io/reduxredux/assets/onionIdleR2.png"
    },
    {
        name: "Onion Idle L 1",
        id: "onionIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/onionIdleL1.png"
    },
    {
        name: "Onion Idle L 2",
        id: "onionIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/onionIdleL2.png"
    },
    {
        name: "Onion Walk R 1",
        id: "onionWalkR1",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkR1.png"
    },
    {
        name: "Onion Walk R 2",
        id: "onionWalkR2",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkR2.png"
    },
    {
        name: "Onion Walk R 3",
        id: "onionWalkR3",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkR3.png"
    },
    {
        name: "Onion Walk L 1",
        id: "onionWalkL1",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkL1.png"
    },
    {
        name: "Onion Walk L 2",
        id: "onionWalkL2",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkL2.png"
    },
    {
        name: "Onion Walk L 3",
        id: "onionWalkL3",
        url: "https://zkayns.github.io/reduxredux/assets/onionWalkL3.png"
    },
    {
        name: "Onion Broger 1",
        id: "onionBroger1",
        url: "https://zkayns.github.io/reduxredux/assets/onionBroger1.png"
    },
    {
        name: "Onion Broger 2",
        id: "onionBroger2",
        url: "https://zkayns.github.io/reduxredux/assets/onionBroger2.png"
    },
    {
        name: "Onion Confused 1",
        id: "onionConfused1",
        url: "https://zkayns.github.io/reduxredux/assets/onionConfused1.png"
    },
    {
        name: "Onion Confused 2",
        id: "onionConfused2",
        url: "https://zkayns.github.io/reduxredux/assets/onionConfused2.png"
    },
    {
        name: "Onion Dies L",
        id: "onionDiesL",
        url: "https://zkayns.github.io/reduxredux/assets/onionDiesL.png"
    },
    {
        name: "Onion Dies R",
        id: "onionDiesR",
        url: "https://zkayns.github.io/reduxredux/assets/onionDiesR.png"
    },
    {
        name: "Onion Hmmm 1",
        id: "onionHmmm1",
        url: "https://zkayns.github.io/reduxredux/assets/onionHmmm1.png"
    },
    {
        name: "Onion Hmmm 2",
        id: "onionHmmm2",
        url: "https://zkayns.github.io/reduxredux/assets/onionHmmm2.png"
    },
    {
        name: "Onion Hug",
        id: "onionHug",
        url: "https://zkayns.github.io/reduxredux/assets/onionHug.png"
    },
    {
        name: "Onion No",
        id: "onionNo",
        url: "https://zkayns.github.io/reduxredux/assets/onionNo.png"
    },
    {
        name: "Onion Yes 1",
        id: "onionYes1",
        url: "https://zkayns.github.io/reduxredux/assets/onionYes1.png"
    },
    {
        name: "Onion Yes 2",
        id: "onionYes2",
        url: "https://zkayns.github.io/reduxredux/assets/onionYes2.png"
    },
    {
        name: "Onion Whatever 1",
        id: "onionWhatever1",
        url: "https://zkayns.github.io/reduxredux/assets/onionWhatever1.png"
    },
    {
        name: "Onion Whatever 2",
        id: "onionWhatever2",
        url: "https://zkayns.github.io/reduxredux/assets/onionWhatever2.png"
    },
    {
        name: "Onion No Broger 1",
        id: "onionNoBroger1",
        url: "https://zkayns.github.io/reduxredux/assets/onionNoBroger1.png"
    },
    {
        name: "Onion No Broger 2",
        id: "onionNoBroger2",
        url: "https://zkayns.github.io/reduxredux/assets/onionNoBroger2.png"
    },
    {
        name: "Onion Wit Da Dookie 1",
        id: "onionWitDaDookie1",
        url: "https://zkayns.github.io/reduxredux/assets/onionWitDaDookie1.png"
    },
    {
        name: "Onion Wit Da Dookie 2",
        id: "onionWithDaDookie2",
        url: "https://zkayns.github.io/reduxredux/assets/onionWitDaDookkie2.png"
    },
    {
        name: "Burger Bot Idle L 1",
        id: "burgerIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/burgerIdleL1.png"
    },
    {
        name: "Burger Bot Idle L 2",
        id: "burgerIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/burgerIdleL2.png"
    },
    {
        name: "Burger Bot Anger L",
        id: "burgerAngerL",
        url: "https://zkayns.github.io/reduxredux/assets/burgerAngerL.png"
    },
    {
        name: "Burger Bot Anger R",
        id: "burgerAngerR",
        url: "https://zkayns.github.io/reduxredux/assets/burgerAngerR.png"
    },
    {
        name: "Burger Bot Bout To Scream L",
        id: "burgerBoutToScreamL",
        url: "https://zkayns.github.io/reduxredux/assets/burgerBoutToScreamL.png"
    },
    {
        name: "Burger Bot Scream L",
        id: "burgerScreamL",
        url: "https://zkayns.github.io/reduxredux/assets/burgerScreamL.png"
    },
    {
        name: "Burger Bot Death Cry",
        id: "burgerDeathCry",
        url: "https://zkayns.github.io/reduxredux/assets/burgerDeathCry.png"
    },
    {
        name: "Snowy Idle L 1",
        id: "snowyIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/snowyIdleL1.png"
    },
    {
        name: "Snowy Idle L 2",
        id: "snowyIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/snowyIdleL2.png"
    },
    {
        name: "Snowy Idle R 1",
        id: "snowyIdleR1",
        url: "https://zkayns.github.io/reduxredux/assets/snowyIdleR1.png"
    },
    {
        name: "Snowy Idle R 2",
        id: "snowyIdleR2",
        url: "https://zkayns.github.io/reduxredux/assets/snowyIdleR2.png"
    },
    {
        name: "Snowy Walk R 1",
        id: "snowyWalkR1",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkR1.png"
    },
    {
        name: "Snowy Walk R 2",
        id: "snowyWalkR2",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkR2.png"
    },
    {
        name: "Snowy Walk R 3",
        id: "snowyWalkR3",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkR3.png"
    },
    {
        name: "Snowy Walk L 1",
        id: "snowyWalkL1",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkL1.png"
    },
    {
        name: "Snowy Walk L 2",
        id: "snowyWalkL2",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkL2.png"
    },
    {
        name: "Snowy Walk L 3",
        id: "snowyWalkL3",
        url: "https://zkayns.github.io/reduxredux/assets/snowyWalkL3.png"
    },
    {
        name: "Snowy Loser 1",
        id: "snowyLoser1",
        url: "https://zkayns.github.io/reduxredux/assets/snowyLoser1.png"
    },
    {
        name: "Snowy Loser 2",
        id: "snowyLoser2",
        url: "https://zkayns.github.io/reduxredux/assets/snowyLoser2.png"
    },
    {
        name: "Mustard 1",
        id: "mustard1",
        url: "https://zkayns.github.io/reduxredux/assets/mustard1.png"
    },
    {
        name: "Mustard 2",
        id: "mustard2",
        url: "https://zkayns.github.io/reduxredux/assets/mustard2.png"
    },
    {
        name: "Mustard Dead",
        id: "mustardDead",
        url: "https://zkayns.github.io/reduxredux/assets/mustardDead.png"
    },
    {
        name: "Ketchup Projectile",
        id: "ketchupProjectile",
        url: "https://zkayns.github.io/reduxredux/assets/ketchupProjectile.png"
    },
    {
        name: "Mustard Projectile",
        id: "mustardProjectile",
        url: "https://zkayns.github.io/reduxredux/assets/mustardProjectile.png"
    },
    {
        name: "Devil L",
        id: "devilL",
        url: "https://zkayns.github.io/reduxredux/assets/devilL.png"
    },
    {
        name: "Devil R",
        id: "devilR",
        url: "https://zkayns.github.io/reduxredux/assets/devilR.png"
    }
];
let T=0;
let music;
let onionLanded=false;
let lastDirection=1;
let lastT=0;
let keys=new Array();
let gameFrame=1;
let player;
let playerSpeed=240;
let jumpHeight=240;
let enemyHp=0;
let ground;
let board;
let onionFrame=1;
let onionState="IdleR";
let charmCooldown=1000;
let transitioningIntoFight=false;
let sinceLastCharm=charmCooldown;
let inCredits=false;
let boardUi;
let boardOpen=false;
let boardHoverEffect;
let canMove=true;
let playerTouchingBoard=false;
let playerTouchingJim=false;
let enemy;
let enemyActTimer=0;
let enemyState=0;
let enemyFrame=1;
let enemyGroundCollider;
let enemyDead=false;
let damageTaken=false;
let coins=100;
let shieldUp=false;
let shieldDuration=1000;
let shieldCooldown=3000;
let upCharmCooldown=1000;
let sinceLastUpCharm=upCharmCooldown;
let sinceLastShield=shieldCooldown;
let slamming=false;
let slamCooldown=1000;
let sinceLastSlam=slamCooldown;
let daJim;
let jimOpen=false;
let enemyData;
let boughtShopItems=new Array();
let physics={
    default: 'arcade',
    arcade: {
        gravity: { 
            x: 0,
            y: 300 
        },
        debug: false
    }
};
let controls={
    player: {
        moveLeft: ["a", "ArrowLeft"],
        moveRight: ["d", "ArrowRight"],
        jump: ["w", "ArrowUp"],
        charm: [" "],
        interact: ["e"],
        slam: ["s", "ArrowDown"],
        shield: ["z"],
        charmUp: ["x"]
    },
    game: {
        togglePause: ["p"],
        screenshot: ["`"]
    }
};
let currentFight;
let scene;
let jumps=0;
let temp;
let temp2;
let dead=false;
let maxHp=12;
let hp=12;
let lastHit=0;
let lastPlayerHit=0;
let onionLocation="town";
let hitEffect;
let playerHitEffect;
let devilCreated=false;
let beatenEnemies=new Array();
let charmType="";
let upCharmType="";
let shockwaveType="";
let charismaType="";
let MainMenuScene={
    key: "MainMenuScene",
    physics: physics,
    active: true
};
let GameScene={
    key: "GameScene",
    physics: physics,
    active: false
};
let fights={
    burgerBot: {
        name: "Burger Bot",
        spriteTag: "burger",
        hp: 20,
        startX: 512,
        startY: 344,
        startSpriteKey: "burgerIdleL1",
        musicKey: "burgerBotBgm"
    },
    snowy: {
        name: "Snowy C",
        spriteTag: "snowy",
        hp: 12,
        startX: 512,
        startY: 344,
        startSpriteKey: "snowyIdleL1",
        musicKey: "snowyBgm"
    },
    mustard: {
        name: "Musturd",
        spriteTag: "mustard",
        hp: 15,
        startX: 512,
        startY: 344,
        startSpriteKey: "mustard1",
        musicKey: "mustardBgm"
    }
};
let splashes=[
    "Now with more onion",
    "The name's Pineapple",
    "Joe mama",
    "Supports Hyper-Realistic graphics",
    "Which is also at the drycleaners",
    "Not sorry for party rocking",
    "Get ready for an ONION QUEST (REDUX REDUX, I guess)",
    "Like, source spaghetti, legit insane",
    "Gottem",
    "Find out next week",
    "Goober"
];
let shopItems={
    extraLife: {
        name: "Extra Life",
        spriteKey: "extraLife",
        description: "Makes you not die by giving you 3 HP. Cap still applies",
        cost: 1,
        rebuyable: true
    },
    shield: {
        name: "Shield",
        spriteKey: "shieldBook",
        description: "Allows you to press Z for a shield",
        cost: 1
    },
    hyperShield: {
        name: "Hyper Shield",
        spriteKey: "hyperShieldBook",
        description: "Makes your shield really big (and orange)",
        cost: 2,
        requires: ["shield"]
    },
    upCharm: {
        name: "Up Charm",
        spriteKey: "upCharmBook",
        description: "Allows you to press X for an up charm",
        cost: 1
    },
    hyperUpCharm: {
        name: "Hyper Up Charm",
        spriteKey: "hyperUpCharmBook",
        description: "Makes your up charms really fast (and green)",
        cost: 1,
        requires: ["upCharm"]
    },
    hyperCharm: {
        name: "Hyper Charm",
        spriteKey: "hyperCharmBook",
        description: "Makes your charms really fast (and blue)",
        cost: 2
    },
    slam: {
        name: "Slam",
        spriteKey: "slamBook",
        description: "Allows you to press DownArrow/S to slam",
        cost: 2
    },
    hyperSlam: {
        name: "Hyper Slam",
        spriteKey: "hyperSlamBook",
        description: "Makes your shockwaves really fast (and orange)",
        cost: 2,
        requires: ["slam"]
    },
    doubleJump: {
        name: "Double Jump",
        spriteKey: "doubleJumpBook",
        description: "Allows you to double jump",
        cost: 2
    },
    devil: {
        name: "Lil Devil",
        spriteKey: "devilBook",
        description: "Makes you and your attacks faster at the cost of 3 HP cap",
        cost: 3,
        requires: ["hyperSlam", "hyperCharm", "hyperShield"]
    }
}
let config={
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    backgroundColor: 0,
    pixelArt: true,
    scene: [
        MainMenuScene,
        GameScene
    ],
    parent: document.querySelector("#parent"),
    scale: {
        mode: Phaser.Scale.HEIGHT_CONTROLS_WIDTH,
        autoCenter: Phaser.CENTER_BOTH
    },
    dom: {
        createContainer: true
    },
    fps: {
        limit: 60,
        target: 60
    }
};
let game=new Phaser.Game(config);
MainMenuScene.preload=function() {
    scene=this;
};
MainMenuScene.create=function() {
    temp=scene.add.dom(scene.game.canvas.width/2, scene.game.canvas.height/2, "div", "width: 640px; height: 480px; color: white");
    temp2=document.createElement("h1");
    temp2.style["margin-left"]="5px";
    temp2.innerHTML="Onion Quest Redux: <span class='rainbow'>Redux</span>";
    temp.node.appendChild(temp2);
    temp2=document.createElement("p");
    temp2.style["margin-left"]="5px";
    temp2.style["margin-top"]="-15px";
    temp2.innerHTML=splashes[Math.floor(splashes.length*Math.random())];
    temp.node.appendChild(temp2);
    temp2=document.createElement("button");
    temp2.style["margin-left"]="5px";
    temp2.id="playButton";
    temp2.innerHTML="Play";
    temp.node.appendChild(temp2);
    temp.node.appendChild(document.createElement("br"));
    temp2=document.createElement("button");
    temp2.style["margin-left"]="5px";
    temp2.style["margin-top"]="7.5px";
    temp2.id="creditsButton";
    temp2.innerHTML="Credits";
    temp.node.appendChild(temp2);
    temp2=document.createElement("p");
    temp2.innerHTML=`ZProject ${(new Date()).getFullYear()}`;
    temp2.style["margin-left"]="5px";
    temp.node.appendChild(temp2);
    document.querySelector("#playButton").addEventListener("mousedown", startGame);
    document.querySelector("#creditsButton").addEventListener("mousedown", startCredits);
};
MainMenuScene.update=function(t) {
    document.querySelectorAll(".rainbow").forEach(el=>{
        el.style["filter"]=`hue-rotate(${t/5}deg)`;
    });
};
GameScene.preload=function() {
    scene=this;
    loadGameAssets();
    scene.textures.generate("ground", {
        data: ["a"],
        pixelWidth: 8192,
        pixelHeight: 150,
        palette: {"a": "#00FF00"}
    });
    scene.input.keyboard.on("keydown", keyDown);
    scene.input.keyboard.on("keyup", keyUp);
    scene.input.on("pointermove", mouseMove);
    scene.input.on("pointerdown", mouseDown);
};
GameScene.create=function() {
    player=scene.physics.add.sprite(0, 0, "onionIdleR2").setCollideWorldBounds(true);
    player.body.height*=1.5;
    player.body.width*=1.5;
    player.scaleX=1.5;
    player.scaleY=1.5;
    ground=scene.physics.add.staticSprite(scene.game.canvas.width/2, scene.game.canvas.height, "ground");
    scene.physics.add.collider(player, ground);
    createTownStructures();
    player.y=ground.body.top-player.body.height/2;
    player.x=player.body.width;
    music=scene.sound.add("townBgm").setLoop(true);
    music.play();
};
GameScene.update=function(t) {
    T=t;
    playerTouchingBoard=false;
    if (hp<=0) die();
    if (hp>maxHp) hp=maxHp;
    if (boughtShopItems.includes("devil")&&!devilCreated) {
        devilCreated=true;
        temp=scene.physics.add.sprite(player.x, player.y, "devilR");
        temp.body.allowGravity=false;
    };
    if (jimOpen) {
        document.getElementById("money").innerHTML=`$${coins}`;
        document.getElementById("jimItemDesc").innerHTML="Hover over an item to show its description";
        document.querySelectorAll(".jimItemContainer").forEach(i=>{
            i.style["filter"]="";
            shopItems[i.id.split("_")[1]].requires?.map(requiredItem=>boughtShopItems.includes(requiredItem)).forEach(a=>!a?i.style["filter"]="brightness(50%)":"");
            if (boughtShopItems.includes(i.id.split("_")[1])) i.remove();
        });
        document.querySelectorAll(".jimItemContainer:hover").forEach(i=>{
            temp2=shopItems[i.id.split("_")[1]]?.requires?.map(r=>shopItems[r].name);
            temp=temp2?.length>1?temp2.join(", "):temp2?.[0]||"None";
            document.getElementById("jimItemDesc").innerHTML=`<strong>${shopItems[i.id.split("_")[1]].name} (${shopItems[i.id.split("_")[1]].cost})</strong><br>${shopItems[i.id.split("_")[1]].description}<br>Requires: ${temp}`;
        });
        alignJim();
    };
    if (transitioningIntoFight&&player.body.blocked.down&&!onionLanded) {
        player.rotation=0;
        enemy.rotation*=!currentFight=="snowy"
        player.setCollideWorldBounds(true);
        scene.cameras.main.shake(750, .05, false, (cam, prog)=>{prog>=1?initFight():""});
        onionLanded=true;
    } else if (transitioningIntoFight&&!onionLanded) {
        player.rotation+=1;
        enemy.rotation+=currentFight=="snowy";
    };
    scene.children.list.filter(obj=>isCharm(obj)).forEach(charm=>{
        scene.physics.overlap(charm, enemy, ()=>{
            charm?.destroy();
            enemyHit(t);
        }); 
        charm?.body?.left>scene.game.canvas.width||charm?.body?.right<0||charm?.body?.bottom<0||charm?.body?.top>scene.game.canvas.height?charm?.destroy():"";
    });
    scene.children.list.filter(obj=>keyTagged(obj, "charisma")||keyTagged(obj, "hyperCharisma")).forEach(charisma=>{
        scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>scene.physics.overlap(shield, charisma, ()=>charisma?.destroy()));
        scene.physics.overlap(charisma, player, ()=>{
            charisma?.destroy();
            playerHit();
        });
        charisma?.body?.left>scene.game.canvas.width||charisma?.body?.right<0?charisma?.destroy():"";
    });
    scene.children.list.filter(obj=>isPlayerShockwave(obj)).forEach(shockwave=>{
        scene.physics.overlap(shockwave, enemy, ()=>{
            shockwave?.destroy();
            enemyHit(t);
        });
        shockwave?.body?.left>scene.game.canvas.width||shockwave?.body?.right<0?shockwave?.destroy():"";
    });
    scene.children.list.filter(obj=>keyTagged(obj, "roboShockwave")).forEach(roboShockwave=>{
        scene.physics.overlap(roboShockwave, player, ()=>{
            roboShockwave?.destroy();
            playerHit();
        });
        roboShockwave?.body?.left>scene.game.canvas.width||roboShockwave?.body?.right<0?roboShockwave?.destroy():"";
    });
    scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>{
        shield.setFlip(lastDirection);
        shield.x=player.x+(lastDirection?30:-30)*keyTagged(shield, "shield");
        shield.y=Math.min(player.y, ground.body.top-shield.height/2);
        sinceLastShield>shieldDuration?shield?.destroy():""; 
    });
    scene.children.list.filter(obj=>keyTagged(obj, "laser")).forEach(laser=>{
        if (currentFight=="burgerBot") {
            if (Phaser.Math.Distance.BetweenPoints(player, laser)<=250&&!laser.getData("hasSpedUp")) {
                laser.body.velocity.x*=2;
                laser.body.velocity.y*=2;
                laser.setData("hasSpedUp", true);
            } else if (!laser.getData("hasSpedUp")) {
                laser.rotation=Phaser.Math.Angle.BetweenPoints(laser, player);
                laser.body.velocity.x=200*Math.cos(laser.rotation);
                laser.body.velocity.y=200*Math.sin(laser.rotation);
            };
            scene.physics.overlap(laser, player, ()=>{
                laser?.destroy();
                playerHit();
            });
            scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>{scene.physics.overlap(laser, shield, ()=>{laser?.destroy()})});
        };
        laser?.body?.left>scene.game.canvas.width||laser?.body?.right<0?laser?.destroy():"";
    });
    scene.children.list.filter(obj=>keyTagged(obj, "mustardProjectile")).forEach(mustard=>{
        mustard.scale-=.05;
        if (!mustard.getData("hitPlayer")&&Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), mustard.getBounds())) {
            playerHit();
            mustard.setData("hitPlayer", true);
        };
        if (mustard.scale<=0) mustard?.destroy();
    });
    scene.children.list.filter(obj=>keyTagged(obj, "devil", 6)).forEach(devil=>{
        devil.x=lastDirection?player.getTopLeft().x:player.getTopRight().x;
        devil.y=player.getTopLeft().y;
    });
    canMove=!(jimOpen+transitioningIntoFight+boardOpen+dead);
    player.setVelocityX((-bindIsDown(controls.player.moveLeft)*playerSpeed+bindIsDown(controls.player.moveRight)*playerSpeed)*canMove);
    onionState=`${((bindIsDown(controls.player.moveLeft)||bindIsDown(controls.player.moveRight))*canMove)?"Walk":"Idle"}${lastDirection?"R":"L"}`;
    if (onionState.slice(0,4)=="Idle") {
        if (gameFrame%30==0) onionFrame++;
        onionFrame=onionFrame%2;
    } else {
        if (gameFrame%6==0) onionFrame++;
        onionFrame=onionFrame%3;
    };
    scene.children.list.filter(obj=>obj.type=="Sprite").filter(obj=>obj.texture.key.includes("Coin")).forEach(coin=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), coin.getBounds())) {
            coins+=coin.texture.key.includes("ring")?2:1;
            coin.destroy();
        };
    });
    if (slamming&&player.body.blocked.down) {
        slamming=false;
        temp=scene.physics.add.sprite(player.x, player.y, `${getType("shockwave")}L`);
        temp.scaleX=1.5;
        temp.scaleY=1.5;
        temp.body.velocity.x=-400*(boughtShopItems.includes("hyperSlam")+boughtShopItems.includes("devil")+1);
        temp.body.drag=1;
        temp.body.allowGravity=false;
        temp.y=ground.body.top-temp.body.height/1.333;
        scene.physics.add.collider(ground, temp);
        temp=scene.physics.add.sprite(player.x, player.y, `${getType("shockwave")}R`);
        temp.scaleX=1.5;
        temp.scaleY=1.5;
        temp.body.velocity.x=400*(boughtShopItems.includes("hyperSlam")+boughtShopItems.includes("devil")+1);
        temp.body.drag=1;
        temp.body.allowGravity=false;
        temp.y=ground.body.top-temp.body.height/1.333;
        scene.physics.add.collider(ground, temp);
    };
    if (playerHitEffect&&t-lastPlayerHit>200) player.postFX.remove(playerHitEffect);
    switch (onionLocation) {
        case "town":
            playerTouchingBoard=Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), board.getBounds());
            playerTouchingJim=Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), daJim.getBounds());
            scene.children.list.forEach(obj=>{
                if (obj.getData?.("isBoardCharacter")&&!obj.getData("defeated")) {
                    if (Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(scene.input.mousePointer.x, scene.input.mousePointer.y, 1), obj.getBounds())&&!obj.getData("hasHoverEffect")) {
                        boardHoverEffect=obj.postFX.addGradient(0xffffff, 0xffffff, .75, 0, 0, 1, 1, 0);
                        obj.setData("hasHoverEffect", true);
                    };
                    if (obj.getData("hasHoverEffect")&&!Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(scene.input.mousePointer.x, scene.input.mousePointer.y, 1), obj.getBounds())) {
                        obj.postFX.clear();
                        obj.setData("hasHoverEffect", false);  
                    };
                };
            });
            break;
        default:
            if (!transitioningIntoFight&&enemyHp>0&&!dead) {
                document.getElementById("enemyHealthBar").innerHTML=`[${"|".repeat(enemyHp)}<span style='color: black'>${"|".repeat(fights[currentFight].hp-enemyHp)}</span>]`;
                document.getElementById("onionHealthBar").innerHTML=`[${"|".repeat(hp)}<span style='color: black'>${"|".repeat(maxHp-hp)}</span>]`;
            };
            if (hitEffect&&t-lastHit>200) enemy.postFX.remove(hitEffect);
            if (!transitioningIntoFight) { // IF CURRENTLY IN FIGHT
                enemyActTimer+=t-lastT;
                if (enemyDead&&document.getElementById("enemyUi")) { // ON DEATH, REGARDLESS OF ENEMY
                    dropCoin();
                    music.stop();
                    document.getElementById("enemyUi").remove();
                    document.getElementById("onionUi").remove();
                    beatenEnemies.push(currentFight);
                };
                if (enemyDead&&player.body.right>=scene.game.canvas.width) {
                    leaveFight();
                    break;
                };
                switch (currentFight) {
                    case "burgerBot": // BURGER BOT FIGHT
                        if (enemyHp<=0&&enemyDead==false) { // ON DEATH
                            enemyDead=true;
                            enemyActTimer=0;
                            enemy.body.velocity.y=600;
                            enemy.body.velocity.x=0;
                            enemy.rotation=0;
                            enemy.setTexture("burgerDeathCry");
                            enemy.setCollideWorldBounds(false);
                            scene.physics.world.removeCollider(enemyGroundCollider);
                        };
                        if (enemyDead) { // AFTER DEATH
                            enemy.rotation+=1;
                        };
                        if (!enemyDead) { // DURING FIGHT
                            if (enemyActTimer>=1000&&enemyState==0) { // ON JUMP
                                enemyState=1;
                                enemy.body.velocity.y=-300;
                                enemy.body.velocity.x=(player.x-enemy.x)/1.95;
                                enemy.setTexture(`burgerAnger${player.x<enemy.x?"R":"L"}`);
                                enemyActTimer=-100;
                            };
                            if (enemyState==1&&enemy.y<ground.body.top-enemy.body.height/2) { // DURING JUMP
                                enemy.rotation+=.5;
                            };
                            if (enemyState==1&&enemy.y>=ground.body.top-enemy.body.height/2&&enemyActTimer>=0) { // ON LAND
                                enemyActTimer=0;
                                enemyState=0;
                                enemy.rotation=0;
                                enemy.body.velocity.x=0;
                                scene.cameras.main.shake(200);
                                temp=scene.physics.add.sprite(enemy.x, 0, "roboShockwaveL");
                                temp.scaleX=3;
                                temp.scaleY=3;
                                temp.y=ground.body.top-temp.body.height/2;
                                temp.depth=ground.depth-1;
                                temp.setVelocityX(-400);
                                temp.body.drag=1;
                                temp.body.allowGravity=false;
                                scene.physics.add.collider(ground, temp);
                                temp=scene.physics.add.sprite(enemy.x, 0, "roboShockwaveR");
                                temp.scaleX=3;
                                temp.scaleY=3;
                                temp.y=ground.body.top-temp.body.height/2;
                                temp.depth=ground.depth-1;
                                temp.setVelocityX(400);
                                temp.body.drag=1;
                                temp.body.allowGravity=false;
                                scene.physics.add.collider(ground, temp);
                                temp=scene.physics.add.sprite(enemy.x, enemy.y, "laser");
                                temp.scaleX=3;
                                temp.scaleY=3;
                                temp.body.allowGravity=false;
                                temp.rotation=Phaser.Math.Angle.BetweenPoints(temp, player); 
                                temp.body.velocity.x=200*Math.cos(temp.rotation);
                                temp.body.velocity.y=200*Math.sin(temp.rotation);
                                temp.setData("hasSpedUp", false);
                            };
                        };
                        break;
                    case "snowy": // SNOWY C FIGHT
                        if (enemyHp<=0&&enemyDead==false) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("snowyLoser1");
                            enemy.body.setSize(scene.textures.get(enemy.texture.key).getSourceImage().width, scene.textures.get(enemy.texture.key).getSourceImage().height);
                            enemy.body.allowGravity=true;
                        };
                        if (enemyDead) { // AFTER DEATH
                            if (gameFrame%30==0) {
                                enemyFrame++;
                                enemyFrame=enemyFrame%2;
                            };
                            enemy.setTexture(`snowyLoser${enemyFrame+1}`);
                        };
                        if (!enemyDead) { // DURING FIGHT
                            enemy.x=scene.game.canvas.width-player.x;
                            enemy.setTexture(`snowy${onionState.slice(0, 4)}${lastDirection?"L":"R"}${onionFrame+1}`);
                            enemy.body.setSize(scene.textures.get(enemy.texture.key).getSourceImage().width, scene.textures.get(enemy.texture.key).getSourceImage().height);
                            enemy.y=player.body.bottom-enemy.body.height/2;
                        };
                        break;
                    case "mustard": // MUSTARD FIGHT
                        if (enemyHp<=0&&enemyDead==false) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("mustardDead");
                            enemy.body.setSize(scene.textures.get(enemy.texture.key).getSourceImage().width, scene.textures.get(enemy.texture.key).getSourceImage().height-10);
                            enemy.depth=ground.depth-1;
                            enemy.rotation=0;
                            enemy.body.velocity.x=0;
                            enemy.body.allowGravity=true;
                            scene.physics.add.collider(enemy, ground);
                        };
                        if (enemyDead) { // AFTER DEATH
                        };
                        if (!enemyDead) { // DURING FIGHT
                            if (enemyState==1&&enemyData?.projectileTimer/125>=1) createMustardProjectile();
                            enemyData.hasOwnProperty("projectileTimer")?enemyData.projectileTimer+=t-lastT:"";
                        };
                        if (enemyActTimer>=1000&&enemyState==0&&!enemyDead) { // ON DASH
                            enemy.rotation=Phaser.Math.Angle.BetweenPoints(enemy, player)+Math.PI/2;
                            enemy.body.velocity.x=500*Math.cos(enemy.rotation-Math.PI/2);
                            enemy.body.velocity.y=500*Math.sin(enemy.rotation-Math.PI/2);
                            enemyData=structuredClone({
                                dist: Phaser.Math.Distance.BetweenPoints(player, enemy),
                                dashPos: {
                                    x: enemy.x,
                                    y: enemy.y
                                },
                                lastDashAt: t,
                                projectileTimer: 0
                            });
                            enemyState=1;
                            createMustardProjectile();
                        };
                        if (enemyState==1) { // DURING DASH
                        };
                        if (!enemyDead&&Phaser.Math.Distance.BetweenPoints(enemy, enemyData.dashPos)>=enemyData.dist&&enemyState==1) { // ON END DASH
                            enemy.body.velocity.x=0;
                            enemy.body.velocity.y=0;
                            enemyActTimer=0;
                            enemyState=0;
                        };
                        break;
                };
            };
            break;
    };
    player.setTexture(`onion${onionState}${onionFrame+1}`);
    gameFrame+=1;
    sinceLastCharm+=t-lastT;
    sinceLastSlam+=t-lastT;
    sinceLastShield+=t-lastT;
    sinceLastUpCharm+=t-lastT;
    lastT=t;
};
function startGame() {
    scene.scene.start("GameScene");
};
function startCredits() {
    inCredits=true;
    temp=scene.add.dom(0, 0, "div", "", "");
    temp.node.id="credits";
    temp=document.createElement("div");
    temp.id="creditsText";
    temp.innerHTML+="<h1>Onion Quest Redux: <span class='rainbow'>Redux</span></h1>";
    temp.innerHTML+="<h3>A spinoff of Onion Quest Redux, made by ZProject</h3>";
    temp.innerHTML+="<p>Code written by zkayns</p>";
    temp.innerHTML+="<p>Original game series by PiranaJoe</p>";
    temp.innerHTML+="<p>Based off of a series of comics by Asher</p>";
    temp.innerHTML+="<p>Music by zkayns</p>";
    temp.innerHTML+="<p>Sprites by PiranaJoe and Vortex</p>";
    temp.innerHTML+="<p>Made with the Phaser JavaScript game framework</p>";
    document.getElementById("credits").appendChild(temp);
    temp=scene.add.dom(scene.game.canvas.width, 0, "button", "", "X");
    temp.node.id="leaveCreditsButton";
    document.getElementById("leaveCreditsButton").addEventListener("mousedown", leaveCredits);
    temp.x-=temp.node.getBoundingClientRect().width/2;
    temp.y+=temp.node.getBoundingClientRect().height/2;
};
function leaveCredits() {
    inCredits=false;
    document.getElementById("credits").remove();
    document.getElementById("leaveCreditsButton").remove();
};
function keyDown(e) {
    keys.push(e.key);  
    if (canMove&&player) {
        controls.player.jump.includes(e.key)?tryJump():"";
        controls.player.moveRight.includes(e.key)?lastDirection=1:"";
        controls.player.moveLeft.includes(e.key)?lastDirection=0:"";
        controls.player.charm.includes(e.key)?tryCharm():"";
        controls.player.slam.includes(e.key)?trySlam():"";
        controls.player.shield.includes(e.key)?tryShield():"";
        controls.player.charmUp.includes(e.key)?tryCharmUp():"";
    };
    e.key=="q"?hp--:"";
    (boardOpen||playerTouchingBoard)&&controls.player.interact.includes(e.key)?tryOpenBoard():"";
    (playerTouchingJim||jimOpen)&&controls.player.interact.includes(e.key)?tryOpenJim():"";
    controls.game.screenshot.includes(e.key)?takeScreenshot():"";
};
function keyUp(e) {
    while (keys.includes(e.key)) keys.splice(keys.indexOf(e.key), 1);
};
function mouseMove(e) {
};
function mouseDown(e) {
    if (boardOpen&&e.x>=93&&e.x<=191&&e.y>=142&&e.y<=250) goToFight("burgerBot");
    if (boardOpen&&e.x>=200&&e.x<=300&&e.y>=142&&e.y<=250) goToFight("snowy");
    if (boardOpen&&e.x>=320&&e.x<=420&&e.y>=142&&e.y<=250) goToFight("mustard");
};
function bindIsDown(bind) {
    for (let i in bind) if (keys.includes(bind[i])) return true;
    return false;
};
function tryJump() {
    if (!player) return false;
    if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), ground.getBounds())) jumps=0;
    if (!Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), ground.getBounds())&&!boughtShopItems.includes("doubleJump")) return false;
    if (jumps>1) return false;
    jumps++;
    player.setVelocityY(-jumpHeight);
};
function tryCharm() {
    if (sinceLastCharm<charmCooldown) return false;
    temp=scene.physics.add.sprite(player.x+player.body.width/2*Math.sign(lastDirection-.5), player.y, `${getType("charm")}${lastDirection?"R":"L"}`);
    temp.body.width*=1.5;
    temp.body.height*=1.5;
    temp.scaleX=1.5;
    temp.scaleY=1.5;
    temp.body.allowGravity=false;
    temp.setVelocityX(Math.sign(lastDirection-.5)*260*(boughtShopItems.includes("hyperCharm")+boughtShopItems.includes("devil")+1));
    temp.body.drag=1;
    sinceLastCharm=0;
    if (currentFight=="snowy"&&enemyHp>0) {
        temp=scene.physics.add.sprite(enemy.x+enemy.body.width/2*Math.sign(!lastDirection-.5), player.y, `${getType("charisma")}${lastDirection?"L":"R"}`);
        temp.body.width*=1.5;
        temp.body.height*=1.5;
        temp.scaleX=1.5;
        temp.scaleY=1.5;
        temp.body.allowGravity=false;
        temp.setVelocityX(Math.sign(!lastDirection-.5)*(260*(boughtShopItems.includes("hyperCharm")+boughtShopItems.includes("devil")+1)));
        temp.body.drag=1;
    };
};
function tryCharmUp() {
    if (!boughtShopItems.includes("upCharm")||sinceLastUpCharm<upCharmCooldown) return false;
    temp=scene.physics.add.sprite(player.x, player.y, `${getType("upCharm")}`);
    temp.body.width*=1.5;
    temp.body.height*=1.5;
    temp.scaleX=1.5;
    temp.scaleY=1.5;
    temp.body.allowGravity=false;
    temp.setVelocityY(-260*(boughtShopItems.includes("hyperUpCharm")+boughtShopItems.includes("devil")+1));
    temp.body.drag=1;
    sinceLastUpCharm=0;
};
function tryShield() {
    if (!boughtShopItems.includes("shield")) return false;
    if (sinceLastShield>shieldCooldown&&getType("shield")=="shield") { // SHIELD
        sinceLastShield=0;
        temp=scene.physics.add.sprite(player.x, player.y, `shieldL`);
        temp.body.allowGravity=false;
        temp.width*=1.5;
        temp.height*=1.5;
        temp.displayWidth*=1.5;
        temp.displayHeight*=1.5;
    } else if (sinceLastShield>shieldCooldown&&(getType("shield")=="hyperShield"||getType("shield")=="devilShield")) {
        sinceLastShield=0;
        temp=scene.physics.add.sprite(player.x, player.y, getType("shield"));
        temp.body.allowGravity=false;
        temp.width*=3;
        temp.height*=3;
        temp.displayWidth*=3;
        temp.displayHeight*=3;
        temp.setAlpha(.75);
    };
};
function trySlam() {
    slamming=(sinceLastSlam>=slamCooldown)*boughtShopItems.includes("slam");
    player.body.velocity.y=slamming?600:player.body.velocity.y;
    sinceLastSlam*=!slamming;
};
function urlOfAsset(name) {
    for (let i in assetIndex) if (assetIndex[i].name==name) return assetIndex[i].url;
};
function tryOpenBoard() {
    if (boardOpen) {
        boardUi.destroy();
        scene.children.list.filter(c=>c?.getData("isBoardCharacter")==true).forEach(c=>c?.destroy());
        boardOpen=false;
        return false;
    };
    boardOpen=true;
    boardUi=scene.add.sprite(scene.game.canvas.width/2, scene.game.canvas.height/2, "boardUi");
    boardUi.scale=.66;
    temp=scene.add.sprite(142, 196, "burgerIdleL1");
    temp.setData("isBoardCharacter", true);
    temp.scale=1.5;
    if (beatenEnemies.includes("burgerBot")) {
        temp.setData("defeated", true);
        temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
    };
    temp=scene.add.sprite(250, 196, "snowyIdleR1");
    temp.setData("isBoardCharacter", true);
    temp.scale=2;
    if (beatenEnemies.includes("snowy")) {
        temp.setData("defeated", true);
        temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
    };
    temp=scene.add.sprite(373, 196, "mustard1");
    temp.setData("isBoardCharacter", true);
    temp.scale=2.5;
    if (beatenEnemies.includes("mustard")) {
        temp.setData("defeated", true);
        temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
    };
};
function tryOpenJim() {
    scene.sound.stopAll();
    if (jimOpen) {
        document.getElementById("daJim")?.remove();
        document.getElementById("jimTextbox")?.remove();
        document.getElementById("pineappleWhoManagesDaJim")?.remove();
        document.getElementById("money")?.remove();
        music=scene.sound.add("townBgm").setLoop(true);
        music.play();
        jimOpen=false;
        return false;
    };
    jimOpen=true;
    music=scene.sound.add("jimJam").setLoop(true);
    music.play();
    temp=scene.add.dom(scene.game.canvas.width/2, scene.game.canvas.height/2, "div", "width: 100%; background-color: black; border: 1px solid black; height: 100%; font-family: monospace", "");
    temp.node.id="daJim";
    temp2=document.createElement("h1");
    temp2.innerHTML="Da Jim";
    temp2.style["text-align"]="center";
    temp.node.appendChild(temp2);
    Object.keys(shopItems).forEach(i=>{
        let item=shopItems[i];
        temp2=document.createElement("img");
        temp2.src=assetIndex.filter(a=>a.id==item.spriteKey)[0].url;
        temp2.className="jimItem";
        temp2.id=`shopItem_${i}`;
        temp2.style["min-height"]="56px";
        let el=document.createElement("div");
        el.className="jimItemContainer";
        el.id=`shopItemContainer_${i}`;
        el.appendChild(temp2);
        el.addEventListener("mousedown", (e)=>{
            temp=e.target.id.split("_")[1];
            if (shopItems[temp].cost<=coins&&!shopItems[temp].requires?.filter(r=>!boughtShopItems.includes(r)).length) {
                if (temp=="devil") {
                    fights["snowy"].hp-=3;
                    maxHp-=3;
                };
                if (temp=="extraLife") {
                    hp=Math.min(hp+3, maxHp);
                };
                coins-=shopItems[temp].cost;
                if (!shopItems[temp]?.rebuyable) {
                    boughtShopItems.push(temp);
                    e?.target?.remove();
                };
            };
        });
        temp.node.appendChild(el);
    });
    temp=scene.add.dom(scene.game.canvas.width/2, scene.game.canvas.height-64, "div", "width: 100%; background-color: black; border: 1px solid green; height: 256px; font-family: monospace;", "");
    temp.depth=999999;
    temp.node.id="jimTextbox";
    temp.node.style["padding-left"]="8px";
    temp2=document.createElement("p");
    temp2.innerHTML="Hover over an item to show its description";
    temp2.id="jimItemDesc";
    temp.node.appendChild(temp2);
    temp=scene.add.dom(500, 100, "img", "z-index: 999; width: 200px;", "");
    temp.node.src=assetIndex.filter(a=>a.id=="pineappleWhoManagesDaJim")[0].url;
    temp.node.id="pineappleWhoManagesDaJim";
    temp.depth=999998;
    temp=scene.add.dom(10, 280, "strong", "", "$0");
    temp.node.id="money";
    temp.node.style["text-align"]="center";
};
function goToFight(fight) {
    if (beatenEnemies.includes(fight)) return false;
    scene.children.list.filter(c=>c?.getData("isBoardCharacter")==true).forEach(c=>c?.destroy());
    scene.sound.stopAll();
    board?.destroy();
    boardUi?.destroy();
    daJim?.destroy();
    damageTaken=false;
    boardOpen=false;
    transitioningIntoFight=true;
    onionLanded=false;
    currentFight=fight;
    enemyFrame=1;
    onionLocation=`enemy_${fight}`;
    player.setCollideWorldBounds(false);
    player.x=player.body.width;
    player.y=-player.body.height;
    enemy=scene.physics.add.sprite(fights[currentFight].startX, fights[currentFight].startY, fights[currentFight].startSpriteKey);
    enemy.setCollideWorldBounds(true);
    enemyData={};
    switch (currentFight) {
        case "burgerBot":
            enemy.displayWidth=120;
            enemy.displayHeight=120;
            enemy.width=120;
            enemy.height=120;
            enemy.y=ground.body.top-enemy.body.height-6;
            break;
        case "snowy":
            enemy.displayHeight=scene.textures.get("snowyIdleL1").getSourceImage().height*2;
            enemy.displayWidth=scene.textures.get("snowyIdleL1").getSourceImage().width*2;
            enemy.body.setSize(scene.textures.get(enemy.texture.key).getSourceImage().width, scene.textures.get(enemy.texture.key).getSourceImage().height);
            enemy.x=scene.game.canvas.width-player.x;
            enemy.y=player.y;
            enemy.setCollideWorldBounds(false);
            break;
        case "mustard":
            enemy.body.allowGravity=false;
            enemy.displayHeight*=2.5;
            enemy.displayWidth*=2.5;
            enemy.setCollideWorldBounds(false);
            break;
    };
    enemyGroundCollider=scene.physics.add.collider(enemy, ground);
    scene.children.list.filter(obj=>shouldDespawn(obj)).forEach(obj=>obj?.destroy());
};
function initFight() {
    enemyHp=fights[currentFight].hp;
    enemyState=0;
    enemyActTimer=0;
    enemyDead=false;
    switch (currentFight) {
        case "burgerBot":
            scene.time.delayedCall(1000, ()=>{
                enemy.setTexture("burgerScreamL");
                enemy.width=scene.textures.get("burgerScreamL").getSourceImage().width;
                enemy.body.height=168;
                enemy.y=ground.body.top-enemy.body.height/2;
                scene.cameras.main.shake(750, .05, false, (cam, prog)=>{
                    if (prog>=1) {
                        enemy.setTexture("burgerAngerL");
                        enemy.body.height=120;
                        enemy.y=ground.body.top-enemy.body.height/2;
                        enemyActTimer=1000;
                        endFightInit();
                    };
                });
            });
            break;
        case "snowy":
            enemy.body.allowGravity=false;
            endFightInit();
            break;
        case "mustard":
            enemy.setTexture("mustard2");
            scene.physics.world.removeCollider(enemyGroundCollider);
            enemyActTimer=1000;
            endFightInit();
            break;
    };
};
function endFightInit() {
    temp=scene.add.dom(scene.game.canvas.width-200, 0, "div", "", "");
    temp.node.id="enemyUi";
    temp2=document.createElement("h3");
    temp2.innerHTML=fights[currentFight].name;
    temp2.id="enemyName";
    temp.node.appendChild(temp2);
    temp2=document.createElement("p");
    temp2.style["margin-top"]="-6px";
    temp2.id="enemyHealthBar";
    temp2.innerHTML=`[${"|".repeat(enemyHp)}<span style='color: black'>${"|".repeat(fights[currentFight].hp-enemyHp)}</span>]`;
    temp.node.appendChild(temp2);
    temp=scene.add.dom(0, 0, "div", "", "");
    temp.node.id="onionUi";
    temp2=document.createElement("h3");
    temp2.innerHTML="Big Onion";
    temp2.id="onionName";
    temp.node.appendChild(temp2);
    temp2=document.createElement("p");
    temp2.style["margin-top"]="-6px";
    temp2.id="onionHealthBar";
    temp2.innerHTML=`[${"|".repeat(hp)}<span style='color: black'>${"|".repeat(maxHp-hp)}</span>]`;
    temp.node.appendChild(temp2);
    transitioningIntoFight=false;
    music=scene.sound.add(fights[currentFight].musicKey).setLoop(true);
    music.play();
};
function leaveFight() {
    onionLocation="town";
    player.x=0;
    createTownStructures();
    enemy?.destroy();
    scene.sound.stopAll();
    music=scene.sound.add("townBgm").setLoop(true);
    music.play();
    scene.children.list.filter(obj=>shouldDespawn(obj)).forEach(obj=>obj?.destroy());
};
function loadGameAssets() {
    assetIndex.forEach((asset)=>{
        if (!asset.audio) scene.load.image(asset.id, urlOfAsset(asset.name));
        if (asset.audio==true) scene.load.audio(asset.id, urlOfAsset(asset.name));
    });
};
function createTownStructures() {
    board=scene.physics.add.staticSprite(550, 375, "townBoard");
    board.displayWidth*=.3;
    board.displayHeight*=.3;
    board.depth=ground.depth-1;
    daJim=scene.physics.add.staticSprite(200, 280, "daJim");
    daJim.displayWidth*=.4;
    daJim.displayHeight*=.4;
    daJim.depth=ground.depth-1;
};
function dropCoin() {
    temp=scene.physics.add.sprite(enemy.x, enemy.y, damageTaken?"onionCoin":"ringCoin");
    temp.displayWidth*=2;
    temp.displayHeight*=2;
    temp.body.height*=2;
    temp.body.width*=2;
    scene.physics.add.collider(temp, ground);
};
function enemyHit(t) {
    enemyHp--;
    lastHit=t;
    if (hitEffect) enemy.postFX.remove(hitEffect);
    hitEffect=enemy.postFX.addGradient(0xffffff, 0xffffff, .75, 0, 0, 1, 1, 0);
};
function keyTagged(o, k, len) {
    return o.texture?.key?.slice(0, k.length)==k&&o.texture?.key?.length<=(len||Infinity);
};
function playerHit() {
    damageTaken=true;
    hp--;
    lastPlayerHit=T;
    if (playerHitEffect) player.postFX.remove(playerHitEffect);
    playerHitEffect=player.postFX.addGradient(0xffffff, 0xffffff, .75, 0, 0, 1, 1, 0);
};
function takeScreenshot() {
    scene.game.renderer.snapshot(ss=>{
        temp2=document.createElement("canvas");
        temp2.width=ss.width;
        temp2.height=ss.height;
        temp2.getContext("2d").drawImage(ss, 0, 0);
        document.body.appendChild(temp2);
    });
};
function alignJim() { // "but it works bro"
    [...document.querySelector("#daJim").querySelectorAll("br")].forEach(el=>el?.remove());
    [...document.querySelectorAll(".jimItemContainer")].forEach(el=>([...document.querySelectorAll(".jimItemContainer")].indexOf(el)+1)%6==0?el.after(document.createElement("br")):"");
};
function createMustardProjectile() {
    enemyData.projectileTimer=0;
    temp=scene.physics.add.sprite(enemy.x, enemy.y, "mustardProjectile");
    temp.body.allowGravity=false;
};
function die() {
    if (dead) return false;
    scene.scene.pause();
    dead=true;
    temp=scene.add.dom(scene.game.canvas.width/2, scene.game.canvas.height/2, "div", "background-color: black; width: 100%; height: 100%", "");
    temp.node.id="deathScreen";
    temp2=document.createElement("h1");
    temp2.innerHTML="Ded";
    temp2.style["margin-left"]="3px";
    temp.node.appendChild(temp2);
    temp2=document.createElement("button");
    temp2.innerHTML="Restart";
    temp2.style["margin-left"]="3px";
    temp2.addEventListener("mousedown", e=>location.reload());
    temp.node.appendChild(temp2);
};
function shouldDespawn(o) {
    // any game object matching any of the conditions in the array will be destroyed upon onion entering/leaving a fight
    return !![
        keyTagged(o, "charm"),
        keyTagged(o, "hyperCharm"),
        keyTagged(o, "devilCharm"),
        keyTagged(o, "charisma"),
        keyTagged(o, "hyperCharisma"),
        keyTagged(o, "shockwave"),
        keyTagged(o, "hyperShockwave"),
        keyTagged(o, "devilShockwave")
    ].filter(i=>!!i).length;
};
function isCharm(o) {
    return keyTagged(o, "charm")||keyTagged(o, "hyperCharm")||keyTagged(o, "devilCharm");
};
function isShield(o) {
    return keyTagged(o, "shield")||keyTagged(o, "hyperShield")||keyTagged(o, "devilShield");
};
function isPlayerShockwave(o) {
    return keyTagged(o, "shockwave")||keyTagged(o, "hyperShockwave")||keyTagged(o, "devilShockwave");
}
function getType(thing) {
    switch (thing) {
        case "charm":
            if (boughtShopItems.includes("devil")) return "devilCharm";
            if (boughtShopItems.includes("hyperCharm")) return "hyperCharm";
            return "charm";
        case "upCharm":
            if (boughtShopItems.includes("devil")) return "devilCharmUp";
            if (boughtShopItems.includes("hyperUpCharm")) return "hyperCharmUp";
            return "charmUp";
        case "shockwave":
            if (boughtShopItems.includes("devil")) return "devilShockwave";
            if (boughtShopItems.includes("hyperSlam")) return "hyperShockwave";
            return "shockwave";
        case "shield":
            if (boughtShopItems.includes("devil")) return "devilShield";
            if (boughtShopItems.includes("hyperShield")) return "hyperShield";
            return "shield";
        case "charisma":
            if (boughtShopItems.includes("hyperCharm")) return "hyperCharisma";
            return "charisma";
    };
};
