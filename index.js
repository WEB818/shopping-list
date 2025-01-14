'use strict';
$(function () {

  $('#js-shopping-list-form').submit(event => {
    event.preventDefault();

    const newItemToBuy = $('#shopping-list-entry').val();

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
    
  $('.shopping-list').on('click', '.shopping-item-delete', event => {
    
    $(event.currentTarget).closest('li').attr('id','delete-me');
       
    $('#delete-me').remove();
  });
     
  $('.shopping-list').on('click', '.shopping-item-toggle', event => {
         
    $(event.currentTarget).closest('li').toggleClass('shopping-item__checked');
  });
});
        
    
     