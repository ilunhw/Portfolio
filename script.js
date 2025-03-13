// Finne Hamburger-meny knappen
document.getElementById('burger-menu').addEventListener('click', function() {
    // Slå på den "aktive" klassen på mobilnavigasjonen for å vise/skjule menyen
    var mobileNav = document.getElementById('mobile-nav');
    mobileNav.classList.toggle('active');
});