window.onload = () => {
  const key = document.querySelectorAll('.key');
  
  //Input when click
  key.forEach(Input);
  
  //Clear
  key[0].onclick = Clear;
  
  //Delete
  key[1].onclick = Delete;
  
  //Calculate the input
  key[19].onclick = Calc;
}

//When click
function Input (item, index) {
  if (index != 0 && index != 1 && index != 19)
  item.onclick = () => {
    document.querySelector('#input').innerText += item.innerText;
  }
}

//Clear
function Clear () {
  document.querySelector('#input').innerText = '';
  document.querySelector('#result').innerText = '';
}

//Delete
function Delete () {
  let input = document.querySelector('#input').innerText;
  input = input.substring(0, input.length - 1);
  document.querySelector('#input').innerText = input;
  document.querySelector('#result').innerText = '';
}

//Calculate
function Calc () {
  let input = document.querySelector('#input').innerText;
  let result = document.querySelector('#result');
  input = input.replace(/x/g, '*');
  input = input.replace(/%/g, '/100 ');
  if (input == '') return;
  try {
    result.innerHTML = Number(eval(input).toPrecision(10));
  } catch(err) {
    result.innerText = 'Lỗi cú pháp';
  }
}