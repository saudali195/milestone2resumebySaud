document.getElementById("Resume")?.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form from submitting

    // Collect input data with null-checking
    const name = (document.getElementById("name") as HTMLInputElement)?.value || '';
    const email = (document.getElementById("email") as HTMLInputElement)?.value || '';
    const phone = (document.getElementById("phone") as HTMLInputElement)?.value || '';
    const education = (document.getElementById("education") as HTMLTextAreaElement)?.value || '';
    const experience = (document.getElementById("experience") as HTMLTextAreaElement)?.value || '';
    const skills = (document.getElementById("skills") as HTMLTextAreaElement)?.value || '';

    // Create the resume template
    const resume = `
    <div id="resumeOutput" style="font-family: Times, serif; padding: 20px; background-color: #f8f9fa;">
        <h2>${name}</h2>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <h3>Education</h3>
        <p>${education}</p>
        <h3>Experience</h3>
        <p>${experience}</p>
        <h3>Skills</h3>
        <p>${skills}</p>
    </div>
    `;

    // Remove the previous resume if it exists
    let outputDiv = document.getElementById("resumeOutput");
    if (outputDiv) {
        outputDiv.remove();
    }

    // Append the new resume to the body
    outputDiv = document.createElement("div");
    outputDiv.innerHTML = resume;
    document.body.appendChild(outputDiv);
});
