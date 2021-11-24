const blocksAway = function(directions) {
  let result = {
    east: 0,
    north: 0
  };
  
  let taxi = {
    direction: "north",
    turnRight: function() {
      switch (taxi.direction) {
      case "north":
        taxi.direction = "east";
        break;
      case "east":
        taxi.direction = "south";
        break;
      case "south":
        taxi.direction = "west";
        break;
      case "west":
        taxi.direction = "north";
        break;
      }
    },
    turnLeft: function() {
      switch (taxi.direction) {
      case "north":
        taxi.direction = "west";
        break;
      case "east":
        taxi.direction = "north";
        break;
      case "south":
        taxi.direction = "east";
        break;
      case "west":
        taxi.direction = "south";
        break;
      }
    }
  };

  if (directions[0] === "right") {
    taxi.direction = "east";
  } else if (directions[0] === "left") {
    taxi.direction = "north";
  }

  for (let i = 1; i < directions.length; i++) {
    if (directions[i] === "right") {
      taxi.turnRight();
    } else if (directions[i] === "left") {
      taxi.turnLeft();
    } else {
      switch (taxi.direction) {
      case "north":
        result.north += directions[i];
        break;
      case "east":
        result.east += directions[i];
        break;
      case "south":
        result.north -= directions[i];
        break;
      case "west":
        result.east -= directions[i];
        break;
      }
    }
  }
  return result;
};

console.log(blocksAway(["right", 2, "left", 3, "left", 1]));
console.log(blocksAway(["left", 1, "right", 1, "left", 1, "right", 1, "left", 1, "right", 1]));
console.log(blocksAway(["left", 3, "right", 1, "right", 3, "right", 1]));