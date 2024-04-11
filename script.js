document.getElementById('generateBtn').addEventListener('click', function() {
    const fullName = document.getElementById('fullName').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const summary = document.getElementById('summary').value;
    const experience = document.getElementById('experience').value;
    const education = document.getElementById('education').value;
    const website = document.getElementById('website').value;
    const imageInput = document.getElementById('imageInput');
    const image = document.getElementById('resumeImage');
  
    // Set resume content
    document.getElementById('resumeName').textContent = fullName;
    document.getElementById('resumeEmail').textContent = "Email: " + email;
    document.getElementById('resumePhone').textContent = "Phone: " + phone;
    document.getElementById('resumeSummary').textContent = summary;
    document.getElementById('resumeExperience').textContent = experience;
    document.getElementById('resumeEducation').textContent = education;
    document.getElementById('resumeWebsite').innerHTML = website ? `Website: <a href="${website}" target="_blank">${website}</a>` : '';
  
    // Set resume image
    if (imageInput.files && imageInput.files[0]) {
      const reader = new FileReader();
      reader.onload = function(e) {
        image.src = e.target.result;
      };
      reader.readAsDataURL(imageInput.files[0]);
    } else {
      image.src = '#';
    }
  
    // Show generated resume
    document.getElementById('formContainer').classList.add('hidden');
    document.getElementById('resumeContainer').classList.remove('hidden');
  });
  
  document.getElementById('downloadBtn').addEventListener('click', function() {
    const resumeContainer = document.getElementById('resumeContainer');
    const filename = 'resume.pdf';
    
    html2pdf().from(resumeContainer).toPdf().save(filename);
  });
  