window.renderSearch = function (composers) {
    const container = document.createElement('div');
    container.className = 'search-container';

    container.innerHTML = `
        <div class="search-header">
            <div class="search-bar">
                <i class="fas fa-search"></i>
                <input type="text" placeholder="Cerca" id="search-input">
            </div>
        </div>
        <div class="search-results" id="search-results">
            <!-- Results will appear here -->
        </div>
    `;

    const input = container.querySelector('#search-input');
    const resultsContainer = container.querySelector('#search-results');

    input.addEventListener('input', (e) => {
        const query = e.target.value.toLowerCase();
        resultsContainer.innerHTML = '';

        if (query.length === 0) return;

        const filtered = composers.filter(c =>
            c.name.toLowerCase().includes(query) ||
            c.username.toLowerCase().includes(query)
        );

        filtered.forEach(composer => {
            const item = document.createElement('div');
            item.className = 'search-item';
            item.innerHTML = `
                <img src="${composer.avatar}" alt="${composer.username}">
                <div class="search-item-info">
                    <div class="search-item-username">${composer.username}</div>
                    <div class="search-item-name">${composer.name}</div>
                </div>
            `;
            item.addEventListener('click', () => {
                window.navigateToProfile(composer.id);
            });
            resultsContainer.appendChild(item);
        });
    });

    // Focus input on load
    setTimeout(() => input.focus(), 100);

    return container;
}
