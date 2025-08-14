// Load navbar
fetch("../partials/nav.html")
    .then(res => res.text())
    .then(data => document.getElementById("navbar").innerHTML = data)
    .catch(err => console.error("Navbar load error:", err));

// Load footer
fetch("../partials/footer.html")
    .then(res => res.text())
    .then(data => document.getElementById("footer").innerHTML = data)
    .catch(err => console.error("Footer load error:", err));
