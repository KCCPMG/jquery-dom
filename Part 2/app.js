$(document).ready(function(){
  let titleInputValid = false;
  let ratingInputValid = false;

  $("#title-input").on("input", function(e){
    if ($("#title-input").val().length>=2) {
      titleInputValid = true;
      $("#title-input").removeClass("bg-danger");
    } else {
      titleInputValid = false;
      $("#title-input").addClass("bg-danger");
    }
  })

  $("#rating-input").on("input", function(e) {
    const score = +($("#rating-input").val())
    if (score >= 1 && score <= 10) {
      ratingInputValid = true;
      $("#rating-input").removeClass("bg-danger");
    } else {
      $("#rating-input").addClass("bg-danger");
      ratingInputValid = false;
    }

  })

  $("#submit-button").on("click", function(e){
    e.preventDefault();

    if (!titleInputValid || !ratingInputValid) {
      alert("Make sure your title is at least 2 characters and your review score is between 1 and 10")
      return;
    };

    titleInputValid = false;
    ratingInputValid = false;

    let newDiv = $('<div class="row">')
      .attr("data-movie-title", $("#title-input").val()) 
      .attr("data-movie-rating", $("#rating-input").val())
      .addClass("movie-list")
      .append(
        $('<div class="col-4">')
        .addClass("movie-title")
        .text(`${$("#title-input").val()}`) 
      )
      .append(
        $('<div class="col-1">')
        .addClass("movie-rating")
        .text(`${$("#rating-input").val()}`)
      )
      .append($('<button class="remove-button col-1">')
        .text("Remove")
        .on("click", function(){
          console.log($(this));
          console.log($(this).parent());
          $(this).parent().remove();
        })
      )

    $('#movie-list').append(newDiv);

    $("#title-input").val("");
    $("#rating-input").val("");
  })

  $("#sort-alphabetically-ascending").on("click", function(){
    let arr = Array.from($("#movie-list").children())
    let sortedElems = arr.sort((a,b) => {
      a = a.dataset.movieTitle;
      b = b.dataset.movieTitle;
      a = a.toUpperCase();
      b = b.toUpperCase();
      if (a>b) return -1;
      else return 1;
    })
    $("#movie-list").children().remove();
    $("#movie-list").append(sortedElems);

    // reattach button listeners
    $('.remove-button').on("click", function(){
      $(this).parent().remove();
    })
  }) 

  $("#sort-alphabetically-descending").on("click", function(){
    let arr = Array.from($("#movie-list").children())
    let sortedElems = arr.sort((a,b) => {
      a = a.dataset.movieTitle;
      b = b.dataset.movieTitle;
      a = a.toUpperCase();
      b = b.toUpperCase();
      if (a<b) return -1;
      else return 1;
    })
    $("#movie-list").children().remove();
    $("#movie-list").append(sortedElems);

    // reattach button listeners
    $('.remove-button').on("click", function(){
      $(this).parent().remove();
    })
  }) 

  $("#sort-rating-ascending").on("click", function(){
    let arr = Array.from($("#movie-list").children())
    let sortedElems = arr.sort((a,b) => {
      a = a.dataset.movieRating;
      b = b.dataset.movieRating;
      a = +a;
      b = +b;
      if (a<b) return -1;
      else return 1;
    })
    $("#movie-list").children().remove();
    $("#movie-list").append(sortedElems);

    // reattach button listeners
    $('.remove-button').on("click", function(){
      $(this).parent().remove();
    })
  })

  $("#sort-rating-descending").on("click", function(){
    let arr = Array.from($("#movie-list").children())
    let sortedElems = arr.sort((a,b) => {
      a = a.dataset.movieRating;
      b = b.dataset.movieRating;
      a = +a;
      b = +b;
      if (a>b) return -1;
      else return 1;
    })
    $("#movie-list").children().remove();
    $("#movie-list").append(sortedElems);

    // reattach button listeners
    $('.remove-button').on("click", function(){
      $(this).parent().remove();
    })
  })

  
})

