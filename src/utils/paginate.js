const paginate = (todos) => {
  const todosPerPage = 7;
  const pages = Math.ceil(todos.length / todosPerPage);
  console.log('PAGES',pages)

  const newTodos = Array.from({ length: pages }, (_, index) => {
    console.log('Index', index)
    const start = index * todosPerPage
    return todos.slice(start, start + todosPerPage);
  })
  console.log('TODOSfromPAG',newTodos)
  return newTodos
}

export default paginate

