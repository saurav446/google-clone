export const initialState ={
    term: null
}

export const actionTypes ={
    SET_SESRCH_TEAM: "SET_SESRCH_TEAM"
}

const reducer = (state,action) =>{
    
    switch (action.type){
       case actionTypes.SET_SESRCH_TEAM: 
          return{
              ...state,
              term: action.term
          };

          default: 
            return state;
    }
}

export default reducer;