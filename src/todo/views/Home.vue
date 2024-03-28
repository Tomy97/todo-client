<script setup lang="ts">
import { computed, onMounted, ref } from 'vue'

import DialogTodo from '../components/DialogTodo.vue'
import DataTableTodo from '../components/DataTableTodo.vue'
import ToolbarTodo from '../components/ToolbarTodo.vue'

import type { Todo } from '../types/todo.d.ts'

import { exportCSV } from '@/todo/composables/todo'
import { useTodoStore } from '../store/todo'

const store = useTodoStore()

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

onMounted(() => {
  store.fetchTodos()
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
      <DataTableTodo :todos="store.todos" @onDelete="store.deleteTodo" @onEdit="editTodo" />
      <template v-if="visibleDialog">
        <DialogTodo :visible="visibleDialog" :todo="todoForEdit" @closeModal="closeDialog" />
      </template>
    </div>
  </main>
</template>
