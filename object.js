var firstAndPike = {
  hourOpen: 6,
  hourClosed: 20,
  minNumberCustomers: 23,
  maxNumberCustomers: 65,
  aveCookieSale: 6.3,
  randomCustomerPerHour: function() {
    return Math.floor(Math.random() * (this.maxNumberCustomers - this.minNumberCustomers + 1)) + this.minNumberCustomers;
  },
  simulateCookiesPerHour: function() {
    var hours = [];
    for(var i = 0; i < this.hourClosed - this.hourOpen; i++) {
      var customerCount = this.randomCustomerPerHour();
      var time = (i + 6);
      console.log('hours: ' + time + ', cookies: ' + customerCount);
      hours[i] = customerCount * this.aveCookieSale;
      console.log(hours);
      this.cookiesPerHour = hours;
    }
  },
};
firstAndPike.simulateCookiesPerHour();

var seaTacAirport = {
  minNumberCustomers: 3,
  maxNumberCustomers: 24,
  aveCookieSale: 1.2,
};
var seatleCenter = {
  minNumberCustomers: 11,
  maxNumberCustomers: 38,
  aveCookieSale: 3.7,
};
var capitolHill = {
  minNumberCustomers: 20,
  maxNumberCustomers: 38,
  aveCookieSale: 2.3,
};var Alki = {
  minNumberCustomers: 2,
  maxNumberCustomers: 16,
  aveCookieSale: 4.6,
};
