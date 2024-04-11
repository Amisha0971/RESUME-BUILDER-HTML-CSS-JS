document.getElementById('resumeForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission
    
    // Gather form data
    const formData = {
      fullName: document.getElementById('fullName').value,
      email: document.getElementById('email').value,
      phone: document.getElementById('phone').value,
      summary: document.getElementById('summary').value,
      experience: document.getElementById('experience').value,
      education: document.getElementById('education').value
    };
    
    // Generate HTML for resume output
    const resumeHTML = `
      <h2>${formData.fullName}</h2>
      <p>Email: ${formData.email}</p>
      <p>Phone: ${formData.phone}</p>
      <h3>Summary</h3>
      <p>${formData.summary}</p>
      <h3>Experience</h3>
      <p>${formData.experience}</p>
      <h3>Education</h3>
      <p>${formData.education}</p>
    `;
    
    // Display generated resume
    document.getElementById('resumeOutput').innerHTML = resumeHTML;
  });
  