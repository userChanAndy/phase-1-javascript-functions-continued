function saturdayFun (activity = "roller-skate") {
  return `This Saturday, I want to ${activity}`
}

console.log(saturdayFun())

function mondayWork(activity = "work out") {
  return `This Monday, I will ${activity}!`
}

console.log(mondayWork())

function wrapAdjective () {
  return function (string = "special") {
    return `You are ${string}`
  }
}

console.log(wrapAdjective()())














// function saturdayFun(activity="roller-skate") {
//   return `This Saturday, I want to ${activity}!`
// }

// let mondayWork = function(activity="go to the office") {
//   return `This Monday, I will ${activity}.`
// }

// let wrapAdjective = function(style="*") {
//   return function(adjective="special") {
//     return `You are ${style}${adjective}${style}!`
//   }
// }
