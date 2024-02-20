
var preloader=document.querySelector(".loader");
window.addEventListener("load",function(){
    preloader.classList.add("disappear");
});

// Initialize EmailJS with your User ID
// emailjs.init("siddharth.goel2105@gmail.com"); // Replace "your_user_id" with your EmailJS User ID

// Function to send email
const senderName=document.getElementById("senderName").value;
const senderEmail=document.getElementById("senderEmail").value;
const senderMessage=document.getElementById("senderMessage").value;

document.querySelector('.contactForm').addEventListener('submit', function(event) {
    // Perform form validation here
   
        // Prevent the form from submitting if validation fails
        event.preventDefault();
    
});
document.getElementById("senderName").addEventListener('change',(e)=>{
    console.log("Hellllllooooo");

senderName.value=e.target.value;


})

document.getElementById("senderEmail").addEventListener('change',(e)=>{
    console.log("Hellllllooooo");

document.getElementById("senderEmail").value=e.target.value;


})
document.getElementById("senderMessage").addEventListener('change',(e)=>{
    console.log("Hellllllooooo");

document.getElementById("senderMessage").value=e.target.value;


})

function sendEmail() {
    console.log("Button clicked");
    // Parameters for the email template
    let templateParams = {
       
        from_name:document.getElementById("senderName").value,
        from_email:document.getElementById("senderEmail").value,
        message: document.getElementById("senderMessage").value// Email message
    };
    // console.log(senderName);
    // console.log(senderEmail);
    // Send email using the specified email template
    // if(senderName.length>0 && senderEmail.length>0){
       if(templateParams.from_name && templateParams.message){
    emailjs.send("service_rflg9sl", "template_aioma0i", templateParams)
        .then(function(response) {
            alert('Successfully sent email')
            console.log("Email sent successfully: ", response);
        }, function(error) {
            alert('Error while sending mail')
            console.error("Email failed to send: ", error);
        });
        document.getElementById("senderName").value="";
        document.getElementById("senderEmail").value="";
        document.getElementById("senderMessage").value="";
    }
    // }
    else{
        alert("Please fill the required fields")
    }
}
const submitButton=document.querySelector(".submit");
submitButton.addEventListener('click',sendEmail);
