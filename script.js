//магия свайпера
const swiper = new Swiper('.swiper', {
    
  direction: 'horizontal',
  loop: true,
  
    pagination: {
      el: '.swiper-pagination',
    }
});
// кнопка показать больше
const buttonMore = document.querySelector(".more");

// меняем размер блока добавлением классов
let resizeWrapper = function(){

  if (buttonMore.textContent == "Показать всё") {
    document.querySelector(".content__wrapper").classList.add("openMore");
    buttonMore.classList.add("more--up");
    buttonMore.textContent = "Скрыть";

  } else {
    document.querySelector(".content__wrapper").classList.remove("openMore");
    buttonMore.classList.remove("more--up");
    buttonMore.textContent = "Показать всё";

  }
};
// обработчик
buttonMore.addEventListener("click", resizeWrapper);

