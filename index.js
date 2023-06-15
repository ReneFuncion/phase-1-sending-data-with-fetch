// Add your code here
function submitData(name, email) {
  let data = {
    name: name,
    email: email,
  };

  return fetch("http://localhost:3000/users", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      let messageDiv = document.getElementById("message");
      let newText = document.createTextNode(`New User ID: ${data.id}`);
      messageDiv.appendChild(newText);
    })
    .catch((error) => {
      let messageDiv = document.getElementById("message");
      let newText = document.createTextNode(
        `An error occurred: ${error.message}`
      );
      messageDiv.appendChild(newText);
    });
}
