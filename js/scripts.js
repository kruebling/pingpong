//Back-End
var nArray = [];

function inputArray(input) {
  for (i = 0; i <= input; i ++)
  if (i <= input) {
    nArray.push(i);
  }
}

function ping(arr) {
  for (i = 0; i <= arr.length; i++)
  if (i % 3 === 0)
  arr[i] = "ping";
}

function pong(arr) {
  for (i = 0; i <= arr.length; i++)
  if (i % 5 === 0)
  arr[i] = "pong";
}

function pingPong(arr) {
  for (i = 0; i <= arr.length; i++)
  if (i % 5 === 0 && i % 3 === 0)
  arr[i] = "ping-pong";
}


//Front-End
$(document).ready(function() {
  $("form#formInput").submit(function(event) {
    event.preventDefault();
      var n = $("input#userInput").val(); {
        if (n == 0) {
          alert("Please Enter a number Larger than 0");
          return;
        }
      }
      inputArray(n);
      ping(nArray);
      pong(nArray);
      pingPong(nArray);

      $listSelector = $("#answer");
      $.each(nArray, function(i, obj) {
        if (i === 0) return;
        $('ul').append($('<li></li>').html(nArray[i]));
    });
    $ ("#formInput").hide(800);
    $ ("#result").show(800);
  });
});
