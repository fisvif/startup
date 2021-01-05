let firstSection = document.querySelector(".services");
    popup = document.querySelector("#popup"),
    popupBox = document.querySelector(".popup"),
    SectionGetInTouch = document.querySelector(".get-in-touch"),
    ButtonGoForm = document.querySelector(".get-in-touch-a"),
    oldPosition = 0,
    upScroll = document.querySelector(".up-scroll"),
    quote = document.querySelectorAll(".quote"),
    pointsBox = document.querySelectorAll(".points-box"),
    numberQuote = 0,
    filterWord = document.querySelectorAll(".filter-word");


    popup.onclick = popupOpen;
    ButtonGoForm.onclick= scrollBottom;
    window.onscroll = onScrolling;
    upScroll.onclick = scrollTop;
    popupBox.onclick = popupCloase;
    quoteScroll();


function popupOpen(){// dorobutu
    popupBox.style.width = "100%";
    popupBox.style.height = "100%";
    popupBox.style.zIndex = "5";
    popupBox.innerHTML = `<div class="register">
        <h4>Registration</h4>
        <form>
            <label><input type="text"></input></label>
            <label><input type="text"></input></label>
            <label><input type="text"></input></label>
            <label><input type="submit"></input></label>
        </form>
    </div>`;
}
function popupCloase(){
    popupBox.style.width = "0";
    popupBox.style.height = "0";
    popupBox.style.zIndex = "-1";
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
    numberQuote++;
    setTimeout(()=>{
        quote[numberQuote - 1].style.display = "none";
        quoteScroll();
    },1500)
}
function filter(){
    if(){
        
    }else if(){

    }else if(){

    }else if(){

    }else if(){

    }
}