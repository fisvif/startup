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
    filterWord = document.querySelectorAll(".filter-word"),
    cardDescription = document.querySelectorAll(".description"),
    cardWork = document.querySelectorAll(".card-work"),
    popupCloaseButtom = document.querySelector(".close-popup");


    popup.onclick = popupOpen;
    ButtonGoForm.onclick= scrollBottom;
    window.onscroll = onScrolling;
    upScroll.onclick = scrollTop;
    popupBox.onclick = popupCloase;
    
    quoteScroll();

function popupOpen(){// dorobutu
    popupBox.style.display = "block";
    popupBox.innerHTML = `<div class="box-popup ">
        <div class="register">
            <span class="close-popup"><span></span><span></span></span>
            <h4>Registration</h4>
            <form>
                <label><input type="text" maxlength="30" placeholder="Your Name"></input></label>
                <label><input type="text" maxlength="30" placeholder="Your E-mail"></input></label>
                <label class="margin-bottom"><input type="text" maxlength="30" placeholder="Your password"></input></label>
                <label class="submit"><input type="submit"></input></label>
            </form>
        </div>
        <div class="bg-popup"></div>
    </div>`;
    popupCloaseButtom.onclick = popupCloase;
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
    numberQuote++;
    setTimeout(()=>{
        quote[numberQuote - 1].style.display = "none";
        quoteScroll();
    },1500)
}

// filterWord.forEach(element => {filter(word)});
filterWord.onclick = filter;
function filter(event){
    event.preventDefault();
    // cardWork.onclick = this.textContent;
    // cardWork.style.display = "inline-block";
}