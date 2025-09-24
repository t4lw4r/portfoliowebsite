// Update footer year automatically
document.getElementById("year").textContent = new Date().getFullYear();

// Handle contact form submission
function handleContact(event) {
    event.preventDefault();

    // Collect form values
    const name = document.getElementById("name").value.trim();
    const email = document.getElementById("email").value.trim();
    const subject = document.getElementById("subject").value.trim() || "New message from portfolio";
    const message = document.getElementById("message").value.trim();

    // Build email link
    const mailtoLink = `mailto:youremail@example.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
        `Name: ${name}\nEmail: ${email}\n\nMessage:\n${message}`
    )}`;

    // Open in default mail client
    window.location.href = mailtoLink;

    // Optional: show a quick confirmation
    alert("Thanks for reaching out! Your email client should now open.");
}
