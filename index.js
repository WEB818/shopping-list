//in the input form, users enter text and hit return or add. when they submit, event.currentTarget (submit button) adds the text to the list
//toggle back and forth with check button 
//delete with delete button
'use strict';
$(function () {
  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const newItemToBuy = $('#shopping-list-entry').val();
    console.log(newItemToBuy);

    $('ul').append(`<li>
    <span class="shopping-item">${newItemToBuy}</span>
    <div class="shopping-item-controls">
      <button class="shopping-item-toggle">
        <span class="button-label">check</span>
      </button>
      <button class="shopping-item-delete">
        <span class="button-label">delete</span>
      </button>
    </div>
    </li>`);
  });

    

  $('.shopping-item-delete').click(event => {
    event.preventDefault()
    console.log('delete button clicked');
        
    const deleter = $(event.currentTarget).closest('li').attr('id','delete-me');
       
    const itemNotNeeded = $('#delete-me').remove();
  });

     
        

  $('.shopping-item').on('click', '.shopping-item-toggle', event => {
    event.preventDefault();
    console.log('check button clicked');
            
    const checkOff = $(event.currentTarget).closest('li').attr('class','check-me');//.toggleClass('shopping-item__checked');
    const checkComplete = $('.check-me').toggleClass('shopping-item__checked');
  });

});
        
    
     