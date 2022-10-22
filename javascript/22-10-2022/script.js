function validation() {
  // let nm = document.form1.u_name.value;
  // if (nm == "") {
  //   // document.getElementById("u_name").innerHTML = "Enter name";
  //   // document.form1.u_name.focus();
  //   document.getElementById("uname").innerHTML =
  //     "<style>#uname{border-color:red;}</style>";
  //   return false;
  // }

  // let pass = document.form1.pwd.value;
  // if (pass == "") {
  //   document.getElementById("pwd").innerHTML =
  //     "<style>#pwd{border-color:red;}</style>";
  //   return false;
  // }

  // let cpass = document.form1.cpass.value;
  // if (cpass != pass) {
  //   document.getElementById("c_pass").innerHTML =
  //     "Confirm password does not match";
  //   return false;
  // }

  // let male = document.form1.gen[0].checked;
  // let female = document.form1.gen[1].checked;
  // if (male == false && female == false) {
  //   document.getElementById("gen_msg").innerHTML = "Select Gender";
  //   return false;
  // }

  // let c1 = document.form1.c1.checked;
  // let c2 = document.form1.c2.checked;
  // if (c1 == false && c2 == false) {
  //   document.getElementById("check_msg").innerHTML = "Select Qualification";
  //   return false;
  // }

  // let city = document.form1.city.value;
  // if (city == -1) {
  //   document.getElementById("city_msg").innerHTML = "Select city";
  //   return false;
  // }

  let mno = document.form1.mno.value;
  if (mno == "") {
    document.getElementById("mno_msg").innerHTML = "enter mobile no";
    return false;
  } else if (isNaN(mno)) {
    document.getElementById("mno_msg").innerHTML =
      "Do not allowed alphabet, enter digits";
    return false;
  } else if (mno.length < 10) {
    document.getElementById("mno_msg").innerHTML =
      "Enter 10 digits, enter proper number";
    return false;
  } else if (mno.length > 10) {
    document.getElementById("mno_msg").innerHTML =
      "mobile no is not more than 10 digit";
    return false;
  }
}
