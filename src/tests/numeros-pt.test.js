const request = require('supertest');

const api = request('http://177.71.114.188');

const INVALID_DATA = 'Invalid data';

async function conferirExtenso(path, numeroPorExtenso) {
  const respostaHttp = await api.get(path).expect(200);
  const numero = JSON.parse(respostaHttp.text);
  expect(numero.extenso).toEqual(numeroPorExtenso);
}

describe('Testes para números por extenso em Português', () => {

  it('Deve retornar "zero" quando 0', async () => {
    await conferirExtenso('/0', 'zero');
  });

  it('Deve retornar "três" quando 3', async () => {
    await conferirExtenso('/3', 'três');
  });

  it('Deve retornar "quatorze" quando 14', async () => {
    await conferirExtenso('/14', 'quatorze');
  });

  it('Deve retornar "quinze" quando 15', async () => {
    await conferirExtenso('/15', 'quinze');
  });

  it('Deve retornar "Invalid data" quando @', async () => {
    await conferirExtenso('/@', INVALID_DATA);
  });

});