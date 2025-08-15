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
document.addEventListener('DOMContentLoaded', function () {
    const textRain = document.getElementById('textRain');
    const chars = "ABC0$%#@!&*123(){}[]<4DEFGHIJKLMNOPQRSTUVWXYZabcd567ÅÆÇÈ89efgh¡¢£¤¥¦ijüýþÿkl§¨©ª«¬­®mno×Øpqrsö÷øùtuvwxyz";

    const numDrops = 100;

    for (let i = 0; i < numDrops; i++) {
        setTimeout(() => {
            const drop = document.createElement('div');
            drop.classList.add('rain-drop');

            drop.textContent = chars.charAt(Math.floor(Math.random() * chars.length));

            const size = Math.random() * 20 + 15;
            drop.style.fontSize = `${size}px`;
            drop.style.left = `${Math.random() * 100}%`;
            drop.style.top = `${Math.random() * -100}px`;

            const duration = Math.random() * 5 + 3;
            const delay = Math.random() * 5;
            drop.style.animation = `rainFall ${duration}s linear ${delay}s infinite`;

            drop.style.opacity = Math.random() * 0.5 + 0.1;

            textRain.appendChild(drop);
        }, i * 100);
    }

    const floatingShapes = document.getElementById('floatingShapes');
    const numShapes = 15;

    for (let i = 0; i < numShapes; i++) {
        setTimeout(() => {
            const shape = document.createElement('div');

            const shapeTypes = ['circle', 'triangle', 'square'];
            const shapeType = shapeTypes[Math.floor(Math.random() * shapeTypes.length)];
            shape.classList.add('shape', shapeType);

            const size = Math.random() * 120 + 30;

            if (shapeType === 'circle') {
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
            }
            else if (shapeType === 'triangle') {
                const borderWidth = size / 2;
                shape.style.width = '0';
                shape.style.height = '0';
                shape.style.borderWidth = `0 ${borderWidth}px ${size}px ${borderWidth}px`;
                shape.style.borderColor = `transparent transparent rgba(44, 118, 248, ${Math.random() * 0.1 + 0.05}) transparent`;
            }
            else if (shapeType === 'square') {
                shape.style.width = `${size}px`;
                shape.style.height = `${size}px`;
            }

            shape.style.left = `${Math.random() * 100}%`;
            shape.style.top = `${Math.random() * 100}%`;

            const duration = Math.random() * 15 + 10;
            const delay = Math.random() * 5;
            shape.style.animation = `float ${duration}s ease-in-out ${delay}s infinite`;

            floatingShapes.appendChild(shape);
        }, i * 300);
    }

    const textParticles = document.getElementById('textParticles');
    const words = ["HTML", "CSS", "JS", "GANESH", "REACT", "PYTHON", "DJANGO", "RAWAT", "SQL", "C", "C++", "JAVA", "WEB", "DEV", "AI", "ML", "DATA", "SCIENCE",];

    function createTextParticle() {
        const particle = document.createElement('div');
        particle.classList.add('text-particle');

        if (Math.random() > 0.5) {
            particle.textContent = words[Math.floor(Math.random() * words.length)];
        } else {
            particle.textContent = chars.charAt(Math.floor(Math.random() * chars.length));
        }

        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        const tx = (Math.random() - 0.5) * 300;
        const ty = (Math.random() - 0.5) * 300;
        particle.style.setProperty('--tx', `${tx}px`);
        particle.style.setProperty('--ty', `${ty}px`);

        const size = Math.random() * 20 + 10;
        particle.style.fontSize = `${size}px`;
        particle.style.opacity = Math.random() * 0.4 + 0.1;

        const duration = Math.random() * 15 + 10;
        particle.style.animation = `floatParticle ${duration}s linear forwards`;

        textParticles.appendChild(particle);

        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    for (let i = 0; i < 20; i++) {
        setTimeout(createTextParticle, i * 300);
    }

    setInterval(createTextParticle, 500);

    document.addEventListener('mousemove', (e) => {
        const particles = document.querySelectorAll('.text-particle');
        particles.forEach(particle => {
            const rect = particle.getBoundingClientRect();
            const dx = e.clientX - (rect.left + rect.width / 2);
            const dy = e.clientY - (rect.top + rect.height / 2);
            const distance = Math.sqrt(dx * dx + dy * dy);

            if (distance < 150) {
                particle.style.transform = `translate(${particle.style.getPropertyValue('--tx')}, ${particle.style.getPropertyValue('--ty')}) scale(1.5)`;
                particle.style.color = 'rgba(44, 118, 248, 0.8)';
            }
        });
    });

    function createStars() {
        const starsContainer = document.getElementById('stars');
        const starCount = 100;

        for (let i = 0; i < starCount; i++) {
            const star = document.createElement('div');
            star.classList.add('star');

            star.style.left = `${Math.random() * 100}%`;
            star.style.top = `${Math.random() * 100}%`;

            const size = Math.random() * 3 + 1;
            const opacity = Math.random() * 0.6 + 0.2;
            star.style.setProperty('--size', `${size}px`);
            star.style.setProperty('--opacity', opacity);

            const duration = Math.random() * 4 + 2;
            star.style.setProperty('--duration', `${duration}s`);

            starsContainer.appendChild(star);
        }
    }

    function createShootingStar() {
        const shootingStars = document.getElementById('shootingStars');
        const star = document.createElement('div');
        star.classList.add('shooting-star');

        const startX = Math.random() * 100;
        const startY = Math.random() * 30;
        star.style.setProperty('--startX', `${startX}vw`);
        star.style.setProperty('--startY', `${startY}vh`);

        const endX = startX + Math.random() * 20 + 20;
        const endY = startY + Math.random() * 50 + 30;
        star.style.setProperty('--endX', `${endX}vw`);
        star.style.setProperty('--endY', `${endY}vh`);

        const duration = Math.random() * 3 + 2;
        star.style.setProperty('--duration', `${duration}s`);

        shootingStars.appendChild(star);

        setTimeout(() => {
            star.remove();
        }, duration * 1000);
    }

    createStars();

    setInterval(createShootingStar, 2000);

    for (let i = 0; i < 5; i++) {
        setTimeout(createShootingStar, i * 500);
    }

});