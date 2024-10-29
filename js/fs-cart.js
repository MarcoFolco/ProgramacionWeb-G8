let cartCount = 0;

document.getElementById('btn-buy').addEventListener('click', function() {
    cartCount++; // Incrementa el contador
    document.getElementById('badge').innerText = cartCount;
});