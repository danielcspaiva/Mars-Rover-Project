// Rover Object Goes Here
// ======================
let rover = { // rover
  direction: 'N',
  x: 0,
  y: 0,
  travelLog: [{x:0, y:0}]
}

let grid = [ // grid with obstacles
  ['r',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ','o',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
  [' ',' ',' ',' ',' ',' ',' ',' ',' ',' '],
];

// ======================
function turnLeft(rover){ // turn left funcion
  switch (rover.direction) {
    case 'N':
      rover.direction = 'W';
      break;
    case 'E':
      rover.direction = 'N';
      break;
    case 'S':
      rover.direction = 'E';
      break;
    case 'W':
      rover.direction = 'S';
      break;
  }
}

function turnRight(rover){ // turn right function
  switch (rover.direction) {
    case 'N':
      rover.direction = 'E';
      break;
    case 'E':
      rover.direction = 'S';
      break;
    case 'S':
      rover.direction = 'W';
      break;
    case 'W':
      rover.direction = 'N';
      break;
  }
}

function boundary(){ // hit the boundary function
  console.log("Rover hit the boundary!");
}

function obstacle(){ // hit the obstacle function
  console.log("Rover hit obstacle!");
}

function moveForward(rover){ // move forward function
  switch (rover.direction) {

    case 'N':
      if (rover.y == 0) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x][rover.y - 1] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.y--; 
        break;
      }

    case 'E':
      if (rover.x == 9) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x + 1][rover.y] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.x++; 
        break;
      }

    case 'S':
      if (rover.y == 9) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x][rover.y + 1] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.y++; 
        break;
      }

    case 'W':
      if (rover.x == 0) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x - 1][rover.y] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.x--; 
        break;
      }
  }

  rover.travelLog.push({x: rover.x, y: rover.y});
}

function moveBackwards(rover){ // move backwards function
  switch (rover.direction) {

    case 'N':
      if (rover.y == 9) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x][rover.y + 1] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.y++; 
        break;
      }

    case 'E':
      if (rover.x == 0) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x - 1][rover.y] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.x--; 
        break;
      }

    case 'S':
      if (rover.y == 0) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x][rover.y - 1] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.y--; 
        break;
      }
      
    case 'W':
      if (rover.x == 9) { //check boundary
        boundary();
        break;
      } else if (grid[rover.x + 1][rover.y] == 'o'){ //check obstacle
        obstacle();
        break;
      } else { //move rover
        rover.x++; 
        break;
      }
  }
  rover.travelLog.push({x: rover.x, y: rover.y});
}

function takeCommands(commands){ // function that reads the commands
  for (let i = 0; i < commands.length; i++){
    if (commands[i] === "r" || commands[i] === "l" || commands[i] === "f" || commands[i] === "b"){
      switch (commands[i]) {
        case "r":
          turnRight(rover);
          break;
        case "l":
          turnLeft(rover);
          break;
        case "f":
          moveForward(rover);
          break;
        case "b":
          moveBackwards(rover);
          break;
      }
    } else {
      console.log(`Command "${commands[i]}" not valid!`);
    }
  }
  console.log(rover);
}


takeCommands("rffrfflfrfrffflffffffffp"); //test commands