// ================== DATA ==================
let data = JSON.parse(localStorage.getItem("pengajuan")) || [];

// ================== FORMAT ==================
function rupiah(angka) {
  return "Rp " + angka.toLocaleString("id-ID");
}

// ================== MODAL ==================
function showModal(message, onConfirm) {
  document.getElementById("modal").classList.remove("hidden");
  document.getElementById("modal").classList.add("flex");

  document.getElementById("modalMessage").innerText = message;

  document.getElementById("confirmBtn").onclick = function () {
    if (onConfirm) onConfirm();
    closeModal();
  };
}

function closeModal() {
  document.getElementById("modal").classList.add("hidden");
}

// SUBMIT
document.getElementById("form").addEventListener("submit", function(e) {
  e.preventDefault();

  let nama = document.getElementById("nama").value.trim().toLowerCase();
  let tipe = document.getElementById("tipe").value;
  let nominal = parseInt(document.getElementById("nominal").value);
  let tenor = parseInt(document.getElementById("tenor").value);
  let pendapatan = parseInt(document.getElementById("pendapatan").value);
  let catatan = document.getElementById("catatan").value;

  // ✅ ambil data TERBARU di sini
  let currentData = JSON.parse(localStorage.getItem("pengajuan")) || [];

  // ✅ hitung di sini
  let jumlahPengajuan = currentData.filter(
    item => item.nama === nama
  ).length;

  // ✅ validasi di sini
  if (jumlahPengajuan >= 3) {
    showModal("Maksimal 3 pengajuan per nasabah");
    return;
  }

  // validasi lain
  if (pendapatan < 1000000) {
    showModal("Nasabah belum dapat mengajukan pinjaman");
    return;
  }

  if (nominal > 200000000) {
    showModal("Maksimal pinjaman 200 juta");
    return;
  }

  if (tenor > 24) {
    showModal("Tenor maksimal 24 bulan");
    return;
  }

  let obj = {
    nama,
    tipe,
    nominal,
    tenor,
    cicilan: nominal / tenor,
    tanggal: new Date().toLocaleDateString("id-ID"),
    status: "Pending",
    catatan,
    pendapatan
  };

   // ✅ simpan ke currentData
  currentData.push(obj);
  localStorage.setItem("pengajuan", JSON.stringify(currentData));

  // update global biar render sinkron
  data = currentData;

  render();

  document.getElementById("form").reset();
});

  

// RENDER
function render() {
  let tbody = document.getElementById("tableBody");
  tbody.innerHTML = "";

  data.forEach((item, index) => {

    let warnaStatus = "";
    if (item.status === "Disetujui") {
      warnaStatus = "text-green-600 font-semibold";
    } else if (item.status === "Ditolak") {
      warnaStatus = "text-red-600 font-semibold";
    } else {
      warnaStatus = "text-black font-semibold";
    }

    tbody.innerHTML += `
      <tr class="text-center border-b hover:bg-gray-50 transition">
        <td>${item.nama}</td>
        <td>${item.tipe}</td>
        <td>${rupiah(item.nominal)}</td>
        <td>${item.tenor} bulan</td>
        <td>${rupiah(item.cicilan)}</td>
        <td>${item.tanggal}</td>
        <td class="${warnaStatus}">
          ${item.status}
        </td>
        <td class="space-x-1">
          <button onclick="approve(${index})" class="bg-green-500 text-white px-2 py-1 rounded">✔</button>
          <button onclick="reject(${index})" class="bg-red-500 text-white px-2 py-1 rounded">✖</button>
          <button onclick="detail(${index})" class="bg-blue-500 text-white px-2 py-1 rounded">🔍</button>
        </td>
      </tr>
    `;
  });
}


// APPROVE
function approve(i) {
  showModal("Yakin ingin menyetujui pengajuan ini?", function () {
    data[i].status = "Disetujui";
    localStorage.setItem("pengajuan", JSON.stringify(data));
    render();
  });
}

// REJECT
function reject(i) {
  showModal("Yakin ingin menolak pengajuan ini?", function () {
    data[i].status = "Ditolak";
    localStorage.setItem("pengajuan", JSON.stringify(data));
    render();
  });
}

// DETAIL
function detail(i) {
  let d = data[i];

  alert(`
Nama: ${d.nama}
Tipe: ${d.tipe}
Nominal: ${rupiah(d.nominal)}
Tenor: ${d.tenor}
Cicilan: ${rupiah(d.cicilan)}
Pendapatan: ${rupiah(d.pendapatan)}
Catatan: ${d.catatan}
Status: ${d.status}
  `);
}
