
export default (state, action ) =>{
    switch(action.type){
        case'DELETE_TRANS':
        return{
            ...state,
            transcations : state.transcations.filter(item => item.id !== action.payload)
        }
        case'ADD_TRANS':
        return{
            ...state,
            transcations :[action.payload ,...state.transcations]
        }
        default:
            return state;
    }
}