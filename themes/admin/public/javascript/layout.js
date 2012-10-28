$(function() {
  
  $.datepicker.setDefaults( $.datepicker.regional[ "es" ] );
  // Accordion
  $("#accordion").accordion({ header: "h3" });
  // Tabs
  $('.tabs').tabs();
  // Dialog      
  $('#dialog').dialog({
    autoOpen: false,
    width: 600
  });
  // Dialog Link
  $('#dialog_link').click(function(){
    $('#dialog').dialog('open');
    return false;
  });
  // Dialog From Settings
  $('#dialogForm').dialog({
    autoOpen: false,
    width: 500,
    modal: true,
    resizable: false,
    buttons: {
      "Cancelar": function() {
        $(this).dialog("close");
      }, 
      "Guardar": function() {
        $(this).dialog("close"); 
      } 
    }
  });
  //Dialog Form Link
  $('#dialog_form').click(function(){
    $('#dialogForm').dialog('open');
    return false;
  });
  // Datepicker
  $('#datepicker').datepicker({
    inline: true
  });
  // Slider
  $('#slider').slider({
    range: true,
    values: [17, 67]
  });
  // Progressbar
  $("#progressbar").progressbar({
    value: 20 
  });
});