window.renderActivity = function (composers) {
    const container = document.createElement('div');
    container.className = 'activity-container';

    const header = document.createElement('div');
    header.className = 'activity-header';
    header.innerHTML = `<h1>Activitat</h1>`;
    container.appendChild(header);

    const likedPostIds = window.LikesService.getLikedPosts();

    if (likedPostIds.length === 0) {
        const emptyState = document.createElement('div');
        emptyState.className = 'empty-state';
        emptyState.innerHTML = `
            <i class="far fa-heart"></i>
            <p>Encara no has fet m'agrada a cap publicació.</p>
        `;
        container.appendChild(emptyState);
        return container;
    }

    const grid = document.createElement('div');
    grid.className = 'profile-grid'; // Reuse profile grid styles

    // Find all liked posts across all composers
    const likedPosts = [];
    composers.forEach(composer => {
        composer.posts.forEach(post => {
            if (likedPostIds.includes(post.id)) {
                likedPosts.push({ ...post, composer });
            }
        });
    });

    // Render them
    grid.innerHTML = likedPosts.map((post, index) => `
        <div class="grid-item" data-index="${index}">
            <img src="${post.image}" alt="Post">
        </div>
    `).join('');

    // Add click listeners for modal (reusing logic from Profile.js roughly)
    const gridItems = grid.querySelectorAll('.grid-item');
    gridItems.forEach(item => {
        item.addEventListener('click', () => {
            const index = item.dataset.index;
            const postData = likedPosts[index];

            const modal = window.renderModal(postData);
            document.body.appendChild(modal);
            document.body.style.overflow = 'hidden';
        });
    });

    container.appendChild(grid);
    return container;
}
