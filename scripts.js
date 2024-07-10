document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { selector: ".name", delay: 1500 },
        { selector: ".description", delay: 2500 },
        { selector: ".social-links", delay: 3500 },
        { selector: ".thank-you", delay: 7500 }
    ];

    elements.forEach(({ selector, delay }) => {
        setTimeout(() => {
            document.querySelector(selector).style.display = 'block';
        }, delay);
    });

    setTimeout(() => {
        document.querySelector(".thank-you").style.display = 'none';
    }, 25000);
});
