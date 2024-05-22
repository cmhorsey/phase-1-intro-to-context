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
 console.log(object)
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

// function hoursWorkedOnDate(object, date) {
//   let timeInDate = object.timeInEvents[0].date
//   let timeOutDate = object.timeOutEvents[0].date
//   let timeInHour = object.timeInEvents[0].hour
//   let timeOutHour = object.timeOutEvents[0].hour
//   let hoursWorked

//   if(timeInDate && timeOutDate === date){
//     hoursWorked = timeOutHour - timeInHour
//   } 
//   return hoursWorked / 100
// }

function hoursWorkedOnDate(employee, date) {
  let inEvent = employee.timeInEvents.find(item => item.date === date)
  let outEvent = employee.timeOutEvents.find(item => item.date === date)
  return (outEvent.hour - inEvent.hour) / 100
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

// cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 1000])
// updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
// updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// wagesEarnedOnDate(cRecord, "0044-03-15")
// call hrsworked function
// grab employee wage
//return hrs * employee wage

//CREATE allWagesFor function
// Argument(s)
// An employee record Object
// Returns
// Pay owed for all dates
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number. HINT: You will need to find the available dates somehow...

function allWagesFor(object) {
  let datesWorked = object.timeInEvents.map(event => event.date)
  // console.log(datesWorked)

  let totalWages = datesWorked.reduce((total, date) => {
    // console.log(total)

    return total + wagesEarnedOnDate(object, date)
  }, 0)
  // console.log(totalWages)
  return totalWages
}


cRecord = createEmployeeRecord(["Julius", "Caesar", "General", 27])
// Earns 324
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-14 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-14 2100")
// Earns 54
updatedBpRecord = createTimeInEvent(cRecord, "0044-03-15 0900")
updatedBpRecord = createTimeOutEvent(cRecord, "0044-03-15 1100")
// 324 + 54
allWagesFor(cRecord)


//CREATE calculatePayroll function
// Argument(s)
// Array of employee records
// Returns
// Sum of pay owed to all employees for all dates, as a number
// Behavior
// Using wagesEarnedOnDate, accumulate the value of all dates worked by the employee in the record used as context. Amount should be returned as a number.


// function calculatePayroll(array) {
//   let total = array.reduce()
//   return total
// }


// calculatePayroll()


const csvDataEmployees = [
  ["Thor", "Odinsson", "Electrical Engineer", 45],
  ["Loki", "Laufeysson-Odinsson", "HR Representative", 35],
  ["Natalia", "Romanov", "CEO", 150],
  ["Darcey", "Lewis", "Intern", 15],
  ["Jarvis", "Stark", "CIO", 125],
  ["Anthony", "Stark", "Angel Investor", 300]
]

const csvTimesIn = [
  ["Thor", ["2018-01-01 0800", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Loki", ["2018-01-01 0700", "2018-01-02 0700", "2018-01-03 0600"]],
  ["Natalia", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1300"]],
  ["Darcey", ["2018-01-01 0700", "2018-01-02 0800", "2018-01-03 0800"]],
  ["Jarvis", ["2018-01-01 0500", "2018-01-02 0500", "2018-01-03 0500"]],
  ["Anthony", ["2018-01-01 1400", "2018-01-02 1400", "2018-01-03 1400"]]
]

const csvTimesOut = [
  ["Thor", ["2018-01-01 1600", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Loki", ["2018-01-01 1700", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Natalia", ["2018-01-01 2300", "2018-01-02 2300", "2018-01-03 2300"]],
  ["Darcey", ["2018-01-01 1300", "2018-01-02 1300", "2018-01-03 1300"]],
  ["Jarvis", ["2018-01-01 1800", "2018-01-02 1800", "2018-01-03 1800"]],
  ["Anthony", ["2018-01-01 1600", "2018-01-02 1600", "2018-01-03 1600"]]
]
// const calculatePayroll = (employeeRecords) => {
//   const allWagesOwed = employeeRecords.map(record => allWagesFor(record))
//   return allWagesOwed.reduce((acc, amount) => acc + amount)
// }

function calculatePayroll(employeeRecords) {
  const allWagesOwed = employeeRecords.map(record => allWagesFor(record))
  return allWagesOwed.reduce((acc, amount) => acc + amount)
}
