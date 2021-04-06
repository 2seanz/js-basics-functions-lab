// Code your solution in this file!
function distanceFromHqInBlocks(blocks) {
   const headquarters = 42
   if (blocks < headquarters) {
       return headquarters - blocks;
   }
   return blocks - headquarters;
}


function distanceFromHqInFeet(pickUp) {
    const block = distanceFromHqInBlocks(pickUp);
    return block * 264;
}
function distanceTravelledInFeet(startingBlock, endingBlock) {
    if (startingBlock < endingBlock) {
        return (endingBlock - startingBlock) * 264;
    }
    return (startingBlock - endingBlock) * 264;
}

// function calculatesFarePrice(start, destination) {
//     const feet = distanceTravelledInFeet(start, destination);
//     if (feet <= 400) {
//         return 0;
//     } else if (feet <= 2000) {
//         return (feet - 400) * 0.02;
//     } else if (feet > 2000 && feet < 2500) {
//         return 25;
//     } else {
//         return "cannot travel that far";
//     }
//     }
    

function calculatesFarePrice(start, destination) {
    const feet = distanceTravelledInFeet(start, destination)
    if (feet < 2000 && feet > 400)
    return 2 * (feet-400)/100
    if (feet >= 0 && feet <= 400)
    return 0
    if (feet >= 2000 && feet < 2500)
    return 25
    if (feet >= 2500)
    return "cannot travel that far"

}