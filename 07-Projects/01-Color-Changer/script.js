const button = document.querySelectorAll(".button");
console.log(button);

const body = document.querySelector("body");
console.log(body);


button.forEach(function(button){
    console.log(button);

    button.addEventListener('click',function(e){
        console.log(e);
        console.log(e.target);

        button.style.backgroundColor = e.target.id;
        button.style.color = "white";
        body.style.backgroundColor = e.target.id; 
    })
})