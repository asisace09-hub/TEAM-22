const accounts = [
    {
        Username: "Ace",
        Password: "Ali",
        Role: "admin"
    },
    {
        Username: "Vaay",
        Password: "Maye",
        Role: "staff"
    },
    {
        Username: "User",
        Password: "User",
        Role: "resident"
    },
    {
        Username: "default",
        Password: "PCC",
        Role: "all"
    }
];

document.getElementById("loginForm").addEventListener("submit", event => {
    event.preventDefault();

    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value;
    const message = document.getElementById("loginMessage");

    const account = accounts.find(account =>
        account.Username === username && account.Password === password
    );

    if (account) {
        sessionStorage.setItem("BarangayRole", account.Role);
        window.location.assign(new URL("bayaw%20ni%20philip.html", document.baseURI).href);
        return;
    }

    message.textContent = "Invalid username or password.";
});