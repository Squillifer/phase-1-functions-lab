// Code your solution in this file!
function distanceFromHqInBlocks(street){
    if (street >= 42)
        return street - 42
    else
        return 42 - street
}
function distanceFromHqInFeet(street){
    return distanceFromHqInBlocks(street) * 264
}
function distanceTravelledInFeet(start, destination){
    return (Math.max(start, destination) - Math.min(start, destination))*264
}
function calculatesFarePrice(start, destination) {
    if (distanceTravelledInFeet(start, destination) <= 400)
        return 0
    else if (distanceTravelledInFeet(start, destination) > 400 && distanceTravelledInFeet(start, destination) <= 2000)
        return (distanceTravelledInFeet(start, destination) - 400) * .02
    else if (distanceTravelledInFeet(start, destination) > 2000 && distanceTravelledInFeet(start, destination) <= 2500)
        return 25
    else
        return 'cannot travel that far'
}
