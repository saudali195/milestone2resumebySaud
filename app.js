var _a;
(_a = document.getElementById("Resume")) === null || _a === void 0 ? void 0 : _a.addEventListener("submit", function (event) {
    var _a, _b, _c, _d, _e, _f;
    event.preventDefault(); // Prevent form from submitting
    // Collect input data with null-checking
    var name = ((_a = document.getElementById("name")) === null || _a === void 0 ? void 0 : _a.value) || '';
    var email = ((_b = document.getElementById("email")) === null || _b === void 0 ? void 0 : _b.value) || '';
    var phone = ((_c = document.getElementById("phone")) === null || _c === void 0 ? void 0 : _c.value) || '';
    var education = ((_d = document.getElementById("education")) === null || _d === void 0 ? void 0 : _d.value) || '';
    var experience = ((_e = document.getElementById("experience")) === null || _e === void 0 ? void 0 : _e.value) || '';
    var skills = ((_f = document.getElementById("skills")) === null || _f === void 0 ? void 0 : _f.value) || '';
    // Create the resume template
    var resume = "\n    <div id=\"resumeOutput\" style=\"font-family: Times, serif; padding: 20px; background-color: #f8f9fa;\">\n        <h2>".concat(name, "</h2>\n        <p><strong>Email:</strong> ").concat(email, "</p>\n        <p><strong>Phone:</strong> ").concat(phone, "</p>\n        <h3>Education</h3>\n        <p>").concat(education, "</p>\n        <h3>Experience</h3>\n        <p>").concat(experience, "</p>\n        <h3>Skills</h3>\n        <p>").concat(skills, "</p>\n    </div>\n    ");
    // Remove the previous resume if it exists
    var outputDiv = document.getElementById("resumeOutput");
    if (outputDiv) {
        outputDiv.remove();
    }
    // Append the new resume to the body
    outputDiv = document.createElement("div");
    outputDiv.innerHTML = resume;
    document.body.appendChild(outputDiv);
});
