// function fight () {
//     let monster = prompt("Name the monster");
//     let hero = prompt("Name the hero");

//     let monsterHealth = 50;
//     let heroHealth = 50;
    
//     while(monsterHealth > 0 && heroHealth > 0){
//         let monsterDiceNum = Math.ceil(Math.random() * 20);
//         let heroDiceNum = Math.ceil(Math.random() * 20);

//         if(monsterDiceNum === 1 || monsterDiceNum === 2 ){
//             monsterHealth -=5;
//             alert(`${monster} Diceroll: ${monsterDiceNum}
//             Critical failure! ${monster} accidentally stabbed self!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(monsterDiceNum >= 3 && monsterDiceNum <= 10 ){
//             alert(`${monster} Diceroll: ${monsterDiceNum}
//             ${monster} misses!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(monsterDiceNum >= 11 && monsterDiceNum <= 18 ){
//             heroHealth -=10;
//             alert(`${monster} Diceroll: ${monsterDiceNum}
//             Hit! ${monster} strikes ${hero}!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(monsterDiceNum === 19 || monsterDiceNum === 20 ){
//             heroHealth -=20;           
//             alert(`${monster} Diceroll: ${monsterDiceNum}
//             Critical hit! ${monster} does double damage to ${hero}!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);
//         }

//         if(heroDiceNum === 1 || heroDiceNum === 2 ){
//             heroHealth -=5;
//             alert(`${hero} Diceroll: ${heroDiceNum}
//             Critical failure! ${hero} accidentally stabs self!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(heroDiceNum >= 3 && heroDiceNum <= 10 ){
//             alert(`${hero} Diceroll: ${heroDiceNum}
//             ${hero} misses!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(heroDiceNum >= 11 && heroDiceNum <= 18 ){
//             monsterHealth -=10;
//             alert(`${hero} Diceroll: ${heroDiceNum}
//             Hit! ${hero} strikes ${monster}!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);

//         } else if(heroDiceNum === 19 || heroDiceNum === 20 ){
//             monsterHealth -=20;
//             alert(`${hero} Diceroll: ${heroDiceNum}
//             Critical hit! ${hero} does double damage to ${monster}!
//             Monster: ${monsterHealth}  Hero: ${heroHealth}`);
//         }

//         if(monsterHealth === 0){
//             alert(`${monster} has lost. The world is safe`)
//             break;
//         }
//         if(heroHealth === 0){
//             alert(`${hero} has lost. The world is a chaos`)
//             break;
//         }
//     }
//     let playAgain = prompt("Would you like to play again? Type 'yes' or 'no'")

//     if(playAgain === "yes"){
//         location.reload();
//     } else if (playAgain === "no"){
//         alert("Thank you for playing")
//     } else {
//         playAgain = prompt("Type 'yes' or 'no'");
//     }
// }

// fight();



function fight() {
    let monster = prompt("What Monster will you use?")
    let hero = prompt("What hero will you use?")
    let villanHealth = 50
    let heroHealth = 50
    while (villanHealth > 0 && heroHealth > 0) {
        console.log("Health low")
            // Bellow Math.Random * 20, will give us 20 different options. Even numbers and odd numbers to keep track of numbers
        let heroDice = Math.floor(Math.random() * 20);
        let villanDice = Math.floor(Math.random() * 20);
        if (heroDice === 1 || heroDice === 2) {
            villanHealth -= 5
            alert(`Villan Hit ${villanHealth}`)
        } else if (heroDice >= 3 || heroDice <= 10) {
            villanHealth = 0
            alert(`Villan Hit ${villanHealth}`)
        } else if (heroDice === 11 || heroDice === 18) {
            villanHealth -= 10
            alert(` Villan Hit ${villanHealth}`)
        } else if (heroDice === 10 || heroDice === 20) {
            villanHealth -= 20
            alert(`Critical Hit! ${villanHealth}`)
        }
        if (villanDice === 1 || villanDice === 2) {
            heroDice -= 5
            alert(`Hero HIT ${heroDice}`)
        } else if (villanDice === 3 || villanDice === 10) {
            heroDice = 0
            alert(`Hero Hit ${heroDice}`)
        } else if (villanDice === 11 || villanDice === 18) {
            heroDice -= 10
            alert(`Hero Hit ${heroDice}`)
        } else if (villanDice === 10 || villanDice === 20) {
            heroDice -= 20
            alert(`Critical Hit! ${heroDice}`)
        }
        if (villanHealth < 0 && heroHealth < 0) {
            alert("Both Hero and Monster have knocked each other out!");
        } else if (villanHealth <= 0) {
            alert("Hero has killed Monster");
        } else {
            alert("Monster killed Hero");
        }
        const playAgain = () => {
            const answer = prompt("Want to play again? Type 'yes' or 'no'");
            if (answer === "yes") {
                fight();
            } else if (answer === "no") {
                alert("The end. Thanks for playing!");
            } else {
                playAgain();
            }
        }
        playAgain();
    }
}
fight();