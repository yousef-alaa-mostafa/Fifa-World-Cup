cart = [];

let sandwich1_data = { name: "RASTAFARI CHICKEN", price: "70" };
let sandwich2_data = { name: "QUARTER BACK", price: "80" };
let sandwich3_data = { name: "OLD SCHOOL", price: "60" };

let sandwich1_quantity = 0;
let sandwich2_quantity = 0;
let sandwich3_quantity = 0;
let sandwich4_quantity = 0;

let total_amount = 0;

function sand1() {
  sandwich1_quantity++;
  console.log(sandwich1_quantity);
  alert("Item add successfuly");
}

function sand2() {
  sandwich2_quantity++;
  console.log(sandwich2_quantity);
  alert("Item add successfuly");
}

function sand3() {
  sandwich3_quantity++;
  console.log(sandwich3_quantity);
  alert("Item add successfuly");
}

function sand4() {
  sandwich4_quantity++;
  console.log(sandwich4_quantity);
  alert("Item add successfuly");
}

function printCheque() {
  document.getElementById("cheque").style.display = "block";

  if (
    sandwich1_quantity === 0 &&
    sandwich2_quantity === 0 &&
    sandwich3_quantity === 0 &&
    sandwich4_quantity === 0
  ) {
    alert("no item was selecetd");
  } else {
    if (sandwich1_quantity === 0) {
      document.getElementById("s1").style.display = "none";
    } else {
      document.getElementById("s1").style.display = "flex";
      document.getElementById("sand_1_qty").innerHTML = sandwich1_quantity;
    }

    if (sandwich2_quantity === 0) {
      document.getElementById("s2").style.display = "none";
    } else {
      document.getElementById("s2").style.display = "flex";
      document.getElementById("sand_2_qty").innerHTML = sandwich2_quantity;
    }

    if (sandwich3_quantity === 0) {
      document.getElementById("s3").style.display = "none";
    } else {
      document.getElementById("s3").style.display = "flex";
      document.getElementById("sand_3_qty").innerHTML = sandwich3_quantity;
    }

    if (sandwich4_quantity === 0) {
      document.getElementById("s4").style.display = "none";
    } else {
      document.getElementById("s4").style.display = "flex";
      document.getElementById("sand_4_qty").innerHTML = sandwich4_quantity;
    }
    total_amount =
      sandwich1_quantity * 12000 +
      sandwich2_quantity * 11000 +
      sandwich3_quantity * 8000 +
      sandwich4_quantity * 7000;
    document.getElementById("total_amount").innerHTML = total_amount;
  }
}

function deleteSelection() {
  if (
    sandwich1_quantity === 0 &&
    sandwich2_quantity === 0 &&
    sandwich3_quantity === 0 &&
    sandwich4_quantity === 0
  ) {
    alert("no item was selecetd");
  } else {
    sandwich1_quantity = 0;
    sandwich2_quantity = 0;
    sandwich3_quantity = 0;
    sandwich4_quantity = 0;
    alert(" item was deleted successfully");
  }
}

function confirmHandler() {
  document.getElementById("cheque").style.display = "none";
  sandwich1_quantity = 0;
  sandwich2_quantity = 0;
  sandwich3_quantity = 0;
  alert("order confirmed");
}
