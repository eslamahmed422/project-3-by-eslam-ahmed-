// (start events javascript to property.html--->> Villa Agency:property page )
// <!-- start events javascript to section properties -->
var btn_1=document.getElementById('btn_1');
var btn_2=document.getElementById('btn_2');
var btn_3=document.getElementById('btn-3');
var btn_4=document.getElementById('btn-4');
var buttonShowAll=document.getElementById('showAll');
var buttonPartment=document.getElementById('appartment');
var buttonVillaHouse=document.getElementById('villa-house');
var buttonPenthouse=document.getElementById('Penthouse');
var btnAppartment=document.getElementById('btn-appartment');
// console.log(btnAppartment);
btn_1.onclick = function(){
    buttonPartment.style.display ='none';
    buttonVillaHouse.style.display ='none';
    buttonPenthouse.style.display ='none';
    buttonShowAll.style.display ='flex';
    btn_1.style.backgroundColor='orangered';
    btn_2.style.backgroundColor='black';
    btn_3.style.backgroundColor='black';
    btn_4.style.backgroundColor='black'; 
    btn_2.style.removeProperty('color');
    btn_3.style.removeProperty('color');
    btn_4.style.removeProperty('color');
    btn_1.style.removeProperty('color');
    btn_1.onmouseover= function(){
        btn_1.style.color='white';
    }
}
btn_2.onclick = function(){
    buttonShowAll.style.display ='none';
    buttonVillaHouse.style.display ='none';
    buttonPenthouse.style.display ='none';
    buttonPartment.style.display ='flex';
    btn_1.style.backgroundColor='black';
    btn_3.style.backgroundColor='black';
    btn_4.style.backgroundColor='black';
    btn_2.style.backgroundColor='orangered';
    btn_2.style.color='white';
    btn_4.style.removeProperty('color');
    btn_3.style.removeProperty('color');
    btn_1.onmouseover= function(){
        btn_1.style.color='orangered';
    }
}
btn_3.onclick = function(){
    buttonShowAll.style.display ='none';
    buttonPartment.style.display ='none';
    buttonPenthouse.style.display ='none';
    buttonVillaHouse.style.display ='flex';
    btn_1.style.backgroundColor='black';
    btn_2.style.backgroundColor='black';
    btn_4.style.backgroundColor='black';
    btn_3.style.backgroundColor='orangered';
    btn_3.style.color='white';
    btn_2.style.removeProperty('color');
    btn_4.style.removeProperty('color');
    btn_1.onmouseover= function(){
        btn_1.style.color='orangered';
    }
}
btn_4.onclick = function(){
    buttonShowAll.style.display ='none';
    buttonPartment.style.display ='none';
    buttonVillaHouse.style.display ='none';
    buttonPenthouse.style.display ='flex';
    btn_1.style.backgroundColor='black';
    btn_2.style.backgroundColor='black';
    btn_3.style.backgroundColor='black';
    btn_4.style.backgroundColor='orangered';
    btn_4.style.color='white'; 
    btn_2.style.removeProperty('color');
    btn_3.style.removeProperty('color');
    btn_1.onmouseover= function(){
        btn_1.style.color='orangered';
    } 
}
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
            fixedNav.style.position='static' 
        }
    }
var clickIcon=document.getElementById('click-icon');
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
// <!-- end events javascript to section properties -->
// (end events javascript to property.html--->> Villa Agency:property page )




