
let yourPoints=0;
let botsPoints=0;
let roundcount=0;  
let roundno=0;
let rock=document.getElementById('Rock')
let paper=document.getElementById('paper')
let scissor=document.getElementById('scissor')
let setRounds=document.getElementById('setRounds');
let reset=document.getElementById('reset')
let set=document.getElementById('set')

// document.getElementById('nofrnds').innerHTML=roundcount;

let yourresult=document.getElementById('yourresult')
let botresult=document.getElementById('botresult')
let youbox=document.getElementById('youbox')

set.addEventListener('click',  function()
{
    rset();
    roundno=(parseInt(setRounds.value)) ;
    console.log(roundno)
    
    // setRounds.value=" ";
    
})

rock.addEventListener('click',function()
{
    document.getElementById('yourresult').innerHTML=" ";
    document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="🪨";
    let u=0;
    play(u)
    
})

paper.addEventListener('click',function(){
    document.getElementById('yourresult').innerHTML=" ";
    document.getElementById('botresult').innerHTML=" ";
    document.getElementById('youbox').innerHTML="✋🏼";
    let u=1;
    play(u)
})
scissor.addEventListener('click',function(){
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
    document.getElementById('yourresult').setAttribute("style","color: grey")
    document.getElementById('botresult').setAttribute("style","color: grey")

   }
   //     rock 0
//    paper 1
//    se 2
   else if(u==0&&randnum==2||u==1&&randnum==0|| u==2&&randnum==1)
   {
    document.getElementById('yourresult').innerHTML="YOU WIN !! ";
    document.getElementById('yourresult').setAttribute("style","color: limegreen")
    document.getElementById('botresult').innerHTML="BOT LOST !!";
    document.getElementById('botresult').setAttribute("style","color: red")
    yourPoints++;
    

    document.getElementById('yp').innerHTML=yourPoints;
    roundcount++;
    console.log(roundcount);
    document.getElementById('nofrnds').innerHTML=roundcount;
    

   }
else   
{
    document.getElementById('yourresult').innerHTML="YOU LOST !!";
    document.getElementById('yourresult').setAttribute("style","color: red")
    document.getElementById('botresult').innerHTML="BOT WON !!";
    document.getElementById('botresult').setAttribute("style","color: limegreen")
    botsPoints++;
    
    document.getElementById('bp').innerHTML=botsPoints;
    roundcount++;
    console.log(roundcount);
    document.getElementById('nofrnds').innerHTML=roundcount;
  
   }

   if(roundno==roundcount)
    {
     
    
           
    //  setInterval(() => {
        
    // }, 1000);
    setTimeout(()=>{
        if(yourPoints>botsPoints)
            {
               alert("YOU WON!!");
            }
            else if(yourPoints==botsPoints)
            {if(roundcount!=0)
                alert(`TIE !!`)
            }
            else{
               alert(`YOU LOSE !!`)
            }
     rset();    



    },100)



    }

    if(yourPoints==botsPoints)
        {
           document.getElementById('yp').setAttribute("style","color: gray")
           document.getElementById('bp').setAttribute("style","color: gray")

       }
       else if(yourPoints>botsPoints)
       {
           
           document.getElementById('yp').setAttribute("style","color: limegreen")
           document.getElementById('bp').setAttribute("style","color: red")
       }
       else{
           document.getElementById('yp').setAttribute("style","color: red")
           document.getElementById('bp').setAttribute("style","color: limegreen")
           
        }
   
}

function rset()
{
 yourPoints=0;
 botsPoints=0;
 roundcount=0;
document.getElementById('yp').innerHTML=yourPoints;
document.getElementById('bp').innerHTML=botsPoints;
document.getElementById('nofrnds').innerHTML=roundcount;
document.getElementById('yp').setAttribute("style","color: white")
     document.getElementById('bp').setAttribute("style","color: white")


}

reset.addEventListener('click',function()
{
    rset();
})


   
