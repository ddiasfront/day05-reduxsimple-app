import { createStore } from 'redux'

//REDUCER
function counter(currentState, action) {
  if (typeof state === 'undefined') {
  return {count: 0}
  }
  var nextState = {
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
function todosReducer(state, action) {
  if (typeof state === 'undefined') {
    return { todos: [] }
    }

  let nextState = Object.assign({}, state);

  switch (action.type) {
    case 'NEW':
      nextState.todos.push(action.payload)
      return nextState;
    case 'DELETE':
      nextState.todos.pop();
      return nextState;
    case 'DELETEALL':
      nextState.todos = []
      return nextState;
      break;
    default:
      return state
  }
}

//STORE
let store = createStore(todosReducer);
let counterEl = document.getElementById('counter');
let todosInput = document.getElementById('todos');
let todolist = document.getElementById('todolist');

function render() {
  let state = store.getState()
  // counterEl.innerHTML = state.count.toString()
  renderList(state);
}
function renderList(state) {
  todolist.innerHTML = '';
  state.todos.map(function(todo, i) { 
    var li = document.createElement('li');
    li.innerHTML = todo.toString()
    todolist.appendChild(li);
  });
}

store.subscribe(render)

//ACTIONS
document.getElementById('add')
    .addEventListener('click', function(){
      store.dispatch({ type: 'ADD' })
    })

document.getElementById('minus')
    .addEventListener('click', function(){
      store.dispatch({ type: 'MINUS' })
    })

document.getElementById('reset')
    .addEventListener('click', function(){
      store.dispatch({ type: 'RESET' })
    })

document.getElementById('new')
    .addEventListener('click', function(){
      store.dispatch({ type: 'NEW', payload: todosInput.value })
    })

document.getElementById('delete')
    .addEventListener('click', function(){
      store.dispatch({ type: 'DELETE' })
    })

document.getElementById('deleteall')
    .addEventListener('click', function(){
      store.dispatch({ type: 'DELETEALL' })
    })