//note: The code is really dirty, would refactor if I have the time. But if not, ¯\_(ツ)_/¯.

function inputOneUpdate() {
  let select = document.getElementById("inp1-convert");
  let option = select.selectedIndex;
  document.getElementById("first-input").innerHTML =
    select.options[option].value;
  return option;
}

function inputTwoUpdate() {
  let select = document.getElementById("inp2-convert");
  let option = select.selectedIndex;
  document.getElementById("second-input").innerHTML =
    select.options[option].value;
  return option;
}

function inputField1(value) {
  let option1 = inputOneUpdate();
  let option2 = inputTwoUpdate();

  if (option1 === 0 && option2 === 0) {
    document.getElementById("input2").value = (value * 0.3937).toFixed(3);
  } else if (option1 === 1 && option2 === 0) {
    document.getElementById("input2").value = (value * 39.37).toFixed(3);
  } else if (option1 === 2 && option2 === 0) {
    document.getElementById("input2").value = (value * 39370).toFixed(3);
  }
  //=====================================================
  else if (option1 === 0 && option2 === 1) {
    document.getElementById("input2").value = (value * 0.010936).toFixed(3);
  } else if (option1 === 1 && option2 === 1) {
    document.getElementById("input2").value = (value * 1.0936).toFixed(3);
  } else if (option1 === 2 && option2 === 1) {
    document.getElementById("input2").value = (value * 1093.6).toFixed(3);
  }
  //=====================================================
  else if (option1 === 0 && option2 === 2) {
    document.getElementById("input2").value = (value * 0.0000062137).toFixed(3);
  } else if (option1 === 1 && option2 === 2) {
    document.getElementById("input2").value = (value * 0.00062137).toFixed(3);
  } else if (option1 === 2 && option2 === 2) {
    document.getElementById("input2").value = (value * 0.62137).toFixed(3);
  }
}
//===================function input 2 ===================================
function inputField2(value) {
  let option1 = inputOneUpdate();
  let option2 = inputTwoUpdate();

  if (option1 === 0 && option2 === 0) {
    document.getElementById("input1").value = (value / 0.3937).toFixed(3);
  } else if (option1 === 0 && option2 === 1) {
    document.getElementById("input1").value = (value / 0.010936).toFixed(3);
  } else if (option1 === 0 && option2 === 2) {
    document.getElementById("input1").value = (value / 0.0000062137).toFixed(2);
  }
  //=====================================================
  else if (option1 === 1 && option2 === 0) {
    document.getElementById("input1").value = (value / 39.37).toFixed(3);
  } else if (option1 === 1 && option2 === 1) {
    document.getElementById("input1").value = (value / 1.0936).toFixed(3);
  } else if (option1 === 1 && option2 === 2) {
    document.getElementById("input1").value = (value / 0.00062137).toFixed(3);
  }
  //=====================================================
  else if (option1 === 2 && option2 === 0) {
    document.getElementById("input1").value = (value / 39370).toFixed(3);
  } else if (option1 === 2 && option2 === 1) {
    document.getElementById("input1").value = (value / 1093.6).toFixed(3);
  } else if (option1 === 2 && option2 === 2) {
    document.getElementById("input1").value = (value / 0.62137).toFixed(3);
  }
  console.log(value);
}
