import React, { useEffect, useState } from "react";
import { getFilteredTodoList } from "../../utils";

interface ComponentProps {
  todoList: { id: number, todo: string}[];
  filter: string;
}

const CachingExpensiveCalculations: React.FC<ComponentProps> = ({ todoList, filter }) => {
  const [name, setName] = useState<string>('');

  console.time('❌')
  // ❌ Avoid: redundant state
  const visibleTodoListInitial = getFilteredTodoList(filter, todoList);
  const [visibleTodoList, setVisibleTodoList] = useState<{ id: number, todo: string}[]>(visibleTodoListInitial);
  // ❌ Avoid: unnecessary Effect
  useEffect(() => {
    setVisibleTodoList(getFilteredTodoList(filter, todoList));
  }, [filter, todoList]);
  console.timeEnd('❌')

  return (
    <div>
      <input
        value={name}
        placeholder="Name"
        onChange={(event) => setName(event.target.value)}
      />
      <ul>
        {visibleTodoList.map((item) => (
          <li key={item.id}>{item.todo}</li>
        ))}
      </ul>
    </div>
  );
};

export { CachingExpensiveCalculations };
