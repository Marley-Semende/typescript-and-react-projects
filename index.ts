const toggleSwitch: HTMLInputElement = document.getElementById("toggle-switch") as HTMLInputElement;
const priceElementBasic: HTMLElement = document.querySelector(".basic") as HTMLElement;
const priceElementProfessional: HTMLElement = document.querySelector(".professional") as HTMLElement;
const priceElementMaster: HTMLElement = document.querySelector(".master") as HTMLElement;

let toggleState: boolean = false;

//toggle handler 
function handleToggle () {
    if(toggleState) {
priceElementBasic.innerHTML = `<span class="dollar-symbol">&dollar;</span>199.99`;
priceElementProfessional.innerHTML = `<span class="dollar-symbol">&dollar;</span>249.99`;
priceElementMaster.innerHTML = `<span class="dollar-symbol">&dollar;</span>399.99`;

}
else {
    priceElementBasic.innerHTML = `<span class="dollar-symbol">&dollar;</span>19.99`;
    priceElementProfessional.innerHTML = `<span class="dollar-symbol">&dollar;</span>24.99`;
    priceElementMaster.innerHTML = `<span class="dollar-symbol">&dollar;</span>34.99`;
   
}

toggleState = !toggleState;
}

toggleSwitch.addEventListener("change", handleToggle)

