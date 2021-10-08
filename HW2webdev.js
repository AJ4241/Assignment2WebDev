//Name: Aida Jevric

Array.prototype.myEach = function() {
};

Array.prototype.myMap = function() {
};

Array.prototype.myFilter = function() {
};

Array.prototype.mySome = function() {
};

Array.prototype.myEvery = function() {
};

Array.prototype.myReduce = function() {
};

Array.prototype.myIncludes = function(elements, checkElement) {
  for (let x= 0; x < elements.length; x++) {
    if (elements[x] == checkElement) {
      return true;
    }
  }
  return false;
};

Array.prototype.myIndexOf = function() {
};

Array.prototype.myPush = function(elements, elementToAdd) {
  let newArray = [elementToAdd];
  let modifiedElements = elements.concat(newArray);
  return modifiedElements;
};

Array.prototype.myLastIndexOf = function() {
};

Object.grabKeys = function() {
};

Object.grabValues = function() {
};



