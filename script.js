 // Disable Right Click
 document.oncontextmenu = () => {
    alert("Love curiosity! But for official info, check out our website.")
    return false;
}


document.addEventListener("contextmenu", function (e) {
    e.preventDefault(); // Disable right-click
});

document.addEventListener("keydown", function (e) {
    if (
        e.ctrlKey && (e.key.toLowerCase() === "u" || e.key.toLowerCase() === "i" || e.key.toLowerCase() === "j" || e.key.toLowerCase() === "s") ||
        e.key === "F12"
    ) {
        e.preventDefault();
        alert("Love curiosity! But for official info, check out our website.");
    }
});

function toggleFAQ(button) {
    let faqItem = button.parentElement;
    let isActive = faqItem.classList.contains("active");

    // Close all FAQ items
    document.querySelectorAll(".faq-item").forEach(item => {
        item.classList.remove("active");
        item.querySelector(".faq-content").style.maxHeight = null;
    });

    // Open the clicked item if it was closed
    if (!isActive) {
        faqItem.classList.add("active");
        let content = faqItem.querySelector(".faq-content");
        content.style.maxHeight = content.scrollHeight + "px";
    }
}
