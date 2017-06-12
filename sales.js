for(var i = 0; i < allLocations.length; i++){
  var currentLocation = allLocations[i];
  console.log(currentLocation);

  var newH3 = document.createElement('h3');
  newH3.textContent = currentLocation.location;
  document.body.appendChild(newH3);

  // 
};
