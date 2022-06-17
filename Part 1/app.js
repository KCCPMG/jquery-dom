$(document).ready(function() {
  // When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
  console.log("Let's get ready to party with jQuery!");

  // Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
  $('img').addClass("image-center");

  // Remove the last paragraph in the article.
  $('p:nth-last-of-type(1)').remove()
  
  // Set the font size of the title to be a random pixel size from 0 to 100.
  const randomFontSizeInt = Math.round(100 * Math.random());
  $('h1').css('font-size', randomFontSizeInt);

  // Add an item to the list; it can say whatever you want.
  $('ol').append($('<li>').text("Mind you moose bites can be very nasty"))

  // Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
  $('ol').remove()
  $('aside').append($('<p>').text("The directors of the firm hired to continue the credits after the other people had been sacked, wish it to be known that they have just been sacked. The credits have been completed in an entirely different style at great expense and at the last minute."))


  // When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
  $('input').on('change', function() {
    const in1 = $('.row.mb-5 .col-sm-4:nth-child(1) input').val();
    const in2 = $('.row.mb-5 .col-sm-4:nth-child(2) input').val();
    const in3 = $('.row.mb-5 .col-sm-4:nth-child(3) input').val();

    const derivedColor = `rgb(${in1}, ${in3}, ${in2})`
    
    $('body').css('background-color', derivedColor);
  });

  // Add an event listener so that when you click on the image, it is removed from the DOM.
  $('img').on("click", function() { $(this).remove() })
})

