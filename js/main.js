const isEmpty = (campo) => {
  if (campo === '') {
    return true;
  } else {
    return false;
  }
};

const main = () => {
  const form = document.querySelector('.form');
  const content2 = document.querySelector('.content-2');
  const peso = form.querySelector('#peso');
  const altura = form.querySelector('#altura');
  const resultSet = document.querySelector('.result-set');
  const recalc = document.querySelector('a');
  const result = [
    'Abaixo do peso',
    'Peso normal',
    'sobrepeso',
    'Obesidade 1',
    'Obesidade 2',
    'Obesidade 3',
  ];

  const calculaIMC = () => {
    const calcimc =
      Number(peso.value) / (Number(altura.value) * Number(altura.value));

    const imc = calcimc.toFixed(1);

    if (imc <= 18.5) {
      return `${imc} ${result[0]}`;
    } else if (imc >= 18.6 && imc <= 24.9) {
      return `${imc} ${result[1]}`;
    } else if (imc >= 25 && imc <= 29.9) {
      return `${imc} ${result[2]}`;
    } else if (imc >= 30 && imc <= 34.9) {
      return `${imc} ${result[3]}`;
    } else if (imc >= 35 && imc <= 39.9) {
      return `${imc} ${result[4]}`;
    } else {
      return `${imc} ${result[5]}`;
    }
  };

  const validaCampos = () => {
    if (
      (isEmpty(peso.value) && isEmpty(altura.value)) |
      (isEmpty(peso.value) | isEmpty(altura.value))
    ) {
      resultSet.className = 'result-invalid';
      resultSet.innerHTML = 'Preencha todos os campos';
    } else {
      if (
        (isNaN(peso.value) && isNaN(altura.value)) |
        (isNaN(peso.value) | isNaN(altura.value))
      ) {
        resultSet.className = 'result-invalid';
        resultSet.innerHTML = 'valores inválidos';
      } else {
        resultSet.className = 'result-valid';
        resultSet.innerHTML = calculaIMC();
      }
    }
  };

  form.addEventListener('submit', function (evento) {
    evento.preventDefault();
    validaCampos();
    content2.className = 'content-2-visible';
  });

  recalc.addEventListener('click', (evento) => {
    evento.preventDefault();
    content2.className = 'content-2-hide';
    resultSet.className = 'result-set';
  });
};

main();
