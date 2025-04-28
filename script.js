// Funcao que exibe uma seção e esconde as outras
function showSection(sectionId) {
  document.querySelectorAll('main section').forEach(section => {
    section.style.display = 'none';
  });

  const section = document.getElementById(sectionId);
  if (section) {
    section.style.display = 'block';
  }
}

// Quando a página carregar, mostra a seção Home
window.onload = function() {
  showSection('Home');
};
