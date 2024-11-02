$('#btnSubmit').click(function() {
  $.ajax({
    type: 'GET',
    url: 'https://api.myjson.com/bins/1bsew',
    dataType: 'json',
    success: function(maindata) {
      if(maindata){
        var size = maindata.length;
        var txt = "";
        if(size > 0){
          for(var i = 0; i < size; i++){
            if($('#user').val() == maindata[i].user && $('#pass').val() == maindata[i].password){
              txt += $('#user-logged').append(maindata[i].name)+$('#data_username').append(maindata[i].user)+$('#data_password').append(maindata[i].password)+$('#data_name').append(maindata[i].name)+$('#data_email').append(maindata[i].email)+$('#data_phone').append(maindata[i].phone);
            }
          }
            if(txt != ""){
              $('.container-users').removeClass('hidden');
              $('.container').addClass('hidden');
            }
          }
        }
      },
      error: function(jqXHR, DataStatus, errorThrown){
        $('#user').val('');
        $('#pass').val('');
        alert('Error: ' + DataStatus + ': ' + errorThrown);
      }
  });
  // Adding new directions with prompt
  $('#btnAddNew').click(function() {
    var address = prompt('Ingresa la dirección.', '');
    console.log("test");
    $('<option>').text(address).prependTo('#set-address');
  });
  // Select some address, and delete it
  $('#btnDelete').click(function() {
    $('#set-address option:selected').remove();
  });
  return false;
});