// const inputBtn = document.getElementById("input-btn")

// inputBtn.addEventListener("click",function(){
//     console.log("Button clicked ");
// })


// function saveLead() {
//     console.log("Button clicked");
// }

//creating two variables 
//myleads - assigned to empty array
//inputEl - assigned to text input field

let myleads = []
const inputEl = document.getElementById("input-el")  //const cant be reassigned

const inputBtn = document.getElementById("input-btn")

// pushing the value "www.xyz.com" to myArray when the input button is clicked


inputBtn.addEventListener("click",function(){
    //console.log("Button clicked ");
    //myleads.push("www.xyz.com")
    myleads.push(inputEl.value)
    console.log(myleads);
})
