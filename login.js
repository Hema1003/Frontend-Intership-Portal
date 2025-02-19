let selectedCard = "student";

window.onload = () => {
    // Remove the "loading" class after the page fully loads
    document.body.classList.remove("loading");

    // Ensure studentCard is visible initially
    const studentCard = document.getElementById("studentCard");
    const adminCard = document.getElementById("adminCard");

    studentCard.classList.add("show");
    studentCard.classList.remove("hide");
    adminCard.classList.add("hide");
    adminCard.classList.remove("show");
};

function saveData() {
    const usernameInput = document.getElementById(`${selectedCard}Username`);
    const passwordInput = document.getElementById(`${selectedCard}Password`);
    const displayUsername = document.getElementById("displayUsername");
    const displayPassword = document.getElementById("displayPassword");

    displayUsername.textContent = usernameInput.value;
    displayPassword.textContent = passwordInput.value;
}

function resetLogin() {
    document.getElementById("studentUsername").value = "";
    document.getElementById("studentPassword").value = "";
    document.getElementById("adminUsername").value = "";
    document.getElementById("adminPassword").value = "";
}

function selectCard(card) {
    selectedCard = card;
    resetLogin();

    const studentCard = document.getElementById("studentCard");
    const adminCard = document.getElementById("adminCard");
    const selectorBg = document.getElementById("selectorBg");

    if (card === "student") {
        studentCard.classList.add("show");
        studentCard.classList.remove("hide");
        adminCard.classList.add("hide");
        adminCard.classList.remove("show");
        selectorBg.style.transform = "translateX(0)";
    } else {
        adminCard.classList.add("show");
        adminCard.classList.remove("hide");
        studentCard.classList.add("hide");
        studentCard.classList.remove("show");
        selectorBg.style.transform = "translateX(95px)";
    }
}
