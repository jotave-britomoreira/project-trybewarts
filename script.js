const email = document.getElementById('email');
const senha = document.getElementById('senha');
const fazerValidacaoLogin = () => {
  if (email.value === 'tryber@teste.com' && senha.value === '123456') {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
};
window.onload = () => {
  const botaoLogin = document.getElementById('btn-login');
  botaoLogin.addEventListener('click', fazerValidacaoLogin);
};

const agreement = document.getElementById('agreement');
const submitBtn = document.getElementById('submit-btn');

agreement.addEventListener('change', () => {
  if (agreement.checked) {
    submitBtn.disabled = false;
  } else {
    submitBtn.disabled = true;
  }
});

const textarea = document.getElementById('textarea');
const counter = document.getElementById('counter');

textarea.addEventListener('input', () => {
  const commentCount = 500 - textarea.value.length;
  counter.innerHTML = commentCount;
});
