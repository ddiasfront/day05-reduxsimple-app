//IMPORTANDO REDUX
import {createStore} from 'redux'
import expect from 'expect'

//CRIANDO ACOES
//RECEBE STATE INICIAL DE 0 NESSE CASO + A ACAO
const counter = (state=0, action) => {
    switch (action.type) {
      //TIPO DE ACAO INCREMENT
      case 'INCREMENT':
        return state + 1;
      //TIPO DE ACAO DECREMENT
      case 'DECREMENT':
        return state - 1;
      //RETORNO PADRAO
      default:
        return state;
    }
}
//CRIANDO STORE QUE FALA PRAGENTE QUANDO O STATE EH MODIFICADO
const store = createStore(counter);
 //A STORE TEM 3 METODOS
  //GETSTATE RETORNA O STATE ATUAL DA STORE ATUAL
  console.log(store.getState());
  //DISPATCH QUE PERMITE VOCE MUDAR O STATE DA SUA APLICACAO COM BASE NA ACAO JA DEFINIDAACIMA QUE MUDA O STATE LA EM CIMAO MESMO TA VENDO LA EMC IMA ENTAO ESSA ACAO LA
  //CHAMASE O STORE JUNTO AO DISPARTCH E O TIPO DE ACAO O DISPATCH VAI PEGAR A ACAO E O STATE ATUAL
  store.dispatch({type: 'INCREMENT'});
  //SUBSCRIBE METODO QUE ESCUTA AS ALTERACOES NA STORE E PASSA PRO DOCUMENTO
  store.subscribe(() => {
    document.body.innerHTML = store.getState();
  });
  console.log(store.getState());

//AULA 9 
const addCounter = (list) => {

};

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};
testAddCounter();
console.log('tests passed');