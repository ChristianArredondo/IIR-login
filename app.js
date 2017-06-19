
// Bind Login button to modal
$(document).on('click','#loginButton', function(){
      $('#loginModal').modal('show');
  });

// Set initial email and password test values:
var emailTest = false;
var passwordTest = false;
console.log('email test = ' + emailTest);
console.log('password test = ' + passwordTest);

$('form').submit(function() {
  var emailTest = false;
  var passwordTest = false;
  // Check for email
  var email = $('#email').val();
    if(email === "") {
    $("p.email-error").text("Please enter your email.");
    }
    else {
      emailTest = true;
      $("p.email-error").text("");
    };
  
  // Check for password
  var password = $('#password').val();
    var pattern = new RegExp()
    if(password === "") {
      $("p.password-error").text("Please enter your password.");
    }
     else if(password.length<8) {
      $("p.password-error").text("Your password should be at least 8 characters.");
    }
    else {
      passwordTest = true;
      $("p.password-error").text("");
    };

  // Console log updated email and password  
  console.log('email test = ' + emailTest);
  console.log('password test = ' + passwordTest);
  
  // Pseudo-authentication
  var redirect = function() {
    $("p.success").text("Redirecting...");
  };

  var success = function() {
    $(".loading-container").toggle();
    $("p.success").text("Success!");
    setTimeout(redirect,1000);
    setTimeout(function(){
      $('#content').load('dashboard.html')}, 100);
    $('#loginModal').modal('hide');
  };

  if (emailTest && passwordTest) {
    console.log('WOOHOO! Successful login.');
    $(".loading-container").toggle();
    setTimeout(success, 2500);
  };

  return false;
});

// Load dashboard upon successful login
  





