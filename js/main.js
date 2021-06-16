const main = () => {
  const form = document.querySelector('.form');
  const peso = form.querySelector('#peso');
  const altura = form.querySelector('#altura');
  const resultSet = document.querySelector('.result-set');

  const calculaIMC = () => {
    const imc =
      (Number(peso.value) / Number(altura.value)) * Number(altura.value);
    return imc;
  };

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
  });
};

main();
