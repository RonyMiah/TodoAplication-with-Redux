import { useState } from 'react';
import AddtodoModal from './AddtodoModal';
import TodoCard from './TodoCard';
import TodoFilter from './TodoFilter';
import { useGetTodosQuery } from '@/redux/api/api';
import { JSX } from 'react/jsx-runtime';

const TodoContainer = () => {
  const [priority, setPriority] = useState('');
  // console.log(priority)
  //* From Local State
  // const { todos } = useAppSelector((state) => state.todos);
  //* From Server
  const { data: todos, isLoading } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loding ...</p>;
  }
  // console.log(todos);
  return (
    <div>
      <div className="flex justify-between mb-5 ">
        <AddtodoModal />
        <TodoFilter priority={priority} setPriority={setPriority} />
      </div>
      <div className="bg-primary-gradient  w-full rounded-xl  p-1 ">
        <div className="bg-white p-5 w-full h-full rounded-lg space-y-3 ">
          {/* <div className="flex justify-center items-center text-2xl p-2 rounded-md font-bold bg-white ">
          <p>There is No Task Panding ..</p>
        </div> */}
      
          {todos?.data?.map(
            (
              item: JSX.IntrinsicAttributes & {
                _id: string;
                title: string;
                description: string;
                isComplected?: boolean | undefined;
                priority: string;
              }
            ) => (
              <TodoCard
                {
                  ...item
                  //   id={item.id}
                  // title={item.title}
                  // description={item.description
                  // }
                  //2 tai same je konota amra pathaite pari .
                }
              />
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default TodoContainer;
