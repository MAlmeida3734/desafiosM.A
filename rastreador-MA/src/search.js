function rastrear() {
      var codigo = document.getElementById('codigoRastreio').value;
      if (codigo) {
        window.open('https://www.linkcorreios.com.br/?id=' + codigo, '_blank');
      } else {
        alert('Por favor, digite o código de rastreio.');
      }

      document.getElementById('codigoRastreio').addEventListener('keypress', function (e) {
    if (e.key === 'Enter') {
        rastrear();
    }
})}