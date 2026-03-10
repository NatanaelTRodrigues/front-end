// Seleção de elementos
const themeToggle = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;
const cartButtons = document.querySelectorAll('.btn-add');
const cartCount = document.getElementById('cart-count');

let count = 0;

// Lógica de Troca de Tema
themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'light' ? 'dark' : 'light';
    
    htmlElement.setAttribute('data-theme', newTheme);
    themeToggle.innerHTML = newTheme === 'light' ? '🌙' : '☀️';
    
    // Opcional: Salvar preferência no localStorage
    localStorage.setItem('theme', newTheme);
});

// Lógica do Carrinho (Simples)
cartButtons.forEach(button => {
    button.addEventListener('click', () => {
        count++;
        cartCount.innerText = count;
        button.innerText = "Adicionado!";
        button.style.backgroundColor = "#2a9d8f";
        
        setTimeout(() => {
            button.innerText = "Adicionar ao Carrinho";
            button.style.backgroundColor = "";
        }, 1500);
    });
});