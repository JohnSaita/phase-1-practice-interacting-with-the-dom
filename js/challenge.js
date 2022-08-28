
//creating a timmer
const h1Counter= document.querySelector("#counter");
let count =0;
let interval= setInterval(counter,1000);
function clock(count){
  interval= setInterval(counter,1000);
  h1Counter.innerText=count++
}

function counter(){
  h1Counter.innerText=count++
}


//Grabing buttons
const pauseBtn =document.querySelector('#pause');
const minusBtn =document.querySelector('#minus');
const plusBtn =document.querySelector('#plus');
const heartBtn = document.querySelector('#heart');


  pauseBtn.addEventListener('click',()=>{
    // pause timmer
    if(pauseBtn.innerText==='pause'){
      pauseBtn.innerHTML ='resume';
      clearInterval(interval);
      minusBtn.disabled =true;
      plusBtn.disabled=true;
      heartBtn.disabled=true;
    }
    // Resume timer

    else if(pauseBtn.textContent==='resume'){
      pauseBtn.innerText ='pause'
     clock(h1Counter.innerText)
     minusBtn.disabled =false;
     plusBtn.disabled=false;
     heartBtn.disabled=false;
    }

  })
  // minus one when minu button is clicked
  minusBtn.addEventListener('click',()=>{
    h1Counter.innerText =h1Counter.innerText-1;
    count = h1Counter.innerText;
  })
  // add one when add button is clicked
  plusBtn.addEventListener('click',()=>{
    h1Counter.innerText =parseInt(h1Counter.innerText, 10)+ 1;
    count = h1Counter.innerText;
  })
let clicks =0;
  heartBtn.addEventListener('click',()=>{
    clicks++
    const likes =document.querySelector('.likes');
    const li =document.createElement('li');
    li.innerText=`${h1Counter.innerText} has been clicked ${clicks}`;
    likes.appendChild(li);
  })
  //comment
  const form =document.querySelector('#comment-form');


  form.addEventListener('submit',(e)=>{
    e.preventDefault();
    const input =document.querySelector('#comment-input').value;
    const comment = document.querySelector('.comments');
   
    const p =document.createElement('p');
    p.innerText=input;
    comment.appendChild(p);
   form.reset();

  })






