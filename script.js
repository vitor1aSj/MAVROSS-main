document.addEventListener('DOMContentLoaded', () => {
    console.log("Script carregado com sucesso!");

    // --- BOTÃO MODO FILME (COM BUSCA SEGURA) ---
    const btnModoFilme = document.getElementById('btnModoFilme') || document.querySelector('.btn-modo-filme');

    if (btnModoFilme) {
        console.log("Botão Modo Filme encontrado!");
        
        btnModoFilme.addEventListener('click', (e) => {
            e.preventDefault();
            console.log("Botão clicado com sucesso!");
            
            document.body.classList.toggle('modo-filme-ativo');

            if (document.body.classList.contains('modo-filme-ativo')) {
                btnModoFilme.textContent = 'Modo Digital';
            } else {
                btnModoFilme.textContent = 'Modo Filme';
            }
        });
    } else {
        console.warn("AVISO: O botão do Modo Filme não foi localizado na página. Verifique o ID no HTML.");
    }

    // --- RESTANTE DO SEU CÓDIGO ---
    const wrapper = document.querySelector('.wrapper');
    const loginLink = document.querySelector('.login-link');
    const registerLink = document.querySelector('.register-link');
    const btnPopup = document.querySelector('.btnLogin-popup');
    const iconClose = document.querySelector('.icon-close');

    if (registerLink && wrapper) registerLink.addEventListener('click', () => wrapper.classList.add('active'));
    if (loginLink && wrapper) loginLink.addEventListener('click', () => wrapper.classList.remove('active'));
    if (btnPopup && wrapper) btnPopup.addEventListener('click', () => wrapper.classList.add('active-popup'));
    if (iconClose && wrapper) iconClose.addEventListener('click', () => wrapper.classList.remove('active-popup'));

    const btnDesblock = document.querySelector('.btn-desblock');
    if (btnDesblock) {
        btnDesblock.addEventListener('click', () => {
            let flash = document.querySelector('.camera-flash');
            if (!flash) {
                flash = document.createElement('div');
                flash.className = 'camera-flash';
                document.body.appendChild(flash);
            }
            flash.classList.add('active-flash');
            setTimeout(() => flash.classList.remove('active-flash'), 400);
        });
    }

    const form = document.getElementById('formCadastro');
    const mensagem = document.getElementById('mensagem');
    if (form) {
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            const nome = document.getElementById('person')?.value;
            const email = document.getElementById('email_register')?.value;
            const senha = document.getElementById('password_register')?.value;
            localStorage.setItem('usuarioCadastrado', JSON.stringify({ nome, email, senha }));
            if (mensagem) {
                mensagem.style.color = '#7fff7f';
                mensagem.textContent = 'Cadastro realizado com sucesso!';
            }
            setTimeout(() => {
                if (mensagem) mensagem.textContent = '';
                if (wrapper) wrapper.classList.remove('active');
            }, 3000);
            form.reset();
        });
    }

    const menuToggle = document.getElementById('menu-toggle');
    const navigation = document.querySelector('.navigation');
    if (menuToggle && navigation) {
        menuToggle.addEventListener('click', () => {
            menuToggle.classList.toggle('active');
            navigation.classList.toggle('active-menu');
        });
    }

    const linkApresentacao = document.querySelector('.navigation a[href="apresentacao.html"]');
    if (linkApresentacao) {
        linkApresentacao.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = 'apresentacao.html';
        });
    }

    const btnExpedicao = document.getElementById('btn-expedicao');
    if (btnExpedicao) {
        btnExpedicao.addEventListener('click', (e) => {
            e.preventDefault();
            let flash = document.querySelector('.camera-flash');
            if (!flash) {
                flash = document.createElement('div');
                flash.className = 'camera-flash';
                document.body.appendChild(flash);
            }
            flash.classList.add('active-flash');
            setTimeout(() => window.location.href = 'expedicao.html', 350);
        });
    }
});