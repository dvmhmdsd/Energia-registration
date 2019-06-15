// validate the form
// get the form inputs
let formFields = document.querySelectorAll(
  ".form-card input, .form-card select, .form-card textarea"
);

// validate
formFields.forEach(field => {
  field.addEventListener("blur", function() {
    validate(this);
  });
});

// select the form
let error = 1;
let form = document.getElementById("regForm");

form.addEventListener("submit", function(e) {
  //   validate the fields
  formFields.forEach(field => {
    validate(field);
  });

  if (error > 0) {
    // prevent the submition if there's errors
    e.preventDefault();
  } else {
    // send te data otherwise
  }
});

function validate(field) {
  if (field.value.length > 0) {
    field.classList.add("valid");
    field.classList.remove("invalid");

    error -= 1;
    return true;
  } else {
    field.classList.add("invalid");
    field.classList.remove("valid");

    error += 1;
    return false;
  }
}
