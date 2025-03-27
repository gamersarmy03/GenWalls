function openProfilePage() {
    if (currentUser) {
        localStorage.setItem('profileData', JSON.stringify(currentUser));
        window.open('profile.html', '_blank');
    }
}

document.getElementById('profilePic').addEventListener('click', openProfilePage);
