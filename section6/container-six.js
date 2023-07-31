function changeTab(tabIndex) {
    const tabLinks = document.querySelectorAll('.tablink');
    const tabContents = document.querySelectorAll('.tabs1');

    // Remove 'active' class from all tab links
    tabLinks.forEach(function(link) {
        link.classList.remove('active');
    });

    // Add 'active' class to the clicked tab link
    tabLinks[tabIndex].classList.add('active');

    // Hide all tab contents
    tabContents.forEach(function(content) {
        content.style.display = 'none';
    });

    // Show the selected tab content
    tabContents[tabIndex].style.display = 'block';
}

// Manually add 'active' class to the default tab link and show the corresponding tab content
document.addEventListener('DOMContentLoaded', function() {
    const defaultTab = document.getElementById('default');
    const tabIndex = Array.from(defaultTab.parentNode.parentNode.children).indexOf(defaultTab.parentNode);
    changeTab(tabIndex);
});