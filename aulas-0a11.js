//IMPORTANDO REDUX
import {createStore} from 'redux'
import expect from 'expect'
import deepFreeze from 'deep-freeze'

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
  return [...list, 0];
};

const testRemoveCounter = () => {
  const listBefore = [0,10,20];
  const listAfter = [0,20];
  expect(
    removeCounter(listBefore, 1)
  ).toEqual(listAfter)
}

const testAddCounter = () => {
  const listBefore = [];
  const listAfter = [0];
  deepFreeze(listBefore);
  expect(
    addCounter(listBefore)
  ).toEqual(listAfter);
};
testAddCounter();
console.log('tests passed');

//AULA 11 CRIANDO TODOLIST BASICA

//TODOS REDUCER ESPERANDO O STATE INICIAL E A ACAO
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state, {
          id: action.id,
          text: action.text,
          completed:false
        }
      ];
      default:
        return state;
  }
  
}
//TESTE DO TODO COM A EXPECT LIBRARY E O DEEP-FREEZE
const testAddTodo = () => {
  // NOS TESTE A CONSTANTE STATEBEFORE ESPERA QUE SEJA UM OBJETO VAZIO
  const stateBefore = [];
  // PASSA UM TIPO DE ACAO TAMBEM, QUE LEVA ALGUMAS PROPRIEDADES 
  const action = {
    type: 'ADD_TODO',
    id: 0,
    text: 'Learn Redux'
  };
  //E GERA UM ESTADO POSTERIOR QUE É IGUAL AO ESTADO DO OBJETVO PASSADO NA ACAO
  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    }
  ];
  //CONGELAMOS O ESTADO INICIAL
  deepFreeze(stateBefore);
  //CONGELAMOS A ACAO
  deepFreeze(action);
  //NO EXPECT DIZEMOS QUE QUANDO A FUNCAO TODOS EH CHAMADA COM O STATE BEFORE
  //E E ACAO X, VAI SER IGUAL AO ESTADO DEPOIS
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
};

testAddTodo();
console.log('All tests passed');

