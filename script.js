function redirectUserLogin() {
  const userButton = document.querySelector('.user-btn');
  userButton.classList.add('click-animation');
  setTimeout(() => {
    window.location.href = "user-login.html";
  }, 300); // Delay to show animation
}

function redirectAdminLogin() {
  const adminButton = document.querySelector('.admin-icon');
  adminButton.classList.add('click-animation');
  setTimeout(() => {
    window.location.href = "admin-login.html";
  }, 300); // Delay to show animation
}
  


  function validateAndLogin() {
    // Get input values
    const name = document.getElementById('name').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const errorMessage = document.getElementById('error-message');
    // Validate inputs
    if (!name) {
    errorMessage.textContent = "Please fill in your name.";
    return;
    }
    if (!/^\d{10}$/.test(phone)) {
    errorMessage.textContent = "Please enter a valid 10-digit phone number.";
    return;
    }
    // Clear error message and proceed to next page
    errorMessage.textContent = "";
    window.location.href = "video-page.html";
    }
    











    const video = document.getElementById('trainingVideo');
    const secondsDisplay = document.getElementById('seconds');
    const submitButton = document.getElementById('submitButton');
    const controlButtons = document.getElementById('controlButtons');
    const timeDisplay = document.getElementById('timeDisplay');
    
    function startVideo() {
      // Ensure video is muted and attempt to play
      video.muted = false;
      video.play().catch(error => {
        console.error("Video play failed:", error);
      });
    }
    
    function pauseVideo() {
      video.pause();
    }
    
    // Update the timer display
    video.ontimeupdate = function() {
      const seconds = Math.floor(video.currentTime);
      const minutes = Math.floor(seconds / 60);
      const displaySeconds = seconds % 60;
      secondsDisplay.textContent = `${String(minutes).padStart(2, '0')}:${String(displaySeconds).padStart(2, '0')}`;

    }
    
    // Display submit button and hide other elements after video ends
    video.onended = function() {
      submitButton.classList.add('center');
      submitButton.style.display = 'block';
      controlButtons.style.display = 'none';
      timeDisplay.style.display = 'none';
      video.style.display = 'none';
    }
    
    function nextPage() {
      window.location.href = "https://docs.google.com/forms/d/e/1FAIpQLSexFiVUrB9on_g-HC1ZhDkWsF-fw1XahI1RXCJXuAZtszYP2Q/viewform?usp=sf_link";
    }









    document.getElementById("loginForm").addEventListener("submit", function(event) {
      event.preventDefault(); // Prevent form from submitting the default way
  
      // Fixed admin credentials
      const adminUsername = "luckiii6465@gmail.com"; // fixed email
      const adminPassword = "nEW654321"; // fixed password
  
      // Get user input
      const username = document.getElementById("luckiii6465@gmail.com").value;
      const password = document.getElementById("nEW654321").value;
      const errorMessage = document.getElementById("error-message");
  
      // Validate credentials
      if (username === adminUsername && password === adminPassword) {
          alert("Login successful! Welcome, Admin.");
          window.location.href = "admin-login.html"; // Redirect to the admin dashboard
      } else {
          errorMessage.textContent = "Invalid username or password";
      }
  });