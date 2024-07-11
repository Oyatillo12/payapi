let elHamburgerBtn = document.querySelector(".hamburger__btn")
let elOuterModel = document.querySelector(".header__modal-outer")
let elInnerModel = document.querySelector(".modal__inner")
let elCloseModel = document.querySelector(".modal__close-btn")




elHamburgerBtn.addEventListener("click", function(){
    elOuterModel.classList.add("show-outer")
    elInnerModel.classList.add("show-inner")
    document.body.classList.add("scrol-hidden")
})


elCloseModel.addEventListener("click", function(){
    elOuterModel.classList.remove("show-outer")
    elInnerModel.classList.remove("show-inner")
    document.body.classList.remove("scrol-hidden")
})


elOuterModel.addEventListener("click", function(evt){
    if(evt.target.id == "modal-outer"){
        elOuterModel.classList.remove("show-outer")
        elInnerModel.classList.remove("show-inner")
        document.body.classList.remove("scrol-hidden")
    }
    
})