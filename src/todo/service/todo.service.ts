import axios from 'axios'
import type { Todo } from '../types/todo'
import type { DataForm } from '../types/data'

const BASE_URL = import.meta.env.VITE_API_URL
export const GetTodosService = async () => {
  const { data } = await axios.get<Todo[]>(`${BASE_URL}/todo`)

  return data
}

export const UpdateTodoService = async (id: string, todoValForm: DataForm) => {
  const { data } = await axios.patch<Todo>(`${BASE_URL}/todo/${id}`, todoValForm)

  return data
}

export const CreateTodoService = async (todo: DataForm) => {
  const { data } = await axios.post<Todo>(`${BASE_URL}/todo`, todo)

  return data
}

export const DeleteTodoService = async (id: string) => {
  await axios.delete(`${BASE_URL}/todo/${id}`)
}
