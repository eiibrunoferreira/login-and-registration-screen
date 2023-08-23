/*function abrirmodalrecoverpassword(carregarmodalrecoverpassword) {
    let modal = document.getElementById(carregarmodalrecoverpassword);
    modal.style.display = 'block';
    document.body.style.overflow = 'hidden';
}

function closemodalrecoverpassword(fecharmodalrecoverpassword) {
    let modal = document.getElementById(fecharmodalrecoverpassword);
    modal.style.display = 'none';
    document.body.style.overflow = 'hidden';
}*/

function openmodal() {
    const modal = document.getElementById('modalrecoverpassword')
    modal.classList.add('abrirmodal')

    modal.addEventListener('click', (e) => {
        if(e.target.id == 'btn-close-modal' || e.target.id == 'modalrecoverpassword') {
            modal.classList.remove('abrirmodal')
        }
    })
}