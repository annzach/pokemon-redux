//thunk

//synchronous action creator
import axios from 'axios'
export function receivePokemon(pokemon){
  return {
    type:'RECEIVE_POKEMON',
    payload:{pokemon}
  }
}


//asynchronous action creator
export function fetchPokemon(){
  return dispatch => {
   axios.get('/api/pokemon')
        .then(res=>res.data)
        .then(pokemon =>{
          dispatch(receivePokemon(pokemon));
        })
        .catch(console.error);
  }
}

export function createPokemon(pokemon){
  return dispatch =>{
    axios.post('/api/pokemon',pokemon)
         .then(()=>{
          dispatch(fetchPokemon())
         })
         .catch(console.error)
  }
}

export function deletePokemon(id){
    console.log("id in action....", id);
  return dispatch =>{
    axios.delete('/api/pokemon/'+id)
          .then(()=>{
          dispatch(fetchPokemon())
         })
         .catch(console.error)
  }
}

export function updatePokemon(newVal,id){
  console.log("newVal",newVal);
    console.log("id in updatePokemon action....", id);
  return dispatch =>{
    axios.put('/api/pokemon/'+id , newVal)
          .then(()=>{
          dispatch(fetchPokemon())
         })
         .catch(console.error)
  }
}
export function changeSort(value){
  return {
    type:'CHANGE_SORT',
    payload:{value}
  }
}

/*
export function updateMe(newVal,id){
  //console.log("inside updateMeaqction", newVal,id);
  return{
    type: 'UPDATE_ME',
    payload: {newVal,id}
  }
}
*/