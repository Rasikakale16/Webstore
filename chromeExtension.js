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

let myleads = ["www.awesomelead.com", "www.epiclead.com", "www.greatlead.com"]
const inputEl = document.getElementById("input-el")  //const cant be reassigned

const inputBtn = document.getElementById("input-btn")

//grabbing the unordered list and storing it in const variable
const ulEl = document.getElementById("ul-el")
// console.log(ulEl)
// pushing the value "www.xyz.com" to myArray when the input button is clicked


inputBtn.addEventListener("click",function(){
    //console.log("Button clicked ");
    //myleads.push("www.xyz.com")
    myleads.push(inputEl.value)
    console.log(myleads)
})

//logging out the items in myLeads array using a for loop
// for(let i = 0; i<myleads.length; i++){
//     console.log(myleads[i]);
// }
//rendering the leads in unordered list using ulEl.textContent
for(let i = 0; i<myleads.length; i++){
    //ulEl.textContent += myleads[i] + " " //adding += renders out all three websites
    ulEl.innerHTML += "<li>" + myleads[i] + "</li>"   //can create html elements within js
} 

