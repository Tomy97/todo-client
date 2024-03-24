<script setup lang="ts">
import { computed, reactive, ref } from 'vue'

import DialogTodo from '../components/DialogTodo.vue'
import DataTableTodo from '../components/DataTableTodo.vue'
import ToolbarTodo from '../components/ToolbarTodo.vue'

import type { Todo } from '../types/todo.d.ts'

import { confirmDeleteTodo, exportCSV } from '@/todo/composables/todo'

const todos = reactive<Todo[]>([
  {
    id: 1,
    title: 'hola, soy un titulo',
    description: 'hola, soy una descripción',
    completed: false
  },
  {
    id: 2,
    title: 'hola, soy un titulo 2',
    description: 'hola, soy una descripción 2',
    completed: true
  },
  {
    id: 3,
    title: 'hola, soy un titulo 3',
    description: 'hola, soy una descripción 3',
    completed: false
  }
])
const todoForEdit = ref<Todo | null>(null)
const visibleDialog = ref<boolean>(false)
const selectedTodosForDelete = ref<Todo[]>()

const openNew = () => {
  visibleDialog.value = true
}

const closeDialog = () => {
  visibleDialog.value = false
  todoForEdit.value = null
}
const confirmDeleteSelected = ($event: Event) => {
  console.log(selectedTodosForDelete.value)
}

const editTodo = (todo: Todo) => {
  visibleDialog.value = true
  todoForEdit.value = todo
}

const isAvailableDeleteTodos = computed(() => {
  return selectedTodosForDelete.value && selectedTodosForDelete.value.length >= 2
})
</script>
<template>
  <main class="h-screen flex-wrap flex align-items-center justify-content-center">
    <div class="flex flex-column text-center">
      <h1 class="text-5xl">Todo List</h1>
      <ToolbarTodo
        :isAvailableDeleteTodos="isAvailableDeleteTodos"
        @openNew="openNew"
        @confirmDeleteSelected="confirmDeleteSelected"
        @exportCSV="exportCSV"
      />
      <DataTableTodo :todos="todos" @onDelete="confirmDeleteTodo" @onEdit="editTodo" />
      <template v-if="visibleDialog">
        <DialogTodo :visible="visibleDialog" :todo="todoForEdit" @closeModal="closeDialog" />
      </template>
    </div>
  </main>
</template>
