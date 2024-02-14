let userscore=0;
let comscore=0;
let choices= document.querySelectorAll('.choice');
let msg=document.querySelector('#msg');
const ysc=document.querySelector('#ysc');
const csc=document.querySelector('#csc');
let showwinner=(youchoice,userchoice,compchoice)=>{
    if(youchoice){
        userscore++;
        ysc.innerText=userscore;
        msg.innerText=`You Win😀.your ${userchoice} beats ${compchoice}`;
        msg.style.backgroundColor='green';
    }else{
        comscore++;
        csc.innerText=comscore;
        msg.innerText=`You Lose😥.${compchoice} beats your ${userchoice}`;
        msg.style.backgroundColor='red';
    }
}
let draw=()=>{
   
    msg.innerText="It's Draw PlayAgain.😎"
    msg.style.backgroundColor='black';
}
let compgen=()=>{
    let options=['rock','paper','scissor'];
    let ranidx=Math.floor(Math.random()*3);
    return options[ranidx];
}
let playgame=(userchoice)=>{
    
    let compchoice=compgen();
   
    let youchoice=true;
    if(userchoice===compchoice){
        draw();
    }
    
    else{
        
        if(userchoice==='rock'){
            youchoice=compchoice==='paper'?false:true;
        }
        else if(userchoice==='paper'){
            youchoice=compchoice==='scissor'?false:true;
        }else{
            youchoice=compchoice=='rock'?false:true;
        }
        showwinner(youchoice,userchoice,compchoice);
    }
   
   
}
choices.forEach((choice)=>{
    choice.addEventListener('click', ()=>{
        const userchoice = choice.getAttribute('id'); 
        playgame(userchoice)
    });
});