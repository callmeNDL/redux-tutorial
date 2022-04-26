// const initState = [
//   { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
//   { id: 2, name: 'Learn redux', completed: true, priority: 'High' },
//   { id: 3, name: 'Learn java', completed: false, priority: 'Low' },
// ]

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case 'todoList/addTodo':
//       return [
//         ...state,
//         action.payload
//       ];
//     case 'toggleTodoStatus':
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );
//     default:
//       return state;
//   }
// }


// export default todoListReducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from "axios";

export const getTodo = createAsyncThunk(
  'todoList/getTodo',
  async () => {
    const { data } = await axios.get('https://626763f878638336421ecedf.mockapi.io/filter');
    return data;
  }
)

export default createSlice({
  name: 'todoList',
  initialState: [
    { id: 1, name: 'Learn Yoga', completed: false, priority: 'Medium' },
    { id: 2, name: 'Learn redux', completed: true, priority: 'High' },
    { id: 3, name: 'Learn java', completed: false, priority: 'Low' },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },// tự động tạo action creators
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find(todo => todo.id === action.payload);
      if (currentTodo) {
        currentTodo.completed = !currentTodo.completed;
      }
    }
  },
  extraReducers: {
    //addTodo
    [getTodo.pending](state) {
      console.log('pending');
    },
    [getTodo.fulfilled](state, { payload }) {
      state.push(payload)
      console.log('success');
    },
    [getTodo.rejected](state) {
      console.log('failed');
    },
  }
})