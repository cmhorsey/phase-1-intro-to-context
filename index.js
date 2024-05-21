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
  let hour = timeInfo[1]
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





// function createEmployeeRecords(array) {
//     return array.map(element => {
//       let employeeObj = {
      //   firstName: element[0],
      //   familyName: element[1],
      //   title: element[2],
      //   payPerHour: element[3],
      //   timeInEvents: [],
      //   timeOutEvents: []
      // };
//       return employeeObj;
//     });
//   }

  // array.map(() => {
    // array.forEach(element => {
    //   firstName = element[0]
    //   familyName = element[1]
    //   title = element[2]
    //   payPerHour = element[3]


    // });
    // const firstName = array[0][0]
    // // const familyName = array[1]
    // console.log(firstName)
  // })



// createEmployeeRecord(dataEmployees)

/*Returns
    JavaScript Object with keys: {
    firstName:
    familyName:
    title:
    payPerHour:
    timeInEvents:
    timeOutEvents:
  }
*/

//Initialize empty object
//Iterate through each array
//Map each element into correspoding Obj Key
//
