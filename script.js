const permanentPassword = "GabrielBrisa2082";
let tempDatabase = [];

function handleLogin() {
  const user = document.getElementById("username").value.trim();
  const pass = document.getElementById("password").value.trim();
  const msg = document.getElementById("login-msg");

  if (pass === permanentPassword) {
    msg.innerText = "Login bem-sucedido!";
    tempDatabase.push({ user });
    document.getElementById("login-container").classList.remove("active");
    document.getElementById("loading-container").classList.add("active");
    startLoading();
  } else {
    msg.innerText = "Usuário ou senha incorretos.";
  }
}

function startLoading() {
  let progress = 0;
  const progressBar = document.getElementById("progress");
  const continueBtn = document.getElementById("continue-btn");

  const loading = setInterval(() => {
    if (progress >= 100) {
      clearInterval(loading);
      continueBtn.classList.remove("hidden");
    } else {
      progress += 1;
      progressBar.style.width = progress + "%";
    }
  }, 30);
}

function showNotepad() {
  document.getElementById("loading-container").classList.remove("active");
  document.getElementById("notepad-container").classList.add("active");
}

function showForgotPassword() {
  document.getElementById("login-container").classList.remove("active");
  document.getElementById("forgot-password-container").classList.add("active");
}

function recoverPassword() {
  const input = document.getElementById("recovery-input").value.trim();
  const msg = document.getElementById("recovery-msg");

  if (input.length > 3) {
    msg.innerText = "Se houver um e-mail vinculado, as instruções foram enviadas.";
  } else {
    msg.innerText = "Por favor, digite um nome de usuário ou e-mail válido.";
  }
}

function backToLogin() {
  document.getElementById("forgot-password-container").classList.remove("active");
  document.getElementById("login-container").classList.add("active");
}
