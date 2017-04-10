// check off specific todo item by clicking (my own)
$("ul").on("click", "li", function() {
  $(this).toggleClass("check-off");
});

// delete todo item by clicking X
$("ul").on("click", "span", function(event) {
  $(this).parent().fadeOut(500, function() {
    $(this).remove();
  });
  event.stopPropagation();
});

// adding new to-do item
$("input[type='text']").keypress(function(event) {
  // if user clicks ENTER key
  if (event.which === 13) {

    // grabbing new todo text from input
    var todoText = $(this).val();

    // create a new li and add to ul
    $("ul").append("<li><span><i class=\"fa fa-trash\"></i></span> " + todoText + "</li>")

    // remove the current text on input
    $(this).val("");

  }

})

// toggle Add New Todo input
$(".fa-plus").on("click", function() {
  $("input[type='text']").slideToggle(250, "swing");
})


// make an li draggable
// $( function() {
//   $( "li" ).draggable();
// } );
