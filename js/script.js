function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const header = document.querySelector('header');

    sidebar.classList.toggle('active');
    header.classList.toggle('active'); // Add or remove 'active' class to header

    // Adjust the position of sidebar icon
    const navToggle = document.querySelector('.nav-toggle');
    // if (sidebar.classList.contains('active')) {
    //     navToggle.style.left = '270px';
    // } else {
    //     navToggle.style.left = '20px';
    // }
}

function handleKeyPress(event) {
    if (event.key === 'Enter') {
        toggleSidebar();
    }
}

let flexToggle = document.getElementById("main");

document.getElementById("flexToggle").addEventListener("click", function() {
    if (flexToggle.style.flexDirection === 'row') {
        flexToggle.style.flexDirection = 'column';
        document.querySelectorAll('main > div').forEach(div => div.style.width = '98%');
        document.getElementById("flexToggle").style.marginBottom = '20px';
    } else {
        flexToggle.style.flexDirection = 'row';
        document.querySelectorAll('main > div').forEach(div => div.style.width = '45%');
        document.getElementById("flexToggle").style.margin = 'auto';
    }

    console.log("changed flex direction!");
});