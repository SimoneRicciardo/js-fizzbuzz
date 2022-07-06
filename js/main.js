const containerDom = document.getElementById('container')

for (let i = 1; i <= 100; i++) {
    containerDom.innerHTML += `<div class="box"> ${i} </div>`;

    let box = document.querySelector('.box:last-child')

   if (i % 3 ==0){
     box.classList.add('green');
     box.innerHTML = 'fizz';
   }

   else if (i % 5 ==0){
    box.classList.add('yellow');
    box.innerHTML = 'buzz';
  }

  else if (i %  ==0) {
    box.classList.add('red');
    box.innerHTML = 'fizz';
  }

}