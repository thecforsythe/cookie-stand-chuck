for(var i = 0; i < allLocations.length; i++){
  var currentLocation = allLocations[i];
  console.log(currentLocation);

// Create a header for each of the restaraunt locations.
  var newH3 = document.createElement('h3'); // createElement: creates a h3 parent node stored in var newH3
  newH3.textContent = currentLocation.location;//textContent: takes the .location of each location stored in the Array named currentLocation.
  document.body.appendChild(newH3);//appendChild takes .location and adds it as an h3 element, which is the child element of body.

//If we copy the model above could we take simulateCookiesPerHour, use a for loop and store the lists of cookies per hours as an array called cookiesPerHourPerLocation.
  for(var j = 0; j < allLocations.length; i++){
//want to create a list for each location
    var cookiesPerHourPerLocation = simulateCookiesPerHour[j];
    console.log(cookiesPerLocation);

  // then we could append the stored arrays and insert them under the h3 element Create a unorderd list of the time followed by the number of cookies sold.
    var newList = document.createElement('ul');
    newList.textContent = cookiesPerHourPerLocation.simulateCookiesPerHour;
    document.h3.appendChild(newList);

  //So doesn't work................I feel very lost

//At the bottom of the list, sum the array to find the total number of cookies sold that day.
  };
};
