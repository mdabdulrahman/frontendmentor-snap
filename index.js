let fmenu=false
let cmenu=false
let menumobile=false
document.querySelectorAll("#featuresDrop").forEach((ele)=>ele.addEventListener("click",
(e)=>{
    let icon=document.querySelectorAll("#ficon")
    let menu=document.querySelectorAll("#fmenu")
    if(fmenu){
        icon.forEach((eleicon)=>eleicon.src="icon-arrow-down.svg")
        menu.forEach((elemenu)=>elemenu.classList.add("hidden"))
        fmenu=!fmenu
    }
    else{
        icon.forEach((eleicon)=>eleicon.src="icon-arrow-up.svg")
        menu.forEach((elemenu)=>elemenu.classList.remove("hidden"))
        fmenu=!fmenu
    }
}
))
document.querySelectorAll("#companyDrop").forEach((ele)=>ele.addEventListener("click",
(e)=>{
    let icon=document.querySelectorAll("#cicon")
    let menu=document.querySelectorAll("#cmenu")
    if(fmenu){
        icon.forEach((eleicon)=>eleicon.src="icon-arrow-down.svg")
        menu.forEach((elemenu)=>elemenu.classList.add("hidden"))
        fmenu=!fmenu
    }
    else{
        icon.forEach((eleicon)=>eleicon.src="icon-arrow-up.svg")
        menu.forEach((elemenu)=>elemenu.classList.remove("hidden"))
        fmenu=!fmenu
    }
}
))
document.querySelectorAll("#menubar").forEach((ele)=>
ele.addEventListener("click",(e)=>{
    let menu= document.querySelector("#menu-mob")
    let body=document.querySelector("#mob-body")
if(menumobile){
    menu.classList.add("hidden")
    body.classList.remove("mob-body")
    menumobile=!menumobile
}
else{
   menu.classList.remove("hidden")
   body.classList.add("mob-body")
   menumobile=!menumobile
}
})
)