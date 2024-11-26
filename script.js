document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Typing Effect
    const typedTextElement = document.querySelector('.typed-text');
    const phrases = [
        'Software Developer',
        'Web Developer',
        'Problem Solver',
        'Tech Enthusiast'
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentText = phrases[phraseIndex];
        
        if (isDeleting) {
            currentPhrase.pop();
            typingSpeed = 50;
        } else {
            currentPhrase.push(currentText[letterIndex]);
            typingSpeed = 100;
        }
        
        typedTextElement.innerHTML = `${currentPhrase.join('')}<span class="cursor">|</span>`;
        
        if (!isDeleting && letterIndex === currentText.length) {
            isDeleting = true;
            typingSpeed = 2000; // Pause at end
        } else if (isDeleting && currentPhrase.length === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            letterIndex = 0;
            typingSpeed = 500; // Pause before next word
        } else {
            letterIndex = isDeleting ? letterIndex : letterIndex + 1;
        }
        
        setTimeout(type, typingSpeed);
    }
    type();

    // Skills Section
    const skillsGrid = document.querySelector('.skills-grid');
    const skills = [
        { name: 'Python', icon: 'fab fa-python', level: 90 },
        { name: 'JavaScript', icon: 'fab fa-js', level: 85 },
        { name: 'React', icon: 'fab fa-react', level: 80 },
        { name: 'Node.js', icon: 'fab fa-node', level: 75 },
        { name: 'HTML5', icon: 'fab fa-html5', level: 95 },
        { name: 'CSS3', icon: 'fab fa-css3-alt', level: 90 },
        { name: 'Git', icon: 'fab fa-git-alt', level: 85 },
        { name: 'Docker', icon: 'fab fa-docker', level: 70 }
    ];

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <i class="${skill.icon}"></i>
            <h3>${skill.name}</h3>
            <div class="skill-level">
                <div class="skill-progress" style="width: ${skill.level}%"></div>
            </div>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Projects Section
    const projectsGrid = document.querySelector('.projects-grid');
    const projects = [
        {
            name: 'Project One',
            description: 'A modern web application built with React and Node.js',
            image: 'images/project1.jpg',
            technologies: ['React', 'Node.js', 'MongoDB'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            name: 'Project Two',
            description: 'Full-stack e-commerce platform with payment integration',
            image: 'images/project2.jpg',
            technologies: ['Python', 'Django', 'PostgreSQL'],
            liveLink: '#',
            githubLink: '#'
        },
        {
            name: 'Project Three',
            description: 'Real-time chat application using WebSocket',
            image: 'images/project3.jpg',
            technologies: ['Socket.io', 'Express', 'Redis'],
            liveLink: '#',
            githubLink: '#'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}" loading="lazy">
            <div class="project-card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <div class="project-technologies">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.liveLink}" class="btn" target="_blank">Live Demo</a>
                    <a href="${project.githubLink}" class="btn" target="_blank">GitHub</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Contact Form
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const formProps = Object.fromEntries(formData);
        
        try {
            // Here you would typically send the data to your backend
            console.log('Form submitted:', formProps);
            
            // Show success message
            alert('Thank you for your message! I will get back to you soon.');
            contactForm.reset();
        } catch (error) {
            console.error('Error submitting form:', error);
            alert('There was an error sending your message. Please try again later.');
        }
    });

    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('section').forEach(section => {
        section.classList.add('fade-in');
        observer.observe(section);
    });
});
