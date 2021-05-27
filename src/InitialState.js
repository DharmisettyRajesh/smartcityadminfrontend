export const initialState={
    user:'Guset User',
    token:''
}

const reducer=(state,action)=>{
    switch(action.type){
        case 'SETUSER':
            localStorage.setItem('rajesh',JSON.stringify({token:action.token}))
            return{
                ...state,
                user:action.user,
                token:action.token
            }
        case 'REMOVEUSER':
            localStorage.removeItem('rajesh');
            return{
                ...state,
                user:action.user,
                token:''
            }
        default:
            return state;
    }
}
export default reducer;