const form = document.getElementById('form');
const messageList = document.getElementById('message');
const menuBtn = document.getElementById('menu-btn');
const menu = document.getElementById('menu');

window.onload = function() {
    let name = prompt("Please enter your name:", "Guest");

    if (name === null || name.trim() === "") {
        name = "Guest";
    }

    document.getElementById("user").innerText = name;
};

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('hidden');
});

menu.querySelectorAll('a').forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth < 768) {
            menu.classList.add('hidden');
        }
    });
});

form.addEventListener('submit', function(event) {
    event.preventDefault();

    const nama = form.querySelector('input[type="text"]').value;
    const tglLahir = form.querySelector('input[type="date"]').value;
    const gender = form.querySelector('input[name="gender"]:checked').value;
    const pesan = form.querySelector('textarea').value;
    const currentTime = new Date().toLocaleString();

    const listItem = document.createElement('li');
    listItem.className = "mb-4 p-3 border-b border-slate-200 last:border-0 animate-fadeIn";
    
    listItem.innerHTML = `
        <p class="text-xs text-slate-500">${currentTime}</p>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tanggal Lahir:</strong> ${tglLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p class="mt-2 italic">"${pesan}"</p>`;

    messageList.prepend(listItem);
    form.reset();
});