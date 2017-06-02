//HIGHLIGHT FULLNAME INPUT FIELD
$('#fullname').click(function(){
  $('#fullname').css('background-color', 'pink');
  $('#quest').css('background-color', 'white');
  $('#email').css('background-color','white');
});


//HIGHLIGHT EMAIL INPUT FIELD
$('#email').click(function(){
  $('#fullname').css('background-color', 'white');
  $('#email').css('background-color', 'pink');
  $('#quest').css('background-color','white');
});

//HIGHLIGHT QUEST INPUT FIELD
$('#quest').click(function(){
  $('#fullname').css('background-color', 'white');
  $('#email').css('background-color', 'white');
  $('#quest').css('background-color','pink');
});

//HIGHLIGHT #imgrobo1, #imgrobo2, #imgrobo3 with mouse events
$('#imgrobo1, #imgrobo2, #imgrobo3').hover(function(){
  $(this).css('background-color', 'lightblue');
}, function(){
  $(this).css('background-color', 'initial');
});

// HIGHLIGHT Hardware labels with mouse events
$('#i3, #i4, #i7, #8, #16, #vrh, #3ds, #ss').hover(function(){
  $(this).css('background-color', 'lightblue');
}, function(){
  $(this).css('background-color', 'initial');
});

//SEARCH FILTER
$('#search').keyup(function(){
  var val = $(this).val().toLowerCase();
  $('.name').hide();
  $('.name').each(function(){
    var text = $(this).text().toLowerCase();
    if (text.indexOf(val) != -1){
      $(this).show();

    }
  });
});









// $('#btn').click(function(){
//   for (var i=0;i<document.forms.length;i++) {
//     var form = document.forms[i];
//     form.addEventListener('submit', function(e){
//       e.preventDefault();
//       var results = '';
//       // loop through all checkboxes to see if checked
//       var checkboxes = form.querySelectorAll("input[type='checkbox']");
//        for(var k = 0; k < checkboxes.length; k++) {
//          results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
//        }
//       // loop through all radio butotns to display value
//       var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
//       for(var m = 0; m < radiobuttons.length; m++) {
//         results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
//       }
//       //Log results to Console
//       console.log(results);
// });


// $('#fullname').mouseenter(){
//
//
// })





// function submitButton(){
// for (var i=0;i<document.forms.length;i++) {
//   var form = document.forms[i];
//   form.addEventListener('submit', function(e){
//     e.preventDefault();
//     var results = '';
//    // loop through all checkboxes to see if checked
//    var checkboxes = form.querySelectorAll("input[type='checkbox']");
//    for(var k = 0; k < checkboxes.length; k++) {
//      results += checkboxes[k].id + '=' + checkboxes[k].checked + '\n';
//    }
//    // loop through all radio butotns to display value
//    var radiobuttons = form.querySelectorAll("input[type='radio']:checked");
//    for(var m = 0; m < radiobuttons.length; m++) {
//      results += radiobuttons[m].name + '=' + radiobuttons[m].value + '\n';
//    }
//    // alert results
//    alert(results);
//  });
// }
// }





// <script
// src="https://code.jquery.com/jquery-3.2.1.js"
// integrity="sha256-DZAnKJ/6XZ9si04Hgrsxu/8s717jcIzLy3oi35EouyE="
// crossorigin="anonymous"></script>
// <script type="text/javascript" src="script.js"></script>
