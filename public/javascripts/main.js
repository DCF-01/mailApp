const send_email_btn = document.getElementById('send');
let url = window.location.href + 'send'

send_email_btn.addEventListener('click', () => {
    fetch(url)
        .then(response => response.json())
        .then(data => console.log(data));
})