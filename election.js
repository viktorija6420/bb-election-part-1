document.addEventListener("DOMContentLoaded", function() {

  $.ajax({
    url: 'https://bb-election-api.herokuapp.com/',
    method: 'GET',
    dataType: 'JSON'
  }).done(function(responseData){
    var c = responseData.candidates;
    for (var i=0; i<c.length; i++) {
     var ul = document.querySelector('ul');
     var list = document.createElement('li');
     list.innerText = 'Name '+ c[i].name + ',' + 'votes ' + c[i].votes;
     ul.appendChild(list);
}});


});
