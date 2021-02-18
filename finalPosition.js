const moves = ['north', 'north', 'west', 'west', 'north', 'east', 'north']


const finalPosition = function (moves) {
  let x = 0;
  let y = 0;



  for ( let xAxis = 0; xAxis < 7; xAxis++) {

    let arrayPositionKey = xAxis;

    let currentMove = moves[arrayPositionKey];

    if (currentMove == 'north') {
      x = x + 1
    }

    if (currentMove == 'south') {
      x = x - 1
    }
  }



  for (let yAxis = 0; yAxis < 7; yAxis++) {

    let arrayPositionKey = yAxis;

    let currentMove = moves[arrayPositionKey];

    if (currentMove == 'east') {
      y = y + 1
    }

    if (currentMove == 'west') {
      y = y - 1
    }
  }
  return [y, x];
}

console.log(finalPosition(moves));


