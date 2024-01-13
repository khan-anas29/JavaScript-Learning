// Adding event listeners to buttons

// we will need loop since querySelectorAll does not works, using class name since we may use button tags in future also so it will be not efficient

for(var i=0; i<document.querySelectorAll(".drum").length;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        alert("Hello")    
    })
}

