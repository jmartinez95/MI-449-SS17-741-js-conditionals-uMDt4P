// .trim()
// .toLowerCase()

function getRandomInt (min, max) {
  min = Math.ceil(min)
  max = Math.floor(max)
  return Math.floor(Math.random() * (max - min)) + min
}

function gameOver () {
  window.alert('You have died. Game Over')
}

function gameOverWin () {
  window.alert('Congratulations, you win!')
}

function fightSafeHouse (odds) {
  if (odds > 4) {
    window.alert('You\'re fighting skills were superior and you killed all the zombies and make it to the safe house!')
    gameOverWin()
  } else {
    window.alert('You\'re fighting skills were inferior to the zombies and you did not make it.')
    gameOver()
  }
}

function batStoryLine () {
  var action = window.prompt('You realized you made a mistake by picking up the bat because the zombies are fast, do you \'run\' or \'fight\'?')
  var odds = getRandomInt(0, 3)
  if (action === 'run' && odds === 1) {
    window.alert('It\'s a good thing you ran! That bat would have never saved you. You\'re addrenaline rush kicked in and you made it away safely. ')
    gameOverWin()
  } else if (action === '') {
    window.alert('You panicked and froze up!')
    gameOver()
  } else {
    window.alert('Bad idea! That bat had no effect and your luck just was not in the cards.')
    gameOver()
  }
}

function gunStoryLine () {
  var bullets = getRandomInt(2, 15)
  window.alert('You pick up the gun and ' + bullets + ' bullets.')
  var zombies = getRandomInt(2, 15)
  if (bullets > zombies) {
    window.alert('Lucky for you there was only ' + zombies + ' zombies and you had ' + bullets + ' bullets so you killed them all and made it to safety!')
    gameOverWin()
  } else {
    window.alert('Unluck for you there was ' + zombies + ' zombies and you only had ' + bullets + ' bullets so they caught up to you and didn\'t make it to safety.')
  }
}

function machetteStoryLine () {
  var odds = getRandomInt(0, 11)
  var direction = window.prompt('To your \'right\', there is a group of 5 zombies guarding a safe house, to your \'left\', is a staircase leading to the roof but no zombies in sight. Which way do you go?')
  if (direction === 'right') {
    fightSafeHouse(odds)
  } else if (direction === 'left') {
    if (odds > 3) {
      window.alert('You run to the alley way to the stair case and run to the roof to find 8 zombies there.')
      var action = window.prompt('Do you \'stay\' and fight? or run \'back\' down to try and reach the safe house?')
      if (action === 'back') {
        window.alert('You decide to run back down to the safe house and the fight begins.')
        fightSafeHouse(odds)
      } else if (action === 'stay' && odds > 8) {
        var choice = window.prompt('Unlucky! 10 more zombies just showed up. You can either try and \'fight\', or save yourself from becoming one of them and \'jump\' off the roof.')
        if (choice === 'jump') {
          window.alert('You have saved yourself from a becoming one of them.')
          gameOver()
        } else {
          window.alert('You try and fight but to no avail, you slowly are overrun and begin to feel yourself turn into one of them.')
          gameOver()
        }
      }
    }
  }
}

function pickWeapon () {
  var confirmWeapon = false
  while (!confirmWeapon) {
    var weapon = window.prompt('You quickly look to your left and notice a \'bat\', a \'gun\', and a \'machette\'. Which one do you pick up?')
    weapon = weapon.trim().toLowerCase()
    var weaponChoice = window.confirm('You have chosen a ' + weapon + '. Are you sure?')
    if (weaponChoice) {
      confirmWeapon = true
    }
  }
  return weapon
}

function pickStoryLine (weapon) {
  if (weapon === 'bat') {
    batStoryLine()
  } else if (weapon === 'gun') {
    gunStoryLine()
  } else if (weapon === 'machette') {
    machetteStoryLine()
  } else {
    window.alert('You did not pick up a weapon.')
    gameOver()
  }
}

function main () {
  window.alert('Oh my goodness! It looks like a zombie apocalypse is beginning to break out!')
  var weapon = pickWeapon()
  pickStoryLine(weapon)
}

main()
