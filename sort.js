function sortNumbers(order) {
    const input = document.getElementById("numberInput").value;
    const numbers = input.split(",").map(num => parseFloat(num.trim())).filter(num => !isNaN(num));
    
    if (numbers.length === 0) {
        alert("Пожалуйста, введите хотя бы одно число!");
        return;
    }
    
    if (order === 'asc') {
        numbers.sort((a, b) => a - b);
    } else {
        numbers.sort((a, b) => b - a);
    }
    
    document.getElementById("result").textContent = numbers.join(", ");
}