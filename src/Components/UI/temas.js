import {
  fundoClaro, conteudoClaro, textoFundoClaro,
  fundoEscuro, conteuEscuro, textoFundoEscuro
} from './variaveis'

export const temaClaro = {
  body: fundoClaro,
  inside: conteudoClaro,
  text: textoFundoClaro,
  filter: '',
}

export const temaEscuro = {
  body: fundoEscuro,
  inside: conteuEscuro,
  text: textoFundoEscuro,
  filter: 'invert(100%)',
}