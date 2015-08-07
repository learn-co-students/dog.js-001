'use strict';

function Dog(name,age){
  // assign the name and age properties here
  this.name=name;
  this.age=age;
}

Dog.prototype.ageInYears = function() {
  return this.age
};

Dog.prototype.ageInDays = function() {
  return this.age*365
};

Dog.prototype.ageInDogYears = function() {
  return this.age/7
};
