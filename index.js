let a = document.querySelector('#sw');
let b = document.querySelector('.head');
let c = document.querySelector('.contain');
let d = document.querySelector('.body');
let links = document.querySelectorAll('.head a'); // Selecting all anchor tags inside .head
let flag = false;

a.addEventListener('click', function () {
    flag = !flag;
    if (flag) {
        d.style.color = "white";
        d.style.backgroundColor = "black";
        b.style.backgroundColor = 'rgb(99, 98, 98)';
        b.style.color = 'white';
        links.forEach(link => {
            link.style.color = 'white'; // Update anchor tag color to white in dark mode
        });
    } else {
        console.log("black");
        b.style.backgroundColor = 'aliceblue';
        b.style.color = 'black';
        d.style.color = "black";
        d.style.backgroundColor = "white";
        links.forEach(link => {
            link.style.color = 'black'; // Update anchor tag color to black in light mode
        });
    }
});

let clear=document.querySelector('.clr');
let txt=document.querySelector('.area');
let count=document.querySelector('.para1')
let count1=document.querySelector('.para')
let val=''
clear.addEventListener('click',function(){
    txt.value="";
    console.log('clear');
    count.innerHTML=`Total no. of characters:0`;
    count1.innerHTML=`Total no. of characters:0`;

});

const upper=document.querySelector('.upr');
upper.addEventListener('click',function(){
    val=txt.value;
    let uprtxt=val.toUpperCase();
    txt.value=uprtxt;
});
const lower=document.querySelector('.lwr');
lower.addEventListener('click',function(){
    val=txt.value;
    let lwrtxt=val.toLowerCase();
    txt.value=lwrtxt;
});

const espc=document.querySelector('.espc');
espc.addEventListener('click',function(){
    val=txt.value;
    let news=val.replace(/\s+/g, ' ').trim();
    txt.value=news;
    let len=news.length;
    count.innerHTML=`Total no. of characters:${len}`;
});

const rspc=document.querySelector('.rspc');
rspc.addEventListener('click',function(){
    val=txt.value;
    let news=val.trim();
    txt.value=news;
    let len=news.length;
    count.innerHTML=`Total no. of characters:${len}`;
});


txt.addEventListener('input',function(){
    let len=txt.value.length;
    count.innerHTML=`Total no. of characters:${len}`;
    console.log('updated');
});


txt.addEventListener('input',function(){
    let words = txt.value.trim().split(/\s+/).filter(Boolean); 
    count1.innerHTML = `Total number of words: ${words.length}`;
})