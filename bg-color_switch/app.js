
function hitme(){
    var element = document.body;
    element.classList.toggle("dark");
    var y = document.querySelector('.btn');
    y.classList.toggle('btn2');
    if(y.innerHTML === 'dark'){
        y.innerHTML = 'light';
    }else{
        y.innerHTML = 'dark';
    }
    var z = document.querySelector('.canvas h1');
    z.classList.toggle('header');
}