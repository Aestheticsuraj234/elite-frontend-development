let body = document.querySelector('body');
let toggleButton = document.querySelector('.btn');


let isDarkMode = false;




toggleButton.addEventListener("click" , function(){
  if(isDarkMode)
  {
    body.classList.add("bg-light");
    body.classList.remove("bg-dark");
    toggleButton.textContent = 'Light Mode';
    isDarkMode = false;
}
else{
    body.classList.add("bg-dark");
    body.classList.remove("bg-light");
    toggleButton.textContent = 'dark Mode';
    isDarkMode = true;
  }
})

