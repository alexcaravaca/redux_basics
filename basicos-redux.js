const redux = require('redux');

const createStore = redux.createStore;
const initialSatate = {
    users:[]
}
// reducer 
const reducerPrincipal = (state = initialSatate, action) => {

    if(action.type === "AGREGAR_USUARIO"){
        return {
            ...state,
            users: action.name
        }
    }
    return state;
}

// 3 parametros  reducer, state inicial, applymiddleware

const store = createStore(reducerPrincipal);

//console.log(store.getState() );


// subscribe 

store.subscribe(()=>{
    console.log('something change ', store.getState());
})


// dispatch para cambiar el state 
store.dispatch({ type: 'AGREGAR_USUARIO' , name: 'Alex' });
//console.log(store.getState() );