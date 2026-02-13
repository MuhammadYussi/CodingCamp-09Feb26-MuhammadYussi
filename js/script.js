const form = document.getElementById('form');
const displayList = document.querySelector('.flex.justify-around div ul');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const nama = form.querySelector('input[type="text"]').value;
    const tglLahir = form.querySelector('input[type="date"]').value;
    const gender = form.querySelector('input[type="radio"]:checked')?.value || "Tidak disebutkan";
    const pesan = form.querySelector('textarea').value;
    
    const now = new Date();
    const dateTimeString = now.toLocaleString();

    const listItem = document.createElement('li');
    listItem.className = "mb-4 p-3 border-b border-sky-200 last:border-0";
    
    listItem.innerHTML = 
        `<small class="text-gray-500 italic">${dateTimeString}</small>
        <p><strong>Nama:</strong> ${nama}</p>
        <p><strong>Tgl Lahir:</strong> ${tglLahir}</p>
        <p><strong>Jenis Kelamin:</strong> ${gender}</p>
        <p><strong>Pesan:</strong> ${pesan}</p>`;

    displayList.appendChild(listItem);

    form.reset();
});