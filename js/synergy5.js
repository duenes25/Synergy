function validateForm() {
  document.querySelector('.status').innerHTML =  ""
  var name =  document.getElementById('name').value;
  if (name == "") {
      document.querySelector('.status').innerHTML = "Name cannot be empty";
      return false;
  }
  var email =  document.getElementById('email').value;
  if (email == "") {
      document.querySelector('.status').innerHTML = "Email cannot be empty";
      return false;
  } else {
      var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
      if(!re.test(email)){
          document.querySelector('.status').innerHTML = "Email format invalid";
          return false;
      }
  }
  var phone =  document.getElementById('phone').value;
  if (phone == "") {
      document.querySelector('.status').innerHTML = "Phone number cannot be empty";
      return false;
  }
  var message =  document.getElementById('message').value;
  if (message == "") {
      document.querySelector('.status').innerHTML = "Message cannot be empty";
      return false;
  }

  document.getElementById('contact-form').submit();
  //$('#contact-form').closest('form').find("input[type=text], textarea").val("");

}

function validateSubscribe() {
    document.querySelector('.substatus').innerHTML =  ""
    var subemail =  document.getElementById('subemail').value;
    if (subemail == "") {
        document.querySelector('.substatus').innerHTML = "Email cannot be empty";
        return false;
    } else {
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(subemail)){
            document.querySelector('.substatus').innerHTML = "Email format invalid";
            return false;
        }
    }
  
    document.getElementById('subscribe-form').submit();
    //$('#contact-form').closest('form').find("input[type=text], textarea").val("");
  
  }