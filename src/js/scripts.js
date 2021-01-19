let firstSection = document.querySelector(".services");
    popup = document.querySelectorAll(".popup"),
    popupBox = document.querySelector(".popup-box"),
    SectionGetInTouch = document.querySelector(".get-in-touch"),
    ButtonGoForm = document.querySelector(".get-in-touch-a"),
    oldPosition = 0,
    upScroll = document.querySelector(".up-scroll"),
    quote = document.querySelectorAll(".quote"),
    point = document.querySelectorAll(".point"),
    numberQuote = 0,
    filterWord = document.querySelectorAll(".filter-word"),
    cardWork = document.querySelectorAll(".card-work"),
    popupCloaseButtom = document.querySelectorAll(".close-popup"),
    aboutArrowLeft = document.querySelector(".about-us-arrow-left"),
    aboutArrowRight = document.querySelector(".about-us-arrow-right"),
    menImgBox = document.querySelector(".men-img"),
    man = document.querySelector(".man");
    
    
    ButtonGoForm.onclick= scrollBottom;
    window.onscroll = onScrolling;
    upScroll.onclick = scrollTop;
    aboutArrowLeft.onclick = slidLeft;
    aboutArrowRight.onclick = slidRight;

    popup.forEach(element => {
        element.onclick = popupOpen;
    });
    popupCloaseButtom.forEach(element => {
        element.onclick = popupCloase;
    });
    // popupBox.forEach(element => {
    //     element.onclick = popupCloase;
    // });
    filterWord.forEach(element => {
        element.onclick = filter;
    });    
    quoteScroll();

function popupOpen(event){// dorobutu
    event.preventDefault();
    console.log(this);
    this.nextElementSibling.style.display = "block";
    
}
function popupCloase(){
    popupBox.style.display = "none";
}
function scrollBottom(event){
    event.preventDefault();
    window.scrollTo(0, window.pageYOffset + 25);

    if(window.pageYOffset >= SectionGetInTouch.offsetTop || window.pageYOffset == oldPosition){
        return false;
    }else{
        oldPosition = window.pageYOffset;
        setTimeout(()=>{
            scrollBottom(event);
        },1)
    }
}
function onScrolling(){
    if(window.pageYOffset >= firstSection.offsetTop){
        upScroll.innerHTML = `
            <a class="bg-a-top">
                <svg class='top-arrow' width='12' height='12' viewBox='0 0 22 22'>
                    <polyline points='0 10 10 20 20 10' fill='none' stroke='#c0301c' stroke-width='5' />
            </a>
        `;
    }else{
        upScroll.innerHTML = ``;
    }
}
function scrollTop(){
    window.scrollTo(0, window.pageYOffset - 25);

    if(window.pageYOffset <= 0){
        return false;
    }else{
        setTimeout(()=>{
            scrollTop();
        },1)
    }
}
function quoteScroll(){
    if(numberQuote == quote.length){
        numberQuote = 0;
    }
    quote[numberQuote].style.display = "block";
    point[numberQuote].style.background = "#c0301c";
    numberQuote++;
    setTimeout(()=>{
        quote[numberQuote - 1].style.display = "none";
        point[numberQuote - 1].style.background = "#dddddd";
        quoteScroll();
    },1500)
}
function filter(event){
    event.preventDefault();

    cardWork.forEach(element => {
        if(element.classList.contains(this.textContent) || this.textContent == "All"){
            element.style.display = "inline-block";
        }else{
            element.style.display = "none";
        }

    });
}
function slidLeft(event){
    event.preventDefault();
    console.log(menImgBox.scrollLeft);
    if(0 == menImgBox.scrollLeft){
        menImgBox.scrollLeft += menImgBox.scrollWidth;
    }else{
        menImgBox.scrollLeft -= man.clientWidth;
    }
}
function slidRight(event){
    event.preventDefault();
    if(menImgBox.scrollWidth - menImgBox.scrollLeft == menImgBox.scrollLeft){
        menImgBox.scrollLeft = 0;
    }else{
        menImgBox.scrollLeft += man.clientWidth;
    }
}