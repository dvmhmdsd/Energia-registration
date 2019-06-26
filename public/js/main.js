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

// catch the errors of validation
let error = 1;

// select the form
let regForm = document.querySelector("#regForm");

regForm.addEventListener("submit", function(e) {
  let sub_form = {};
  //   validate the fields
  formFields.forEach(field => {
    validate(field);
    
    if (field.getAttribute('type') !== 'submit') {
      // convert the form value from array into object
      sub_form[field.name] = field.value;

      // reset the form
      field.value = '';
      field.classList.remove('valid');
      field.classList.remove('invalid');
    }
  });

  if (error > 0) {
    // prevent the submition if there's errors
    e.preventDefault();
    formFields.forEach(field => {
      validate(field);
    });
  } else {
    // send te data otherwise
    e.preventDefault();
    
    // the modal
    let modal = document.querySelector('#val-modal');
    // the content of the modal
    let modalContent = modal.querySelector('.modal-content');
    // hide when clicking any where except the modal
    window.onclick = function (e) {
      if (e.target == modal) {
        modal.style.display = 'none';
      }
    }
    // show the modal
    modal.style.display = 'block';

    // send data
    fetch("/register", {
      method: "post",
      headers: {
        Accept: "application/json, text/plain, */*",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sub_form)
    }).then((res) => {
      // show success message
      modalContent.innerHTML = '<p>Data have been sent, we will contact you soon.</p>'
    }).catch(err => {
      modalContent.innerHTML = '<p>An error occured, please try again.</p>'
    })
  }
});

function validate(field) {
  if (field.value.length > 0) {
    field.classList.add("valid");
    field.classList.remove("invalid");

    if (error > 0) {
      error -= 1;
    }
  } else {
    field.classList.add("invalid");
    field.classList.remove("valid");

    error += 1;
  }
}
