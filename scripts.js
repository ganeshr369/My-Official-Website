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

    const lightningCanvas = document.getElementById('lightningCanvas');
    const cloudCanvas = document.getElementById('cloudCanvas');
    const lightningCtx = lightningCanvas.getContext('2d');
    const cloudCtx = cloudCanvas.getContext('2d');

    function resizeCanvases() {
        lightningCanvas.width = cloudCanvas.width = window.innerWidth;
        lightningCanvas.height = cloudCanvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvases);
    resizeCanvases();

    const clouds = [];

    function initClouds() {
        for (let i = 0; i < 5; i++) {
            clouds.push({
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight * 0.3,
                width: 200 + Math.random() * 300,
                height: 50 + Math.random() * 100,
                speed: 0.2 + Math.random() * 0.5,
                opacity: 0.2 + Math.random() * 0.3
            });
        }
    }

    function drawClouds() {
        cloudCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        for (const cloud of clouds) {
            const gradient = cloudCtx.createRadialGradient(
                cloud.x, cloud.y, 0,
                cloud.x, cloud.y, cloud.width / 2
            );
            gradient.addColorStop(0, `rgba(50, 50, 70, ${cloud.opacity + 0.2})`);
            gradient.addColorStop(1, `rgba(50, 50, 70, 0)`);

            cloudCtx.beginPath();
            cloudCtx.ellipse(cloud.x, cloud.y, cloud.width / 2, cloud.height / 2, 0, 0, Math.PI * 2);
            cloudCtx.fillStyle = gradient;
            cloudCtx.fill();

            cloud.x += cloud.speed;

            if (cloud.x > window.innerWidth + cloud.width) {
                cloud.x = -cloud.width;
                cloud.y = Math.random() * window.innerHeight * 0.3;
            }
        }
    }

    let lightningActive = false;
    let lightningPath = [];
    let branches = [];
    let flashOpacity = 0;

    function generateLightningPath() {
        lightningPath = [];
        branches = [];

        let x = window.innerWidth * (0.2 + Math.random() * 0.6);
        let y = 0;

        lightningPath.push({ x, y });

        while (y < window.innerHeight * 0.8) {
            const lastSegment = lightningPath[lightningPath.length - 1];

            y += 15 + Math.random() * 25;
            x += (Math.random() - 0.5) * 80;

            lightningPath.push({ x, y });

            if (Math.random() < 0.25 && y < window.innerHeight * 0.7) {
                createBranch(lastSegment.x, lastSegment.y, 0);
            }
        }
    }

    function createBranch(startX, startY, depth) {
        if (depth > 2) return;

        let x = startX;
        let y = startY;
        const branch = [];

        branch.push({ x, y });

        const branchLength = 2 + Math.floor(Math.random() * 4);

        for (let i = 0; i < branchLength; i++) {
            y += 8 + Math.random() * 15;
            x += (Math.random() - 0.5) * 50;

            branch.push({ x, y });

            if (Math.random() < 0.2) {
                createBranch(x, y, depth + 1);
            }
        }

        branches.push(branch);
    }

    function drawLightning() {
        drawLightningPath(lightningPath, 3, `rgba(255, 255, 255, ${flashOpacity})`, 10, `rgba(200, 200, 255, ${flashOpacity * 0.5})`);

        for (const branch of branches) {
            drawLightningPath(branch, 1.5, `rgba(255, 255, 255, ${flashOpacity * 0.7})`, 5, `rgba(200, 200, 255, ${flashOpacity * 0.3})`);
        }
    }

    function drawLightningPath(path, lineWidth, mainColor, glowWidth, glowColor) {
        lightningCtx.beginPath();
        lightningCtx.strokeStyle = glowColor;
        lightningCtx.lineWidth = glowWidth;
        lightningCtx.moveTo(path[0].x, path[0].y);

        for (let i = 1; i < path.length; i++) {
            lightningCtx.lineTo(path[i].x, path[i].y);
        }

        lightningCtx.stroke();

        lightningCtx.beginPath();
        lightningCtx.strokeStyle = mainColor;
        lightningCtx.lineWidth = lineWidth;
        lightningCtx.moveTo(path[0].x, path[0].y);

        for (let i = 1; i < path.length; i++) {
            lightningCtx.lineTo(path[i].x, path[i].y);
        }

        lightningCtx.stroke();
    }

    function drawScene() {
        lightningCtx.clearRect(0, 0, window.innerWidth, window.innerHeight);

        const gradient = lightningCtx.createLinearGradient(0, 0, 0, window.innerHeight);
        gradient.addColorStop(0, '#0a0a1a');
        gradient.addColorStop(1, '#1a1a2e');

        lightningCtx.fillStyle = gradient;
        lightningCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

        if (lightningActive) {
            lightningCtx.fillStyle = `rgba(255, 255, 255, ${flashOpacity * 0.2})`;
            lightningCtx.fillRect(0, 0, window.innerWidth, window.innerHeight);

            drawLightning();
        }
    }

    function animateLightning() {
        lightningActive = true;
        generateLightningPath();

        const intensity = 0.5 + Math.random() * 0.5;
        flashOpacity = intensity;

        let flickerCount = 3 + Math.floor(Math.random() * 3);
        const flicker = setInterval(() => {
            flashOpacity = flickerCount > 0 ? intensity * (0.3 + Math.random() * 0.7) : 0;

            flickerCount--;
            if (flickerCount <= 0) {
                clearInterval(flicker);
                lightningActive = false;
            }
        }, 100);
    }

    function triggerLightning() {
        if (!lightningActive) {
            animateLightning();
        }

        const delay = 6000 + Math.random() * 7000;
        setTimeout(triggerLightning, delay);
    }

    function animate() {
        drawClouds();
        drawScene();
        requestAnimationFrame(animate);
    }

    initClouds();
    animate();
    triggerLightning();
});