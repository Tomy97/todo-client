<script setup lang="ts">
import { ref } from 'vue'

import Button from 'primevue/button'
import Column from 'primevue/column'
import DataTable from 'primevue/datatable'
import Tag from 'primevue/tag'
import type { Todo } from '../types/todo.d.ts'

const props = defineProps({
  todos: Array
})

const $emits = defineEmits(['onEdit', 'onDelete'])

const selectedTodos = ref<Todo[]>()
</script>
<template>
  <DataTable :value="props.todos" v-model:selection="selectedTodos" tableStyle="min-width: 50rem">
    <Column selectionMode="multiple" style="width: 3rem" :exportable="false"></Column>
    <Column field="id" header="#"></Column>
    <Column field="title" header="Title"></Column>
    <Column field="description" header="Description"></Column>
    <Column header="Estado" class="text-center">
      <template #body="slotProps">
        <Tag :severity="slotProps.data.completed ? 'success' : 'warning'">
          {{ slotProps.data.completed ? 'Completado' : 'Pendiente' }}
        </Tag>
      </template>
    </Column>
    <Column :exportable="false" style="min-width: 8rem">
      <template #body="slotProps">
        <Button
          icon="pi pi-pencil"
          outlined
          rounded
          class="mr-2"
          @click="$emits('onEdit', slotProps.data)"
        />
        <Button
          icon="pi pi-trash"
          outlined
          rounded
          severity="danger"
          @click="$emits('onDelete', slotProps.data)"
        />
      </template>
    </Column>
    <template #empty>
      <div class="text-center">
        No hay datos
      </div>
    </template>
  </DataTable>
</template>
