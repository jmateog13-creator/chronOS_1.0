// Imports removed for non-module support
const composers = window.composers;
const renderFeed = window.renderFeed;
const renderProfile = window.renderProfile;
const renderSearch = window.renderSearch;
const renderActivity = window.renderActivity;

const app = document.getElementById('app');
const navItems = document.querySelectorAll('.nav-item');

// Simple Router
function navigate(target, params = {}) {
    app.innerHTML = '';

    // Update Nav
    navItems.forEach(item => {
        if (item.dataset.target === target) {
            item.classList.add('active');
            // Update icon style if needed (solid vs regular)
            const icon = item.querySelector('i');
            if (icon && icon.classList.contains('far')) {
                icon.classList.replace('far', 'fas');
            }
        } else {
            item.classList.remove('active');
            const icon = item.querySelector('i');
            if (icon && icon.classList.contains('fas') && item.dataset.target !== 'home') { // Home icon is always solid in FA free usually, but let's keep simple
                // icon.classList.replace('fas', 'far'); 
            }
        }
    });

    switch (target) {
        case 'feed':
            app.appendChild(renderFeed(composers));
            break;
        case 'profile':
            // Default to first composer if no id provided, or specific one
            const composerId = params.id || composers[0].id;
            const composer = composers.find(c => c.id === composerId);
            app.appendChild(renderProfile(composer));
            break;
        case 'search':
            app.appendChild(renderSearch(composers));
            break;
        case 'activity':
            app.appendChild(renderActivity(composers));
            break;
        default:
            app.appendChild(renderFeed(composers));
    }
}

// Event Listeners for Nav
navItems.forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const target = item.dataset.target;
        // For simplicity, 'add' just goes to feed or do nothing
        if (['add'].includes(target)) return;
        navigate(target);
    });
});

// Initial Load
navigate('feed');

// Expose navigate to window for inline onclicks if needed (though we try to avoid)
window.navigateToProfile = (id) => {
    navigate('profile', { id });
};
