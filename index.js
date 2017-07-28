import { createStore, applyMiddleware } from 'redux'

//REDUCER
function counterReducer(state={ count: 0 }, action) {

  let nextState = {
    count: currentState.count
  }
  switch (action.type) {
    case 'ADD':
    nextState.count = currentState.count + 1
    return nextState
    case 'MINUS':
    nextState.count = currentState.count - 1
    return nextState
    case 'RESET':
    nextState.count = 0
    return nextState
      break;
    default:
    return currentState
  }
}
//TOD-O REDUCER
// function todosReducer(state, action) {
//   if (typeof state === 'undefined') {
//     return { todos: [] }
//     }

//   let nextState = Object.assign({}, state);

//   switch (action.type) {
//     case 'NEW':
//       nextState.todos.push(action.payload)
//       return nextState;
//     case 'DELETE':
//       nextState.todos.pop();
//       return nextState;
//     case 'DELETEALL':
//       nextState.todos = []
//       return nextState;
//       break;
//     default:
//       return state
//   }
// }

const logger = store => next => action => {
  console.log('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  return result;
}

//STORE
const store = createStore(counterReducer);
const counterEl = document.getElementById('counter');
const todosInput = document.getElementById('todos');
const todolist = document.getElementById('todolist');

function render() {
  const state = store.getState()
  // counterEl.innerHTML = state.count.toString()
  renderList(state);
}
// function renderList(state) {
//   todolist.innerHTML = '';
//   state.todos.map(function(todo, i) { 
//     let li = document.createElement('li');
//     li.innerHTML = todo.toString()
//     todolist.appendChild(li);
//   });
// }

store.subscribe(render)

//ACTIONS
document.getElementById('add')
    .addEventListener('click', () => {
      store.dispatch({ type: 'ADD' })
    })

document.getElementById('minus')
    .addEventListener('click', () => {
      store.dispatch({ type: 'MINUS' })
    })

document.getElementById('reset')
    .addEventListener('click', () => {
      store.dispatch({ type: 'RESET' })
    })

// document.getElementById('new')
//     .addEventListener('click', () => {
//       store.dispatch({ type: 'NEW', payload: todosInput.value })
//     })

// document.getElementById('delete')
//     .addEventListener('click', () => {
//       store.dispatch({ type: 'DELETE' })
//     })

// document.getElementById('deleteall')
//     .addEventListener('click', () => {
//       store.dispatch({ type: 'DELETEALL' })
//     })