document.addEventListener('DOMContentLoaded', () => {
    // Typing Effect
    const typedTextElement = document.querySelector('.typed-text');
    const phrases = [
        'Software Developer',
        'Web Enthusiast',
        'Problem Solver',
        'Tech Innovator'
    ];
    let phraseIndex = 0;
    let letterIndex = 0;
    let currentPhrase = [];
    let isDeleting = false;

    function type() {
        const currentText = phrases[phraseIndex];
        
        if (isDeleting) {
            currentPhrase = currentPhrase.slice(0, -1);
        } else {
            currentPhrase.push(currentText[letterIndex]);
        }
        
        typedTextElement.textContent = currentPhrase.join('');
        
        if (!isDeleting && letterIndex === currentText.length) {
            isDeleting = true;
            setTimeout(type, 2000);
        } else if (isDeleting && currentPhrase.length === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length;
            letterIndex = 0;
            setTimeout(type, 500);
        } else {
            letterIndex += isDeleting ? -1 : 1;
            setTimeout(type, isDeleting ? 100 : 200);
        }
    }
    type();

    // Skills Dynamic Population
    const skillsGrid = document.querySelector('.skills-grid');
    const skills = [
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' },
        { name: 'Node.js', icon: 'fab fa-node' },
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' }
    ];

    skills.forEach(skill => {
        const skillItem = document.createElement('div');
        skillItem.classList.add('skill-item');
        skillItem.innerHTML = `
            <i class="${skill.icon} fa-3x"></i>
            <h3>${skill.name}</h3>
        `;
        skillsGrid.appendChild(skillItem);
    });

    // Projects Dynamic Population
    const projectsGrid = document.querySelector('.projects-grid');
    const projects = [
        {
            name: 'Personal Website',
            description: 'Modern portfolio website showcasing skills and projects',
            image: 'project1.jpg',
            link: '#'
        },
        {
            name: 'E-commerce Platform',
            description: 'Full-stack e-commerce solution with payment integration',
            image: 'project2.jpg',
            link: '#'
        }
    ];

    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.classList.add('project-card');
        projectCard.innerHTML = `
            <img src="${project.image}" alt="${project.name}">
            <div class="project-card-content">
                <h3>${project.name}</h3>
                <p>${project.description}</p>
                <a href="${project.link}" class="btn">View Project</a>
            </div>
        `;
        projectsGrid.appendChild(projectCard);
    });

    // Contact Form Submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        const name = formData.get('name');
        const email = formData.get('email');
        const message = formData.get('message');

        // Here you would typically send the form data to a backend service
        console.log('Form Submitted:', { name, email, message });
        
        // Simple alert for now
        alert('Thank you for your message! I will get back to you soon.');
        contactForm.reset();
    });
});
