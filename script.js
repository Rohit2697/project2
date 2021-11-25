let users=[

{
    name: 'Rohit',
    email: 'Rohit.Dey@gmail.com',
    pwd: 'Honor10@123#'
},

{
    name: 'Ajay',
    email: 'Ajay.Verma@gmail.com',
    pwd: 'Iphone10@123#'
}

];
var loginName=document.querySelector('.name');
var loginBtn=document.querySelector('#login');
var loginPassword=document.querySelector('#pwd');

var isValid=loginBtn.addEventListener('click',()=>{

if(loginName && loginPassword && loginPassword!=='' && loginName.value!==''){

    var isFound= users.findIndex((e)=>e.email.toLowerCase()===loginName.value.toLowerCase());
    //return index if the email matches
    
    //users.find((e)=>e.email.toLowerCase()===loginName.value.toLowerCase());

    if(isFound!=-1){
        
        if(users[isFound].pwd===loginPassword.value){

            console.log("y");
            window.open('Ecommerce/Ecommerce.html','_self');

        }
        else{
            alert('Wrong Password');
            console.log("n");
        }
      
     }
    else{
        alert("Please enter Valid Email Address..");
    }
}
else{
    alert("please enter input");
}
    
});








