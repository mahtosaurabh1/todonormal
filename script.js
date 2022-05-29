let inputTag=document.querySelector('.input-box')
let addbtn=document.querySelector('.btn')
let maincont=document.querySelector('.main-cont')


addbtn.addEventListener('click',function(){
    let inputTagValue=inputTag.value.trim();
    // console.log(inputTagValue)
    inputTag.value="";
   if(inputTagValue==""){
       return;
   }
    let divTag=document.createElement('div')
    divTag.setAttribute('class','task-cont');
    divTag.innerHTML=` <div class="tick"><i class="fa fa-check"></i></div>
                       <div class="task">${inputTagValue}</div>
                       <div class="delete"><i class="fa fa-trash"></i></div>`
    maincont.appendChild(divTag)
    removeContainer(divTag);
})

function removeContainer(divTag){
    console.log("before")
    let deletebtn=divTag.querySelector('.delete')
    deletebtn.addEventListener('click',function(){
        divTag.remove();
        console.log("after")
    })
}


