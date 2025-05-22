document.addEventListener("DOMContentLoaded", function () {
  const modal = document.getElementById("modal");
  const modalImg = document.getElementById("modal-img");
  const close = document.getElementsByClassName("close")[0];

  document.querySelectorAll(".img").forEach(img => {
    img.addEventListener("click", function () {
      modal.style.display = "block";
      modalImg.src = this.src;
    });
  });

  close.onclick = function () {
    modal.style.display = "none";
  };

  window.onclick = function (e) {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  };

  const authModal = document.getElementById("authModal");
  const loginBtn = document.getElementById("authButton");
  const closeAuth = document.querySelector(".close-auth");
  const loginForm = document.getElementById("loginForm");
  const signUpForm = document.getElementById("signUpForm");

  const showLogin = document.getElementById("showLogin");
  const showSignUp = document.getElementById("showSignUp");

  loginBtn.onclick = () => authModal.style.display = "flex";
  closeAuth.onclick = () => authModal.style.display = "none";
  window.onclick = (e) => { if (e.target === authModal) authModal.style.display = "none"; };

  showSignUp.onclick = (e) => {
    e.preventDefault();
    loginForm.classList.remove("active");
    signUpForm.classList.add("active");
  };

  showLogin.onclick = (e) => {
    e.preventDefault();
    signUpForm.classList.remove("active");
    loginForm.classList.add("active");
  };
});
