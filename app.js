let dec=document.querySelector('.decrease');
let reset=document.querySelector('.reset');
let inc=document.querySelector('.increase');
let count=0;
let val=document.getElementById('value');

inc.addEventListener('click',function()
{
  count++;
  val.textContent=count;
});

reset.addEventListener('click',function()
{
 count=0;
 val.textContent=count;
});

dec.addEventListener('click',function(){
    count--;
    val.textContent=count;
});