let head=document.querySelector("h1");
let name=document.querySelector(".naam");
let nameInp=document.getElementById("name");
let emailInp=document.getElementById("mail");
let passwordInp=document.getElementById("pass");


let password=document.querySelector(".password");
let forget=document.getElementById("forget");
let already=document.querySelector("#have");
let message=document.querySelector(".msg");
let msg=message.childNodes[1];

let signinBtn=document.getElementById("signIn");
let signupBtn=document.getElementById("signUp");


already.addEventListener("click",(event)=>{
    event.preventDefault();
    if(already.innerHTML=="Sign in"){
            head.innerHTML="Sign In";
            name.style.height="0px";
            // name.style.display="none"; 
    
            forget.innerHTML="Forget your password";
            forget.style.display="block";
    
            msg.innerHTML="No account?";
            already.innerHTML="Sign up";
            msg.appendChild(already);
            console.log(already.innerHTML);
    
            signinBtn.classList.remove("DisableButton");
            signinBtn.classList.add("EnableButton");
            signupBtn.classList.add("DisableButton");
            signupBtn.classList.remove("EnableButton");
            signupBtn.disabled=true;

        }else if(already.innerHTML=="Sign up"){

            console.log("hello from sign up..");
            // already.addEventListener("click",(event)=>{
                    event.preventDefault();
                    head.innerHTML="Sign Up";
                    // name.style.display="block";
                    name.style.height="35px";
        
                    msg.innerHTML="Have an account?";
                    already.innerHTML="Sign in";
                    msg.appendChild(already);

                    forget.innerHTML="";
        
                    signinBtn.classList.add("DisableButton");
                    signinBtn.classList.remove("EnableButton");
                    signupBtn.classList.add("EnableButton");
                    signupBtn.classList.remove("DisableButton");
                    signinBtn.disabled=true;
            // });
        }
    });
