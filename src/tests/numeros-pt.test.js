const request = require('supertest');

const api = request('http://177.71.114.188');

const INVALID_DATA = 'Invalid data';

async function conferirExtenso(path, numeroPorExtenso) {
  const respostaHttp = await api.get(path).expect(200);
  const numero = JSON.parse(respostaHttp.text);
  expect(numero.extenso).toEqual(numeroPorExtenso);
}

describe('Unidade e Dezena PT', () => {

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

  it('Deve retornar "vinte e um" quando 21', async () => {
    await conferirExtenso('/21', 'vinte e um');
  });

  it('Deve retornar "vinte e oito" quando 28', async () => {
    await conferirExtenso('/28', 'vinte e oito');
  });

  it('Deve retornar "trinta" quando 30', async () => {
    await conferirExtenso('/30', 'trinta');
  });

  it('Deve retornar "quarenta" quando 40', async () => {
    await conferirExtenso('/40', 'quarenta');
  });

  it('Deve retornar "cinquenta" quando 50', async () => {
    await conferirExtenso('/50', 'cinquenta');
  });

  it('Deve retornar "sessenta" quando 60', async () => {
    await conferirExtenso('/60', 'sessenta');
  });

  it('Deve retornar "setenta" quando 70', async () => {
    await conferirExtenso('/70', 'setenta');
  });

  it('Deve retornar "oitenta" quando 80', async () => {
    await conferirExtenso('/80', 'oitenta');
  });

  it('Deve retornar "noventa" quando 90', async () => {
    await conferirExtenso('/90', 'noventa');
  });
})

describe('Centena PT', () => {

    it('Deve retornar "cem" quando 100', async () => {
    await conferirExtenso('/100', 'cem');
  });

  it('Deve retornar "cento e trinta e três" quando 133', async () => {
    await conferirExtenso('/133', 'cento e trinta e três');
  });

  it('Deve retornar "duzentos" quando 200', async () => {
    await conferirExtenso('/200', 'duzentos');
  });

  it('Deve retornar "duzentos e oitenta e nove" quando 289', async () => {
    await conferirExtenso('/289', 'duzentos e oitenta e nove');
  });

  it('Deve retornar "trezentos" quando 300', async () => {
    await conferirExtenso('/300', 'trezentos');
  });

  it('Deve retornar "quatrocentos" quando 400', async () => {
    await conferirExtenso('/400', 'quatrocentos');
  });

  it('Deve retornar "quinhentos" quando 500', async () => {
    await conferirExtenso('/500', 'quinhentos');
  });

  it('Deve retornar "seiscentos" quando 600', async () => {
    await conferirExtenso('/600', 'seiscentos');
  });

  it('Deve retornar "setecentos" quando 700', async () => {
    await conferirExtenso('/700', 'setecentos');
  });

  it('Deve retornar "oitocentos" quando 800', async () => {
    await conferirExtenso('/800', 'oitocentos');
  });

  it('Deve retornar "novecentos" quando 900', async () => {
    await conferirExtenso('/900', 'novecentos');
  });
})

 describe('Milhar PT', () => {
  
  it('Deve retornar "mil e seiscentos" quando 1600', async () => {
    await conferirExtenso('/1600', 'mil e seiscentos');
  });

  it('Deve retornar "três mil e três" quando 3003', async () => {
    await conferirExtenso('/3003', 'três mil e três');
  });

  it('Deve retornar "quatro mil quinhentos e sessenta e sete" quando 4567', async () => {
    await conferirExtenso('/4567', 'quatro mil quinhentos e sessenta e sete');
  });

  it('Deve retornar "treze mil setecentos e oitenta e seis" quando 13786', async () => {
    await conferirExtenso('/13786', 'treze mil setecentos e oitenta e seis');
  });

  it('Deve retornar "vinte mil" quando 20000', async () => {
    await conferirExtenso('/20000', 'vinte mil');
  });

  it('Deve retornar "trinta e oito mil oitocentos e noventa" quando 38890', async () => {
    await conferirExtenso('/38890', 'trinta e oito mil oitocentos e noventa');
  });

  it('Deve retornar "cinquenta e seis mil trezentos e vinte e um" quando 56321', async () => {
    await conferirExtenso('/56321', 'cinquenta e seis mil trezentos e vinte e um');
  });

  it('Deve retornar "sessenta e um mil seiscentos e trinta e sete" quando 61637', async () => {
    await conferirExtenso('/61637', 'sessenta e um mil seiscentos e trinta e sete');
  });

  it('Deve retornar "setenta e seis mil quinhentos e quarenta e três" quando 76543', async () => {
    await conferirExtenso('/76543', 'setenta e seis mil quinhentos e quarenta e três');
  });

  it('Deve retornar "noventa mil e cem" quando 90100', async () => {
    await conferirExtenso('/90100', 'noventa mil e cem');
  });

  it('Deve retornar "noventa e nove mil novecentos e noventa e nove" quando 99999', async () => {
    await conferirExtenso('/99999', 'noventa e nove mil novecentos e noventa e nove');
  });
})

describe('Número Negativo PT', () => {


  it('Deve retornar "menos noventa e nove mil novecentos e noventa e nove" quando -99999', async () => {
    await conferirExtenso('/-99999', 'menos noventa e nove mil novecentos e noventa e nove');
  });

  it('Deve retornar "menos trezentos e quarenta e três" quando -343', async () => {
    await conferirExtenso('/-343', 'menos trezentos e quarenta e três');
  });

  it('Deve retornar "menos oito mil duzentos e setenta e sete" quando -8277', async () => {
    await conferirExtenso('/-8277', 'menos oito mil duzentos e setenta e sete');
  });
})

describe('Caractere Especial', () => {
  
  it('Deve retornar "Invalid data" quando +5', async () => {
     await conferirExtenso('/+5', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando 4-55', async () => {
    await conferirExtenso('/4-55', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando &', async () => {
    await conferirExtenso('/&', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando 9+8', async () => {
     await conferirExtenso('/9+8', INVALID_DATA);
   });
  
  it('Deve retornar "Invalid data" quando 0,7', async () => {
    await conferirExtenso('/0,7', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando 134.6', async () => {
    await conferirExtenso('/134.6', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando *', async () => {
    await conferirExtenso('/*', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando @', async () => {
     await conferirExtenso('/@', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando <100000', async () => {
    await conferirExtenso('/<100000', INVALID_DATA);
  });
  
  it('Deve retornar "Invalid data" quando @', async () => {
    await conferirExtenso('/@', INVALID_DATA);
  });
})
