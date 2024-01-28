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




//chrome://extensions/
let myleads = []
const inputEl = document.getElementById("input-el")  //const cant be reassigned

const inputBtn = document.getElementById("input-btn")

//grabbing the unordered list and storing it in const variable
const ulEl = document.getElementById("ul-el")
// console.log(ulEl)
// pushing the value "www.xyz.com" to myArray when the input button is clicked


const deletebtn = document.getElementById("delete-btn")
const leadsfromlocalstorage =JSON.parse(localStorage.getItem("myleads"))
const tabBtn = document.getElementById("tab-btn")


if(leadsfromlocalstorage){  //checking of leadsfromlocalstorage is truthy
    myleads = leadsfromlocalstorage
    renderleads()
}



//for saving tab 
tabBtn.addEventListener("click",function(){
    chrome.tabs.query({active:true, currentWindow:true},function(tabs){
        myleads.push(tabs[0].url)
        localStorage.setItem("myleads",JSON.stringify(myleads))
        renderleads(myleads)
        
    })
})



//logging out the items in myLeads array using a for loop
// for(let i = 0; i<myleads.length; i++){
//     console.log(myleads[i]);
// }
//rendering the leads in unordered list using ulEl.textContent
// let listItems = ""
// for(let i = 0; i<myleads.length; i++){
//     //ulEl.textContent += myleads[i] + " " //adding += renders out all three websites
//     listItems += "<li>" + myleads[i] + "</li>"   //can create html elements within js
//     //create element
//     //set text content
//     //append to ul
//     //const li = document.createElement("li")
//     //li.textContent = myleads[i]
// }
//     ulEl.innerHTML =listItems

//creating function to store website of textbook and show at down so commenting all up ones in down
// function renderleads(){
//     let listItems = ""
//     for(let i = 0; i<myleads.length; i++){
//         listItems += "<li><a target ='_blank' href='#'>" + myleads[i] + "</li>"
//     }
//     ulEl.innerHTML =listItems
// } 

//template strings 
function renderleads() {
    let listItems = ""
    for (let i = 0; i < myleads.length; i++) {
        // Refactor the code below to use a template string
        listItems += `
            <li>
                <a target='_blank' href='${myleads[i]}'>
                    ${myleads[i]}
                </a>
            </li>
        `
    }
    ulEl.innerHTML = listItems  
}



deletebtn.addEventListener("dblclick",function(){
    //console.log("double clicked!")
    localStorage.clear()
    myleads =[]
    renderleads()
})

inputBtn.addEventListener("click",function(){
    //console.log("Button clicked ");
    //myleads.push("www.xyz.com")
    myleads.push(inputEl.value)
    //console.log(myleads)
    inputEl.value = ""
    localStorage.setItem("myleads",JSON.stringify(myleads))
    renderleads()
})


$$('.input-btn').forEach(el => 
    el.addEventListener('mousemove', function(e) {
        const pos = this.getBoundingClientRect();
        const mx = e.clientX - pos.left - pos.width/2; 
        const my = e.clientY - pos.top - pos.height/2;
         
        this.style.transform = 'translate('+ mx * 0.15 +'px, '+ my * 0.3 +'px)';
        this.style.transform += 'rotate3d('+ mx * -0.1 +', '+ my * -0.3 +', 0, 12deg)';
        this.children[0].style.transform = 'translate('+ mx * 0.025 +'px, '+ my * 0.075 +'px)';
      }));
      
      







