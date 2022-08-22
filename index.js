// Code your solution in this file!
//const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']
function returnFirstTwoDrivers(drivers) {
    return drivers.slice(0, 2)
}
function returnLastTwoDrivers(drivers) {
    return drivers.slice(2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
const createFareMultiplier = function(num) {
    return function(val) {
        return val * num
    }
} 

const fareDoubler = function(num) {
    return num * 2
}
const fareTripler = function(num) {
    return num * 3
}

const selectDifferentDrivers = function(drivers, callback) {
    return callback(drivers)
}