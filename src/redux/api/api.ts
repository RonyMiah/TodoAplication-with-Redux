import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:8000' }),
  tagTypes: ['todo'], // Multipul tag aste pare todo array er modhe //!its a catch Name .

  endpoints: (builder) => ({
    getTodos: builder.query({
      query: (priority) => {
        //for usecase Params More Profetional ..
        const params = new URLSearchParams();

        if (priority) {
          params.append('priority', priority);
        }
        return {
          // url: `tasks?priority=${priority}`
          url: `/tasks`,
          method: 'GET',
          params: params,
          //* Eivabew kora jay //
        };
      },
      providesTags: ['todo'],
    }),
    addTodo: builder.mutation({
      query: (data) => {
        console.log(data);
        return {
          url: '/task',
          method: 'POST',
          body: data,
          //* Eivabew kora jay //
        };
      },
      invalidatesTags: ['todo'],
    }),
    deleteTodo: builder.mutation({
      query: (id) => {
        return {
          url: `/task/${id}`,
          method: 'DELETE',
          // body: id,

          //* Eivabew kora jay //
        };
      },
      invalidatesTags: ['todo'],
    }),
    updateTodo: builder.mutation({
      query: (options) => {
        console.log(options, '#####');
        return {
          url: `/task/${options.id}`,
          method: 'PUT',
          body: options.data,
        };
      },
      invalidatesTags: ['todo'],
    }),
  }),
});

export const {
  useGetTodosQuery,
  useAddTodoMutation,
  useUpdateTodoMutation,
  useDeleteTodoMutation,
} = baseApi;
