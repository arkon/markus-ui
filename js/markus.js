$(document).ready(function() {
  // Sortable lists
  $('.sortable ul').sortable();

  // Modal dialog example
  $('.example-dialog').easyModal();
  $('#open-modal').click(function() {
    $('.example-dialog').trigger('openModal');
  });

  // Tab pane
  $('#tabs').tabs();
});
