for(var i = 0; i < allLocations.length; i++){
  var currentLocation = allLocations[i];

  currentLocation.simulateCustomersPerHour();
  console.log(currentLocation);

// Create a header for each of the restaraunt locations.
  var newH3 = document.createElement('h3'); // createElement: creates a h3 parent node stored in var newH3
  newH3.textContent = currentLocation.locationName;//textContent: takes the .location of each location stored in the Array named currentLocation.
  document.body.appendChild(newH3);//appendChild takes .location and adds it as an h3 element, which is the child element of body.

  //want to create a list for each location
  var newList = document.createElement('ul');
  document.body.appendChild(newList);

//If we copy the model above could we take simulatecustomersPerHour, use a for loop and store the lists of cookies per hour as an array called customersPerHourPerLocation.
  for(var j = 0; j < currentLocation.customersPerHour.length; j++){
    var customerCount = currentLocation.customersPerHour[j];
    var time = convert24HourTime(j + 6);
    var timeAndCookies = ('Time: ' + (time) + ', Cookies Sold: ' + customerCount.toFixed(0));
  // then we could append the stored arrays and insert them under the h3 element Create a unorderd list of the time followed by the number of cookies sold.
    var cookiesPerHour = document.createElement('li');
    cookiesPerHour.textContent = timeAndCookies;
    document.body.appendChild(cookiesPerHour);
  };

  //At the bottom of the list, sum the array to find the total number of cookies sold that day.
  var totalListItem = document.createElement('li');
  newList.appendChild(totalListItem);
  totalListItem.textContent = 'total';
}
//// tinkering with sum array function posted in slack. I think I want it to sum the varriable customerCount on line 20.
/*    var testArray = customerCount;

function sumArray(testArray){
  var calculatedSum = 0;
  for(var i = 0; i < testArray.length; i++) {
    var valueFromArray = testArray[i];

    calculatedSum = sum(valueFromArray, calculatedSum)[0];
  }

  return [
    calculatedSum,
    testArray + ' was passed in as an array of numbers, and ' + calculatedSum + ' is their sum.'
  ];
}

// Here is the test for sumArray(); uncomment it to run it

testSumArray(testArray);
customerCount);
};
*/

// selecting all element id's
var elLocName, elAddress, elMinC, elMaxC, elAverage;
elLocName = document.getElementById('locName');
elAddress = document.getElementById('address');
elMinC = document.getElementById('minC');
elMaxC = document.getElementById('maxC');
elAverage = document.getElementById('average');

//function to check there are no blank form fields
function checkLocName(event){
  if (elLocName = false) {
    elLocName.innerHTML = 'Location Name cannot be blank';
    event.preventDefault();
  }
}

//function to create new location object
function createNewLocationData(){

}
//
var clickedSubmit = document.getElementById('submit');
clickedSubmit.addEventListener('blur', createNewLocationData, false);
