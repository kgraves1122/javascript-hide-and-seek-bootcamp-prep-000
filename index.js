function getFirstSelector(selector) {
  return document.querySelector(selector);
}

function nestedTarget(uniqueID, classN) {
  return document.querySelector(uniqueID).getElementById(classN);
}

function increaseRankBy(n) {
  var lis = document.querySelectorAll("ul .ranked-list li");
  for (var i = 0; i < lis.length; i++) {
    lis.innerHTML[i] = (parseInt(lis.innerHTML[i]) + 1).toString();
  }
}

function deepestChild() {
  var lis = document.getElementById("grand-node");
  var n = lis.length - 1;
  return lis[n];
  
}
