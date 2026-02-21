const addbtn=document.getElementById("addbtn");
const content=document.getElementById("content");
const fulllist=document.getElementById("tasklist");
const clearbtn=document.getElementById("clearbtn");

addbtn.addEventListener("click", function()
{
    let input_content=content.value.trim();
    if(input_content==="")
    {
        alert("Please Enter a task");
        return;
    }
    let newtask=document.createElement("div");
    newtask.classList.add("tasklist1");
    newtask.innerText=input_content;


    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete_button");
    deleteBtn.addEventListener("click", function(){
        newtask.remove();
    })

    let checkbox=document.createElement("input");
    checkbox.type="checkbox"
    checkbox.classList.add("checkbox");
    checkbox.addEventListener("change",function(){
        newtask.classList.toggle("completed");
    })

    
    newtask.appendChild(checkbox);
    newtask.appendChild(deleteBtn);
    
    fulllist.appendChild(newtask);
    setTimeout(() => {
        newtask.classList.add("show");
        
    }, 10);
    content.value="";
})

clearbtn.addEventListener("click",function()
{
    fulllist.innerHTML=" ";
})