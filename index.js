let toggleSwitch = document.getElementById("toggle-switch");
let priceElementBasic = document.querySelector(".basic");
let priceElementProfessional = document.querySelector(".professional");
let priceElementMaster = document.querySelector(".master");
let toggleState = false;
//toggle handler 
function handleToggle() {
    if (toggleState) {
        priceElementBasic.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>199.99";
        priceElementProfessional.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>249.99";
        priceElementMaster.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>399.99";
    }
    else {
        priceElementBasic.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>19.99";
        priceElementProfessional.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>24.99";
        priceElementMaster.innerHTML = "<span class=\"dollar-symbol\">&dollar;</span>34.99";
    }
    toggleState = !toggleState;
}
toggleSwitch.addEventListener("change", handleToggle);
