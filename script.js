function cariNama() {
  const nama = document.getElementById("nama").value.trim();
  const hasil = document.getElementById("hasil");

  if (nama === "") {
    hasil.innerHTML = "<p>Nama tidak boleh kosong!</p>";
    return;
  }

  // Fungsi mengubah huruf menjadi fancy unicode
  function toFancy(char) {
    const map = {
      a: 'ᴀ', b: 'ʙ', c: 'ᴄ', d: 'ᴅ', e: 'ᴇ', f: 'ғ', g: 'ɢ', h: 'ʜ',
      i: 'ɪ', j: 'ᴊ', k: 'ᴋ', l: 'ʟ', m: 'ᴍ', n: 'ɴ', o: 'ᴏ', p: 'ᴘ',
      q: 'ǫ', r: 'ʀ', s: 's', t: 'ᴛ', u: 'ᴜ', v: 'ᴠ', w: 'ᴡ', x: 'x',
      y: 'ʏ', z: 'ᴢ'
    };
    return map[char.toLowerCase()] || char;
  }

  // 250 variasi nama estetik untuk Nama dan Username
  const variasiNama = [
    n => n.split('').map((h, i) => i % 2 === 0 ? h.toUpperCase() : h.toLowerCase()).join(''),
    n => `${n.split('').join('★')}`,
    n => `☆${n.toUpperCase()}☆`,
    n => n.toLowerCase() + Math.floor(Math.random() * 100),
    n => `${n}🌸`,
    n => `${n.toLowerCase()}_xoxo`,
    n => `${n.replace(/[aeiou]/g, '3')}★${Math.floor(Math.random() * 1000)}`,
    n => `@${n}_☆${Math.floor(Math.random() * 100)}`,
    n => `${n.split('').reverse().join('')}💫`,
    n => `${n}⭐?${Math.floor(Math.random() * 1000)}`,
    n => n.split('').map(h => `✧${h}`).join(''),
    n => `${n}+${Math.floor(Math.random() * 500)}`,
  ];

  const namaEstetik = variasiNama[Math.floor(Math.random() * (variasiNama.length / 2))](nama); 
  const usernameEstetik = variasiNama[Math.floor(Math.random() * (variasiNama.length / 2) + (variasiNama.length / 2))](nama);

  hasil.innerHTML = `
    <h3>Hasil:</h3>
    <p><strong>Nama Estetik:</strong> <span id="nama-estetik">${namaEstetik}</span></p>
    <p><strong>Username Estetik:</strong> <span id="username-estetik">${usernameEstetik}</span></p>
    <button id="salin-nama" class="salin-btn" onclick="salinNama('nama-estetik')">Salin Nama</button>
    <button id="salin-username" class="salin-btn" onclick="salinNama('username-estetik')">Salin Username</button>
  `;
}

function salinNama(id) {
  const textToCopy = document.getElementById(id).textContent || document.getElementById(id).innerText;

  // Salin teks ke clipboard
  navigator.clipboard.writeText(textToCopy).then(() => {
    alert('Teks berhasil disalin!');
  }).catch(err => {
    console.error('Gagal menyalin teks: ', err);
  });
}

function kirimWa() {
  const nama = document.getElementById("namaRequest").value.trim();
  const pesan = document.getElementById("pesanRequest").value.trim();

  if (nama === "") {
    alert("Nama tidak boleh kosong!");
    return;
  }

  const nomorWA = "6282197421174"; // Ganti dengan nomor WA kamu, awali dengan 62
  const teks = `Halo! Saya mau request nama estetik.\n\nNama: ${nama}\nPesan: ${pesan}`;

  const link = `https://wa.me/${nomorWA}?text=${encodeURIComponent(teks)}`;
  window.open(link, "_blank");
}