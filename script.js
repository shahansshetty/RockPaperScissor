
let yourPoints=0;
let botsPoints=0;
let roundcount=0;
let roundno=0;
let rock=document.getElementById('Rock')
let paperb=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let setRounds=document.getElementById('setRounds');
let reset=document.getElementById('reset')
let set=document.getElementById('set')

let yourresult=document.getElementById('yourresult')
let botresult=document.getElementById('botresult')
let youbox=document.getElementById('youbox')

set.addEventListener('click',  function()
{
    if(setRounds.value=="")
        setRounds.value=5;
    else 
     roundno=parseInt(setRounds.value) ;
    setRounds.value=" ";
   
})

rock.addEventListener('click',function()
{
    // document.getElementById('yourresult').innerHTML=" ";
    // document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="🪨";
    let u=0;
    play(u)
    
})

paper.addEventListener('click',function(){
    
    document.getElementById('youbox').innerHTML="✋🏼";
    let u=1;
    play(u)
})
scissor.addEventListener('click',function(){
    
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
    roundcount++;
    document.getElementById('nofrnds').innerHTML=roundcount;

   }
else   
{
    document.getElementById('yourresult').innerHTML="YOU LOST !!";
    document.getElementById('botresult').innerHTML="BOT WON !!";
    botsPoints++;
    
    document.getElementById('bp').innerHTML=botsPoints;
    roundcount++;
    document.getElementById('nofrnds').innerHTML=roundcount;
   }
   if(roundcount==roundno)
    {
     reset();
    }
   
}



reset.addEventListener('click', async function reset()
{
 yourPoints=0;
 botsPoints=0;
 roundcount=0;
document.getElementById('yp').innerHTML=yourPoints;
document.getElementById('bp').innerHTML=botsPoints;
document.getElementById('nofrnds').innerHTML=roundcount;


})
