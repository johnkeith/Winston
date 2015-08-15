document.onclick = function (e) {
  e = e || window.event;
  var element = e.target || e.srcElement;
  	console.log(element);

  if (element.className == 'item-content activated' && element.getAttribute('ng-href') != null) {
    window.open(element.getAttribute('ng-href'), "_blank", "location=yes");
    return false; 
  } else if (element.className == 'item-source-link ng-binding' && element.getAttribute('href') != null) {
  	window.open(element.getAttribute('href'), "_blank", "location=yes");
  	return false;
  }
};