
function calculateTotal() {
    const selects = document.querySelectorAll('select');
    let total = 0;
    selects.forEach(sel => {
        const price = parseFloat(sel.selectedOptions[0].dataset.price);
        total += price;
    });
    document.getElementById('totalPrice').textContent = total.toFixed(2);
}

document.querySelectorAll('select').forEach(sel => {
    sel.addEventListener('change', calculateTotal);
});

document.getElementById('modeSwitch').addEventListener('change', (e) => {
    const label = document.getElementById('modeLabel');
    label.textContent = e.target.checked ? 'Modus: Pro' : 'Modus: Basic';
});
