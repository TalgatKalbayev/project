function secondPage(e){
    document.getElementById('first-page').className += "animate__rotateOut"
    document.getElementById('second-page').style.display = "flex"

    setTimeout(()=>{
        document.getElementById('first-page').style.display = "none"
        document.getElementById('second-page').className += "animate__fadeIn"
        document.getElementById('g-disk-logo').className += "animate__flip"
    },1000)
}

function thirdPage(e){
    document.getElementById('paper').className = "paper animate__animated animate__hinge"
    document.getElementById('third-page').className += "animate__flip"
    setTimeout(()=>{document.getElementById('third-page').style.display = "flex"},2000)
}

let fButtonState = true

setInterval(()=>{
    if(fButtonState){
        document.getElementById('first-button').className = "hover-active btn-block"
        fButtonState = false
    }else{
        document.getElementById('first-button').className = "btn-block"
        fButtonState = true
    }
}, 500)

function selectPage(id){
    ["menu-el-1","menu-el-2","menu-el-3"].map(el=>{
        document.getElementById(el).className = 'menu-el'
    })
   document.getElementById(id).className = 'menu-el menu-el-active'

    document.getElementById("content1").style.display = 'none'
    document.getElementById("content2").style.display = 'none'
    document.getElementById("content3").style.display = 'none'

   switch(id){
    case "menu-el-1":
     document.getElementById("content1").style.display = 'block'
     return;
     case"menu-el-2":
     document.getElementById("content2").style.display = 'block'
     return
     case"menu-el-3":
     document.getElementById("content3").style.display = 'block'
     return

   }
    
}