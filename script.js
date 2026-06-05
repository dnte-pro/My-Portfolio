document.addEventListener('DOMContentLoaded', () => {
    let menuIcon = document.querySelector('#menu-icon');
    let navbar = document.querySelector('.navbar');
    const projectsContainer = document.querySelector('.projects-container');
    const projectCards = document.querySelectorAll('.project-card');
    const projectsToggleBtn = document.querySelector('#projects-toggle-btn');
    const visibleProjectCount = 6;

    if (menuIcon && navbar) {
        menuIcon.onclick = () => {
            // toggle the navbar
            navbar.classList.toggle('active');

            // toggle between bx-menu and bx-x
            if (navbar.classList.contains('active')) {
                menuIcon.classList.remove('bx-menu');
                menuIcon.classList.add('bx-x');
            } else {
                menuIcon.classList.remove('bx-x');
                menuIcon.classList.add('bx-menu');
            }
        };
    } else {
        console.error('menuIcon or navbar not found in the DOM.');
    }

    if (projectsContainer && projectsToggleBtn && projectCards.length > visibleProjectCount) {
        const setProjectsExpanded = (expanded) => {
            projectCards.forEach((card, index) => {
                card.classList.toggle('is-hidden', !expanded && index >= visibleProjectCount);
            });

            projectsToggleBtn.textContent = expanded ? 'Show Less' : 'Show More';
            projectsToggleBtn.setAttribute('aria-expanded', expanded.toString());
        };

        setProjectsExpanded(false);

        projectsToggleBtn.addEventListener('click', () => {
            const isExpanded = projectsToggleBtn.getAttribute('aria-expanded') === 'true';
            setProjectsExpanded(!isExpanded);
        });
    } else if (projectsToggleBtn) {
        projectsToggleBtn.style.display = 'none';
    }
});
