document.addEventListener('DOMContentLoaded', () => {
    const scrollForMore = document.getElementById('scrollForMore');
    const projectsSection = document.getElementById('projectsContainer');
    const projectCards = document.querySelectorAll('#projectCard');
    const aboutMeSection = document.getElementById('aboutMeContainer');
    const CVButton = document.getElementById('CVButton');
    const WAIButton = document.getElementById('WAIButton');
    const MSButton = document.getElementById('MSButton');
    const skillsContainer = document.getElementById('skillsContainer');
    const MPButton = document.getElementById('MPButton');
    const projectsContainer = document.getElementById('projectsContainer');
    const GitButton = document.getElementById('GitButton');
    const backToTop = document.getElementById('backToTop');
    const viewMoreKC = document.getElementById('viewMoreKC');
    const viewMoreR = document.getElementById('viewMoreR');

    const text = "Welcome";
    let index = 0;
    const speed = 210;
    const titleElement = document.getElementById("banniereTitle");


    const counterElement = document.getElementById("counter_3");
    const target = 7386;

    const counterElement1 = document.getElementById("counter_1");
    const counterElement2 = document.getElementById("counter_2");
    
    let animationStarted = false;

    const controller = new ScrollMagic.Controller();

    scrollForMore.addEventListener('click', (e) => {
        aboutMeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    WAIButton.addEventListener('click', (e) => {
        aboutMeSection.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    MSButton.addEventListener('click', (e) => {
        skillsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    MPButton.addEventListener('click', (e) => {
        projectsContainer.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });

    //Animate custom cursor
    // const cursor = document.querySelector('.custom-cursor');
    // let mouseX = 0, mouseY = 0;
    // let cursorX = 0, cursorY = 0;
    // document.addEventListener('mousemove', (e) => {
    //     mouseX = e.clientX;
    //     mouseY = e.clientY;
    //     cursor.style.backgroundColor = 'rgba(255, 255, 255, 0.8)';
    // });
    // function animateCursor() {
    //     const speed = 0.3; 
    //     cursorX += (mouseX - cursorX) * speed;
    //     cursorY += (mouseY - cursorY) * speed;
    //     cursor.style.transform = `translate(${cursorX}px, ${cursorY}px) translate(-50%, -50%)`;
    //     requestAnimationFrame(animateCursor);
    // }
    // animateCursor();

    projectCards.forEach((card, index) => {
        new ScrollMagic.Scene({
            triggerElement: card,
            triggerHook: 0.9,
            reverse: true
        })
        .on('enter', () => {
            anime({
                targets: card,
                opacity: [0, 1],
                translateX: [50, 0],
                easing: 'easeOutExpo',
                duration: 1000,
                delay: index * 200
            });
        })
        .on('leave', () => {
            anime({
                targets: card,
                opacity: [1, 0],
                translateX: [0, 50],
                easing: 'easeInExpo',
                duration: 800,
                delay: (projectCards.length - index) * 100
            });
        })
        .addTo(controller);
    });




    CVButton.addEventListener('click', () => {
        window.open('assets/CV.pdf');
    });
    
    GitButton.addEventListener('click', () => {
        window.open('https://github.com/hugo94110');
    });

    viewMoreKC.addEventListener('click', () => {
        window.open('https://github.com/hugo94110/projet-to-do-list');
    });
    
    viewMoreR.addEventListener('click', () => {
        window.open('https://traxxouu.github.io/ChallengeWebS1/index.html')
    });



    function updateBackToTop() {
        if (window.scrollY > 120) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    }
    
    window.addEventListener('scroll', updateBackToTop);
    window.addEventListener('load', updateBackToTop);
    
    backToTop.addEventListener('click', () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth'
        });
    });
    
    function typeWriter() {
        if (index < text.length) {
            titleElement.textContent += text.charAt(index);
            index++;
            setTimeout(typeWriter, speed);
        } else {
            titleElement.style.borderRight = "none";
        }
    }

    window.addEventListener("load", typeWriter);

    function updateHeader() {
        const header = document.querySelector('header');
        const scrollPosition = window.scrollY;
        const maxScroll = 300;
        const scrollPercentage = Math.min(scrollPosition / maxScroll, 1);
      
        header.style.backdropFilter = `blur(${scrollPercentage * 43}px)`; // 50
        header.style.backgroundColor = `rgba(0, 0, 0, ${scrollPercentage * 0.5})`; // 0.6
    }
      
    window.addEventListener('scroll', updateHeader);
    window.addEventListener('load', updateHeader);
      
    function animateValue(element, start, end, duration) {
        let startTimestamp = null;
        const step = (timestamp) => {
            if (!startTimestamp) startTimestamp = timestamp;
            const progress = Math.min((timestamp - startTimestamp) / duration, 1);
            element.textContent = Math.floor(progress * (end - start) + start);
            if (progress < 1) {
                window.requestAnimationFrame(step);
            }
        };
        window.requestAnimationFrame(step);
    }
      
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting && !animationStarted) {
                animationStarted = true;
                // Animation des compteurs
                animateValue(counterElement, 0, target, 3000);
                animateValue(counterElement1, 0, 3, 3000);
                animateValue(counterElement2, 0, 5, 3000);
            }
        });
    }, { threshold: 0.5 });
      
    observer.observe(document.getElementById("MoreMeDiv"));
});