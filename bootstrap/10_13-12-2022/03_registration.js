function form_valid() {
  let fname = document.form1.fname.value;
  if (fname == "") {
    document.getElementById("fmsg").innerHTML = "Enter first name";
    return false;
  } else if (!isNaN(fname)) {
    document.getElementById("fmsg").innerHTML = "Enter alphabets only";
    return false;
  }

  let male = document.form1.gen[0].checked;
  let female = document.form1.gen[1].checked;
  if (male == false && female == false) {
    document.getElementById("gmsg").innerHTML = "Select Gender";
    return false;
  }

  let check1 = document.form1.c1.checked;
  let check2 = document.form1.c2.checked;
  let check3 = document.form1.c3.checked;

  if (check1 == false && check2 == false && check3 == false) {
    document.getElementById("cmsg").innerHTML = "Select Subjects";
    return false;
  }

  let adrs = document.form1.address.value;
  if (adrs == "") {
    document.getElementById("addmsg").innerHTML = "enter address";
    return false;
  } else if (adrs.length > 0 || adrs.length < 100) {
    document.getElementById("addmsg").innerHTML =
      "enter address is not more than 100 characters";
    return false;
  }

  let exp = document.form1.exp.value;
  if (exp == -1) {
    document.getElementById("dropmsg").innerHTML = "select experiance";
    return false;
  }

  let mobile = document.form1.mno.value;
  if (mobile == "") {
    document.getElementById("mo_msg").innerHTML = "Enter mobile no";
    return false;
  } else if (isNaN(mobile)) {
    document.getElementById("mo_msg").innerHTML = "Enter digits only";
    return false;
  } else if (mobile.length < 10) {
    document.getElementById("mo_msg").innerHTML = "enter 10 digits";
    return false;
  }
}
