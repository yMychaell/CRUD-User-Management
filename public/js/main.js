$('#add-user').submit(event => {

  event.preventDefault();

  const formData = $('#add-user').serializeArray();

  const userData = {}

  $.map(formData, field => {

    userData[field['name']] = field['value']

  })

  const request = {
    "url": "http://localhost:4000/api/users",
    "method": "POST",
    "data": userData
  }

  $.ajax(request).done(() => {

    alert("User created successfully!")
    success: window.location.href = "/"

  }).fail(err => console.log(err))

})

$('#update-user').submit(event => {

  event.preventDefault();

  const formData = $('#update-user').serializeArray();

  const userData = {};

  $.map(formData, field => {

    userData[field['name']] = field['value'];

  });

  const request = {
    "url": `http://localhost:4000/api/users/${userData.id}`,
    "method": "PATCH",
    "data": userData
  }

  $.ajax(request).done(() => {
    alert("User updated successfully");
    window.location.href = "/"
  }).fail(err => console.log(err))

})

if (window.location.pathname === "/") {

  const btnDelete = $('.table tbody td a.delete');

  btnDelete.click(() => {

    const id = btnDelete.attr('data-id')

    if (confirm("Are you sure to delete this user?")) {

      const request = {
        "url": `http://localhost:4000/api/users/${id}`,
        "method": "DELETE"
      }

      $.ajax(request).done(() => {
        alert("User removed successfully!")
        location.reload()
      }).fail(err => console.log(err))

    }

  })

}
