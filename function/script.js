var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var hasil = document.getElementById('hasil');

function modulus(n1, n2) {
  if (isNaN(n1) || isNaN(n2)) {
    hasil.textContent = 'Masukkan angka yang valid.';
    return;
  }

  if (n2 === 0) {
    hasil.textContent = 'Pembagi tidak boleh 0!';
    return;
  }

  const sisa = n1 % n2;
  hasil.textContent = `Sisa dari ${n1} % ${n2} adalah ${sisa}`;
}


function hitungModulo() {
  const angka1 = parseInt(num1.value);
  const angka2 = parseInt(num2.value);
  modulus(angka1, angka2);
}