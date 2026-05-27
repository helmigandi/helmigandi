// Create navbar HTML for posts (in posts/category/ folders)
const navbarHTML = `
<h1>Helmigandi</h1>
<nav>
    <a href="../../../index.html" id="nav-home">Home</a>
    <a href="../../../pages/linux.html" id="nav-linux">Linux</a>
    <a href="../../../pages/programming.html" id="nav-programming">Programming</a>
    <a href="../../../pages/postgresql.html" id="nav-postgresql">PostgreSQL</a>
    <a href="../../../pages/git.html" id="nav-git">Git</a>
</nav>
<hr>
`;

// Insert navbar
document.getElementById("navbar").innerHTML = navbarHTML;

// Set active page
const currentPage = document.body.getAttribute("data-page");
const activeLink = document.getElementById("nav-" + currentPage);
if (activeLink) {
  activeLink.classList.add("active");
}
