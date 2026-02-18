let isModalOpen = false;
let contrastOption = false;
const scaleFactor = 1 / 20;


function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape")
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for( let i = 0; i < shapes.length; ++i){
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`
    }

}


function toggleContrast() {
    contrastOption = !contrastOption;
    if(contrastOption){
        document.body.classList += " dark-theme"
    }
    else{
        document.body.classList.remove("dark-theme")
    }

}



function contact(event) {
  event.preventDefault();
     const loading = document.querySelector(".modal__overlay--loading");
     const success = document.querySelector(".modal__overlay--success");
     loading.classList += " modal__overlay--visible";

    emailjs
    .sendForm(
        'service_o3iilgy', 
        'template_t30dt22',
    event.target, 
         'WGmuT8nNsu7wyEhLO'
        ).then(() => {
        //   throw new Error("error");
          loading.classList.remove("modal__overlay--visible");
          success.classList += " modal__overlay--visible";
        }).catch(() => {
          loading.classList.remove("modal__overlay--visible");
          alert(
            "This email service is temporarily unavailble. Please contact me directly on piousgodfearing@gmail.com "
         );

        })
}
 
 

function toggleModal() { // Toggke modal
    if (isModalOpen){
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";
}




