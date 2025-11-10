addEventListener("error", (e)=>{alert(e.message)});
let assetIndex=[
    {
        name: "Town BGM",
        audio: true,
        id: "townBgm",
        url: "https://zkayns.github.io/reduxredux/assets/ReduxReduxMenu.mp3"
    },
    {
        name: "Phase 2 BGM",
        audio: true,
        id: "phase2Bgm",
        url: "https://zkayns.github.io/reduxredux/assets/Phase2BGM.mp3"
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
        url: "https://zkayns.github.io/reduxredux/assets/Musturd Music.mp3"
    },
    {
        name: "Woozrd BGM",
        audio: true,
        id: "woozrdBgm",
        url: "https://zkayns.github.io/reduxredux/assets/WoozrdNew.mp3"
    },
    {
        name: "Brock BGM",
        audio: true,
        id: "brockBgm",
        url: "https://zkayns.github.io/reduxredux/assets/brock.mp3"
    },
    {
        name: "Boulder Borg BGM",
        audio: true,
        id: "boulderBorgBgm",
        url: "https://zkayns.github.io/reduxredux/assets/BoulderBorg.mp3"
    },
    {
        name: "Jay's Dad BGM",
        audio: true,
        id: "dadBgm",
        url: "https://zkayns.github.io/reduxredux/assets/wack stuff.mp3"
    },
    {
        name: "Omega UFB BGM",
        audio: true,
        id: "omegaUFBBgm",
        url: "https://zkayns.github.io/reduxredux/assets/Holy krab final.mp3"
    },
    {
        name: "Glunk BGM",
        audio: true,
        id: "glunkBgm",
        url: "https://zkayns.github.io/reduxredux/assets/The Glunk.mp3"
    },
    {
        name: "Glork BGM",
        audio: true,
        id: "glorkBgm",
        url: "https://zkayns.github.io/reduxredux/assets/The Glork.mp3"
    },
    {
        name: "Da Jim BGM",
        audio: true,
        id: "jimJam",
        url: "https://zkayns.github.io/reduxredux/assets/jimJam.mp3"
    },
    {
        name: "Bled Dry",
        audio: true,
        id: "bledDry",
        url: "https://zkayns.github.io/reduxredux/assets/Bled dry.mp3"
    },
    {
        name: "Denial",
        audio: true,
        id: "denial",
        url: "https://zkayns.github.io/reduxredux/assets/Denial.mp3"
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
        name: "Phase 2 Board UI",
        id: "phase2BoardUi",
        url: "https://zkayns.github.io/reduxredux/assets/phase2BoardUi.png"
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
        name: "Finale Note",
        id: "finaleNote",
        url: "https://zkayns.github.io/reduxredux/assets/finaleNote.png"
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
        name: "Exit Sign",
        id: "exitSign",
        url: "https://zkayns.github.io/reduxredux/assets/exitSign.png"
    },
    {
        name: "Extra Life",
        id: "extraLife",
        url: "https://zkayns.github.io/reduxredux/assets/extraLife.png"
    },
    {
        name: "Cap Life",
        id: "capLife",
        url: "https://zkayns.github.io/reduxredux/assets/capLife.png"
    },
    {
        name: "Shoes",
        id: "shoes",
        url: "https://zkayns.github.io/reduxredux/assets/shoes.png"
    },
    {
        name: "Ancient Runes",
        id: "runes",
        url: "https://zkayns.github.io/reduxredux/assets/runes.png"
    },
    {
        name: "Soder",
        id: "soder",
        url: "https://zkayns.github.io/reduxredux/assets/soder.png"
    },
    {
        name: "Inr-G",
        id: "inrg",
        url: "https://zkayns.github.io/reduxredux/assets/inrg.png"
    },
    {
        name: "Really Hot Sauce",
        id: "reallyHotSauce",
        url: "https://zkayns.github.io/reduxredux/assets/reallyHotSauce.png"
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
        name: "Gold Ring",
        id: "goldRing",
        url: "https://zkayns.github.io/reduxredux/assets/goldRing.png"
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
        name: "Devil Nut L",
        id: "devilNutL",
        url: "https://zkayns.github.io/reduxredux/assets/devilNutL.png"
    },
    {
        name: "Devil Nut R",
        id: "devilNutR",
        url: "https://zkayns.github.io/reduxredux/assets/devilNutR.png"
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
    },
    {
        name: "Woozrd",
        id: "woozrd",
        url: "https://zkayns.github.io/reduxredux/assets/woozrd.png"
    },
    {
        name: "Magic Ball",
        id: "magicBall",
        url: "https://zkayns.github.io/reduxredux/assets/magicBall.png"
    },
    {
        name: "Flash",
        id: "flash",
        url: "https://zkayns.github.io/reduxredux/assets/flash.png"
    },
    {
        name: "Brock Idle L",
        id: "brockIdleL",
        url: "https://zkayns.github.io/reduxredux/assets/brockIdleL.png"
    },
    {
        name: "Brock Hit L",
        id: "brockHitL",
        url: "https://zkayns.github.io/reduxredux/assets/brockHitL.png"
    },
    {
        name: "Brock L",
        id: "brockL",
        url: "https://zkayns.github.io/reduxredux/assets/brockL.png"
    },
    {
        name: "Brock Mad L",
        id: "brockMadL",
        url: "https://zkayns.github.io/reduxredux/assets/brockMadL.png"
    },
    {
        name: "Brock Splosion",
        id: "brockSplosion",
        url: "https://zkayns.github.io/reduxredux/assets/brockSplosion.png"
    },
    {
        name: "Brock Sploded",
        id: "brockSploded",
        url: "https://zkayns.github.io/reduxredux/assets/brockSploded.png"
    },
    {
        name: "Pew Pewer",
        id: "pewPewer",
        url: "https://zkayns.github.io/reduxredux/assets/pewPewer.png"
    },
    {
        name: "Pew Pewer Pewing",
        id: "pewPewerPewing",
        url: "https://zkayns.github.io/reduxredux/assets/pewPewerPewing.png"
    },
    {
        name: "Pew Pew",
        id: "pewPew",
        url: "https://zkayns.github.io/reduxredux/assets/pewPew.png"
    },
    {
        name: "Tomato Idle L 1",
        id: "tomatoIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/tomatoIdleL1.png"
    },
    {
        name: "Tomato Idle L 2",
        id: "tomatoIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/tomatoIdleL2.png"
    },
    {
        name: "Boulder Borg Idle L 1",
        id: "boulderBorgIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgIdleL1.png"
    },
    {
        name: "Boulder Borg Idle L 2",
        id: "boulderBorgIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgIdleL2.png"
    },
    {
        name: "Boulder Borg Jump L",
        id: "boulderBorgJumpL",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgJumpL.png"
    },
    {
        name: "Boulder Borg Jump R",
        id: "boulderBorgJumpR",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgJumpR.png"
    },
    {
        name: "Boulder Borg Thunder 1",
        id: "boulderBorgThunder1",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgThunder1.png"
    },
    {
        name: "Boulder Borg Thunder 2",
        id: "boulderBorgThunder2",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgThunder2.png"
    },
    {
        name: "Boulder Borg Shockwave L",
        id: "boulderBorgShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgShockwaveL.png"
    },
    {
        name: "Boulder Borg Shockwave R",
        id: "boulderBorgShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/boulderBorgShockwaveR.png"
    },
    {
        name: "Jay's Dad Ded",
        id: "dadDed",
        url: "https://zkayns.github.io/reduxredux/assets/dadDed.png"
    },
    {
        name: "Jay's Dad Idle L 1",
        id: "dadIdleL1",
        url: "https://zkayns.github.io/reduxredux/assets/dadIdleL1.png"
    },
    {
        name: "Jay's Dad Idle L 2",
        id: "dadIdleL2",
        url: "https://zkayns.github.io/reduxredux/assets/dadIdleL2.png"
    },
    {
        name: "Jay's Dad Dying",
        id: "dadDying",
        url: "https://zkayns.github.io/reduxredux/assets/dadDying.png"
    },
    {
        name: "Jay's Dad Anger L",
        id: "dadAngerL",
        url: "https://zkayns.github.io/reduxredux/assets/dadAngerL.png"
    },
    {
        name: "Jay's Dad Shockwave L",
        id: "dadShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/dadShockwaveL.png"
    },
    {
        name: "Jay's Dad Shockwave R",
        id: "dadShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/dadShockwaveR.png"
    },
    {
        name: "Omega UFB",
        id: "omegaUFB",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFB.png"
    },
    {
        name: "Omega UFB Damage 1",
        id: "omegaUFBDmg1",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFBDmg1.png"
    },
    {
        name: "Omega UFB Damage 2",
        id: "omegaUFBDmg2",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFBDmg2.png"
    },
    {
        name: "Omega UFB Kaboom",
        id: "omegaUFBKaboom",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFBKaboom.png"
    },
    {
        name: "Omega UFB Kaboom Again",
        id: "omegaUFBKaboomAgain",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFBKaboomAgain.png"
    },
    {
        name: "Omega UFB Clapped",
        id: "omegaUFBClapped",
        url: "https://zkayns.github.io/reduxredux/assets/omegaUFBClapped.png"
    },
    {
        name: "Tesla",
        id: "tesla",
        url: "https://zkayns.github.io/reduxredux/assets/tesla.png"
    },
    {
        name: "Zap",
        id: "zap",
        url: "https://zkayns.github.io/reduxredux/assets/zap.png"
    },
    {
        name: "Glunk Anry L",
        id: "glunkAnryL",
        url: "https://zkayns.github.io/reduxredux/assets/glunkAnryL.png"
    },
    {
        name: "Glunk Anry R",
        id: "glunkAnryR",
        url: "https://zkayns.github.io/reduxredux/assets/glunkAnryR.png"
    },
    {
        name: "Glunk Idle L",
        id: "glunkIdleL",
        url: "https://zkayns.github.io/reduxredux/assets/glunkIdleL.png"
    },
    {
        name: "Glunk Dude",
        id: "glunkDude",
        url: "https://zkayns.github.io/reduxredux/assets/glunkDude.png"
    },
    {
        name: "Glunk Jump L",
        id: "glunkJumpL",
        url: "https://zkayns.github.io/reduxredux/assets/glunkJumpL.png"
    },
    {
        name: "Glunk Jump R",
        id: "glunkJumpR",
        url: "https://zkayns.github.io/reduxredux/assets/glunkJumpR.png"
    },
    {
        name: "Glunk Slep",
        id: "glunkSlep",
        url: "https://zkayns.github.io/reduxredux/assets/glunkSlep.png"
    },
    {
        name: "Glunk Slep 2",
        id: "glunkSlep2",
        url: "https://zkayns.github.io/reduxredux/assets/glunkSlep2.png"
    },
    {
        name: "Glunk Splosion",
        id: "glunkSplosion",
        url: "https://zkayns.github.io/reduxredux/assets/glunkSplosion.png"
    },
    {
        name: "Glork Idle L",
        id: "glorkIdleL",
        url: "https://zkayns.github.io/reduxredux/assets/glorkIdleL.png"
    },
    {
        name: "Glork Idle R",
        id: "glorkIdleR",
        url: "https://zkayns.github.io/reduxredux/assets/glorkIdleR.png"
    },
    {
        name: "Glork Jump L",
        id: "glunkJumpL",
        url: "https://zkayns.github.io/reduxredux/assets/glorkJumpL.png"
    },
    {
        name: "Glork Jump R",
        id: "glorkJumpR",
        url: "https://zkayns.github.io/reduxredux/assets/glorkJumpR.png"
    },
    {
        name: "Glork Splosion",
        id: "glorkSplosion",
        url: "https://zkayns.github.io/reduxredux/assets/glorkSplosion.png"
    },
    {
        name: "Glork Shockwave L",
        id: "glorkShockwaveL",
        url: "https://zkayns.github.io/reduxredux/assets/glorkShockwaveL.png"
    },
    {
        name: "Glork Shockwave R",
        id: "glorkShockwaveR",
        url: "https://zkayns.github.io/reduxredux/assets/glorkShockwaveR.png"
    },
    {
        name: "Him",
        id: "him",
        url: "https://zkayns.github.io/reduxredux/assets/him.png"
    },
    {
        name: "Toast Idle 1",
        id: "toastIdle1",
        url: "https://zkayns.github.io/reduxredux/assets/toastIdle1.png"
    },
    {
        name: "Toast Idle 2",
        id: "toastIdle2",
        url: "https://zkayns.github.io/reduxredux/assets/toastIdle2.png"
    },
    {
        name: "Toast Chargin 1",
        id: "toastAtk1",
        url: "https://zkayns.github.io/reduxredux/assets/toastAtk1.png"
    },
    {
        name: "Toast Chargin 2",
        id: "toastAtk2",
        url: "https://zkayns.github.io/reduxredux/assets/toastAtk2.png"
    },
    {
        name: "Toast Chargin 3",
        id: "toastAtk3",
        url: "https://zkayns.github.io/reduxredux/assets/toastAtk3.png"
    },
    {
        name: "Toast Woah",
        id: "toastWoah",
        url: "https://zkayns.github.io/reduxredux/assets/toastWoah.png"
    },
    {
        name: "Toast Projectile",
        id: "toastProjectile",
        url: "https://zkayns.github.io/reduxredux/assets/toastProjectile.png"
    },
    {
        name: "Toast Projectile Toasted",
        id: "toastProjectileToasted",
        url: "https://zkayns.github.io/reduxredux/assets/toastProjectileToasted.png"
    },
    {
        name: "Toast Projectile Burnt",
        id: "toastProjectileBurnt",
        url: "https://zkayns.github.io/reduxredux/assets/toastProjectileBurnt.png"
    },
];
let phase2=false;
let emitters={};
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
let currentDialog=0;
let ground;
let board;
let tomatoDialog=new Array();
let playerRect;
let tomatoDialogOpts=[
    [
        "Sup, BO?",
        "I just got some new swag from Pineapple. Check out these Yeesys.",
        "Pretty cool, right?"
    ],
    [
        "Sup, BO?",
        "I heard that guy Boulder Borg has an invisible laser.",
        "Pineapple says it goes through shields too, you should probably watch out."
    ],
    [
        "Sup, BO?",
        "We still don't know who broke Brock out.",
        "Really weird, because all the cameras just like, went black.",
        "Stay safe, man."
    ],
    [
        "Sup, BO?",
        "More reports of this weird \"quantum sickness\" have been coming in as of late.",
        "Stay safe, man."
    ],
    [
        "Sup, BO?",
        "We've been seeing more robots as of late. We still don't know who or what is building them.",
        "Stay safe, man."
    ],
    [
        "Sup, BO?",
        "Something's messing with my mind, man. It feels like something from another universe is trying to get into my head."
    ],
    [
        "Sup, BO?",
        "You'll always be the biggest onion."
    ],
    [
        "Sup, BO?",
        "Something sinister is happening, man. I have a feeling that things are about to get crazy.",
        "Stay safe, man."
    ],
    [
        "Sup, BO?",
        "You ever wonder what happened to that weird looking \"hyper realistic\" onion?",
        "I mean, I'm glad he's gone, it just seems kind of weird that we haven't seen him in a while."
    ]
];
let himDialog=[
    "Big Onion.",
    "The so-called protector of this here rural town.",
    "Boulder Borg, Burger Bot, Glork.",
    "You have defeated many of my finest creations.",
    "But alas, it doesn't matter.",
    "You may think yourself to be the most powerful vegetable of all time...",
    "But no matter how jacked you may be, in comparison to me, you are nothing.",
    "I have been watching.",
    "Waiting.",
    "Plotting.",
    "You have done well, Big Onion.",
    "But now... it is time to meet your maker."
];
let onionFrame=1;
let onionState="IdleR";
let nullified=false;
let charmCooldown=1000;
let transitioningIntoFight=false;
let sinceLastCharm=charmCooldown;
let inCredits=false;
let boardUi;
let boardOpen=false;
let boardHoverEffect;
let canMove=true;
let canFightOmegaUFB=false;
let playerTouchingBoard=false;
let playerTouchingJim=false;
let playerTouchingTomato=false;
let talkingToTomato=false;
let enemy;
let enemyActTimer=0;
let enemyState=0;
let enemyFrame=1;
let enemyGroundCollider;
let enemyDead=false;
let dialogOpen=false;
let damageTaken=false;
let coins=0;
let talkingToHim=false;
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
let himMatrix;
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
        charmUp: ["x"],
        exit: ["Escape"]
    },
    game: {
        togglePause: ["p"],
        screenshot: ["`"],
        toggleDebug: ["-"],
        debug: {
            initPhase2: ["="],
            bigMoney: [";"],
            //him: ["H"],
            killEnemy: ["k"]
        }
    }
};
let currentFight;
let scene;
let jumps=0;
let intersectedEnemyLastFrame=false;
let temp;
let temp2;
let debug=false;
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
let cutsceneSkip=true;
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
    },
    woozrd: {
        name: "Woozrd",
        spriteTag: "woozrd",
        hp: 15,
        startX: 320,
        startY: 240,
        startSpriteKey: "woozrd",
        musicKey: "woozrdBgm"
    },
    brock: {
        name: "Brock",
        spriteTag: "brock",
        hp: 15,
        startX: 512,
        startY: 344,
        startSpriteKey: "brockIdleL",
        musicKey: "brockBgm"
    },
    boulderBorg: {
        name: "Boulder Borg",
        spriteTag: "boulderBorg",
        hp: 20,
        startX: 512,
        startY: 344,
        startSpriteKey: "boulderBorgIdleL1",
        musicKey: "boulderBorgBgm"
    },
    dad: {
        name: "Jay's Dad",
        spriteTag: "dad",
        hp: 15,
        startX: 512,
        startY: 344,
        startSpriteKey: "dadIdleL1",
        musicKey: "dadBgm"
    },
    omegaUFB: {
        name: "Omega UFB",
        spriteTag: "omegaUFB",
        hp: 30,
        startX: 320,
        startY: 800,
        startSpriteKey: "omegaUFB",
        musicKey: "omegaUFBBgm"
    },
    glunk: {
        name: "Glunk",
        spriteTag: "glunk",
        hp: 20,
        startX: 512,
        startY: 344,
        startSpriteKey: "glunkSlep",
        musicKey: "glunkBgm"
    },
    glork: {
        name: "Glork",
        spriteTag: "glork",
        hp: 15,
        startX: 512,
        startY: 344,
        startSpriteKey: "glorkIdleL",
        musicKey: "glorkBgm"
    },
    toast: {
        name: "Toast",
        spriteTag: "toast",
        hp: 20,
        startX: 512,
        startY: 344,
        startSpriteKey: "toastIdle1",
        musicKey: "glorkBgm"
    },
    him: {
        name: "Him",
        spriteTag: "him",
        hp: 100,
        startX: 320,
        startY: 240,
        startSpriteKey: "him",
        musicKey: "denial"
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
    capLife: {
        name: "Cap Life",
        spriteKey: "capLife",
        description: "Makes you not die by adding 1 to your HP cap. Caps at 20",
        cost: 2,
        rebuyable: true
    },
    shoes: {
        name: "Shoes",
        spriteKey: "shoes",
        description: "Makes you go faster",
        cost: 1,
    },
    soder: {
        name: "Soder",
        spriteKey: "soder",
        description: "Makes your shield last half a second longer",
        cost: 2,
    },
    inrg: {
        name: "Inr-G",
        spriteKey: "inrg",
        description: "Makes your shield cooldown half a second shorter",
        cost: 2,
    },
    reallyHotSauce: {
        name: "Really Hot Sauce",
        spriteKey: "reallyHotSauce",
        description: "Makes your charm & up charm cooldowns a quarter of a second shorter",
        cost: 3
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
        cost: 1
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
        description: "Makes your attacks faster and adds devil nuts at the cost of 3 HP cap",
        cost: 3,
        requires: ["hyperSlam", "hyperCharm", "hyperShield"]
    },
    runes: {
        name: "Ancient Runes",
        spriteKey: "runes",
        description: "Nullifies the first hit of every fight",
        cost: 3
    },
    goldRing: {
        name: "Gold Ring",
        spriteKey: "goldRing",
        description: "Gives you 1 extra money after beating an enemy",
        cost: 4
    }
};
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
    temp=scene.add.dom(0, 0, "div", "");
    temp.node.id="menuScreen";
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
    scene.textures.generate(`magicParticle`, {
        data: ["a"],
        pixelWidth: 4,
        pixelHeight: 4,
        palette: {"a": "#FF00D4"}
    });
    scene.textures.generate(`himShot`, {
        data: ["a"],
        pixelWidth: 16,
        pixelHeigth: 16,
        palette: {"a": "#FFFFFF"}
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
    music=scene.sound.add(phase2?"phase2Bgm":"townBgm").setLoop(true);
    music.play();
};
GameScene.update=function(t) {
    T=t;
    Object.keys(emitters).forEach(key=>{
        if (!scene.children.getByName(key)) emitters[key].destroy();
    });
    playerTouchingBoard=false;
    if (hp<=0) die();
    if (hp>maxHp) hp=maxHp;
    if (boughtShopItems.includes("devil")&&!devilCreated) {
        devilCreated=true;
        temp=scene.physics.add.sprite(player.x, player.y, "devilR");
        temp.body.allowGravity=false;
    };
    canFightOmegaUFB=(
        beatenEnemies.includes("burgerBot")&&
        beatenEnemies.includes("snowy")&&
        beatenEnemies.includes("mustard")&&
        beatenEnemies.includes("woozrd")&&
        beatenEnemies.includes("brock")&&
        beatenEnemies.includes("boulderBorg")&&
        beatenEnemies.includes("dad"));
    canMove=!(jimOpen+transitioningIntoFight+boardOpen+dead+dialogOpen);
    player.setVelocityX((-bindIsDown(controls.player.moveLeft)*(playerSpeed+boughtShopItems.includes("shoes")*60)+bindIsDown(controls.player.moveRight)*(playerSpeed+boughtShopItems.includes("shoes")*60))*canMove);
    playerRect=player.getBounds();
    playerRect.height/=2;
    playerRect.y+=playerRect.height/1.25;
    /*scene.children.getByName("hitbox")?.destroy();
    scene.add.rectangle(playerRect.centerX, playerRect.centerY, playerRect.width, playerRect.height, 0xff0000).setName("hitbox");*/
    onionState=`${((bindIsDown(controls.player.moveLeft)||bindIsDown(controls.player.moveRight))*canMove)?"Walk":"Idle"}${lastDirection?"R":"L"}`;
    if (jimOpen) {
        document.getElementById("money").innerHTML=`$${coins}`;
        document.getElementById("jimItemDesc").innerHTML="Sup, BO.<br>Hover over an item and I'll tell ya what it does.";
        document.querySelectorAll(".jimItemContainer").forEach(i=>{
            i.style["filter"]=shopItems[i.id.split("_")[1]]?.unbuyable?"brightness(50%)":"";
            shopItems[i.id.split("_")[1]].requires?.map(requiredItem=>boughtShopItems.includes(requiredItem)).forEach(a=>!a?i.style["filter"]="brightness(50%)":"");
            shopItems["extraLife"].unbuyable=hp>=maxHp;
            shopItems["capLife"].unbuyable=maxHp>=20;
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
        if (currentFight!="him") scene.cameras.main.shake(750, .05, false, (cam, prog)=>{prog>=1?initFight():""});
        onionLanded=true;
    } else if (transitioningIntoFight&&!onionLanded) {
        player.rotation+=1;
        enemy.rotation+=currentFight=="snowy";
    };
    scene.children.list.filter(obj=>isCharm(obj)).forEach(charm=>{
        scene.physics.overlap(charm, enemy, ()=>{
            charm.destroy();
            enemyHit(t);
        }); 
        offscreenCheck(charm);
    });
    scene.children.list.filter(obj=>isCharisma(obj)).forEach(charisma=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(charisma.getBounds(), playerRect)) {
            charisma.destroy();
            playerHit();
        };
        shieldCheck(charisma);
        offscreenCheck(charisma);
    });
    scene.children.list.filter(obj=>isPlayerShockwave(obj)).forEach(shockwave=>{
        scene.physics.overlap(shockwave, enemy, ()=>{
            shockwave.destroy();
            enemyHit(t);
        });
        offscreenCheck(shockwave);
    });
    scene.children.list.filter(obj=>isEnemyShockwave(obj)).forEach(enemyShockwave=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemyShockwave.getBounds())) {
            enemyShockwave.destroy();
            playerHit();
        };
        shieldCheck(enemyShockwave);
        offscreenCheck(enemyShockwave);
    });
    scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>{
        shield.setFlip(lastDirection);
        shield.x=player.x+(lastDirection?30:-30)*keyTagged(shield, "shield");
        shield.y=Math.min(player.y, ground.body.top-shield.height/2);
        sinceLastShield>shieldDuration?shield.destroy():""; 
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
            if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, laser.getBounds())) {
                laser.destroy();
                playerHit();
            };
            shieldCheck(laser);
        };
        laser?.body?.left>scene.game.canvas.width||laser?.body?.right<0?laser.destroy():"";
    });
    scene.children.list.filter(obj=>keyTagged(obj, "mustardProjectile")).forEach(mustard=>{
        mustard.scale-=.05;
        if (!mustard.getData("hitPlayer")&&Phaser.Geom.Intersects.RectangleToRectangle(playerRect, mustard.getBounds())) {
            playerHit();
            mustard.setData("hitPlayer", true);
        };
        if (mustard.scale<=0) mustard.destroy();
        shieldCheck(mustard);
    });
    scene.children.list.filter(obj=>keyTagged(obj, "magicBall")).forEach(magicBall=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, magicBall.getBounds())) {
            playerHit();
            destroyMagicBall(magicBall);
        };
        scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>{scene.physics.overlap(magicBall, shield, ()=>{destroyMagicBall(magicBall)})});
        magicBall?.body?.left>scene.game.canvas.width||magicBall?.body?.right<0?destroyMagicBall(magicBall):"";
    });
    scene.children.list.filter(obj=>keyTagged(obj, "devil", 6)).forEach(devil=>{
        devil.x=lastDirection?player.getTopLeft().x:player.getTopRight().x;
        devil.y=player.getTopLeft().y;
        devil.setTexture(`devil${lastDirection?"R":"L"}`);
    });
    scene.children.list.filter(obj=>keyTagged(obj, "pewPewer")).forEach(pewPewer=>{
        if (!enemyDead) {
            pewPewer.rotation=Phaser.Math.Angle.BetweenPoints(pewPewer, player);
            pewPewer.x=enemy.x;
            pewPewer.y=enemy.y+enemy.height/1.25;
        } else if (!transitioningIntoFight) {
            pewPewer.destroy();
        };
    });
    scene.children.list.filter(obj=>keyTagged(obj, "pewPew", 6)).forEach(pewPew=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, pewPew.getBounds())) {
            playerHit();
            pewPew.destroy();
        };
        shieldCheck(pewPew);
        offscreenCheck(pewPew);
    });
    scene.children.list.filter(obj=>keyTagged(obj, "zap")).forEach(zap=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, zap.getBounds())) {
            playerHit();
            zap.destroy();
        };
        shieldCheck(zap);
        offscreenCheck(zap);
    });
    scene.children.list.filter(obj=>keyTagged(obj, "himShot")).forEach(himShot=>{
        himShot.scale=Math.sin(t/100)/2+1;
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, himShot.getBounds())) {
            playerHit();
            himShot.destroy();
        };
        shieldCheck(himShot);
        offscreenCheck(himShot);
        if (gameFrame%2==0) himShot.tint=himShot.tint==0xff0000?0xff00ff:0xff0000;
    });
    scene.children.list.filter(obj=>keyTagged(obj, "toastProjectile")).forEach(toast=>{
        toast.data.values.timer+=T-lastT;
        if (toast.data.values.timer>=500) {
            toast.setData("timer", 0);
            if (toast.texture.key!="toastProjectileBurnt") {
                toast.setData("timer", 0);
                switch (toast.texture.key) {
                    case "toastProjectile":
                        toast.setTexture("toastProjectileToasted");
                        break;
                    case "toastProjectileToasted":
                        toast.setTexture("toastProjectileBurnt");
                        break;
                };
            };
        };
        shieldCheck(toast);
        offscreenCheck(toast);
    });
    if (onionState.slice(0,4)=="Idle") {
        if (gameFrame%30==0) onionFrame++;
        onionFrame=onionFrame%2;
    } else {
        if (gameFrame%6==0) onionFrame++;
        onionFrame=onionFrame%3;
    };
    scene.children.list.filter(obj=>obj.type=="Sprite").filter(obj=>obj.texture.key.includes("Coin")).forEach(coin=>{
        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, coin.getBounds())) {
            coins+=coin.texture.key.includes("ring")?2:1;
            coin.destroy();
        };
    });
    if (scene.children.getByName("teslaL")) {
        temp=scene.children.getByName("teslaL");
        temp.x=enemy.body.left+enemy.body.width/8;
        temp.y=enemy.body.bottom-enemy.body.height/4;
        temp.rotation=Phaser.Math.Angle.BetweenPoints(temp, player);
    };
    if (scene.children.getByName("teslaR")) {
        temp=scene.children.getByName("teslaR");
        temp.x=enemy.body.right-enemy.body.width/8;
        temp.y=enemy.body.bottom-enemy.body.height/4;
        temp.rotation=Phaser.Math.Angle.BetweenPoints(temp, player);
    };
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
    if (himMatrix&&!talkingToHim) {
        himMatrix.alpha-=.0166667;
        if (himMatrix.alpha<=0) {
            scene.cameras.main.postFX.remove(himMatrix);
            himMatrix="";
            endFightInit();
        };
    };
    if (playerHitEffect&&t-lastPlayerHit>200) player.postFX.remove(playerHitEffect);
    switch (onionLocation) {
        case "town":
            playerTouchingBoard=Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), board.getBounds());
            playerTouchingJim=Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), daJim.getBounds());
            playerTouchingTomato=Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), scene.children.getByName("tomato").getBounds());
            scene.children.getByName("tomato").setTexture(`tomatoIdleL${Math.floor(gameFrame/30)%2+1}`);
            scene.children.getByName("tomato").y=ground.body.top-scene.children.getByName("tomato").getBounds().height/2;
            scene.children.list.forEach(obj=>{
                if (keyTagged(obj, "finaleNote")) {
                    obj.x=obj.getData("initPos").x+Math.sign(Math.random()-.5)*3;
                    obj.y=obj.getData("initPos").y+Math.sign(Math.random()-.5)*3;
                    if (gameFrame%3==0) {
                        obj.data.values.matrix.reset();
                        obj.data.values.matrix.brightness(Math.random()>.5?0:100);
                    };
                };
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
                document.getElementById("enemyHealthBar").innerHTML=currentFight=="him"?`[${enemyHp}]`:`[${"|".repeat(Math.max(enemyHp, 1))}<span style='color: black'>${"|".repeat(Math.max(fights[currentFight].hp-enemyHp, 0))}</span>]`;
                document.getElementById("onionHealthBar").innerHTML=`[${"|".repeat(Math.max(hp, 1))}<span style='color: black'>${"|".repeat(Math.max(maxHp-hp, 0))}</span>]`;
            };
            if (currentFight=="woozrd"&&enemyData?.fadingIn&&transitioningIntoFight) enemy.alpha+=.03;
            if (hitEffect&&t-lastHit>200) enemy.postFX.remove(hitEffect);
            playerTouchingBoard=false;
            playerTouchingJim=false;
            playerTouchingTomato=false;
            if (!transitioningIntoFight) { // IF CURRENTLY FIGHTING
                enemyActTimer+=t-lastT;
                if (enemyDead&&document.getElementById("enemyUi")) { // ON DEATH, REGARDLESS OF ENEMY
                    if (currentFight!="him") dropCoin();
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
                            enemyData={
                                dist: Phaser.Math.Distance.BetweenPoints(player, enemy),
                                dashPos: {
                                    x: enemy.x,
                                    y: enemy.y
                                },
                                lastDashAt: t,
                                projectileTimer: 0
                            };
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
                    case "woozrd": // WOOZRD FIGHT
                        if (enemyData.fadingIn) enemy.alpha+=.05;
                        if (enemyHp<=0&&enemyDead==false) { // ON DEATH
                            enemyActTimer=0;
                            enemyDead=true;
                        };
                        if (enemyDead&&enemyActTimer<1500) { // AFTER DEATH, BEFORE FLASH
                            enemy.rotation-=1;
                            enemy.scale=Math.max(enemy.scale-.02, 0);
                        } else if (enemyDead&&enemyActTimer>=1500&&!enemyData?.hasFlashed) { // ON FLASH
                            temp=scene.add.sprite(enemy.x, enemy.y, "flash");
                            temp.scale=2;
                            enemyData.hasFlashed=true;
                            enemy.alpha=0;
                        } else if (enemyData?.hasFlashed&&enemyDead) { // AFTER FLASH
                            scene.children.list.filter(obj=>keyTagged(obj, "flash")).forEach(flash=>flash.alpha-=.02);
                        };
                        if (enemyActTimer>=1500&&enemyHp>0) { // ON TELEPORT
                            enemy.alpha=0;
                            enemyData.fadingIn=true;
                            scene.time.delayedCall(333, ()=>{
                                enemyData.fadingIn=false;
                                enemy.alpha=1;
                            });
                            enemyActTimer=0;
                            enemy.x=Math.max(0, Math.min(player.x+Math.random()*300*Math.sign(Math.random()-.5), 600));
                            enemy.y=ground.body.top-Math.random()*300;
                            enemy.rotation=Phaser.Math.Angle.BetweenPoints(enemy, player);
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "magicBall");
                            temp.setName(`ball_${Object.keys(emitters).length}`);
                            temp.setData("hueRotation", (Math.random()-.5)*360);
                            temp.postFX.addColorMatrix().hue(temp.getData("hueRotation"));
                            emitters[temp.name]=scene.add.particles(0, 0, "magicParticle", {
                                follow: scene.children.getByName(`${temp.name}`),
                                alpha: {
                                    start: 1,
                                    end: 0,
                                    ease: "cubic.inout"
                                },
                                scale: {
                                    onUpdate: (particle, key, time, value)=>{
                                        return 1-Phaser.Math.Easing.Cubic.InOut(time);
                                    }
                                }
                            });
                            emitters[temp.name].postFX.addColorMatrix().hue(temp.getData("hueRotation"));
                            temp.postFX.addBloom(0xff00d4, 1, 1, 1, 4);
                            temp.body.allowGravity=false;
                            temp.rotation=enemy.rotation;
                            temp.body.velocity.x=200*Math.cos(enemy.rotation);
                            temp.body.velocity.y=200*Math.sin(enemy.rotation);
                        };
                        break;
                    case "brock": // BROCK FIGHT
                        if (enemyData.sploding) {
                            enemy.x=enemyData.splodeX+Math.sign(Math.random()-.5)*3;
                            enemy.y=enemyData.splodeY+Math.sign(Math.random()-.5)*3;
                        };
                        if (enemyHp<=0&&!enemyDead) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("brockSplosion");
                            enemyData.splodeX=enemy.x;
                            enemyData.splodeY=enemy.y;
                            enemyData.sploding=true;
                            enemyActTimer=0;
                        };
                        if (enemyDead&&enemyData.sploding&&enemyActTimer>=500) { // ON STOP SPLODING
                            enemyData.sploding=false;
                            enemy.x=enemyData.splodeX;
                            enemy.y=enemyData.splodeY;
                            enemy.setTexture("brockSploded");
                            enemy.body.allowGravity=true;
                            scene.physics.world.removeCollider(enemyGroundCollider);
                            enemy.setCollideWorldBounds(false);
                        };
                        if (!enemyDead) { // DURING FIGHT
                            enemy.flipX=player.x-enemy.x>0;
                        };
                        if (enemyActTimer>=1500&&enemyHp>0) { // ON ATTACK
                            enemyActTimer=0;
                            doBrockAttack();
                        };
                        break;
                    case "boulderBorg": // BOULDER BORG FIGHT
                        if (enemyHp<=0&&!enemyDead) { // ON DEATH
                            enemyDead=true;
                            enemy.setCollideWorldBounds(false);
                            enemy.setTexture(`boulderBorgJump${enemyData.direction}`);
                            enemy.body.allowGravity=true;
                            scene.physics.world.removeCollider(enemyGroundCollider);
                            enemy.body.velocity.x=0;
                            enemy.body.velocity.y=600;
                        };
                        if (enemyDead) { // AFTER DEATH
                            enemy.rotation+=1;
                        };
                        if (scene.children.getByName("laser")) { // LASER STUFF
                            temp=scene.children.getByName("laser");
                            temp.x=enemy.x;
                            if (Phaser.Geom.Intersects.RectangleToRectangle(temp.body, player.getBounds())&&!enemyData.hitThisCycle) {
                                playerHit();
                                enemyData.hitThisCycle=true;
                            };
                            if (enemyDead) temp.destroy();
                        };
                        if (enemyActTimer>1000&&enemyHp>0&&enemyState==0) { // ON JUMP
                            enemy.flipX=false;
                            enemy.setTexture(`boulderBorgJump${enemyData.direction}`);
                            enemy.body.velocity.y=-400;
                            enemyActTimer=0;
                            enemyState=1;
                        };
                        if (enemyActTimer>=500&&enemyState==1&&enemyHp>0) { // ON START THUNDER
                            enemyData.hitThisCycle=false;
                            enemy.setTexture("boulderBorgThunder2");
                            enemy.body.velocity.x=(enemyData.direction=="L"?-1:1)*400;
                            enemy.body.velocity.y=0;
                            enemy.body.allowGravity=false;
                            enemyState=2;
                            enemyActTimer=0;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "__WHITE");
                            temp.alpha=0;
                            temp.body.width=16;
                            temp.body.height=2048;
                            temp.name="laser";
                            temp.body.allowGravity=false;
                        };
                        if (enemyActTimer>1250&&enemyState==2&&enemyHp>0) { // ON STOP THUNDER
                            enemyActTimer=0;
                            enemyState=3;
                            enemyData.direction=swapDir(enemyData.direction);
                            enemy.setTexture(`boulderBorgJump${enemyData.direction}`);
                            enemy.body.allowGravity=true;
                            enemy.body.velocity.x=0;
                            scene.children.getByName("laser").destroy();
                        };
                        if (enemyState==3&&enemy.body.bottom>=ground.body.top&&enemyHp>0) { // ON LAND
                            enemy.y=ground.body.top-enemy.height;
                            enemyState=0;
                            enemyActTimer=0;
                            enemy.setTexture(`boulderBorgIdleL1`);
                            enemy.flipX=enemyData.direction=="R";
                            enemy.body.bottom=ground.body.top;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "boulderBorgShockwaveL");
                            temp.body.velocity.x=-400;
                            temp.scale=2;
                            temp.y=ground.body.top-temp.height/2;
                            temp.depth=ground.depth-1;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "boulderBorgShockwaveR");
                            temp.body.velocity.x=400;
                            temp.scale=2;
                            temp.y=ground.body.top-temp.height/2;
                            temp.depth=ground.depth-1;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                        };
                        if (enemyHp>0&&Phaser.Geom.Intersects.RectangleToRectangle(enemy.getBounds(), player.getBounds())) {
                            if (!enemyData.touchedLastFrame) playerHit();
                            enemyData.touchedLastFrame=true;
                        };
                        break;
                    case "dad": // JAY'S DAD FIGHT
                        if (enemyHp<=0&&!enemyDead) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("dadDed");
                            enemy.body.setSize(enemy.getBounds().width/2, enemy.getBounds().height/2);
                            enemy.y=Math.min(ground.body.top-enemy.body.height, enemy.y);
                        };
                        if (enemyState==0&&enemyHp>0&&enemyActTimer>=1000) { // ON JUMP
                            enemy.setCollideWorldBounds(false);
                            enemyState=1;
                            enemyActTimer=0;
                            enemy.body.velocity.y=-800;
                        };
                        if (enemyState==1&&enemyHp>0&&enemy.y<-100) { // ON START FALL
                            enemy.flipX=!enemy.flipX;
                            enemy.x=player.x;
                            enemy.y=-300;
                            enemy.body.velocity.y=800;
                            enemyState=2;
                        };
                        if (enemyState==2&&enemyHp>0&&enemy.body.bottom>=ground.body.top) { // ON LAND
                            scene.cameras.main.shake(200);
                            enemyState=0;
                            enemyActTimer=0;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "dadShockwaveL");
                            temp.scale=3;
                            temp.y=ground.body.top-temp.height/2;
                            temp.depth=ground.depth-1;
                            temp.body.velocity.x=-600;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "dadShockwaveR");
                            temp.scale=3;
                            temp.y=ground.body.top-temp.height/2;
                            temp.depth=ground.depth-1;
                            temp.body.velocity.x=600;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                            if (Phaser.Geom.Intersects.RectangleToRectangle(enemy.getBounds(), player.getBounds())) playerHit();
                        };
                        break;
                    case "omegaUFB": // OMEGA UFB FIGHT
                        if (enemyHp<=0&&!enemyDead) { // ON DEATH
                            enemyDead=true;
                            initPhase2();
                            enemy.setTexture("omegaUFBClapped");
                            enemyData.splodeX=enemy.x;
                            enemy.body.allowGravity=true;
                            scene.children.getByName("teslaL").destroy();
                            scene.children.getByName("teslaR").destroy();
                        };
                        if (enemyDead) { // AFTER DEATH
                            enemy.x=enemyData.splodeX+Math.sign(Math.random()-.5)*3;
                        };
                        if (enemyData.healTimer>=1200*(3-enemyState)&&!enemyDead) { // ON HEAL
                            enemyData.healTimer=0;
                            enemyHp=Math.min(enemyHp+1, fights[currentFight].hp);
                        };
                        if (enemyHp>0&&enemyActTimer>=2000-250*(enemyState==2)) { // ON FIRE TESLA
                            zap();
                            for (let n in new Uint8Array(10*Math.pow(2, enemyState))) scene.time.delayedCall(n*100/(enemyState+1+(enemyState==2)), zap);
                            enemyActTimer=0;
                        };
                        if (enemyState==0&&enemyHp<=20) { // ON SWITCH TO DAMAGED LEVEL 1
                            enemyData.wrappedAround=false;
                            enemyActTimer=-1000000000;
                            enemyData.switchingPhase=true;
                            enemy.setTexture("omegaUFBKaboom");
                            enemy.body.velocity.x=750;
                            scene.time.delayedCall(1000, ()=>{
                                enemy.setTexture("omegaUFBDmg1");
                                enemyData.wrappedAround=true;
                                enemy.x=-150;
                            });
                            enemyState=1;
                        };
                        if (enemyState==1&&enemyHp<=10) { // ON SWITCH TO DAMAGED LEVEL 2
                            enemyData.wrappedAround=false;
                            enemyActTimer=-1000000000;
                            enemyData.switchingPhase=true;
                            enemy.setTexture("omegaUFBKaboomAgain");
                            enemy.body.velocity.x=750;
                            scene.time.delayedCall(1000, ()=>{
                                enemy.setTexture("omegaUFBDmg2");
                                enemyData.wrappedAround=true;
                                enemy.x=-150;
                            });
                            enemyState=2;
                        };
                        if (enemyData.wrappedAround&&enemyData.switchingPhase&&enemy.x>=scene.game.canvas.width/2) { // ON FINISH PHASE SWITCH
                            enemyData.switchingPhase=false;
                            enemy.body.velocity.x=0;
                            enemy.x=scene.game.canvas.width/2;
                            enemyActTimer=2000;
                        };
                        enemyData.healTimer+=t-lastT;
                        break;
                    case "glunk": // GLUNK FIGHT
                        enemyData.hitRect=enemy.getBounds();
                        enemyData.hitRect.height=enemy.getBounds().height/4;
                        enemyData.hitRect.y=enemy.y+enemy.getBounds().height/4;
                        /*
                        scene.children.getByName("test")?.destroy();
                        scene.add.rectangle(enemyData.hitRect.centerX, enemyData.hitRect.centerY, enemyData.hitRect.width, enemyData.hitRect.height, 0xff0000).setName("test");
                        */
                        if (enemyHp<=0&&!enemyDead) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("glunkSplosion");
                            enemy.body.allowGravity=false;
                            enemy.body.velocity.x=0;
                            enemy.body.velocity.y=0;
                            enemy.body.setEnable(false);
                        };
                        if (enemyDead) { // AFTER DEATH
                            enemy.alpha=Math.max(enemy.alpha-.03, 0);
                        };
                        if (enemyActTimer>=500&&enemyState==0&&!enemyDead) { // ON JUMP
                            enemyState=1;
                            enemyActTimer=0;
                            enemyData.hitThisJump=false;
                            enemy.setTexture(`glunkJump${player.x>enemy.x?"R":"L"}`);
                            enemy.body.setSize(enemy.getBounds().width/2, enemy.getBounds().height/2);
                            enemy.body.velocity.y=-200;
                            enemy.body.velocity.x=Math.sign(player.x-enemy.x)*210;
                        };
                        if (Phaser.Geom.Intersects.RectangleToRectangle(player.getBounds(), enemyData.hitRect)&&!enemyDead) { // PLAYER HIT STUFF
                            if (enemyState==1&&!enemyData.hitThisJump) { // ON AIR HIT
                                enemyData.hitThisJump=true;
                                playerHit();
                            };
                            if (enemyState==0&&!enemyData.groundHit) { // ON GROUND HIT
                                enemyData.groundHit=true;
                                playerHit();
                            };
                        };
                        if (enemyState==1&&enemy.body.bottom>=ground.body.top&&enemyActTimer>50&&!enemyDead) { // ON LAND
                            enemyActTimer=0;
                            enemyState=0;
                            enemy.body.velocity.x=0;
                            enemy.setTexture(`glunkAnry${player.x>enemy.x?"R":"L"}`);
                            enemy.body.setSize(enemy.getBounds().width/2, enemy.getBounds().height/2);
                            enemyData.groundHit=false;
                        };
                        break;
                    case "glork": // GLORK FIGHT
                        if (!enemyDead&&enemyHp<=0) { // ON DEATH
                            enemyDead=true;
                            enemy.body.setEnable(false);
                            enemy.depth=ground.depth+1;
                            enemy.setTexture("glorkSplosion");
                        };
                        if (enemyDead) { // AFTER DEATH
                            enemy.alpha=Math.max(enemy.alpha-.03, 0);
                        };
                        if (!enemyDead&&enemyState==0&&enemyActTimer>=1000) { // ON DIG
                            enemyState=1;
                            enemyActTimer=0;
                            enemy.body.drag=1;
                            enemy.body.velocity.y=30;
                            scene.physics.world.removeCollider(enemyGroundCollider);
                            enemyData.isDance=true;
                            enemyData.danceTimer=10000;
                            enemy.body.allowGravity=false;
                            scene.cameras.main.shake(1000, .0125);
                            scene.time.delayedCall(2500, ()=>{
                                enemy.x=player.x;
                                enemyData.isDance=false;
                                enemy.body.velocity.y=-400;
                                enemy.body.allowGravity=true;
                                enemy.setTexture(`glorkJump${player.x<enemy.x?"L":"R"}`);
                                scene.time.delayedCall(1000, ()=>{
                                    enemyGroundCollider=scene.physics.add.collider(enemy, ground);
                                    enemyData.shouldGroundCheck=true;
                                });
                            });
                        };
                        if (!enemyDead&&enemyState==1&&enemyData.shouldGroundCheck&&enemy.body.bottom>=ground.body.top) { // ON LAND
                            enemyState=0;
                            enemyData.shouldGroundCheck=false;
                            enemy.setTexture(`glorkIdle${player.x<enemy.x?"L":"R"}`);
                            enemyData.danceDir=player.x<enemy.x?"L":"R";
                            enemyActTimer=0;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "glorkShockwaveL");
                            temp.depth=ground.depth-1;
                            temp.scale=2;
                            temp.y=ground.body.top-temp.body.height/2;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                            temp.body.velocity.x=-200;
                            temp=scene.physics.add.sprite(enemy.x, enemy.y, "glorkShockwaveR");
                            temp.depth=ground.depth-1;
                            temp.scale=2;
                            temp.y=ground.body.top-temp.body.height/2;
                            temp.body.allowGravity=false;
                            temp.body.drag=1;
                            temp.body.velocity.x=200;
                        };
                        if (enemyData.isDance) { // GLORK DIG ANIM
                            if (enemyData.danceTimer>=66.6666) {
                                enemyData.danceTimer=0;
                                enemyData.danceDir=swapDir(enemyData.danceDir);
                                enemy.setTexture(`glorkIdle${enemyData.danceDir}`);
                            };
                            enemyData.danceTimer+=t-lastT;
                        };
                        if (Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemy.getBounds())&&!intersectedEnemyLastFrame) { // ON INTERSECT GLORK
                            playerHit();
                        };
                        break;
                    case "toast": // TOAST FIGHT
                        if (!enemyDead&&enemyHp<=0) { // ON DEATH
                            enemyDead=true;
                            enemy.setTexture("toastWoah");
                        };
                        if (!enemyDead&&enemyState==0) {
                            if (enemyActTimer>=500&&enemy.texture.key=="toastWoah") { // ON DASH
                                enemy.setTexture("toastIdle2");
                                enemy.rotation=Phaser.Math.Angle.BetweenPoints(enemy, player);
                                enemy.body.velocity.x=400*Math.cos(enemy.rotation);
                                enemy.body.velocity.y=400*Math.sin(enemy.rotation);
                            };
                            if (enemyActTimer>=1000) { // ON START CHARGEUP
                                enemy.body.velocity.x=0;
                                enemy.body.velocity.y=0;
                                enemy.setTexture("toastAtk1");
                                enemyActTimer=0;
                                enemyState=1;
                                enemyData.chargeState=1;
                                enemy.rotation=Phaser.Math.Angle.BetweenPoints(enemy, player)+Math.PI/2;
                            };
                        };
                        if (!enemyDead&&enemyState==1) { // CHARGEUP
                            if (enemyActTimer>=200) {
                                if (enemy.texture.key!="toastAtk3") { // ON CHARGE ADVANCE
                                    enemyActTimer=0;
                                    enemyData.chargeState++;
                                    enemy.setTexture(`toastAtk${enemyData.chargeState}`);
                                } else { // ON FIRE
                                    enemyData.chargeState=0;
                                    enemyState=0;
                                    enemyActTimer=0;
                                    shootToast();
                                    enemy.setTexture("toastWoah");
                                };
                            };
                        };
                        break;
                    case "him": // HIM FIGHT
                        if (enemyHp<=0&&!enemyDead) {
                            enemyDead=true;
                            showDialog("ENOUGH.");
                            enemy.alpha=1;
                            scene.cameras.main.shake(1500, .25, false, (cam, prog)=>{
                                temp=gameFrame%2?"#FF00FF":"#FF0000";
                                document.getElementById("dialog").style["color"]=temp;
                                document.getElementById("dialog").style["border"]=`1px solid ${temp}`;
                                if (prog>=1) {
                                    enemy.alpha=0;
                                    enemy.body.setEnable(false);
                                    scene.children.getByName("bgGradient").destroy();
                                    closeDialog();
                                    scene.cameras.main.flash(1500, 255, 0, 0);
                                    scene.cameras.main.postFX.clear();
                                    ground.alpha=1;
                                };
                            });
                        };
                        if (!enemyDead) { // DURING FIGHT
                            enemy.alpha=Math.max(enemy.alpha-.03, 0);
                            if (enemy.alpha<=0) enemy.body.setEnable(false);
                            temp=["#ff0000", "#ff00ff"][gameFrame%2];
                            document.getElementById("enemyName").style["color"]=document.getElementById("enemyHealthBar").style["color"]=temp;
                            document.getElementById("enemyUi").style["border"]=`1px solid ${temp}`;
                        };
                        if (!enemyDead&&enemyState==0&&enemyActTimer>=1000-(100-enemyHp)*3) { // ON TELEPORT
                            enemy.body.setEnable(true);
                            temp=Phaser.Math.Angle.BetweenPoints(enemy, player);
                            enemy.x=Math.random()*scene.game.canvas.width;
                            enemy.y=Math.random()*(scene.game.canvas.height-280)+60;
                            enemy.alpha=1;
                            enemyActTimer=0;
                            makeHimShot(0, -1, enemy);
                            makeHimShot(1, -1, enemy);
                            makeHimShot(1, 0, enemy);
                            makeHimShot(1, 1, enemy);
                            makeHimShot(0, 1, enemy);
                            makeHimShot(-1, 1, enemy);
                            makeHimShot(-1, 0, enemy);
                            makeHimShot(-1, -1, enemy);
                            scene.cameras.main.flash(250, 255, 0, 255*(Math.random()>.5));
                        };
                        break;
                };
            } else { // OTHER STUFF, RUNS DURING TRANSITION
                switch (currentFight) {
                    case "glunk":
                        if (enemyData.isSlep) { // GLUNK SLEEP ANIM
                            if (enemyData.slepTimer>=1000) {
                                enemyData.slepString=enemyData.slepString==""?"2":"";
                                enemyData.slepTimer=0;
                                enemy.setTexture(`glunkSlep${enemyData.slepString}`);
                                enemy.body.setSize(scene.textures.get(enemy.texture.key).getSourceImage().width, scene.textures.get(enemy.texture.key).getSourceImage().height);
                                enemy.y=ground.body.top-enemy.body.height/2;
                            };
                            enemyData.slepTimer+=t-lastT;
                        };
                        break;
                    case "glork":
                        if (enemyData.isDance) { // GLORK DANCE ANIM
                            if (enemyData.danceTimer>=333) {
                                enemyData.danceTimer=0;
                                enemyData.danceDir=swapDir(enemyData.danceDir);
                                enemy.setTexture(`glorkIdle${enemyData.danceDir}`);
                            };
                            enemyData.danceTimer+=t-lastT;
                        };
                        break;
                };
            };
            intersectedEnemyLastFrame=Phaser.Geom.Intersects.RectangleToRectangle(playerRect, enemy.getBounds());
            break;
    };
    if (scene.children.getByName("bgGradient")) { // PHASE 2 BG EFFECT
        temp=scene.children.getByName("bgGradient");
        temp.data.values.effect.size=Math.floor(Math.abs(Math.sin(t)*10));
        temp.data.values.effect.fromX=Math.sin(t/500)+1;
        temp.data.values.effect.fromY=Math.cos(t/500)+1;
        temp.data.values.effect.toX=Math.cos(t/500)+1;
        temp.data.values.effect.toY=Math.sin(t/500)+1;
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
function creditsClick(what) {
    switch (what) {
        case "phaser":
            window.open("https://github.com/phaserjs/phaser", "_blank");
            break;
        case "zkayns":
            window.open("https://github.com/zkayns/reduxredux", "_blank");
            break;
        case "jummbox":
            window.open("https://jummb.us", "_blank");
            break;
        case "piranajoe":
            window.open("https://www.youtube.com/@piranajoe1721");
            break;
    };
};
function startCredits() {
    inCredits=true;
    temp=scene.add.dom(0, 0, "div", "", "");
    temp.node.id="credits";
    temp=document.createElement("div");
    temp.id="creditsText";
    temp.innerHTML+="<h1>Onion Quest Redux: <span class='rainbow'>Redux</span></h1>";
    temp.innerHTML+="<h3>A spinoff of Onion Quest Redux, made by ZProject</h3>";
    temp.innerHTML+="<p>Game by <span class='creditsLink' onclick='creditsClick(`zkayns`)'>zkayns</span></p>";
    temp.innerHTML+="<p>Original game series by <span class='creditsLink' onclick='creditsClick(`piranajoe`)'>PiranaJoe</span></p>";
    temp.innerHTML+="<p>Based off of a series of comics by Asher</p>";
    temp.innerHTML+="<p>Music by <span class='creditsLink' onclick='creditsClick(`zkayns`)'>zkayns</span>, made with <span class='creditsLink' onclick='creditsClick(`jummbox`)'>JummBox</span></p>";
    temp.innerHTML+="<p>Sprites by <span class='creditsLink' onclick='creditsClick(`piranajoe`)'>PiranaJoe</span>, Vortex, and <span class='creditsLink' onclick='creditsClick(`zkayns`)'>zkayns</span></p>";
    temp.innerHTML+="<p>Made with the <span class='creditsLink' onclick='creditsClick(`phaser`)'>Phaser JavaScript framework</span></p>";
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
    ((playerTouchingTomato&&!playerTouchingJim)||talkingToTomato)&&controls.player.interact.includes(e.key)?tryTomato():"";
    dialogOpen&&!talkingToHim&&controls.player.exit.includes(e.key)?stopDialog():"";
    jimOpen&&controls.player.exit.includes(e.key)?tryOpenJim():"";
    boardOpen&&controls.player.exit.includes(e.key)?tryOpenBoard():"";
    controls.game.screenshot.includes(e.key)?takeScreenshot():"";
    controls.game.toggleDebug.includes(e.key)?debug=!debug:"";
    if (debug) {
        controls.game.debug.initPhase2.includes(e.key)?initPhase2():"";
        controls.game.debug.bigMoney.includes(e.key)?coins=10000:"";
        //controls.game.debug.him.includes(e.key)?goToFight("him"):"";
        controls.game.debug.killEnemy.includes(e.key)?enemyHp=0:"";
    };
};
function keyUp(e) {
    while (keys.includes(e.key)) keys.splice(keys.indexOf(e.key), 1);
};
function mouseMove(e) {
};
function mouseDown(e) {
    if (boardOpen) {
        scene.children.list.filter(obj=>obj.getData?.("isBoardCharacter")).forEach(boardCharacter=>{
            if (Phaser.Geom.Intersects.CircleToRectangle(new Phaser.Geom.Circle(e.x, e.y, 1), boardCharacter.getBounds())) {
                switch (boardCharacter.texture.key) {
                    case "burgerIdleL1":
                        goToFight("burgerBot");
                        break;
                    case "snowyIdleR1":
                        goToFight("snowy");
                        break;
                    case "mustard1":
                        goToFight("mustard");
                        break;
                    case "woozrd":
                        goToFight("woozrd");
                        break;
                    case "brockMadL":
                        goToFight("brock");
                        break;
                    case "boulderBorgIdleL1":
                        goToFight("boulderBorg");
                        break;
                    case "dadAngerL":
                        goToFight("dad");
                        break;
                    case "omegaUFB":
                        if (!debug&&!canFightOmegaUFB) break;
                        goToFight("omegaUFB");
                        break;
                    case "glunkAnryL":
                        goToFight("glunk");
                        break;
                    case "glorkIdleR":
                        goToFight("glork");
                        break;
                    case "toastIdle1":
                        goToFight("toast");
                        break;
                };
            }; 
        });
    };
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
    if (getType("upCharm")=="devilCharmUp") {
        temp=scene.physics.add.sprite(player.x, player.y, "devilNutL");
        temp.body.allowGravity=false;
        temp.setVelocityX(-260);
        temp.setVelocityY(-780);
        temp.body.drag=1;
        temp=scene.physics.add.sprite(player.x, player.y, "devilNutR");
        temp.body.allowGravity=false;
        temp.setVelocityX(260);
        temp.setVelocityY(-780);
        temp.body.drag=1;
    };
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
        scene.children.getByName("finaleNote")?.destroy();
        scene.children.list.filter(c=>c.getData?.("isBoardCharacter")).forEach(c=>c.destroy());
        boardOpen=false;
        return false;
    };
    boardOpen=true;
    boardUi=scene.add.sprite(scene.game.canvas.width/2, scene.game.canvas.height/2, phase2?"phase2BoardUi":"boardUi");
    boardUi.scale=.66;
    if (!phase2) { // PHASE 1 FIGHTS - BOARD
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
        temp=scene.add.sprite(490, 196, "woozrd");
        temp.setData("isBoardCharacter", true);
        temp.scale=1.2;
        if (beatenEnemies.includes("woozrd")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(142, 344, "brockMadL");
        temp.setData("isBoardCharacter", true);
        temp.scale=1.7;
        if (beatenEnemies.includes("brock")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(256, 344, "boulderBorgIdleL1");
        temp.setData("isBoardCharacter", true);
        if (beatenEnemies.includes("boulderBorg")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(371, 344, "dadAngerL");
        temp.setData("isBoardCharacter", true);
        if (beatenEnemies.includes("dad")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(490, 344, "omegaUFB");
        temp.setData("isBoardCharacter", true);
        temp.scale=.5;
        if (!canFightOmegaUFB) {
            temp.setData("defeated", true); // this doesn't mean he's defeated, just means he should be treated the same on the board
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
    } else { // PHASE 2 FIGHTS - BOARD
        temp=scene.add.sprite(491, 347, "finaleNote");
        temp.setData("initPos", {x: temp.x, y: temp.y});
        temp.name="finaleNote";
        temp.setData("matrix", temp.postFX.addColorMatrix());
        temp.scale=.7;
        temp=scene.add.sprite(142, 196, "glunkAnryL");
        temp.setData("isBoardCharacter", true);
        temp.scale=2;
        if (beatenEnemies.includes("glunk")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(256, 214, "glorkIdleR");
        temp.setData("isBoardCharacter", true);
        temp.scale=2;
        if (beatenEnemies.includes("glork")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
        temp=scene.add.sprite(371, 208, "toastIdle1");
        temp.setData("isBoardCharacter", true);
        temp.scale=2;
        if (beatenEnemies.includes("toast")) {
            temp.setData("defeated", true);
            temp.postFX.addGradient(0x000000, 0x000000, .25, 0, 0, 1, 1, 0);
        };
    };
};
function tryOpenJim() {
    scene.sound.stopAll();
    if (jimOpen) {
        document.getElementById("daJim")?.remove();
        document.getElementById("jimTextbox")?.remove();
        document.getElementById("pineappleWhoManagesDaJim")?.remove();
        document.getElementById("money")?.remove();
        document.getElementById("exitSign")?.remove();
        music=scene.sound.add(phase2?"phase2Bgm":"townBgm").setLoop(true);
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
        let el=document.createElement("div");
        el.className="jimItemContainer";
        el.id=`shopItemContainer_${i}`;
        el.appendChild(temp2);
        el.addEventListener("mousedown", (e)=>{
            temp=e.target.id.split("_")[1];
            if (shopItems[temp].cost<=coins&&!shopItems[temp].requires?.filter(r=>!boughtShopItems.includes(r)).length&&!shopItems[temp]?.unbuyable) {
                switch (temp) {
                    case "devil":
                        maxHp-=3;
                        break;
                    case "extraLife":
                        hp=Math.min(hp+3, maxHp);
                        break;
                    case "capLife":
                        maxHp=Math.min(maxHp+1, 20);
                        hp=Math.min(hp+1, maxHp);
                        break;
                    case "inrg":
                        shieldCooldown-=500;  
                    case "soder":
                        shieldDuration+=500;
                        break;
                    case "reallyHotSauce":
                        charmCooldown-=250;
                        upCharmCooldown-=250;
                        break;
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
    temp=scene.add.dom(606, 4, "img", "", "");
    temp.node.src=assetIndex.filter(a=>a.id=="exitSign")[0].url;
    temp.node.id="exitSign";
    temp.depth=1000000;
    document.getElementById("exitSign").addEventListener("mousedown", tryOpenJim);
};
function goToFight(fight) {
    if (beatenEnemies.includes(fight)) return false;
    scene.children.list.filter(c=>c?.getData("isBoardCharacter")==true).forEach(c=>c?.destroy());
    scene.sound.stopAll();
    board?.destroy();
    boardUi?.destroy();
    daJim?.destroy();
    scene.children.getByName("finaleNote")?.destroy();
    scene.children.getByName("tomato")?.destroy();
    damageTaken=false;
    nullified=false;
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
            fights["snowy"].hp=hp;
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
        case "woozrd":
            enemy.alpha=0;
            enemy.displayWidth*=1.5;
            enemy.displayHeight*=1.5;
            enemy.body.allowGravity=false;
            enemy.setCollideWorldBounds(false);
            break;
        case "brock":
            enemy.scale=1.7;
            makePewPewer();
            enemy.body.allowGravity=false;
            break;
        case "boulderBorg":
            enemy.scale=2;
            enemy.y=ground.body.top-enemy.body.height;
            break;
        case "dad":
            enemy.scale=2;
            enemy.y=ground.body.top-enemy.body.height;
            break;
        case "omegaUFB":
            enemy.depth=ground.depth-100;
            enemy.width*=2;
            enemy.height*=2;
            enemy.displayWidth*=2;
            enemy.displayHeight*=2;
            enemy.body.allowGravity=false;
            enemy.setCollideWorldBounds(false);
            break;
        case "glunk":
            enemyData={
                slepTimer: 1000,
                slepString: "2",
                isSlep: true,
                hitThisJump: false,
                hitRect: "",
                groundHit: false
            };
            enemy.body.width=enemy.getBounds().width/2;
            enemy.body.height=enemy.getBounds().height/2;
            enemy.scale=2;
            enemy.y=ground.body.top-enemy.body.height;
            break;
        case "glork":
            enemyData={
                isDance: true,
                danceTimer: 500,
                danceDir: "L",
                shouldGroundCheck: false
            };
            enemy.depth=ground.depth-1;
            enemy.scale=2;
            enemy.y=ground.body.top-enemy.body.height;
            break;
        case "toast":
            enemyData={
                chargeState: 0
            };
            enemy.scale=2;
            enemy.y=ground.body.top-enemy.body.height;
            enemy.body.allowGravity=false;
            break;
        case "him":
            enemy.body.allowGravity=false;
            enemy.scale=.25;
            ground.alpha=0;
            scene.cameras.main.postFX.addVignette(.5, .5, .99);
            if (!cutsceneSkip) {
                music=scene.sound.add("bledDry");
                music.play();
                doHimDialog();
            } else {
                initFight();
                transitioningIntoFight=false;
                endFightInit();
            };
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
        case "woozrd":
            enemyData={
                fadingIn: true
            };
            scene.time.delayedCall(1000, ()=>{
                enemyData.fadingIn=false;
                endFightInit();
            });
            scene.physics.world.removeCollider(enemyGroundCollider);
            break;
        case "brock":
            enemyData={
                sploding: false,
                splodeX: 0,
                splodeY: 0
            };
            enemy.setTexture("brockL");
            endFightInit();
            break;
        case "boulderBorg":
            enemyData={
                direction: "L",
                hitThisCycle: false,
                touchedLastFrame: false
            },
            enemyActTimer=10000;
            endFightInit();
            break;
        case "dad":
            enemyActTimer=10000;
            endFightInit();
            break;
        case "omegaUFB":
            enemyData={
                switchingPhase: false,
                wrappedAround: false,
                healTimer: 0,
                splodeX: 0
            };
            scene.physics.world.removeCollider(enemyGroundCollider);
            enemy.body.allowGravity=true;
            enemy.body.velocity.y=-700;
            temp=scene.add.sprite(enemy.body.left, enemy.body.bottom, "tesla");
            temp.setName("teslaL");
            temp.depth=enemy.depth+1;
            temp.scale=2;
            temp=scene.add.sprite(enemy.body.right, enemy.body.bottom, "tesla");
            temp.setName("teslaR");
            temp.depth=enemy.depth+1;
            temp.scale=2;
            scene.time.delayedCall(2250, ()=>{
                enemy.body.allowGravity=false;
                enemy.body.velocity.y=0;
                enemyActTimer=0;
                endFightInit();
            });
            break;
        case "glunk":
            enemyData.isSlep=false;
            scene.time.delayedCall(1000, ()=>{
                enemy.setTexture("glunkAnryL");
                enemy.body.setSize(enemy.getBounds().width/2, enemy.getBounds().height/2);
                enemy.y=ground.body.top-enemy.body.height/2;
                scene.time.delayedCall(1000, ()=>{
                    enemyActTimer=1000;
                    endFightInit();
                });
            });
            break;
        case "glork":
            enemyData.isDance=false;
            enemy.setTexture("glorkIdleL");
            scene.time.delayedCall(1000, ()=>{
                enemyActTimer=1000;
                endFightInit();
            });
            break;
        case "toast":
            scene.physics.world.removeCollider(enemyGroundCollider);
            enemy.setTexture(`toastAtk1`);
            enemy.y=ground.body.top-enemy.getBounds().height/2;
            scene.time.delayedCall(200, ()=>{
                enemy.setTexture(`toastAtk2`);
                enemy.y=ground.body.top-enemy.getBounds().height/2;
                scene.time.delayedCall(200, ()=>{
                    enemy.setTexture(`toastAtk3`);
                    enemy.y=ground.body.top-enemy.getBounds().height/2;
                    scene.time.delayedCall(200, ()=>{
                        enemy.setTexture(`toastWoah`);
                        enemy.y=ground.body.top-enemy.getBounds().height/2;
                        shootToast();
                        enemyActTimer=0;
                        endFightInit();
                    });
                });
            });
            break;
        case "him":
            scene.physics.world.removeCollider(enemyGroundCollider);
            enemy.body.drag=0.01;
            player.setCollideWorldBounds(true);
            // 0x100000, 0x07030d
            if (scene.children.getByName("bgGradient")) {
                scene.children.getByName("bgGradient").data.values.effect.color1=0x300000;
                scene.children.getByName("bgGradient").data.values.effect.color2=0x27232d;
            };
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
    if (currentFight=="omegaUFB") {
        temp2.style["font-size"]="10px";  
    };
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
    music=scene.sound.add(phase2?"phase2Bgm":"townBgm").setLoop(true);
    music.play();
    if (scene.children.getByName("coin")) {
        coins+=scene.children.getByName("coin").texture.key.includes("ring")+1;
        scene.children.getByName("coin").destroy();
    };
    if (boughtShopItems.includes("goldRing")) coins++;
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
    temp=scene.physics.add.staticSprite(420, 376, "tomatoIdleL1");
    temp.name="tomato";
    temp.scale=2;
    temp.depth=player.depth-1;
};
function dropCoin() {
    temp=scene.physics.add.sprite(enemy.x, enemy.y, damageTaken?"onionCoin":"ringCoin");
    temp.displayWidth*=2;
    temp.displayHeight*=2;
    temp.body.height*=2;
    temp.body.width*=2;
    temp.name="coin";
    scene.physics.add.collider(temp, ground);
    if (Phaser.Geom.Intersects.RectangleToRectangle(temp.getBounds(), ground.getBounds())) temp.y=ground.body.top-temp.body.height/2;
};
function enemyHit(t) {
    if (!enemyData?.switchingPhase) enemyHp--;
    lastHit=t;
    if (hitEffect) enemy.postFX.remove(hitEffect);
    hitEffect=enemy.postFX.addGradient(0xffffff, 0xffffff, .75, 0, 0, 1, 1, 0);
};
function keyTagged(o, k, len) {
    return o.texture?.key?.slice(0, k.length)==k&&o.texture?.key?.length<=(len||Infinity);
};
function playerHit() {
    if (nullified==false&&boughtShopItems.includes("runes")) {
        nullified=true;
        return false;
    };
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
    document.querySelector("#daJim").querySelectorAll("br").forEach(el=>el?.remove());
    document.querySelectorAll(".jimItemContainer").forEach(el=>([...document.querySelectorAll(".jimItemContainer")].indexOf(el)+1)%6==0?el.after(document.createElement("br")):"");
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
    temp=scene.add.dom(0, 0, "div", "", "");
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
        isCharm(o),
        isPlayerShockwave(o),
        isCharisma(o),
        isEnemyProjectile(o),
        isEnemyShockwave(o),
        keyTagged(o, "flash")
    ].filter(i=>!!i).length;
};
function isCharm(o) {
    return keyTagged(o, "charm")||keyTagged(o, "hyperCharm")||keyTagged(o, "devilCharm")||keyTagged(o, "devilNut");
};
function isCharisma(o) {
    return keyTagged(o, "charisma")||keyTagged(o, "hyperCharisma");
};
function isShield(o) {
    return keyTagged(o, "shield")||keyTagged(o, "hyperShield")||keyTagged(o, "devilShield");
};
function isPlayerShockwave(o) {
    return keyTagged(o, "shockwave")||keyTagged(o, "hyperShockwave")||keyTagged(o, "devilShockwave");
};
function isEnemyProjectile(o) {
    return keyTagged(o, "mustardProjectile")||keyTagged(o, "laser")||keyTagged(o, "magicBall")||keyTagged(o, "pewPew", 6)||keyTagged(o, "zap");
};
function isEnemyShockwave(o) {
    return keyTagged(o, "roboShockwave")||keyTagged(o, "boulderBorgShockwave")||keyTagged(o, "dadShockwave")||keyTagged(o, "glorkShockwave");
};
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
function tryTomato() {
    if (talkingToTomato) {
        if (currentDialog+1<tomatoDialog.length) {
            currentDialog++;
            showDialog(tomatoDialog[currentDialog]);
        } else {
            stopDialog();
        };
    } else {
        tomatoDialog=tomatoDialogOpts[Math.floor(tomatoDialogOpts.length*Math.random())];
        talkingToTomato=true;
        currentDialog=0;
        showDialog(tomatoDialog[currentDialog]);
    };
};
function doHimDialog() {
    if (!cutsceneSkip) {
        talkingToHim=true;
        himMatrix=scene.cameras.main.postFX.addColorMatrix().brightness(0);
        for (let i in himDialog) {
            scene.time.delayedCall(i*2900, ()=>{
                showDialog(himDialog[i]);
                document.querySelector("#dialog").style["color"]="#FF0000";
                document.querySelector("#dialog").style["border"]="1px solid #FF0000";
            });
        };
        scene.time.delayedCall((himDialog.length+2)*2900, ()=>{
            closeDialog();
            talkingToHim=false;
            initFight();
    });
    } else {
        scene.sound.stopAll();
        endFightInit();
    };
};
function showDialog(text) {
    dialogOpen=true;
    document.getElementById("dialog")?.remove();
    temp=scene.add.dom(scene.game.canvas.width/2, scene.game.canvas.height/2+scene.game.canvas.height/4, "div", "border: 1px solid #00FF00; background-color: black; width: 480px; height: 160px; padding: 8px;", text);
    temp.node.id="dialog";
};
function closeDialog() {
    dialogOpen=false;
    document.getElementById("dialog")?.remove();
};
function stopDialog() {
    dialogOpen=false;
    document.getElementById("dialog")?.remove();
    talkingToTomato=false;
    currentDialog=0;
};
function shieldCheck(o) {
    if (keyTagged(o, "zap")&&enemyState==2) return false;
    scene.children.list.filter(obj=>isShield(obj)).forEach(shield=>scene.physics.overlap(shield, o, ()=>o.destroy()));
};
function offscreenCheck(o) {
    o?.body?.left>scene.game.canvas.width||o?.body?.right<0||o?.body?.top>scene.game.canvas.height||o?.body?.bottom<0?o.destroy():"";
};
function doBrockAttack() {
    enemy.body.velocity.x=500*Math.cos(Phaser.Math.Angle.BetweenPoints(enemy, player));
    enemy.body.velocity.y=500*Math.sin(Phaser.Math.Angle.BetweenPoints(enemy, player));
    scene.time.delayedCall(200, ()=>{
        enemy.body.velocity.x=0;
        enemy.body.velocity.y=0;
    });
    temp2=scene.children.getByName("pewPewer");
    temp2.setTexture("pewPewerPewing");
    temp=scene.physics.add.sprite(temp2.x, temp2.y, "pewPew");
    temp.rotation=Phaser.Math.Angle.BetweenPoints(temp, player);
    temp.body.velocity.x=200*Math.cos(temp.rotation);
    temp.body.velocity.y=200*Math.sin(temp.rotation);
    temp.body.allowGravity=false;
    temp.drag=1;
    scene.time.delayedCall(250, ()=>{
        if (scene.children.getByName("pewPewer")) scene.children.getByName("pewPewer").setTexture("pewPewer");
    });
};
function destroyMagicBall(o) {
    emitters[o.name].stop(false);
    o.destroy();
};
function zap() {
    if (enemyData.switchingPhase) return false;
    let teslaL=scene.children.getByName("teslaL");
    let teslaR=scene.children.getByName("teslaR");
    if (!teslaL||!teslaR) return false;
    temp=scene.physics.add.sprite(teslaL.x, teslaL.y, "zap");
    temp.body.allowGravity=false;
    temp.body.drag=1;
    temp.rotation=teslaL.rotation;
    temp.body.velocity.x=(425+enemyState*100)*Math.cos(temp.rotation);
    temp.body.velocity.y=(425+enemyState*100)*Math.sin(temp.rotation);
    temp.scale=2+(enemyState==2)/2;
    if (enemyState==2) temp.postFX.addColorMatrix().brightness(1.3);
    temp=scene.physics.add.sprite(teslaR.x, teslaR.y, "zap");
    temp.body.allowGravity=false;
    temp.body.drag=1;
    temp.rotation=teslaL.rotation;
    temp.body.velocity.x=(425+enemyState*100)*Math.cos(temp.rotation);
    temp.body.velocity.y=(425+enemyState*100)*Math.sin(temp.rotation);
    temp.scale=2+(enemyState==2)/2;
    if (enemyState==2) temp.postFX.addColorMatrix().brightness(1.3);
};
function makePewPewer() {
    temp=scene.add.sprite(enemy.x, enemy.y+enemy.height/1.25, "pewPewer");
    temp.name="pewPewer";
    temp.scale=1.5;
};
function initPhase2() {
    if (phase2) return false;
    phase2=true;
    //scene.cameras.main.postFX.addVignette(.5, .5, .99, .3);
    //scene.cameras.main.setBackgroundColor("#07030d");
    temp=scene.add.sprite(scene.game.canvas.width/2, scene.game.canvas.height/2, "__WHITE");
    temp.name="bgGradient";
    temp.displayWidth=scene.game.canvas.width*2; 
    temp.displayHeight=scene.game.canvas.height*2;
    temp.depth=-1000;
    temp.setData("effect", temp.postFX.addGradient(0x100000, 0x07030d, 0, 0, 0, 0, 1, 16));
    tomatoDialogOpts=[
        [
            "Sup, BO?",
            "We've got Brock in the slammer, but his goons are still getting orders from somewhere.",
            "The thing is, we don't have any idea where those orders could be coming from.",
            "Stay safe, man."
        ], 
        [
            "Sup, BO?",
            "People across the town are reporting some pretty intense symptoms.",
            "We're trying to find out where this quantum sickness came from, but we're drawing blanks.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "We're getting reports of strange hallucinations of a \"hyper realistic onion\" going around.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "Insomnia is beocoming more frequent as of late, and we think it might be a result of the quantum sickness.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "Our scientists have determined that there is a tear in the fabric of reality somewhere.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "Our scientists still haven't figured out why the cosmos appear to be folding in on themselves.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "The fundamental rules of reality still aren't working, and our scientists don't know why.",
            "Stay safe, man."
        ],
        [
            "Sup, BO?",
            "Our scientists think an ancient being of great power may be responsible for the recent warping of reality.",
            "The problem is, we don't know exactly what this being could be or what it wants.",
            "Stay safe, man."
        ]
    ];
};
function shootToast() {
    temp=scene.physics.add.sprite(enemy.x, enemy.y, "toastProjectile");
    temp.depth=enemy.depth-1;
    temp.body.velocity.x=400*Math.cos(enemy.rotation-Math.PI/2);
    temp.body.velocity.y=400*Math.sin(enemy.rotation-Math.PI/2);
    temp.rotation=enemy.rotation;
    temp.setData("timer", 0);
};
function makeHimShot(xdir, ydir, at) {
    temp=scene.physics.add.sprite(at.x, at.y, "himShot");
    temp.body.allowGravity=false;
    temp.body.velocity.x=300*xdir;
    temp.body.velocity.y=300*ydir;
    temp.tintFill=true;
    temp.tint=0xff0000;
};
function hitCheck(thing1, thing2) {
    return Phaser.Geom.Intersects.RectangleToRectangle(thing1, thing2);
};
function swapDir(dir) {
    return "LRL"["LRL".indexOf(dir)+1];
};
