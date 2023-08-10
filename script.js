var input= document.getElementById("input");
var list= document.getElementById("list");

function add_plan(){
    if(input.value==="")
    {
        alert('enter something to add.')
    }
    else{
        let li= document.createElement('li');
        li.appendChild(document.createTextNode(input.value));
        list.appendChild(li);
        let span= document.createElement("span");
        span.innerHTML= "\u00d7";
        li.appendChild(span);
    }
    input.value=''
    savedata();
}

list.addEventListener("click",function(e){
    if(e.target.tagName==="LI"){
        e.target.classList.toggle('checked');
        savedata();
    }
    else if(e.target.tagName==='SPAN'){
        e.target.parentElement.remove();
        savedata();
    }
},false);

function savedata(){
    localStorage.setItem("DATA",list.innerHTML);
}

function showdata(){
    list.innerHTML= localStorage.getItem("DATA");
}
showdata();