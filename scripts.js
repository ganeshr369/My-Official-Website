function toggleDiv() {
    const div1 = document.getElementById("container");
    const div2 = document.getElementById("info");

    const showingDiv1 = div1.classList.contains('visible');

    if (showingDiv1) {
        div1.classList.remove('visible');
        div1.classList.add('hidden');

        div2.classList.remove('hidden');
        div2.classList.add('visible');
    } else {
        div1.classList.remove('hidden');
        div1.classList.add('visible');

        div2.classList.remove('visible');
        div2.classList.add('hidden');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const elements = [
        { selector: ".name", delay: 1500 },
        { selector: ".description", delay: 2500 },
        { selector: ".social-links", delay: 3500 },
        { selector: ".thank-you", delay: 7500 },
        { selector: ".info-div", delay: 8000 },
    ];
    elements.forEach(({ selector, delay }) => {
        setTimeout(() => {
            el = document.querySelector(selector)
            if (el) {
                el.style.display = 'block';
            }
        }, delay);
    });
    setTimeout(() => {
        document.querySelector(".thank-you").style.display = 'none';
    }, 25000);
});

