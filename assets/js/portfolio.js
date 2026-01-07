const arrowRight = document.querySelector('.portfolio-box .navigation .arrow-right');
const arrowLeft = document.querySelector('.portfolio-box .navigation .arrow-left');

let index = 0;

const acitvePortfolio = ()  => {
    const imgSlide = document.querySelector('.portforile-carousel .img-slide');
    const portfolioDetails = document.querySelectorAll('.portfolio-detail');

    imgSlide.style.transform = `translateX(calc(${index * -100}% - ${index * 2}rem))`;

    portfolioDetails.forEach(detail => {
        detail.classList.remove('active');
    });
    portfolioDetails[index].classList.add('active');
}

arrowRight.addEventListener("click", () => {
    if(index < 3) {
        index++;
        arrowLeft.classList.remove('disabled');
    }
    else {
        index = 4;
        arrowRight.classList.add('disabled');
    }
    acitvePortfolio();
});

arrowLeft.addEventListener("click", () => {
    if(index > 1) {
        index--;
        arrowRight.classList.remove('disabled');
    }
    else {
        index = 0;
        arrowLeft.classList.add('disabled');
    }
    acitvePortfolio();
});