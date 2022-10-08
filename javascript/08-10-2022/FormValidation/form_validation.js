function validation() {
  let fname = document.form1.fname.value;
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
}
