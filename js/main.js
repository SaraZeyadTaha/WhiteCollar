let btn = document.getElementById('btn');
let text = document.getElementById('more');
let div = document.getElementById('div-more');
btn.onclick= function () {
    if (text.style.display=='inline') {
        text.style.display='none';
        btn.innerHTML='READ MORE';
        div.style.height='230px';
    }

    else {
        text.style.display='inline';
        btn.innerHTML='READ LESS';
        div.style.height='380px'
    }
}
let element = document.getElementById('title');
let text1 = element.dataset.title;
let i = 0;
id1= setInterval(() => {
    element.textContent += text1[i];
    i++;
    if (i > text1.length) {
        element.textContent ="";
        i=0;
          
    }
    
}, 200);

let root = document.querySelector(':root');
let s1 = document.querySelector('header .side_menu ul .mode1');
let s2 = document.querySelector('header .side_menu ul .mode2');
s1.onclick =function(){
    root.style.setProperty("--mainColor",s1.dataset.color);
    root.style.setProperty("--secondryColo",s2.dataset.color);
}
s2.onclick =function(){
    root.style.setProperty("--mainColor",s2.dataset.color);
    root.style.setProperty("--secondryColo",s1.dataset.color);
}
let open=document.querySelector('header .menu button');
let close=document.querySelector('header .side_menu button');
let side=document.querySelector('header .side_menu');
open.onclick=function(){
    side.classList.add('open');
}
close.onclick=function(){
    side.classList.remove('open');
}