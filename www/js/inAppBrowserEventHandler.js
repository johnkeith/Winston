document.onclick = function (e) {
  e = e || window.event;
  var element = e.target || e.srcElement;
  	console.log(element);

  if (element.className == 'item-source-link ng-binding') {
    window.open(element.getAttribute('href'), "_blank", "location=yes");
    return false; 
  }
};