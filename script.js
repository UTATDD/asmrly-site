const loginBtn = document.getElementById('login-btn');
const logoutBtn = document.getElementById('logout-btn');
const loginScreen = document.querySelector('.login-screen');
const videosScreen = document.getElementById('videos-screen');

loginBtn.addEventListener('click', () => {
  localStorage.setItem('asmrly-auth', 'true');
  showVideos();
});

logoutBtn.addEventListener('click', () => {
  localStorage.removeItem('asmrly-auth');
  showLogin();
});

function showVideos() {
  loginScreen.classList.add('hidden');
  videosScreen.classList.remove('hidden');
}

function showLogin() {
  videosScreen.classList.add('hidden');
  loginScreen.classList.remove('hidden');
}

window.onload = () => {
  if (localStorage.getItem('asmrly-auth') === 'true') {
    showVideos();
  } else {
    showLogin();
  }
};
