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

document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("resumeForm") as HTMLFormElement;
    const resumeOutput = document.getElementById("resumeOutput") as HTMLDivElement;
    const resumePreview = document.getElementById("resumePreview") as HTMLElement;
    const downloadBtn = document.getElementById("downloadBtn") as HTMLButtonElement;
    const generateLinkBtn = document.getElementById("generateLinkBtn") as HTMLButtonElement;

    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const formData = new FormData(form);
        const name = formData.get("name") as string;
        const email = formData.get("email") as string;
        const phone = formData.get("phone") as string;
        const education = formData.get("education") as string;
        const skills = formData.get("skills") as string;
        const experience = formData.get("experience") as string;
        const languages = formData.get("languages") as string;

        // Function to convert newline-separated values into a bullet list
        const toBulletList = (data: string) => {
            return data
                .split("\n") // Split by newlines
                .map(item => `<li contenteditable="true">${item.trim()}</li>`) // Create list items
                .join("");
        };

        // Function to convert comma-separated values into a bullet list
        const toBulletListComma = (data: string) => {
            return data
                .split(",") // Split by commas
                .map(item => `<li contenteditable="true">${item.trim()}</li>`) // Create list items
                .join("");
        };

        // Prepare data for the resume
        const educationList = toBulletList(education);
        const experienceList = toBulletList(experience);
        const skillsList = toBulletListComma(skills);
        const languagesList = toBulletListComma(languages);

        // Create resume content
        const resumeHTML = `
            <div class="header">
                <h3 contenteditable="true">${name}</h3>
                <p><strong>Email:</strong> <span contenteditable="true">${email}</span></p>
                <p><strong>Phone:</strong> <span contenteditable="true">${phone}</span></p>
            </div>
            <h4 contenteditable="true">Education</h4>
            <ul>${educationList}</ul>
            <h4 contenteditable="true">Skills</h4>
            <ul>${skillsList}</ul>
            <h4 contenteditable="true">Work Experience</h4>
            <ul>${experienceList}</ul>
            <h4 contenteditable="true">Languages</h4>
            <ul>${languagesList}</ul>
        `;

        // Display the resume
        resumeOutput.innerHTML = resumeHTML;
        resumePreview.classList.remove("hidden");
    });

    downloadBtn.addEventListener("click", () => {
        const resumeContent = document.getElementById("resumeOutput")!.innerHTML;
        const pdfWindow = window.open("", "", "width=800,height=600");
        pdfWindow?.document.write(`<html><head><title>Resume</title></head><body>${resumeContent}</body></html>`);
        pdfWindow?.document.close();
        pdfWindow?.print();
    });

    generateLinkBtn.addEventListener("click", () => {
        const username = prompt("Enter a unique username for your resume URL:") || "default";
        const url = `${window.location.href}resume/${username}`;
        alert(`Your unique resume URL: ${url}`);
    });
});



