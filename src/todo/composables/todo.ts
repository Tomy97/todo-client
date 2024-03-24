import type { Todo } from '../types/todo'

export const confirmDeleteTodo = (todoId: number) => {
  console.log(todoId)
}

export const exportCSV = ($event: Event) => {
  console.log('exportCSV', $event.target)
}
