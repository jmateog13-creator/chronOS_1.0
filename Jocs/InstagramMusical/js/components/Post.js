window.renderPost = function (postData) {
    const { composer, id, image, caption, likes, timestamp } = postData;

    const post = document.createElement('div');
    post.className = 'post';

    post.innerHTML = `
        <div class="post-header">
            <img src="${composer.avatar}" alt="${composer.username}" class="post-avatar" onclick="navigateToProfile('${composer.id}')">
            <a href="#" class="post-username" onclick="navigateToProfile('${composer.id}')">${composer.username}</a>
            <i class="fas fa-ellipsis-h" style="margin-left: auto; color: var(--text-color);"></i>
        </div>
        <div class="post-image-container">
            <img src="${image}" alt="Post Content" class="post-image" style="cursor: pointer;">
            ${postData.audio ? '<div class="audio-trigger"><i class="fas fa-music"></i></div>' : ''}
        </div>
        <div class="post-actions">
            <i class="far fa-heart" data-id="${id}"></i>
            <i class="far fa-comment"></i>
            <i class="far fa-paper-plane"></i>
            <i class="far fa-bookmark" style="margin-left: auto;"></i>
        </div>
        <div class="post-likes">${likes.toLocaleString()} m'agrada</div>
        <div class="post-caption">
            <span class="username" onclick="navigateToProfile('${composer.id}')">${composer.username}</span> ${caption}
        </div>
        <div class="post-time">${timestamp}</div>
    `;

    // Add like interaction
    const likeBtn = post.querySelector('.fa-heart');

    // Set initial state
    if (window.LikesService.isLiked(id)) {
        likeBtn.classList.replace('far', 'fas');
        likeBtn.style.color = '#ed4956';
    }

    likeBtn.addEventListener('click', function () {
        const isLiked = window.LikesService.toggleLike(id);
        if (isLiked) {
            this.classList.replace('far', 'fas');
            this.style.color = '#ed4956';
        } else {
            this.classList.replace('fas', 'far');
            this.style.color = 'inherit';
        }
    });

    // Add click listener to open modal
    const postImage = post.querySelector('.post-image');
    postImage.addEventListener('click', () => {
        const modal = window.renderModal(postData);
        document.body.appendChild(modal);
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    });

    return post;
}
