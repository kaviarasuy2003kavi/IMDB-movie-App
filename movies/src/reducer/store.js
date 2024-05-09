 
export const initialstates = {
    Name : 'kavi',
    age: {age :21}
    
 }
 

 export const ReducerFunc = (state = initialstates , action = {})=>{
 
 
       switch (action . type){
        case 'SEND_DATA' :
            return {
                ...state ,
               SendData : action.data 
            }
           
            default :
            return state
       }
            
        
 }