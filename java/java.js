function updateCountdown() {
    const now = new Date();
    const hours = (23 - now.getHours()).toString().padStart(2, '0');
    const minutes = (59 - now.getMinutes()).toString().padStart(2, '0');
    const seconds = (59 - now.getSeconds()).toString().padStart(2, '0');
    
    document.getElementById('hours').textContent = hours;
    document.getElementById('minutes').textContent = minutes;
    document.getElementById('seconds').textContent = seconds;
}

setInterval(updateCountdown, 1000);
updateCountdown();