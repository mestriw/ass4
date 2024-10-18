function calculateTax() {
    const price = parseFloat(document.getElementById("carPrice").value);
    let tax;

    if (price > 10000) {
        tax = price * 0.25;
    } else if (price >= 5000) {
        tax = price * 0.20;
    } else {
        tax = price * 0.15;
    }

    document.getElementById("taxResult").textContent = tax ? `$${tax.toFixed(2)}` : "Введите корректную стоимость!";
}