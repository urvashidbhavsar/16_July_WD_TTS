function validation() {
  let nm = document.form1.u_name.value;
  if (nm == "") {
    // document.getElementById("u_name").innerHTML = "Enter name";
    // document.form1.u_name.focus();
    document.getElementById("uname").innerHTML =
      "<style>#uname{border-color:red;}</style>";
    return false;
  }

  let pass = document.form1.pwd.value;
  if (pass == "") {
    document.getElementById("pwd").innerHTML =
      "<style>#pwd{border-color:red;}</style>";
    return false;
  }

  let cpass = document.form1.cpass.value;
  if (cpass != pass) {
    document.getElementById("c_pass").innerHTML =
      "Confirm password does not match";
    return false;
  }
}
