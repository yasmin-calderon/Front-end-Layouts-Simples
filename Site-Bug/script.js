const imagens = document.querySelectorAll('.principal__imagens img');
const imagemModal = document.querySelector('.modal img');
const linkModal = document.querySelector('.modal a');
const modal = document.querySelector('.modal');

function abrirModal (src) {
    modal.style.display = 'flex';
    imagemModal.src = src;
    linkModal.href = src;
}

imagens.forEach(function (imagem) {
    imagem.addEventListener('click', function (event) {
        abrirModal(event.target.src);
    });
});

imagens.addEventListener('click', function () {
    modal.style.display = 'none';
});

linkModal.addEventListener('click', function (event) {
    event.stopPropagation();
});