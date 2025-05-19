// DOM Elements
const themeToggle = document.getElementById('theme-icon');
const navbar = document.querySelector('.navbar');
const backToTop = document.querySelector('.back-to-top');
const skillProgress = document.querySelectorAll('.skill-progress');
const projectCards = document.querySelectorAll('.project-card');
const contactForm = document.getElementById('contactForm');
const typewriterElement = document.getElementById('typewriter');

// Project Data
const projectData = {
    vpad: {
        title: 'VPad Text Editor',
        description: 'A Python-based text editor with modern UI and essential features like syntax highlighting, file operations, and customizable themes. Built using Tkinter for the GUI.',
        image: 'https://cdn-icons-png.flaticon.com/512/4400/4400968.png',
        technologies: ['Python', 'Tkinter', 'Object-Oriented Programming'],
        livePreview: 'https://github.com/VishalSale/VPad_text_editor',
        github: 'https://github.com/VishalSale/VPad_text_editor.git'
    },
    storytelling: {
        title: 'The Art of Visual Storytelling',
        description: 'A project that leverages advanced AI models for image recognition and narrative generation.',
        image: 'Images/The Art of Visual Storytelling.jpg',
        technologies: ['AI', 'Image Recognition', 'Storytelling'],
        livePreview: '#',
        github: 'https://github.com/VishalSale/The_Art_of_Visual_Storytelling_Project.git'
    },
    bookBidding: {
        title: 'Book Bidding and Reselling',
        description: 'A platform for bidding and reselling books.',
        image: 'Images/Book Bidding and Reselling.jpg',
        technologies: ['Web Development', 'E-commerce'],
        livePreview: '#',
        github: 'https://github.com/VishalSale/Book_Bidding_and_reselling.git'
    },
    temperatureConverter: {
        title: 'Temperature Converter',
        description: 'A simple tool to convert temperatures between different units.',
        image: 'Images/Temperature Converter.jpg',
        technologies: ['JavaScript', 'Web App'],
        livePreview: 'https://vishalsale.github.io/Temperature_Converter/',
        github: '#'
    },
    traveling: {
        title: 'Traveling',
        description: 'A project showcasing various travel destinations.',
        image: 'Images/Traveling.jpg',
        technologies: ['Web Development', 'Tourism'],
        livePreview: 'https://vishalsale.github.io/Traveling/',
        github: '#'
    },
    diceGame: {
        title: 'Dice Game',
        description: 'A simple dice game built using JavaScript.',
        image: 'Images/Dice Game.jpg',
        technologies: ['JavaScript', 'Game Development'],
        livePreview: 'https://vishalsale.github.io/Dice_game/',
        github: '#'
    },
    calculator: {
        title: 'Calculator',
        description: 'A basic calculator built using JavaScript.',
        image: 'Images/Calculator.jpg',
        technologies: ['JavaScript', 'Web App'],
        livePreview: 'https://vishalsale.github.io/Calculator/',
        github: '#'
    },
    numberGuessingGame: {
        title: 'Number Guessing Game',
        description: 'A fun number guessing game.',
        image: 'Images/Number Guessing Game.jpg',
        technologies: ['JavaScript', 'Game Development'],
        livePreview: 'https://vishalsale.github.io/Number_guessing_game/',
        github: '#'
    },
    portfolioDeepak: {
        title: 'Portfolio (Deepak Aaba Salunkhe)',
        description: 'A portfolio website for Deepak Aaba Salunkhe.',
        image: 'Images/DipakAbaPortfolio.jpg',
        technologies: ['Web Development', 'Portfolio'],
        livePreview: 'https://deepakaaba.com/',
        github: '#'
    },
    voterSlip: {
        title: 'Voter Slip Download Website',
        description: 'A website to download voter slips.',
        image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSp_1ntLuNx2yd5gDQ19yvSUNO_zqWsqT4kwg&s',
        technologies: ['Web Development', 'Government Services'],
        livePreview: 'https://voter.topanalytica.in/',
        github: '#'
    },
    portfolioJayashree: {
        title: 'Portfolio (Jayashree Madan Patil)',
        description: 'A portfolio website for Jayashree Madan Patil.',
        image: 'Images/Jayshreetai patil.jpg',
        technologies: ['Web Development', 'Portfolio'],
        livePreview: 'https://jayshreepatil.com/',
        github: '#'
    }
}

// Theme Toggle
themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    if (document.body.classList.contains('dark-theme')) {
        themeToggle.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'dark');
    } else {
        themeToggle.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'light');
    }
});

// Check for saved theme preference
const savedTheme = localStorage.getItem('theme');
if (savedTheme === 'dark') {
    document.body.classList.add('dark-theme');
    themeToggle.classList.replace('fa-moon', 'fa-sun');
}

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }

    // Back to Top Button
    if (window.scrollY > 300) {
        backToTop.classList.add('active');
    } else {
        backToTop.classList.remove('active');
    }

    // Animate skill bars on scroll
    animateOnScroll();
});

// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId === '#') return;

        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 70,
                behavior: 'smooth'
            });
        }
    });
});

// Back to Top Button Click
backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Typewriter Effect
function typeWriter(text, i, fnCallback) {
    if (i < text.length) {
        typewriterElement.innerHTML = text.substring(0, i + 1) + '<span class="cursor">|</span>';

        // Wait for a while before typing the next character
        setTimeout(function () {
            typeWriter(text, i + 1, fnCallback);
        }, 100);
    } else if (typeof fnCallback == 'function') {
        // Wait a bit, then start erasing
        setTimeout(function () {
            eraseText(text, text.length, fnCallback);
        }, 1000);
    }
}

function eraseText(text, i, fnCallback) {
    if (i > 0) {
        typewriterElement.innerHTML = text.substring(0, i - 1) + '<span class="cursor">|</span>';

        setTimeout(function () {
            eraseText(text, i - 1, fnCallback);
        }, 50);
    } else if (typeof fnCallback == 'function') {
        // Text erased, call callback to start typing the next text
        setTimeout(fnCallback, 500);
    }
}

// Start the typewriter effect
function startTypewriter() {
    const textArray = ["Full Stack Developer", "MERN Stack Developer"];
    let textArrayIndex = 0;

    function typeNextText() {
        if (textArrayIndex < textArray.length) {
            typeWriter(textArray[textArrayIndex], 0, function () {
                textArrayIndex++;
                if (textArrayIndex >= textArray.length) {
                    textArrayIndex = 0;
                }
                typeNextText();
            });
        }
    }

    typeNextText();
}

// Initialize Particles.js
function initParticles() {
    particlesJS('particles-js', {
        particles: {
            number: {
                value: 80,
                density: {
                    enable: true,
                    value_area: 800
                }
            },
            color: {
                value: '#4a63e7'
            },
            shape: {
                type: 'circle',
                stroke: {
                    width: 0,
                    color: '#000000'
                }
            },
            opacity: {
                value: 0.5,
                random: false,
                anim: {
                    enable: false
                }
            },
            size: {
                value: 3,
                random: true,
                anim: {
                    enable: false
                }
            },
            line_linked: {
                enable: true,
                distance: 150,
                color: '#4a63e7',
                opacity: 0.4,
                width: 1
            },
            move: {
                enable: true,
                speed: 2,
                direction: 'none',
                random: false,
                straight: false,
                out_mode: 'out',
                bounce: false,
                attract: {
                    enable: false
                }
            }
        },
        interactivity: {
            detect_on: 'canvas',
            events: {
                onhover: {
                    enable: true,
                    mode: 'grab'
                },
                onclick: {
                    enable: true,
                    mode: 'push'
                },
                resize: true
            },
            modes: {
                grab: {
                    distance: 140,
                    line_linked: {
                        opacity: 1
                    }
                },
                push: {
                    particles_nb: 4
                }
            }
        },
        retina_detect: true
    });
}

// Animate elements when they come into view
function animateOnScroll() {
    // Animate skill bars
    skillProgress.forEach(progress => {
        const position = progress.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (position < screenPosition) {
            const progressValue = progress.getAttribute('data-progress');
            progress.style.width = progressValue + '%';
        }
    });
}

// Project Modal
projectCards.forEach(card => {
    card.addEventListener('click', () => {
        const projectId = card.getAttribute('data-project');
        const project = projectData[projectId];

        // Set modal content
        document.getElementById('modalTitle').textContent = project.title;
        document.getElementById('modalImage').src = project.image;
        document.getElementById('modalDescription').textContent = project.description;

        // Set technologies
        const techContainer = document.getElementById('modalTechnologies');
        techContainer.innerHTML = '';
        project.technologies.forEach(tech => {
            const span = document.createElement('span');
            span.textContent = tech;
            techContainer.appendChild(span);
        });

        // Set links
        document.getElementById('livePreviewBtn').href = project.livePreview;
        document.getElementById('githubBtn').href = project.github;

        // Show modal
        const projectModal = new bootstrap.Modal(document.getElementById('projectModal'));
        projectModal.show();
    });
});

// Form Validation
contactForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields');
        return;
    }

    if (!isValidEmail(email)) {
        alert('Please enter a valid email address');
        return;
    }

    // Form is valid, you would normally send the data to a server here
    alert('Message sent successfully!');
    contactForm.reset();
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    startTypewriter();
    initParticles();
    animateOnScroll();
});

// for contact from
function submitForm() {
    // Get form values
    let name = document.getElementById("Name").value;
    let project = document.getElementById("Project").value;
    let message = document.getElementById("Message").value;

    var mailtoLink = "mailto:vishalsale802@gmail.com" + "?subject=Message from " + name + " " + "Regarding " + project + "&body=" + message;
    window.location.href = mailtoLink;
}

// get full year
function getFullYear() {
    var date = new Date();
    var year = date.getFullYear();
    document.getElementById("year").innerHTML = year;
}

window.onload = getFullYear;


// for colapse navbar
document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    navLinks.forEach(function (navLink) {
        navLink.addEventListener('click', function () {
            if (navbarCollapse.classList.contains('show')) {
                navbarCollapse.classList.remove('show');
            }
        });
    });
});

//  for contact form sumbit
document.addEventListener("DOMContentLoaded", function () {
    const formSubmit = document.getElementById("formSubmit");
    const Name = document.getElementById("Name");
    const Project = document.getElementById("Project");
    const Message = document.getElementById("Message");

    function checkFormData() {
        formSubmit.disabled = Name.value.trim() === '' || Project.value.trim() === '' || Message.value.trim() === '';
    }

    Name.addEventListener("input", checkFormData);
    Project.addEventListener("input", checkFormData);
    Message.addEventListener("input", checkFormData);

    checkFormData(); // Initial check
});
