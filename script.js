document.addEventListener('DOMContentLoaded', function() {
    // Add a class to highlight the current page in the navigation
    const currentPage = window.location.pathname.split('/').pop();
    const navLinks = document.querySelectorAll('nav a');
    navLinks.forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Example of dynamic content loading (you can expand on this)
    const missionSection = document.getElementById('mission');
    if (missionSection) {
        // You can replace this with an actual API call or content management system
        const missionStatement = "Our mission is to provide high-quality care and support to junior members of our community.";
        missionSection.querySelector('p').textContent = missionStatement;
    }
});
