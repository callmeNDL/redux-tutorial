import { createSelector } from '@reduxjs/toolkit';

export const searchTextSelector = (state) => state.filters.search;
export const todoListSelector = (state) => state.todoList;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priority;

export const todoRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  filterPrioritiesSelector,
  searchTextSelector,
  (todoList, status, priority, searchText) => {
    return todoList.filter((todo) => {
      if (status === 'All') {
        return (
          priority.length
            ? todo.name.includes(searchText) && priority.includes(todo.priority)
            : todo.name.includes(searchText)
        )
      }
      return (
        todo.name.includes(searchText) &&
        (status === 'Completed' ? todo.completed : !todo.completed) &&
        (priority.length ? todo.priority.includes(priority) : true)
      );
    });
  }
);

