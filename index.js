function add() {
    let x = document.getElementById("btn-add");
    if (x.className === "wallet-add-icon") {
      x.className += " disc";
      document.getElementById('modal').style.display = "block"
    } else {
      x.className = "wallet-add-icon";
      document.getElementById('modal').style.display = "none"
    }
  }