var randomCustomerPerHour = function() {
  return Math.floor(Math.random() * (this.maxNumberCustomers - this.minNumberCustomers + 1)) + this.minNumberCustomers;
};
var convert24HourTime = function(number){
  if(number === 0 || number === 24) {
    return '12 AM';
  }
  else if (number === 12) {
    return '12 PM';
  }
  else if (number <= 11) {
    return number + ' AM';
  }
  else if (number < 24) {
    return (number - 12) + ' PM';
  }
};

var simulateCookiesPerHour = function () {
  var hours = [];
  for(var i = 0; i < this.hourClosed - this.hourOpen; i++) {
    var customerCount = this.randomCustomerPerHour();
    var time = (i + 6);
    console.log('hours: ' + convert24HourTime(time) + ', cookies: ' + customerCount);
    hours[i] = customerCount * this.aveCookieSale;
    console.log(hours);
    this.cookiesPerHour = hours;
  }
};

function EmptyLocationData(location, streetAddress, minNumberCustomers, maxNumberCustomers,aveCookieSalePerCustomer, hourOpen, hourClosed) {
  this.location = location;
  this.streetAddress = streetAddress;
  this.minNumberCustomers = minNumberCustomers;
  this.maxNumberCustomers = maxNumberCustomers;
  this.aveCookieSalePerCustomer = aveCookieSalePerCustomer;
  this.hourOpen = hourOpen || this.defaultHourOpen;
  this.hourClosed = hourClosed || this.defaultHourClosed;
}

EmptyLocationData.prototype.defaultHourOpen = 6;
EmptyLocationData.prototype.defaultHourClosed = 20;
EmptyLocationData.prototype.simulateCookiesPerHour = simulateCookiesPerHour;
EmptyLocationData.prototype.randomCustomerPerHour = randomCustomerPerHour;

EmptyLocationData.prototype.render = function() {
  console.log(this);
};

//var firstAndPike = new EmptyLocationData('Pickle', '1200 Franklin', 2, 10, 3.33);
//console.log(firstAndPike);

var AllLocationData = [
  new EmptyLocationData('First and Pike', '1800 S First St.', 23, 65, 6.3),
  new EmptyLocationData('SeaTac Airport', '6573 Airport Ave.', 3, 24, 1.2),
  new EmptyLocationData('Seatle Center', '1200 Johnson Ave', 11, 38, 3.7),
  new EmptyLocationData('Capitol Hill', '4489 N. Capitol St.', 20, 38, 2.3),
  new EmptyLocationData('Alki', '3890 Rupet Way', 2, 16, 4.6),
];

AllLocationData[0].simulateCookiesPerHour()
/* Old object data
var firstAndPike = {
  location: 'First and Pike',
  streetAddress: '1800 S First St.',
  hourOpen: 6,
  hourClosed : 20,
  minNumberCustomers: 23,
  maxNumberCustomers: 65,
  aveCookieSale: 6.3,
  simulateCookiesPerHour: simulateCookiesPerHour,
  randomCustomerPerHour: randomCustomerPerHour,
};
var seaTacAirport = {
  location: 'SeaTac Airport',
  streetAddress: '6573 Airport Ave.',
  hourOpen: 6,
  hourClosed: 20,
  minNumberCustomers: 3,
  maxNumberCustomers: 24,
  aveCookieSale: 1.2,
  simulateCookiesPerHour: simulateCookiesPerHour,
  randomCustomerPerHour: randomCustomerPerHour,
};
var seatleCenter = {
  location: 'Seatle Center',
  streetAddress: '1200 Johnson Ave',
  hourOpen: 6,
  hourClosed: 20,
  minNumberCustomers: 11,
  maxNumberCustomers: 38,
  aveCookieSale: 3.7,
  simulateCookiesPerHour: simulateCookiesPerHour,
  randomCustomerPerHour: randomCustomerPerHour,
};
var capitolHill = {
  location: 'Capitol Hill',
  streetAddress: '4489 N. Capitol St.',
  hourOpen: 6,
  hourClosed: 20,
  minNumberCustomers: 20,
  maxNumberCustomers: 38,
  aveCookieSale: 2.3,
  simulateCookiesPerHour: simulateCookiesPerHour,
  randomCustomerPerHour: randomCustomerPerHour,
};
var alki = {
  location: 'Alki',
  streetAddress: '3890 Rupet Way',
  hourOpen: 6,
  hourClosed: 20,
  minNumberCustomers: 2,
  maxNumberCustomers: 16,
  aveCookieSale: 4.6,
  simulateCookiesPerHour: simulateCookiesPerHour,
  randomCustomerPerHour: randomCustomerPerHour,
};

var allLocations = [firstAndPike,seaTacAirport,seatleCenter,capitolHill,alki];
*/
var allLocations = AllLocationData;
