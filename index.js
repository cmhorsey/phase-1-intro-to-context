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
 return object
}

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

function hoursWorkedOnDate(employee, date) {
  let inEvent = employee.timeInEvents.find(item => item.date === date)
  let outEvent = employee.timeOutEvents.find(item => item.date === date)
  return (outEvent.hour - inEvent.hour) / 100
}

function wagesEarnedOnDate(object, date) {
  let hours = hoursWorkedOnDate(object, date)
  let wage = object.payPerHour
  let totalEarned = hours * wage

  return totalEarned
}

function allWagesFor(object) {
  let datesWorked = object.timeInEvents.map(event => event.date)
  let totalWages = datesWorked.reduce((total, date) => {
    return total + wagesEarnedOnDate(object, date)
  }, 0)
  return totalWages
}

function calculatePayroll(employeeRecords) {
  const allWagesOwed = employeeRecords.map(record => allWagesFor(record))
  return allWagesOwed.reduce((acc, amount) => acc + amount)
}
