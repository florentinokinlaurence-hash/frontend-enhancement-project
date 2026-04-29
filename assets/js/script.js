function showAlert() {
  alert("Button clicked!");
}

document.addEventListener("DOMContentLoaded", () => {
  loadComponent("navbar", "components/navbar.html");
  loadComponent("footer", "components/footer.html");
});

function loadComponent(id, file) {
  fetch(file)
    .then(res => {
      if (!res.ok) throw new Error("Component not found");
      return res.text();
    })
    .then(data => {
      document.getElementById(id).innerHTML = data;
    })
    .catch(err => {
      console.error(err);
    });
}
