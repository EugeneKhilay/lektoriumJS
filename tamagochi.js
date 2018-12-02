/**
 * Exercise 3: Tamagotchi
 */
function tamagotchi(name) {
  let stats = {
    health: 100,
    happiness: 100,
    food: 100,
    water: 100,
    sleep: 100,
    toilet: 100
  }

  let alive = true;

  function life() {

    if ( alive ) {

      if (stats.happiness <= 0) {
        stats.food -= 10;
        stats.sleep -= 10;
      }

      if (stats.food <= 0) {
        stats.health -= 10;
        stats.happiness -= 10;
      } else if (stats.food >= 150 || stats.food < 0) {
        alive = false;
        alert(name + ' has died, cuz of overfeed :(');
      }

      if (stats.water <= 0) {
        stats.health -= 10;
        stats.happiness -= 10;
      } else if (stats.water >= 150 || stats.water < 0) {
        alive = false;
        alert(name + ' has died, cuz of overdrink :(');
      }

      if (stats.sleep <= 0) {
        stats.health -= 10;
        stats.happiness -= 10;
      }

      if (stats.toilet <= 0) {
        stats.health -= 10;
        stats.happiness -= 10;
      } else if (stats.toilet >= 150 || stats.toilet < 0) {
        alive = false;
        alert(name + ' has died, cuz of diarrhea :(');
      }

      if (stats.health <= 0 || !alive ) {
        alive = false
        alert(name + ' has died, cuz of low health :(');
      }

      console.log(stats);

    }
  }

  function time () {
    stats.food -= 10;
    stats.water -= 10;
    stats.health -= 35;
    stats.happiness -= 50;
    stats.toilet -= 15;
    stats.sleep -= 10;

    life();

    setTimeout(function () {
      time()
    }, 20000);
  }

  time();

  this.drink = function () {
    stats.water += 50;
    stats.health += 10;
    stats.toilet -= 10;
    stats.happiness += 5;
    life();
  }

  this.eat = function () {
    stats.food += 50;
    stats.health += 20;
    stats.happiness += 5;
    stats.water -= 5;
    stats.toilet -= 10;
    stats.sleep -= 10;
    life();
  }

  this.play = function () {
    stats.happiness += 50;
    stats.toilet += 5;
    stats.health -= 5;
    stats.food -= 20;
    stats.sleep -= 20;
    stats.water -= 20;
    life();
  }

  this.sleep = function () {
    stats.sleep += 50;
    stats.health += 20;
    stats.happiness += 10;
    stats.food -= 20;
    stats.water -= 20;
    stats.toilet -= 20;
    life();
  }

  this.poop = function () {
    stats.toilet += 50;
    stats.happiness += 20;
    stats.food -= 10;
    stats.water -= 5;
    life();
  }

  this.pill = function () {
    stats.health += 50;
    stats.water -= 20;
    stats.food -= 20;
    stats.happiness -= 20;
    stats.sleep -= 20;
    life();
  }
}