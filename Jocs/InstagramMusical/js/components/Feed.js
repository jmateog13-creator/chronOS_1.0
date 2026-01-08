window.renderFeed = function (composers) {
    const container = document.createElement('div');
    container.className = 'feed-container';

    // Header
    const header = document.createElement('div');
    header.className = 'feed-header';
    header.innerHTML = `
        <div class="logo">InstaMusic</div>
        <div class="actions">
            <i class="far fa-paper-plane" style="font-size: 1.5rem;"></i>
        </div>
    `;
    container.appendChild(header);

    // Posts
    // Flatten posts from all composers and sort by date (simulated) or just shuffle
    const allPosts = [];
    composers.forEach(composer => {
        composer.posts.forEach(post => {
            allPosts.push({ ...post, composer });
        });
    });

    // Shuffle for "feed" feel
    allPosts.sort(() => Math.random() - 0.5);

    allPosts.forEach(postData => {
        container.appendChild(renderPost(postData));
    });

    return container;
}
