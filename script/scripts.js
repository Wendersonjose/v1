function isUserRegistered() {
  return localStorage.getItem("userRegistered") === "true";
}

document.querySelectorAll('.filme-link').forEach((link) => {
  link.addEventListener('click', function (e) {
      e.preventDefault(); 

      if (!isUserRegistered()) {
          sessionStorage.setItem('redirectAfterRegister', link.getAttribute('data-filme'));
          window.location.href = 'pagina-de-cadastro.html';
      } else {
          window.open(link.getAttribute('data-filme'), '_blank');
      }
  });
});

if (window.location.pathname.includes('pagina-de-cadastro.html')) {
  const formCadastro = document.getElementById('form-cadastro');
  formCadastro.addEventListener('submit', function (e) {
      e.preventDefault();
      
      localStorage.setItem('userRegistered', "true");

      const redirectUrl = sessionStorage.getItem('redirectAfterRegister');
      if (redirectUrl) {
          window.open(redirectUrl, '_blank');  
          sessionStorage.removeItem('redirectAfterRegister'); 
      }

      window.location.href = 'index.html';
  });
}
