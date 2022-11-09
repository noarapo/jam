// contactButton = document.querySelector("#contact button");

// contactButton.addEventListener("click to change background", function contactClickhandler(el) {
//  //alert("Not implemented");


// });

const button1 = document.getElementById('button1');
console.log(button1);
var flag1 = true;
const button2 = document.getElementById('button2');
var flag2 = true;


button1.addEventListener("click",function backgroundColor(el){
  alert("Not implemented");
  if(flag1){
    
    document.body.style.backgroundColor = 'black';
    document.body.style.color = 'white';
    flag1 = false;
    return;
  }
 
  document.body.style.backgroundColor = '#e6d5a2';
  document.body.style.color = '#2d2c2c';
  flag1 =true;
});


button2.addEventListener("click",function ExposeText(el){
  const Hidden = document.getElementById('cat');
  alert("Not implemented2");
  if(flag2){
    
    Hidden.style.display= "none";
    flag2 = false;
    return;
  }
  Hidden.style.display = "block";
  flag2 = true;
})

