function validation() {
  // when we used input type text
  /* let fname = document.form1.fname.value;
  if (fname == "" || fname == null) {
    alert("enter first Name");
    // focus function used for give a focus after some error in element.
    document.form1.fname.focus();
    return false;
    // isNan() function - is not a number
    // which is check a number
  } else if (!isNaN(fname)) {
    alert("enter alphabet");
    // return false;
  }

  // input type radio
  // in gen[0] 0 is a index number of male
  // in gen[1] 1 is a index number of female
  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;

  if (male == false && female == false) {
    alert("select a gender");
    return false;
  }

  // input type checkbox
  let check1 = document.form1.c1.checked;
  let check2 = document.form1.c2.checked;
  let check3 = document.form1.c3.checked;

  if (check1 == false && check2 == false && check3 == false) {
    alert("select hobbies");
    return false;
  }

  // for select-option
  let city = document.form1.city.value;
  if (city == -1) {
    alert("select a city");
    return false;
  }

  // password and confirm password
  let pass = document.form1.pass.value;
  let cpass = document.form1.cpass.value;

  if (pass == "") {
    alert("Enter Password");
    return false;
  }
  // find password regular expression from net. -> type -> password regular expression - stackoverflow.com
  else if (
    "^(?=.*[a-z])(?=.*[A-Z])(?=.*d)(?=.*[@$!%*?&])[A-Za-zd@$!%*?&]{8,}$"
  ) {
    alert(
      "Minimum eight characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    );
    return false;
  }

  // check password and confirm password
  if (pass != cpass) {
    alert("password and confirm password does not match");
    return false;
  }

  let mail = document.form1.email.value;
  if (mail == "") {
    alert("enter email");
    return false;
  }
  // regular expression copy from net -> w3resource.com
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
    return true;
  } else {
    alert("You have entered an invalid email address!");
    return false;
  }
*/
  // mobile no
  let mno = document.form1.mobileNo.value;
  if (mno == "") {
    alert("enter a mobile no");
    return false;
  } else if (isNaN(mno)) {
    alert("enter digits");
    return false;
  } else if (mno.length < 10) {
    alert("enter 10 digits");
    return false;
  } else if (mno.length > 10) {
    alert("enter 10 digits");
    return false;
  }
}
