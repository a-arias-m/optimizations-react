export const getFilteredTodoList = (filterString: string, todoListToFilter: { id: number, todo: string}[]) => {
  const filteredTodoList = todoListToFilter.filter(
    (item) => (item.todo.includes(filterString))
  );

  // ⌛ very slow function emulator
  const startTime = performance.now();
  while (performance.now() - startTime < 300) {};

  return filteredTodoList;
}