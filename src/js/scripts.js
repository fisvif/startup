let firstSection = document.querySelector(".services");
    popup = document.querySelectorAll(".popup"),
    popupBox = document.querySelector(".popup"),
    SectionGetInTouch = document.querySelector(".get-in-touch"),
    ButtonGoForm = document.querySelector(".get-in-touch-a"),
    oldPosition = 0,
    upScroll = document.querySelector(".up-scroll"),
    quote = document.querySelectorAll(".quote"),
    point = document.querySelectorAll(".point"),
    numberQuote = 0,
    filterWord = document.querySelectorAll(".filter-word"),
    cardWork = document.querySelectorAll(".card-work"),
    popupCloaseButtom = document.querySelector(".close-popup");

    popup.forEach(element => {
        element.onclick = popupOpen;
    });
    ButtonGoForm.onclick= scrollBottom;
    window.onscroll = onScrolling;
    upScroll.onclick = scrollTop;
    popupBox.onclick = popupCloase;
    
    quoteScroll();

function popupOpen(){// dorobutu
    popupBox.style.display = "block";
    // popupCloaseButtom.onclick = popupCloase;
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
filterWord.forEach(element => {
    element.onclick = filter;
});
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