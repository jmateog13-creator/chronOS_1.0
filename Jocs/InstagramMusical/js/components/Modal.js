window.renderModal = function (postData) {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';

    const modalContent = document.createElement('div');
    modalContent.className = 'modal-content';

    // Close button
    const closeBtn = document.createElement('button');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.onclick = () => {
        document.body.removeChild(overlay);
        document.body.style.overflow = 'auto'; // Restore scrolling
    };

    // Reuse renderPost but maybe wrap it or style it differently
    // For now, let's manually build a nice modal layout
    // Left side image, right side comments/info (desktop)
    // Stacked on mobile

    const { composer, id, image, caption, likes, timestamp } = postData;

    modalContent.innerHTML = `
        <div class="modal-image-container">
            <img src="${image}" alt="Post">
        </div>
        <div class="modal-info">
            <div class="modal-header">
                <img src="${composer.avatar}" alt="${composer.username}" class="modal-avatar">
                <span class="modal-username">${composer.username}</span>
            </div>
            <div class="modal-body">
                <div class="modal-caption">
                    <span class="modal-username-caption">${composer.username}</span> ${caption}
                </div>
                <!-- Placeholder for comments -->
                <div class="modal-comments">
                    ${postData.comments && postData.comments.length > 0 ?
            postData.comments.map(comment => `
                            <div class="modal-comment">
                                <span class="modal-username-caption">${comment.user}</span> ${comment.text}
                            </div>
                        `).join('') :
            '<p style="color: #8e8e8e; font-size: 0.9rem;">No hi ha comentaris encara.</p>'
        }
                </div>
            </div>
            <div class="modal-footer">
                <div class="modal-actions">
                    <i class="far fa-heart"></i>
                    <i class="far fa-comment"></i>
                    <i class="far fa-paper-plane"></i>
                </div>
                <div class="modal-likes">${likes.toLocaleString()} m'agrada</div>
                <div class="modal-time">${timestamp}</div>
            </div>
        </div>
    `;

    overlay.appendChild(closeBtn);
    overlay.appendChild(modalContent);

    // Close on click outside
    overlay.addEventListener('click', (e) => {
        if (e.target === overlay) {
            document.body.removeChild(overlay);
            document.body.style.overflow = 'auto';
        }
    });

    // Like interaction in modal
    const likeBtn = modalContent.querySelector('.fa-heart');

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

    return overlay;
}
