// document.addEventListener("DOMContentLoaded", () => {
//     const form = document.getElementById("resumeForm") as HTMLFormElement;
//     const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
//     const resumePreview = document.getElementById("resumePreview") as HTMLElement;
//     const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;
//     const generateLinkBtn = document.getElementById("generateLinkBtn") as HTMLButtonElement;
//     form.addEventListener("submit", (event) => {
//         event.preventDefault();
//         const formData = new FormData(form);
//         const name = formData.get("name") as string;
//         const email = formData.get("email") as string;
//         const phone = formData.get("phone") as string;
//         const education = formData.get("education") as string;
//         const skills = formData.get("skills") as string;
//         const experience = formData.get("experience") as string;
//         const languages = formData.get("languages") as string;
//         const toBulletList = (data: string) => {
//             return data
//                 .split(",")
//                 .map(item => `<li contenteditable="true">${item.trim()}</li>`)
//                 .join("");
//         };
//         const educationList = toBulletList(education);
//         const skillsList = toBulletList(skills);
//         const experienceList = toBulletList(experience);
//         const languagesList = toBulletList(languages);
//         const resumeHTML = `
//             <div class="header">
//                 <h3 contenteditable="true">${name}</h3>
//                 <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
//                 <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
//             </div>
//             <h4 contenteditable="true">Education</h4>
//             <ul>${educationList}</ul>
//             <h4 contenteditable="true">Skills</h4>
//             <ul>${skillsList}</ul>
//             <h4 contenteditable="true">Work Experience</h4>
//             <ul>${experienceList}</ul>
//             <h4 contenteditable="true">Languages</h4>
//             <ul>${languagesList}</ul>
//         `;
//         resumeOutput.innerHTML = resumeHTML;
//         resumePreview.classList.remove("hidden");
//     });
//     downloadBtn.addEventListener("click", () => {
//         const resumeContent = document.getElementById("resumeOutput")!.innerHTML;
//         const pdfWindow = window.open('', '', 'width=800,height=600');
//         pdfWindow?.document.write(`<html><head><title>Resume</title></head><body>${resumeContent}</body></html>`);
//         pdfWindow?.document.close();
//         pdfWindow?.print();
//     });
//     // Generate Unique Shareable URL
//     generateLinkBtn.addEventListener("click", () => {
//         const username = prompt("Enter a unique username for your resume URL:") || "default";
//         const url = `${window.location.href}resume/${username}`;
//         alert(`Your unique resume URL: ${url}`);
//     });
// });
document.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("resumeForm");
    var resumeOutput = document.getElementById("resumeOutput");
    var resumePreview = document.getElementById("resumePreview");
    var downloadBtn = document.getElementById("downloadBtn");
    var generateLinkBtn = document.getElementById("generateLinkBtn");
    form.addEventListener("submit", function (event) {
        event.preventDefault();
        var formData = new FormData(form);
        var name = formData.get("name");
        var email = formData.get("email");
        var phone = formData.get("phone");
        var education = formData.get("education");
        var skills = formData.get("skills");
        var experience = formData.get("experience");
        var languages = formData.get("languages");
        // Function to convert newline-separated values into a bullet list
        var toBulletList = function (data) {
            return data
                .split("\n") // Split by newlines
                .map(function (item) { return "<li contenteditable=\"true\">".concat(item.trim(), "</li>"); }) // Create list items
                .join("");
        };
        // Function to convert comma-separated values into a bullet list
        var toBulletListComma = function (data) {
            return data
                .split(",") // Split by commas
                .map(function (item) { return "<li contenteditable=\"true\">".concat(item.trim(), "</li>"); }) // Create list items
                .join("");
        };
        // Prepare data for the resume
        var educationList = toBulletList(education);
        var experienceList = toBulletList(experience);
        var skillsList = toBulletListComma(skills);
        var languagesList = toBulletListComma(languages);
        // Create resume content
        var resumeHTML = "\n            <div class=\"header\">\n                <h3 contenteditable=\"true\">".concat(name, "</h3>\n                <p><strong>Email:</strong> <span contenteditable=\"true\">").concat(email, "</span></p>\n                <p><strong>Phone:</strong> <span contenteditable=\"true\">").concat(phone, "</span></p>\n            </div>\n            <h4 contenteditable=\"true\">Education</h4>\n            <ul>").concat(educationList, "</ul>\n            <h4 contenteditable=\"true\">Skills</h4>\n            <ul>").concat(skillsList, "</ul>\n            <h4 contenteditable=\"true\">Work Experience</h4>\n            <ul>").concat(experienceList, "</ul>\n            <h4 contenteditable=\"true\">Languages</h4>\n            <ul>").concat(languagesList, "</ul>\n        ");
        // Display the resume
        resumeOutput.innerHTML = resumeHTML;
        resumePreview.classList.remove("hidden");
    });
    downloadBtn.addEventListener("click", function () {
        var resumeContent = document.getElementById("resumeOutput").innerHTML;
        var pdfWindow = window.open("", "", "width=800,height=600");
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.write("<html><head><title>Resume</title></head><body>".concat(resumeContent, "</body></html>"));
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.document.close();
        pdfWindow === null || pdfWindow === void 0 ? void 0 : pdfWindow.print();
    });
    generateLinkBtn.addEventListener("click", function () {
        var username = prompt("Enter a unique username for your resume URL:") || "default";
        var url = "".concat(window.location.href, "resume/").concat(username);
        alert("Your unique resume URL: ".concat(url));
    });
});
