var nArray = [];

function split(input) {
  for (i = 0; i <= input; i ++)
    if (i <= input) {
      nArray.push(i);
    }
}

//Front-End
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();

      var n = $("input#userInput").val();
      split(n);
      alert(nArray);
  });
});
