console.log("yo!");

//* single element selectors
// console.log(document.getElementById("my-form"));

// console.log(document.querySelector("h1"));

//* multiple element selectors
// console.log(document.querySelectorAll(".item"));

// const items = document.querySelectorAll(".item");

// items.forEach(item => console.log(item));

// const ul = document.querySelector(".items");

// * removes the whole ul
// ul.remove();

// * removes the last element inside ul
// ul.lastElementChild.remove();

// * changes the text inside the first element inside ul
// ul.firstElementChild.textContent = "Hello";

// * changes the text inside the second element inside ul
// * we can use index because it is a node list
// * innerText is also like textContent
// ul.children[1].innerText = "Dahl";

// * innerHTML helps to add html dynamically
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>";

/*
const btn = document.querySelector(".btn");

/style changes the style of the html using js
btn.style.background = "red";

/using addEventListener(event, function)
btn.addEventListener("mouseout", (e) => {

    /preventDefault() ignores the default functionality
    e.preventDefault();

    document.querySelector("#my-form").style.background = "#ccc";

    /classList access the class css
    /add or remove
    document.querySelector("body").classList.add("bg-dark");

    document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello Dahl</h1>";

});

*/

// const myForm = document.querySelector("#my-form");
// const nameInput = document.querySelector("#name");
// const emailInput = document.querySelector("#email");
// const msg = document.querySelector(".msg");
// const userList = document.querySelector("#users");

// myForm.addEventListener("submit", onSubmit);

// function onSubmit(e){

//     e.preventDefault();

//     if(nameInput.value === "" || emailInput === ""){

//         msg.innerHTML = "Please fill out the empty field";
//         msg.classList.add("error");

//         setTimeout(() => msg.remove(), 3000);

//     }else{
        
//         const li = document.createElement("li");
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));
//         userList.appendChild(li);

//         // Clear fields
//         nameInput.value = "";
//         emailInput.value = "";
//     }
    
// }

const xy = "maganda";

function fanChecker(word){

    if(xy === word){

        console.log("Tamah Behavior!!!");

    }else {

        console.log("Ayusin mo buhay mo bhie");
    }
}

fanChecker("maganda");
fanChecker("pangit");


