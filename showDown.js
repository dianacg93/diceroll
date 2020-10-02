function fight () {
    let monster = prompt("Name the monster");
    let hero = prompt("Name the hero");

    let monsterHealth = 50;
    let heroHealth = 50;
    
    while(monsterHealth > 0 || heroHealth > 0){
        let monsterDiceNum = Math.ceil(Math.random() * 20);
        let heroDiceNum = Math.ceil(Math.random() * 20);

        if(monsterDiceNum === 1 || monsterDiceNum === 2 ){
            monsterHealth -=5;
            alert(`${monster} Diceroll: ${monsterDiceNum}
            Critical failure! ${monster} accidentally stabbed self!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(monsterDiceNum >= 3 && monsterDiceNum <= 10 ){
            alert(`${monster} Diceroll: ${monsterDiceNum}
            ${monster} misses!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(monsterDiceNum >= 11 && monsterDiceNum <= 18 ){
            heroHealth -=10;
            alert(`${monster} Diceroll: ${monsterDiceNum}
            Hit! ${monster} strikes ${hero}!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(monsterDiceNum === 19 || monsterDiceNum === 20 ){
            heroHealth -=20;           
            alert(`${monster} Diceroll: ${monsterDiceNum}
            Critical hit! ${monster} does double damage to ${hero}!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);
        }

        if(heroDiceNum === 1 || heroDiceNum === 2 ){
            heroHealth -=5;
            alert(`${hero} Diceroll: ${heroDiceNum}
            Critical failure! ${hero} accidentally stabs self!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(heroDiceNum >= 3 && heroDiceNum <= 10 ){
            alert(`${hero} Diceroll: ${heroDiceNum}
            ${hero} misses!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(heroDiceNum >= 11 && heroDiceNum <= 18 ){
            monsterHealth -=10;
            alert(`${hero} Diceroll: ${heroDiceNum}
            Hit! ${hero} strikes ${monster}!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);

        } else if(heroDiceNum === 19 || heroDiceNum === 20 ){
            monsterHealth -=20;
            alert(`${hero} Diceroll: ${heroDiceNum}
            Critical hit! ${hero} does double damage to ${monster}!
            Monster: ${monsterHealth}  Hero: ${heroHealth}`);
        }

        if(monsterHealth === 0){
            alert(`${monster} has lost. The world is safe`)
            break;
        }
        if(heroHealth === 0){
            alert(`${hero} has lost. The world is a chaos`)
            break;
        }
    }
    let playAgain = prompt("Would you like to play again? Type 'yes' or 'no'")

    if(playAgain === "yes"){
        location.reload();
    } else if (playAgain === "no"){
        alert("Thank you for playing")
    } else {
        playAgain = prompt("Type 'yes' or 'no'");
    }
}

fight();