let form=document.querySelector("form");
let head=document.querySelector("h1");
let name=document.querySelector(".naam");
let nameInp=document.getElementById("name");
let emailInp=document.getElementById("mail");
let passwordInp=document.getElementById("pass");
let confirmPassword=document.getElementById("confirmPassword");
let confirmPass=document.querySelector(".confirmPass");


let password=document.querySelector(".password");
let forget=document.getElementById("forget");
let already=document.querySelector("#have");
let message=document.querySelector(".msg");
let msg=message.childNodes[1];

let signinBtn=document.getElementById("signIn");
let signupBtn=document.getElementById("signUp");


let data=[];

already.addEventListener("click",(event)=>{
    event.preventDefault();
    if(already.innerHTML=="Sign in"){
            head.innerHTML="Sign In";
            name.style.height="0px";
            confirmPass.style.height="0px";
            // name.style.display="none"; 
    
            forget.innerHTML="Forget your password";
            forget.style.display="block";
    
            msg.innerHTML="No account?";
            already.innerHTML="Sign up";
            msg.appendChild(already);
            console.log(already.innerHTML);
    
            signinBtn.type="button"
            console.log("sign Up: "+signinBtn.type);
            signinBtn.classList.remove("DisableButton");
            signinBtn.classList.add("EnableButton");
            signupBtn.classList.add("DisableButton");
            signupBtn.classList.remove("EnableButton");
            signupBtn.disabled=true;

        }else if(already.innerHTML=="Sign up"){

            console.log("hello from sign up..");
            // already.addEventListener("click",(event)=>{
                    // event.preventDefault();
                    head.innerHTML="Sign Up";
                    // name.style.display="block";
                    name.style.height="35px";
                    confirmPass.style.height="35px";

        
                    msg.innerHTML="Have an account?";
                    already.innerHTML="Sign in";
                    msg.appendChild(already);

                    forget.innerHTML="";


                    signupBtn.type="button"
                    console.log("sign In: "+signupBtn.type);
                    signinBtn.classList.add("DisableButton");
                    signinBtn.classList.remove("EnableButton");
                    signupBtn.classList.add("EnableButton");
                    signupBtn.classList.remove("DisableButton");
                    signinBtn.disabled=true;
            // });
        }
    });


    form.addEventListener("submit",signUp);
    function signUp(event){
        event.preventDefault();
        console.log("Hello from From")

        // Validation Email-Input   
        emailVal(emailInp);     
        
        //Validation Name-Input
        nameVal(nameInp);

        //Password Validation
        passwordValidation(passwordInp.value,nameInp.value,emailInp.value);

        //Confirm Password Validation
        confirmVal(passwordInp.value,confirmPassword.value);

        let user={name:nameInp.value,email:emailInp.value};

        data.push(user);
        console.log(data);
    }
    


    function emailVal(email){
        // let smallLetters=/^[a-z]+$/;
        // console.log(email.value.match(smallLetters)); 
        if(email.value.indexOf("@")==-1 || email.value.indexOf(".")==-1 || email.value.indexOf("@")>email.value.lastIndexOf(".")){
            alert("Enter Valid Email..");
            return;
        } 
    }


    function nameVal(name){
        let letters = /^[A-Za-z ]+$/;
        if(name.value.match(letters)){
        // alert('Your name have accepted : you can try another');
        return true;
        }else{
        alert('Please input alphabet characters only');
        return false;
        }
    }


    function passwordValidation(password,name,email){
        let number=0;
        let lower=0;
        let upper=0;
        let special=0;
        let count=0;

        for(let i of password){
            if(i>="A" && i<="Z"){
                upper++;
            }else if(i>="a" && i<="z"){
                lower++;
            }else if(i>=0 && i<=9){
                number++;
            }else{
                special++;
            }
            count++;
        }

        if(lower>=1 && upper>=1 && special>=1 && password!=name && password!=email && count>=8){
            console.log("Valid Password: ",count,upper,special,lower,number);
        }else{
            alert("Password is Invalid");
            return;
        } 
    }

    function confirmVal(password,confirmPassword){
        if(password!=confirmPassword){
            alert("Password doesn't match");
            return;
        }
    }


    