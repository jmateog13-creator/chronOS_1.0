const LIKES_KEY = 'instamusic_likes';

window.LikesService = {
    getLikedPosts() {
        const stored = localStorage.getItem(LIKES_KEY);
        return stored ? JSON.parse(stored) : [];
    },

    isLiked(postId) {
        const likes = this.getLikedPosts();
        return likes.includes(postId);
    },

    toggleLike(postId) {
        let likes = this.getLikedPosts();
        if (likes.includes(postId)) {
            likes = likes.filter(id => id !== postId);
        } else {
            likes.push(postId);
        }
        localStorage.setItem(LIKES_KEY, JSON.stringify(likes));
        return likes.includes(postId);
    }
};
