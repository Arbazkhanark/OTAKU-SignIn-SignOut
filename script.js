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


        // All Inputs filled
            if(nameInp.value==''|| emailInp.value=='' || passwordInp.value=='' || confirmPass.value==''){
                alert("All Feilds are Required");
                return;
            }



        // Validation Email-Input   
        if(emailInp.value.indexOf("@")==-1 || emailInp.value.indexOf(".")==-1 || emailInp.value.indexOf("@")>emailInp.value.lastIndexOf(".")){
            alert("Enter Valid Email..");
            return;
        }    
        
        //Validation Name-Input
        let letters = /^[A-Za-z ]+$/;
        if(nameInp.value.match(letters)){
            // alert('Your name have accepted : you can try another');
            console.log("name is accepted");
        }else{
            alert('Please input alphabet characters only');
            return;
        }

        //Password Validation
        ()=>{
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


        //Confirm Password Validation
        if(passwordInp.value!=confirmPassword.value){
            alert("Password doesn't match");
            return;
        }

        //User Details
        let user={Name:nameInp.value,Email:emailInp.value,password:passwordInp.value};

        //Email Already Exists
        let sameUser=data.filter((user)=>user.Email==emailInp.value)
        if(sameUser.length>0){
            alert("Email Already Exists");
            return;
        }
        


        let PrevLength=data.length;

        data.push(user);
        console.log(data);

        //Empty Feilds After Push
        nameInp.value="";
        emailInp.value="";
        passwordInp.value="";
        confirmPassword.value="";

        //SignUp Status
        if(PrevLength<data.length){
            alert("SignUp SuccessFully");
        }
    }
    


    