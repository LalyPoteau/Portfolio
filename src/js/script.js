ScrollReveal().reveal('.Main');
ScrollReveal().reveal('.AboutMe');
ScrollReveal().reveal('.Contact');

document.addEventListener("DOMContentLoaded", () => {
    const mains = document.querySelectorAll('.Main');

    mains.forEach(main => {
        const modal = main.querySelector('.modal');
        const trigger = main.querySelector('.project-trigger');
        let closeBtn = null;
        
        // On déplace le modal dans le body pour éviter les problèmes de transform CSS
        // qui bloquent le position: fixed à l'intérieur de .Main
        if (modal) {
            closeBtn = modal.querySelector('.close-btn');
            document.body.appendChild(modal);
        }

        if(modal && trigger && closeBtn) {
            trigger.addEventListener('click', (e) => {
                e.preventDefault();
                modal.classList.add('show');
                document.body.style.overflow = 'hidden'; // bloque le scroll de fond
            });

            closeBtn.addEventListener('click', () => {
                modal.classList.remove('show');
                document.body.style.overflow = '';
            });

            modal.addEventListener('click', (e) => {
                if (e.target === modal) {
                    modal.classList.remove('show');
                    document.body.style.overflow = '';
                }
            });
        }
    });
});
