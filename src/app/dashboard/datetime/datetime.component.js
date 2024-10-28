function updateDateTime() {
    const now = new Date();

    let hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const amOrPm = hours >= 12 ? 'PM' : 'AM';

    hours = hours % 12 || 12;

    const formattedMinutes = minutes < 10 ? '0' + minutes : minutes;
    const formattedSeconds = seconds < 10 ? '0' + seconds : seconds;

    document.getElementById('time-text').textContent = `${hours}:${formattedMinutes}`;
    document.getElementById('am-text').textContent = amOrPm;
    document.getElementById('seconds-text').textContent = formattedSeconds;

    const formattedDate = now.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    document.getElementById('date-text').textContent = formattedDate;
}

setInterval(updateDateTime, 1000);

updateDateTime();