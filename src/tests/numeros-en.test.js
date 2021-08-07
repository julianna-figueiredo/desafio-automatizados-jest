const request = require('supertest');

const api = request('http://177.71.114.188/en');

const INVALID_DATA = 'Invalid data';

async function conferirExtenso(path, numeroPorExtenso) {
  const respostaHttp = await api.get(path).expect(200);
  const numero = JSON.parse(respostaHttp.text);
  expect(numero.extenso).toEqual(numeroPorExtenso);
}

describe('Unidade e Dezena EN', () => {

  it('Deve retornar "zero" quando 0', async () => {
    await conferirExtenso('/0', 'zero');
  });

  it('Deve retornar "one" quando 1', async () => {
    await conferirExtenso('/1', 'one');
  });

  it('Deve retornar "two" quando 2', async () => {
    await conferirExtenso('/2', 'two');
  });

  it('Deve retornar "three" quando 3', async () => {
    await conferirExtenso('/3', 'three');
  });

  it('Deve retornar "four" quando 4', async () => {
    await conferirExtenso('/4', 'four');
  });

  it('Deve retornar "five" quando 5', async () => {
    await conferirExtenso('/5', 'five');
  });

  it('Deve retornar "six" quando 6', async () => {
    await conferirExtenso('/6', 'six');
  });

  it('Deve retornar "seven" quando 7', async () => {
    await conferirExtenso('/7', 'seven');
  });

  it('Deve retornar "eight" quando 8', async () => {
    await conferirExtenso('/8', 'eight');
  });

  it('Deve retornar "nine " quando 9', async () => {
    await conferirExtenso('/9', 'nine');
  });

  it('Deve retornar "ten" quando 10', async () => {
    await conferirExtenso('/10', 'ten');
  });

  it('Deve retornar "eleven" quando 11', async () => {
    await conferirExtenso('/11', 'eleven');
  });

  it('Deve retornar "twelve" quando 12', async () => {
    await conferirExtenso('/12', 'twelve');
  });

  it('Deve retornar "thirteen" quando 13', async () => {
    await conferirExtenso('/13', 'thirteen');
  });

  it('Deve retornar "fourteen" quando 14', async () => {
    await conferirExtenso('/14', 'fourteen');
  });

  it('Deve retornar "fifteen" quando 15', async () => {
    await conferirExtenso('/15', 'fifteen');
  });

  it('Deve retornar "sixteen" quando 16', async () => {
    await conferirExtenso('/16', 'sixteen');
  });

  it('Deve retornar "seventeen" quando 17', async () => {
    await conferirExtenso('/17', 'seventeen');
  });

  it('Deve retornar "eighteen" quando 18', async () => {
    await conferirExtenso('/18', 'eighteen');
  });

  it('Deve retornar "nineteen" quando 19', async () => {
    await conferirExtenso('/19', 'nineteen');
  });

  it('Deve retornar "twenty" quando 20', async () => {
    await conferirExtenso('/20', 'twenty');
  });

  it('Deve retornar "twenty-seven" quando 27', async () => {
    await conferirExtenso('/27', 'twenty-seven');
  });

  it('Deve retornar "thirty" quando 30', async () => {
    await conferirExtenso('/30', 'thirty');
  });

  it('Deve retornar "thirty-three" quando 33', async () => {
    await conferirExtenso('/33', 'thirty-three');
  });

  it('Deve retornar "forty" quando 40', async () => {
    await conferirExtenso('/40', 'forty');
  });

  it('Deve retornar "forty-one" quando 41', async () => {
    await conferirExtenso('/41', 'forty-one');
  });

  it('Deve retornar "fifty" quando 50', async () => {
    await conferirExtenso('/50', 'fifty');
  });

  it('Deve retornar "sixty" quando 60', async () => {
    await conferirExtenso('/60', 'sixty');
  });

  it('Deve retornar "sixty-five" quando 65', async () => {
    await conferirExtenso('/65', 'sixty-five');
  });

  it('Deve retornar "seventy" quando 70', async () => {
    await conferirExtenso('/70', 'seventy');
  });

  it('Deve retornar "seventy-nine" quando 79', async () => {
    await conferirExtenso('/79', 'seventy-nine');
  });

  it('Deve retornar "eighty" quando 80', async () => {
    await conferirExtenso('/80', 'eighty');
  });

  it('Deve retornar "eighty-two" quando 82', async () => {
    await conferirExtenso('/82', 'eighty-two');
  });

  it('Deve retornar "ninety" quando 90', async () => {
    await conferirExtenso('/90', 'ninety');
  });

})

describe('Centena EN', () => {
  
  it('Deve retornar "one hundred" quando 100', async () => {
    await conferirExtenso('/100', 'one hundred');
  });

  it('Deve retornar "one hundred thirty-three" quando 133', async () => {
    await conferirExtenso('/133', 'one hundred thirty-three');
  });

  it('Deve retornar "two hundred" quando 200', async () => {
    await conferirExtenso('/200', 'two hundred');
  });

  it('Deve retornar "two hundred eighty-nine" quando 289', async () => {
    await conferirExtenso('/289', 'two hundred eighty-nine');
  });

  it('Deve retornar "three hundred" quando 300', async () => {
    await conferirExtenso('/300', 'three hundred');
  });

  it('Deve retornar "four hundred" quando 400', async () => {
    await conferirExtenso('/400', 'four hundred');
  });

  it('Deve retornar "five hundred" quando 500', async () => {
    await conferirExtenso('/500', 'five hundred');
  });

  it('Deve retornar "six hundred" quando 600', async () => {
    await conferirExtenso('/600', 'six hundred');
  });

  it('Deve retornar "seven hundred" quando 700', async () => {
    await conferirExtenso('/700', 'seven hundred');
  });

  it('Deve retornar "eight hundred" quando 800', async () => {
    await conferirExtenso('/800', 'eight hundred');
  });

  it('Deve retornar "nine hundred" quando 900', async () => {
    await conferirExtenso('/900', 'nine hundred');
  });
})

describe('Milhar EN', () => {

  it('Deve retornar "one thousand six hundred" quando 1600', async () => {
    await conferirExtenso('/1600', 'one thousand six hundred');
  });

  it('Deve retornar "three thousand three" quando 3003', async () => {
    await conferirExtenso('/3003', 'three thousand three');
  });

  it('Deve retornar "four thousand five hundred sixty-seven" quando 4567', async () => {
    await conferirExtenso('/4567', 'four thousand five hundred sixty-seven');
  });

  it('Deve retornar "thirteen thousand seven hundred eighty-six" quando 13786', async () => {
    await conferirExtenso('/13786', 'thirteen thousand seven hundred eighty-six');
  });

  it('Deve retornar "twenty thousand" quando 20000', async () => {
    await conferirExtenso('/20000', 'twenty thousand');
  });

  it('Deve retornar "thirty-eight thousand eight hundred ninety" quando 38890', async () => {
    await conferirExtenso('/38890', 'thirty-eight thousand eight hundred ninety');
  });

  it('Deve retornar "fifty-six thousand three hundred twenty-one" quando 56321', async () => {
    await conferirExtenso('/56321', 'fifty-six thousand three hundred twenty-one');
  });

  it('Deve retornar "sixty-one thousand six hundred thirty-seven" quando 61637', async () => {
    await conferirExtenso('/61637', 'sixty-one thousand six hundred thirty-seven');
  });

  it('Deve retornar "seventy-six thousand five hundred forty-three" quando 76543', async () => {
    await conferirExtenso('/76543', 'seventy-six thousand five hundred forty-three');
  });

  it('Deve retornar "ninety thousand one hundred" quando 90100', async () => {
    await conferirExtenso('/90100', 'ninety thousand one hundred');
  });

  it('Deve retornar "ninety-nine thousand nine hundred ninety-nine" quando 99999', async () => {
    await conferirExtenso('/99999', 'ninety-nine thousand nine hundred ninety-nine');
  });
});

describe('Número Negativo EN', () => {
  
  it('Deve retornar "minus ninety-nine thousand nine hundred ninety-nine" quando -99999', async () => {
    await conferirExtenso('/-99999', 'minus ninety-nine thousand nine hundred ninety-nine');
  });

  it('Deve retornar "minus three hundred forty-three" quando -343', async () => {
    await conferirExtenso('/-343', 'minus three hundred forty-three');
  });

  it('Deve retornar "minus eight thousand two hundred seventy-seven" quando -8277', async () => {
    await conferirExtenso('/-8277', 'minus eight thousand two hundred seventy-seven');
  });
});

