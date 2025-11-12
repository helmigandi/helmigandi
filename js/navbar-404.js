// Create navbar HTML for 404 page (uses absolute paths)
const navbarHTML = `
<h1>Helmigandi</h1>
<nav>
    <a href="/" id="nav-home">Home</a>
    <a href="/pages/linux.html" id="nav-linux">Linux</a>
    <a href="/pages/java.html" id="nav-java">Java</a>
    <a href="/pages/windows.html" id="nav-windows">Windows</a>
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
