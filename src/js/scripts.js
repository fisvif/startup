let firstSection = document.querySelector(".services");
    popup = document.querySelector("#popup"),
    popupBox = document.querySelector(".popup"),
    SectionGetInTouch = document.querySelector(".get-in-touch"),
    ButtonGoForm = document.querySelector(".get-in-touch-a"),
    oldPosition = 0,
    upScroll = document.querySelector(".up-scroll"),
    quotesBox = document.querySelector(".quotes-box"),
    pointsBox = document.querySelectorAll(".points-box"),
    numberQuote = 0;


    popup.onclick = popupOpen;
    ButtonGoForm.onclick= scrollBottom;
    window.onscroll = onScrolling;
    upScroll.onclick = scrollTop;
    quote();


function popupOpen(){// dorobutu
    popupBox.innerHTML = `<div class="ssss">Loading</div>`;
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
function quote(){// dorobutu
    if(numberQuote == quotes.length){
        numberQuote = 0;
    }
    for(let i = 1; i < quotes.length; i++){
        pointsBox.innerHTML = `<span></span>`;
    }
    numberQuote++;
    setTimeout(()=>{
        quote();
    },1000)
}