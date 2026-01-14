 
console.log("script.js"); 
function submitForm() {
    const name = document.getElementById('reservation-name').value;
     const email = document.getElementById('res-email').value; 
     const messageInput = document.getElementById('reservation-message'); // ✅ fixed 
     const formMessage = document.getElementById('form-message'); 
     
     if (!name || !email) { 
        formMessage.textContent = 'Please fill in all fields'; 
        formMessage.className = 'form-message error'; return; }
     }
    
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/; 
    
if (!emailPattern.test(email)) { 
    formMessage.textContent = 'Please enter a valid email address'; 
    formMessage.className = 'form-message error'; } 
    formMessage.textContent = 'Thank you! Your message has been sent successfully.'; 
    formMessage.className = 'form-message success'; 
    document.getElementById('reservation-name').value = ''; 
    document.getElementById('res-email').value = ''; 
    document.getElementById('date').value = ''; 
   
    setTimeout(); { 
        formMessage.textContent = ''; 
        formMessage.className = 'form-message';
}
function Reservation() { 
    const message = document.getElementById("reservation-message"); // ✅ define message 
    let name = document.getElementById("reservation-name").value.trim(); 
    let email = document.getElementById("res-email").value.trim(); 
    let phone = document.getElementById("res-phone").value.trim(); 
    let dateValue = document.getElementById("date").value; 
    let time = document.getElementById("reservation-time").value; 
    let guests = document.getElementById("guests").value;
    
    if (!name || !phone || !guests || !dateValue || !time || !email) 
        { message.textContent = 'Please fill in all fields to complete your reservation';
             message.className = 'form-message error'; return;
        }
    setTimeout(); { 
        document.getElementById('guests').value = ''; 
        document.getElementById('date').value = ''; document.getElementById('reservation-time').value = ''; 
        document.getElementById('reservation-name').value = ''; 
        
        setTimeout(() => {   
        message.textContent = `✅ Reservation confirmed for ${name} on ${dateValue} at ${time} for ${guests} guests.`; 
        message.style.color = "green"; },
         2000);} 3000}