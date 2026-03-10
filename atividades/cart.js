// cart.js — renders cart.html using same localStorage key
(function(){
  const CART_KEY = 'abs_cart_v1';
  function getCart(){ return JSON.parse(localStorage.getItem(CART_KEY) || '[]'); }
  function saveCart(c){ localStorage.setItem(CART_KEY, JSON.stringify(c)); }
  function formatPrice(v){ return `R$ ${Number(v).toLocaleString('pt-BR')}` }
  function updateHeaderCount(){ const el = document.getElementById('cart-count'); if(el) el.innerText = getCart().length; }

  function render(){
    const root = document.getElementById('cart-list'); if(!root) return;
    root.innerHTML = '';
    const cart = getCart();
    if(!cart.length){ root.innerHTML = '<p>Seu carrinho está vazio.</p>'; document.getElementById('cart-total-amount').innerText = formatPrice(0); updateHeaderCount(); return; }
    const groups = {};
    cart.forEach(it=>{ const key = it.type || it.category || (it.usado? 'Usados' : 'Novos') || 'Outros'; if(!groups[key]) groups[key]=[]; groups[key].push(it); });
    Object.keys(groups).forEach(k=>{
      const box = document.createElement('div'); box.className='cart-group'; box.innerHTML = `<h3>${k}</h3><ul class="cart-group-list"></ul>`;
      const ul = box.querySelector('ul'); groups[k].forEach(it=>{
        const li = document.createElement('li'); li.className='cart-item';
        li.innerHTML = `<div class="ci-left"><div class="ci-thumb"></div><div><strong>${it.nome}</strong><div class="ci-meta">${it.usado?`Usado • ${it.km||0} km` : ''}</div></div></div><div class="ci-right"><strong>${formatPrice(it.preco)}</strong><button class="btn-remove small">Remover</button></div>`;
        const thumb = li.querySelector('.ci-thumb'); if(it.imgs && it.imgs[0]){ const img = document.createElement('img'); img.src = it.imgs[0]; img.alt = it.nome; thumb.appendChild(img); }
        li.querySelector('.btn-remove').onclick = ()=>{ const next = getCart().filter(c=> c.cartId !== it.cartId); saveCart(next); render(); updateHeaderCount(); };
        ul.appendChild(li);
      });
      root.appendChild(box);
    });
    const total = cart.reduce((s,i)=> s + (i.preco||0), 0);
    document.getElementById('cart-total-amount').innerText = formatPrice(total);
    updateHeaderCount();
  }

  function bind(){
    document.getElementById('cart-clear').onclick = ()=>{ if(!confirm('Limpar o carrinho?')) return; saveCart([]); render(); };
    document.getElementById('back-store').onclick = ()=> location.href = 'atvd-1.html';
    document.getElementById('cart-checkout').onclick = ()=>{
      const overlay = document.getElementById('checkout-overlay'); overlay.classList.add('active');
      const loader = overlay.querySelector('.loader'); loader.innerText = '...';
      setTimeout(()=>{ loader.innerText = '✓'; setTimeout(()=>{ overlay.classList.remove('active'); alert('Compra simulada concluída. Obrigado!'); saveCart([]); render(); updateHeaderCount(); },900); }, 1400);
    };
    const themeBtn = document.getElementById('theme-toggle'); if(themeBtn){ themeBtn.onclick = ()=>{ const cur = document.documentElement.getAttribute('data-theme')||'light'; const next = cur==='dark'?'light':'dark'; document.documentElement.setAttribute('data-theme', next); try{ localStorage.setItem('abs_theme', next) }catch(e){}; const icon = themeBtn.querySelector('.mode-icon'); if(icon) icon.innerText = next==='dark' ? '☀️':'🌙'; } }
  }

  document.addEventListener('DOMContentLoaded', ()=>{ render(); bind(); });
})();
