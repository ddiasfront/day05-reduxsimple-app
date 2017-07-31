//IMPORTANDO REDUX
import {createStore} from 'redux'
import expect from 'expect'
import deepFreeze from 'deep-freeze'

//AULA 11 CRIANDO TODOLIST BASICA

//TODOS REDUCER ESPERANDO O STATE INICIAL E A ACAO
const todos = (state = [], action) => {
  switch(action.type) {
    case 'ADD_TODO':
      return [
        ...state, 
        {
          id: action.id,
          text: action.text,
          completed:false
        }
      ];
    case 'TOGGLE_TODO': 
      return state.map(todo => {
        if (todo.id !== action.id) {
          return todo;
        }

        return {
          ...todo,
          completed: !todo.completed
        };
       });  
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


const testToggleTodo = () => {
  const stateBefore = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: false
    } 
  ];

  const action = {
    type: 'TOGGLE_TODO',
    id: 1
  };

  const stateAfter = [
    {
      id: 0,
      text: 'Learn Redux',
      completed: false
    },
    {
      id: 1,
      text: 'Go shopping',
      completed: true
    }
  ];

  deepFreeze(stateBefore);
  deepFreeze(action);
  expect(
    todos(stateBefore, action)
  ).toEqual(stateAfter);
}

testAddTodo();
testToggleTodo();
console.log('All tests passed');

