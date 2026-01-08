window.renderProfile = function (composer) {
    const container = document.createElement('div');
    container.className = 'profile-container';

    container.innerHTML = `
        <div class="profile-header">
            <img src="${composer.avatar}" alt="${composer.name}" class="profile-avatar">
            <div class="profile-info">
                <h1>${composer.username}</h1>
                <div class="profile-stats">
                    <span><span class="stat-count">${composer.posts.length}</span> publicacions</span>
                    <span><span class="stat-count">${composer.followers}</span> seguidors</span>
                    <span><span class="stat-count">${composer.following}</span> seguits</span>
                </div>
                <div class="profile-bio">
                    <div class="profile-bio-name">${composer.name}</div>
                    ${composer.bio.replace(/\n/g, '<br>')}
                </div>
            </div>
        </div>
        <div class="profile-grid">
            ${composer.posts.map((post, index) => `
                <div class="grid-item" data-index="${index}">
                    <img src="${post.image}" alt="Post">
                </div>
            `).join('')}
        </div>
    `;

    // Add click listeners for modal
    const gridItems = container.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = item.dataset.index;
            const post = composer.posts[index];
            // We need to pass the composer object too as it's not in the post object inside the array usually (unless we normalized it)
            // In Feed.js we did { ...post, composer }, here we can do the same
            const postData = { ...post, composer };

            const modal = window.renderModal(postData);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        });
    });

    return container;
}
