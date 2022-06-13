
$("#google_login_url").on('click',function(){
    $.ajax({ url: '/google_embed_js',
    type: 'POST',
    dataType: 'script',
    data: {none: "none"},
    beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
    success: function(response) {
      console.log("done");
    }
  });

});
