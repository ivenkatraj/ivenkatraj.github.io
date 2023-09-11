// Function to include navigation content
function includeNavigation() {
    fetch('/templates/top-navigation.html')
        .then(response => response.text())
        .then(html => {
            const navigationContainer = document.getElementById('navigation-container');
            if (navigationContainer) {
                navigationContainer.innerHTML = html;

                // Add event listener for menu toggle after content is inserted
                const menuToggle = document.getElementById('menu-toggle');
                const menu = document.querySelector('.menu');
                const line1 = document.querySelector('.line-1');
                const line2 = document.querySelector('.line-2');

                if (menuToggle) {
                    menuToggle.addEventListener('click', () => {
                        menu.classList.toggle('active');
                        line1.classList.toggle('rotate-down');
                        line2.classList.toggle('rotate-up');
                    });
                }
            }
        })
        .catch(error => {
            console.error('Error fetching navigation content:', error);
        });
}

// Call the includeNavigation function to load the navigation content
includeNavigation();
