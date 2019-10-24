//in the input form, users enter text and hit return or add. when they submit, event.currentTarget (submit button) adds the text to the list
//toggle back and forth with check button 
//delete with delete button
'use strict';
$(function () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const newItemToBuy = $(event.currentTarget).append('.shopping-list');
    //$('shopping-list').append('<li></li>')
   
    // 
    // .toggleClass()
    // $('listed item to check off').closest("li").delete
    
  });
});