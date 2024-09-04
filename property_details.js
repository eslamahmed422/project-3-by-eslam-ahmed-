// (start events javascript to property-details.html--->> Villa Agency:property details page );

var fixedNav=document.getElementById('fixed-nav')
window.onscroll=function(){
    if(scrollY >=200){
        fixedNav.style.position='fixed' 
        fixedNav.style.left='0' 
        fixedNav.style.top='0' 
        fixedNav.style.right='0' 
        fixedNav.style.margin='0' 
    }
    else{ 
        fixedNav.style.margin='30px 0'
        fixedNav.style.position='static' 
    }
}
var clickIcon=document.getElementById('click-icon')
var exitIcon=document.getElementById('exit-icon');
var ulList=document.getElementById('ul-list');
clickIcon.onclick=function(){
    ulList.style.display='block'
    ulList.style.cursor='pointer'
    clickIcon.style.display='none'
    exitIcon.style.display='block'
    exitIcon.style.fontSize='50px'
    window.onresize = function() {
        if (window.innerWidth > 790) {
            ulList.style.display='flex'; 
            clickIcon.style.display = 'none'; 
            exitIcon.style.display = 'none';
        } else {
            exitIcon.style.display = 'block'; 
            clickIcon.style.display = 'none'; 
        }
    };
}
exitIcon.onclick=function(){
    ulList.style.display='none'
    ulList.style.cursor='pointer'
    clickIcon.style.display='block'
    exitIcon.style.display='none'
    window.onresize = function() {
        if (window.innerWidth > 790) {
            ulList.style.display='flex'; 
            clickIcon.style.display = 'none'; 
            exitIcon.style.display = 'none';
        } else {
            ulList.style.display='none'
            exitIcon.style.display = 'none'; 
            clickIcon.style.display = 'block'; 
        }
    };
}
var btnAppartment=document.getElementById('btn-appartment');
var btnVillaHouse=document.getElementById('btn-villa');
var btnPenthouse=document.getElementById('btn-penthouse');
var appartment=document.getElementById('Appartment');
var villaHouse=document.getElementById('Villa');
var penthouse=document.getElementById('Penthouse');
btnVillaHouse.onclick = function(){   
    appartment.style.display = 'none' ; 
    penthouse.style.display = 'none' ; 
    villaHouse.style.display = 'flex';
    btnVillaHouse.style.backgroundColor='red';
    btnAppartment.style.backgroundColor='black';
    btnPenthouse.style.backgroundColor='black';
}
btnPenthouse.onclick = function(){
appartment.style.display = 'none' ; 
villaHouse.style.display = 'none';
penthouse.style.display = 'flex' ; 
btnVillaHouse.style.backgroundColor='black';
btnAppartment.style.backgroundColor='black';
btnPenthouse.style.backgroundColor='red';
}
btnAppartment.onclick = function(){
appartment.style.display = 'flex' ; 
villaHouse.style.display = 'none';
penthouse.style.display = 'none' ; 
btnVillaHouse.style.backgroundColor='black';
btnAppartment.style.backgroundColor='red';
btnPenthouse.style.backgroundColor='black';
}
