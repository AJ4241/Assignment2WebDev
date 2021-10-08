//Name: Aida Jevric

Array.prototype.myEach = function(elements, callBackFun) {
  for (let x = 0; x < elements.length; x++) {
    callBackFun(elements[x]);
  }
};

Array.prototype.myMap = function(elements, callBackFun) {
  let newArr = [];
  for (let x = 0; x < elements.length; x++) {
    newArr += callBackFun(elements[x]);
  }
  return newArr;
};

Array.prototype.myFilter = function(elements, callBackFun) {
  let newArr = [];
  for (let x = 0; x < elements.length; x++) {
    if (callBackfun(elements[x]) == true) {
      newArr += elements[x];
    }
  }
  return newArr;
};

Array.prototype.mySome = function(elements, callBackFun) {
  let check = false;
  for (let x = 0; x<elements.length; x++) {
    if (callbackFun(elements[x]) == true) {
      return true;
    }
  }
  return check;
};

Array.prototype.myEvery = function(elements, callBackFun) {
  let check = true;
  for (let x = 0; x < elements.length; x++) {
    if (callBackFun(elements[x]) == false) {
      return false;
    }
  }
  return check;
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

Array.prototype.myIndexOf = function(elements, targetElement) {
  for (let x = 0; x < elements.length; x++) {
    if (elements[x] == targetElement) {
      return x;
    }
  }
  return -1;
};

Array.prototype.myPush = function(elements, elementToAdd) {
  let newArray = [elementToAdd];
  let modifiedElements = elements.concat(newArray);
  return modifiedElements;
};

Array.prototype.myLastIndexOf = function(elements, targetElement) {
  let numIndex = -1;
  for (let x=0; x<elements.length; x++) {
    if (elements[x] == targetElement) {
      numIndex = x;
    }
  }
  return numIndex;
};

Object.grabKeys = function(_object_) {
  let listOfKeys = [];
  for (let _key_ in _object_) {
    listOfKeys += _key_;
  }
  return listOfKeys;
};

Object.grabValues = function(objo) {
  let listOfValues = [];
  for (let ind in objo) {
    listOfValues += objo[ind];
  }
  return listOfValues;
};



