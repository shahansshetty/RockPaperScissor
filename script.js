
let yourPoints=0;
let botsPoints=0;
let a=document.getElementById('Rock')
let b=document.getElementById('paper')
let c=document.getElementById('scissor')
a.addEventListener('click',function()
{
    document.getElementById('yourresult').innerHTML=" ";
    document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="🪨";
    let u=0;
    play(u)
    
})

b.addEventListener('click',function(){
    document.getElementById('yourresult').innerHTML=" ";
    document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="✋🏼";
    let u=1;
    play(u)
})
c.addEventListener('click',function(){
    document.getElementById('yourresult').innerHTML=" ";
    document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="✂️";
    let u=2;
    play(u)
})

function play(u)
{
    let randnum=Math.floor(Math.random()*3)
    if(randnum==0)
        document.getElementById('botbox').innerHTML="🪨";
    else if(randnum==1)
        document.getElementById('botbox').innerHTML="✋🏼";
    else if(randnum==2)
        document.getElementById('botbox').innerHTML="✂️";
    
   if(randnum==u)
   {
    document.getElementById('yourresult').innerHTML="TIE !!";
    document.getElementById('botresult').innerHTML="TIE !!";
   }
   //     rock 0
//    paper 1
//    se 2
   else if(u==0&&randnum==2||u==1&&randnum==0|| u==2&&randnum==1)
   {
    document.getElementById('yourresult').innerHTML="YOU WIN !!";
    document.getElementById('botresult').innerHTML="BOT LOST !!";
    yourPoints++;
    document.getElementById('yp').innerHTML=yourPoints;

   }
else   
{
    document.getElementById('yourresult').innerHTML="YOU LOST !!";
    document.getElementById('botresult').innerHTML="BOT WON !!";
    botsPoints++;
    document.getElementById('bp').innerHTML=botsPoints;
   }
}
let reset=document.getElementById('reset')
reset.addEventListener('click', async function()
{
    let yourPoints=0;
let botsPoints=0;
document.getElementById('yp').innerHTML=yourPoints;
document.getElementById('bp').innerHTML=botsPoints;

})
