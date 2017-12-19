var imageNumber = 0;

$('img').hide();
$('img').eq(imageNumber).show();

$('#next').on('click', function() {

  if (imageNumber < 5) {
    imageNumber++;
  } else {
    imageNumber = 0;
  }

  console.log(imageNumber);

  $('img').hide();
  $('img').eq(imageNumber).fadeIn(300);

});

$('#previous').on('click', function() {
  if (imageNumber > 0) {
    imageNumber -= 1;
  } else {
    imageNumber = 5;
  }

  console.log(imageNumber);

  $('img').hide();
  $('img').eq(imageNumber).fadeIn(300);
});
