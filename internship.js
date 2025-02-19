let counter = 0;
let internshipName = "abc";
let currentStatus = "pending";
function addInternship() {
    counter++;
    document.querySelector(".internship-container").innerHTML += `
        <div class="internship-card">
            <div class="internship-header">Internship ${counter}</div>
            <div class="internship-details">
                <p><strong>Name: ${internshipName}</strong></p>
                <p><strong>Current Status: ${currentStatus}</strong></p>
            </div>
        </div>
    `;
}