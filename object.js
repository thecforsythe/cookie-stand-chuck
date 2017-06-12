var randomCustomerPerHour = function() {
  return Math.floor(Math.random() * (this.maxNumberCustomers - this.minNumberCustomers + 1)) + this.minNumberCustomers;
};

var simulateCookiesPerHour = function () {
  var hours = [];
  for(var i = 0; i < this.hourClosed - this.hourOpen; i++) {
    var customerCount = this.randomCustomerPerHour();
    var time = (i + 6);
    console.log('hours: ' + time + ', cookies: ' + customerCount);
    hours[i] = customerCount * this.aveCookieSale;
    console.log(hours);
    this.cookiesPerHour = hours;
  }
};

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
};var alki = {
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
