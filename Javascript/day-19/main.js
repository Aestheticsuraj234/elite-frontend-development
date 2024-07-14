const Button = document.querySelector('button');


// Better!
// Button.onclick = function(){
//     const body = document.querySelector('body');
//     body.style.backgroundColor = 'black';
//     alert('Background color changed to black')
// }


// Optimized approach

Button.addEventListener("click",(e)=>{
    console.log(e)
},false)