import { PayloadAction, createSlice } from '@reduxjs/toolkit';

type TTodo = {
  id: string;
  title: string;
  description: string;
  isComplected?: boolean;
};

type TInitialState = {
  todos: TTodo[];
};

const initialState: TInitialState = {
  todos: [],
};

const todoSlice = createSlice({
  name: 'todo',
  initialState,
  reducers: {
    addTodo: (state, action: PayloadAction<TTodo>) => {
      state.todos.push({ ...action.payload, isComplected: false });
    },
    removeTodo: (state, action: PayloadAction<string>) => {
      state.todos = state.todos.filter((item) => item.id !== action.payload);
    },
    toggleCheckbox: (state, action: PayloadAction<string>) => {
      
      state.todos.sort((a, b) => (a.isComplected === b.isComplected) ? 0 : a.isComplected ? -1 : 1);

      const toggleTask = state.todos.find((item) => item.id === action.payload);

      toggleTask!.isComplected = !toggleTask?.isComplected;
    },
  },
});

export const { addTodo, removeTodo, toggleCheckbox } = todoSlice.actions;

export default todoSlice.reducer;
