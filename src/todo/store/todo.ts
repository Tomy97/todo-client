import { ref } from 'vue'
import { defineStore } from 'pinia'
import type { Todo } from '../types/todo'
import {
  GetTodosService,
  UpdateTodoService,
  CreateTodoService,
  DeleteTodoService
} from '../service/todo.service'
import type { DataForm } from '../types/data'

export const useTodoStore = defineStore('todo', () => {
  const todos = ref<Todo[]>([])

  const fetchTodos = async () => {
    try {
      todos.value = await GetTodosService()
    } catch (error) {
      console.error('Error fetching todos:', error)
    }
  }

  const updateTodo = async (id: string, data: DataForm) => {
    try {
      await UpdateTodoService(id, data)
      todos.value = await GetTodosService()
    } catch (error) {
      console.error('Error updating todo:', error)
    }
  }

  const createNewTodo = async (data: DataForm) => {
    try {
      await CreateTodoService(data)
      todos.value = await GetTodosService()
    } catch (error) {
      console.error('Error creating todo:', error)
    }
  }

  const deleteTodo = async (id: string) => {
    try {
      await DeleteTodoService(id)
      todos.value = await GetTodosService()
    } catch (error) {
      console.error('Error deleting todo:', error)
    }
  }

  return { todos, fetchTodos, updateTodo, createNewTodo, deleteTodo }
})
