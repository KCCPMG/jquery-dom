jQuery DOM Practice
===================

Part One
--------

In this exercise, you’ll write some jQuery statements to perform some DOM manipulation

[Download code](../jquery-dom.zip)

Complete the following steps in the following file:
---------------------------------------------------

index.html
```
<!DOCTYPE html>
<html lang\="en"\>
<head\>
  <meta charset\="UTF-8"\>
  <title\>Document</title\>
  <link rel\="stylesheet"
        href\="https://unpkg.com/bootstrap/dist/css/bootstrap.css"\>
  <style\>
    img {
      max-width: 70%;
    }
    .image-center {
      display: block;
      margin: 10px auto;
    }
  </style\>
</head\>
<body\>
<div class\="container"\>
  <h1 id\="title" class\="text-center"\>Welcome to my website.</h1\>
  <div class\="row"\>
    <article class\="col-sm-8"\>
      <p\>My website is very important because I have many important things
        to say. Here is a picture of a puppy in a cup: </p\>
      <img src\="pup-in-cup.jpg" alt\="Puppy in Cup"\>
      <p\>Here are some more thoughts: Lorem ipsum dolor sit amet,
        consectetur adipisicing elit. Cum harum labore veritatis, possimus
        facilis quas repellat, explicabo, ad commodi ipsum quidem nostrum
        earum pariatur fugit! Magni sunt nulla impedit! Facilis.</p\>
      <p\>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eius, natus
        qui nostrum libero atque hic distinctio sint facilis nihil possimus
        tenetur deserunt rerum laboriosam cum quisuam doloremque ducimus
        error.</p\>
      <p\>Rerum debitis aspernatur, ipsum animi! Quis ullam dolore blanditiis
        accusantium eius minus tempore, iure maxime similique vel! Possimus
        reprehenderit autem, recusandae quos laudantium nesciunt libero suscipit
        officia rerum, et.</p\>
      <p\>Aliquam harum at soluta id esse perspiciatis, nesciunt corporis nostrum
        commodi, dolorum, repellat possimus a cumque. Id sed explicabo, quaerat
        sit esse facere, voluptatem, odit nesciunt eveniet assumenda, error!</p\>
      <p\>Consequuntur porro, nobis placeat, labore magni aliquam repellendus
        consequatur hic facere, molestiae dolorum suscipit quos sint, minima
        Quibusdam voluptatem est hic, corporis. Officiis delectus, consectetur
        harum reiciendis perferendis.</p\>
    </article\>
    <aside class\="col-sm-4"\>
      <h4\>I love lists. Here's why.</h4\>
      <ol\>
        <li\>Sometimes they're numbered, and numbers are great.</li\>
        <li\>Sometimes they're not, and that's okay too.</li\>
        <li\>I don't have the attention span to read paragraphs.</li\>
        <li\>Hey look, there's a puppy!</li\>
      </ol\>
    </aside\>
  </div\>
  <div class\="row mb-5"\>
    <div class\="col-sm-4"\>
      Red
      <input class\="form-control" type\="number" min\="0" max\="255" value\="255"\>
    </div\>
    <div class\="col-sm-4"\>
      Blue
      <input class\="form-control" type\="number" min\="0" max\="255" value\="255"\>
    </div\>
    <div class\="col-sm-4"\>
      Green
      <input class\="form-control" type\="number" min\="0" max\="255" value\="255"\>
    </div\>
  </div\>
</div\>
<script src\="https://code.jquery.com/jquery-3.3.1.js"\></script\>
<script\>
  // Add your code here!
</script\>
</body\>

</html\>
```
1.  When the DOM is ready, console.log the message “Let’s get ready to party with jQuery!”
2.  Give all images inside of an article tag the class of image-center (this class is defined inside of the style tag in the head).
3.  Remove the last paragraph in the article.
4.  Set the font size of the title to be a random pixel size from 0 to 100.
5.  Add an item to the list; it can say whatever you want.
6.  Scratch that; the list is silly. Empty the aside and put a paragraph in it apologizing for the list’s existence.
7.  When you change the numbers in the three inputs on the bottom, the background color of the body should change to match whatever the three values in the inputs are.
8.  Add an event listener so that when you click on the image, it is removed from the DOM.

Part Two - Movies App!
----------------------

Build an application that uses jQuery to do the following:

> *   Contains a form with two inputs for a title and rating along with a button to submit the form.
> *   When the form is submitted, capture the values for each of the inputs and append them to the DOM along with a button to remove each title and rating from the DOM.
> *   When the button to remove is clicked, remove each title and rating from the DOM.

Further Study
-------------

*   Ensure that the rating of a movie can only be between 0 and 10.
*   Ensure that a title has at least 2 characters in it.
*   Allow users to sort alphabetically by the title of the movie or by the rating of the movie from lowest to highest and vice versa.

Solution
--------

[View our solutions](solution/index.html)