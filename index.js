// Your code here

// dataEmployees = [
//   ["Thor", "Odinsson", "Electrical Engineer", 45],
//   ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
//   ["Natalia", "Romanov", "CEO", 150],
//   ["Darcey", "Lewis", "Intern", 15],
//   ["Jarvis", "Stark", "CIO", 125],
//   ["Anthony", "Stark", "Angel Investor", 300],
//   ["Byron", "Poodle", "Mascot", 3],
//   ["Julius", "Caesar", "General", 27],
//   ["Rafiki", "", "Aide", 10],
//   ["Simba", "", "King", 100]
// ]

// let twoRows = [
//   ["moe", "sizlak", "barkeep", 2],
//   ["bartholomew", "simpson", "scamp", 3]
// ]

// let testEmployee = ["Gray", "Worm", "Security", 1] ;

function createEmployeeRecord(array) {
  let employeeObj = {
    firstName: array[0],
    familyName: array[1],
    title: array[2],
    payPerHour: array[3],
    timeInEvents: [],
    timeOutEvents: []
  };
  return employeeObj;
}

function createEmployeeRecords(array) {
  return array.map(createEmployeeRecord)
}


//Create time in record
//Takes employee obj
//Takes timestamp
//Split on ' '
//Assign string[0] to ${date}
//Assign string[1] to ${time}
//Employee.timeInEvents = Date and Time
//Returns the employee record 

let bpRecord = createEmployeeRecord(["Byron", "Poodle", "Mascot", 3])

function createTimeInEvent(object, datestamp) {
  let timeInfo = datestamp.split(' ')
  let date = timeInfo[0]
  let hour = parseInt(timeInfo[1], 10)

  let timeEvent = {
    type: 'TimeIn',
    date: date,
    hour: hour
  }
  
 object.timeInEvents.push(timeEvent)
//  console.log(object)
 return object
}

createTimeInEvent(bpRecord, "2014-02-28 1400")

function createTimeOutEvent(object, datestamp) {
  let timeInfo = datestamp.split(' ')
  let date = timeInfo[0]
  let hour = parseInt(timeInfo[1], 10)

  let timeEvent = {
    type: 'TimeOut',
    date: date,
    hour: hour
  }
  
 object.timeOutEvents.push(timeEvent)
 return object
}

//NEXT CREATE hoursWorkedOnDate function

// hoursWorkedOnDate
//     Argument(s)
//         An employee record Object
//         A date of the form "YYYY-MM-DD"
//     Returns
//         Hours worked, an Integer
//     Behavior
//         Given a date, find the number of hours elapsed between that date's timeInEvent and timeOutEvent

function hoursWorkedOnDate(object, date) {
  let timeInDate = object.timeInEvents[0].date
  let timeOutDate = object.timeOutEvents[0].date
  let timeInHour = object.timeInEvents[0].hour
  let timeOutHour = object.timeOutEvents[0].hour
  let hoursWorked

  if(timeInDate && timeOutDate === date){
    hoursWorked = timeOutHour - timeInHour
  } 
  return hoursWorked / 100
}



//Take object
//Check if object.timeIn && timeOut are === date
//If true let house =  object.timeOut.hour - object.timeIn.hour

//CREATE wagesEarnedOnDate function
// Argument(s)
// An employee record Object
// A date of the form "YYYY-MM-DD"
// Returns
// Pay owed
// Behavior
// Using hoursWorkedOnDate, multiply the hours by the record's payRate to determine amount owed. Amount should be returned as a number.

function wagesEarnedOnDate(object, date) {
  let hours = hoursWorkedOnDate(object, date)
  let wage = object.payPerHour
  let totalEarned = hours * wage

  return totalEarned
}

cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
wagesEarnedOnDate(cRecord, "0044-03-15")

// call hrsworked function
// grab employee wage
//return hrs * employee wage
