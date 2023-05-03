let increment = 0

let show = document.querySelector('.show');
let cuerpo = document.querySelector('.container');

document.addEventListener('click',(e)=>{

    if(e.target.matches('#btn1')){

        increment--;
        show.innerHTML = increment;
        cuerpo.style.backgroundColor= `rgba(234,${245 + increment+20},237,0.9)`;
        document.getElementById("img").src='./'
    }


})
