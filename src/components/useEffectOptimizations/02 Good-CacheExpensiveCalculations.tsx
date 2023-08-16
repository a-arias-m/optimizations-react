import React, { useMemo, useState } from "react";
import { getFilteredTodoList } from "../../utils";

interface ComponentProps {
  todoList: { id: number, todo: string}[];
  filter: string;
}

const CachingExpensiveCalculationsWellDone: React.FC<ComponentProps> = ({ todoList, filter }) => {
  const [name, setName] = useState<string>('');

  console.time('✅')
  // ✅ Does not re-run unless todoList or filter change
  const visibleTodoList = useMemo(() => (
    getFilteredTodoList(filter, todoList)
  ), [todoList, filter]);
  console.timeEnd('✅')

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

export { CachingExpensiveCalculationsWellDone };
