import { createSlice } from '@reduxjs/toolkit';

export default createSlice({
  name: 'filters',
  initialState: {
    search: '',
    status: 'All',
    priority: []
  },
  reducers: {
    searchFilterChange: (state, action) => {
      state.search = action.payload;
      //viet code mutation nhưng là inmutation vì có  IMMER
    },// tạo ra action với type 'filter/searchFilterChange
    statusFilterChange: (state, action) => {
      state.status = action.payload
    },
    priorityFilterChange: (state, action) => {
      state.priority = action.payload
    },
  }
})
