// Code your solution in this file!
/*distanceFromHqInBlocks(someValue)*/
function distanceFromHqInBlocks(someValue) {
  const hq = 42;
  return Math.abs(someValue - hq);
}

/*distanceFromHqInFeet(someValue)*/
function distanceFromHqInFeet(someValue) {
  return distanceFromHqInBlocks(someValue) * 264;
}

/*distanceTravelledInFeet(start, destination)*/
function distanceTravelledInFeet(start, destination) {
  return Math.abs(destination - start) * 264;
}

/*calculatesFarePrice(start, destination)*/
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0;
  } else if (distance <= 2000) {
    return (distance - 400) * 0.02;
  } else if (distance <= 2500) {
    return 25;
  } else {
    return 'cannot travel that far';
  }
}
