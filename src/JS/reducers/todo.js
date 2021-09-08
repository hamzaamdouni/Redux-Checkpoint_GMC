import { ADD_TASK, DELETE_TASK, EDIT_TASK, STATUS_TASK } from "../constants/todo";

// initialState
const initialState ={
    tasks:[{id:Math.random(),text:'react checkpoint',status:false},
            {id:Math.random(),text:'redux checkpoint',status:false}
]
};
// fonction
const todoReducer=(state=initialState, action)=>{
    switch(action.type){
        case ADD_TASK: return{...state,tasks:[...state.tasks,action.payload]};
        case EDIT_TASK: return{...state,tasks:state.tasks.map(el=>el.id==action.payload.id?{...el,text:action.payload.newText}:el)};
        case DELETE_TASK: return{...state,tasks:state.tasks.filter(el=>el.id!=action.payload)};
        case STATUS_TASK: return{...state,tasks:state.tasks.map((el)=>el.id==action.payload?{...el,status:!el.status}:el)};
        default: return state;
    }
}
// export reducer
export default todoReducer;