var number = document.querySelector('.number');
number.addEventListener('keypress', function(e) {
  var key = e.which;
  if((key < 48 || key > 57)) {
    e.preventDefault();
  }
});