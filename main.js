/*
MAD9014 assignment 1 Data Process
Author Jasper Jiaqian Sun
Created Date Oct 17, 2021
*/

const data = require("./data.json");

const people = {
  personInfo: data.info,
  updateFunction: function (arr, oldProp, newProp) {
    const newArray = arr.map((object) => {
      object[newProp] = object[oldProp];
      delete object[oldProp];
      return object;
    });
    return newArray;
  },

  sortFunction: function (arr, prop) {
    const arrayCopy = Array.from(arr);
    arrayCopy.sort((prop1, prop2) => {
      if (prop1[prop] > prop2[prop]) return 1;
      else if (prop1[prop] < prop2[prop]) return -1;
      return 0;
    });
    return arrayCopy;
  },
};

// test function 1 - update the array
console.log(people.updateFunction(people.personInfo, "flavour", "colour"));
console.log(people.updateFunction(people.personInfo, "id", "rank"));

// test function 2 - sort the array
console.log(people.sortFunction(people.personInfo, "name"));
console.log(people.sortFunction(people.personInfo, "age"));
