function gerarCurriculo() {
  const nome = document.getElementById('nome').value;
  const email = document.getElementById('email').value;
  const telefone = document.getElementById('telefone').value;
  const formacao = document.getElementById('formacao').value;
  const experiencia = document.getElementById('experiencia').value;
  const habilidades = document.getElementById('habilidades').value;

  const preview = document.getElementById('curriculo-preview');
  preview.innerHTML = `
    <h2>${nome}</h2>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Telefone:</strong> ${telefone}</p>
    <h3>Formação</h3>
    <p>${formacao.replace(/\n/g, '<br>')}</p>
    <h3>Experiência Profissional</h3>
    <p>${experiencia.replace(/\n/g, '<br>')}</p>
    <h3>Habilidades</h3>
    <p>${habilidades.replace(/\n/g, '<br>')}</p>
  `;
}

function gerarPDF() {
  const { jsPDF } = window.jspdf;
  const doc = new jsPDF();
  doc.html(document.getElementById('curriculo-preview'), {
    callback: function (doc) {
      doc.save('curriculo.pdf');
    },
    x: 10,
    y: 10
  });
}
