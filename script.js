const inputValue = document.getElementById("dark-mode");

const bodyValue = document.querySelector("body");

inputValue.checked = JSON.parse(localStorage.getItem("mode"));

updateBody();

function updateBody(){
    if(inputValue.checked){
        bodyValue.style.background = "black";
    }else{
        bodyValue.style.background = "white";
    }
}

inputValue.addEventListener("input", () =>{
    updateBody();
    updateLocalStorage();
});

function updateLocalStorage(){
    localStorage.setItem("mode", JSON.stringify(inputValue.checked));

}