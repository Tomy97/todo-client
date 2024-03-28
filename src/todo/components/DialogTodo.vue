<script setup lang="ts">
import { reactive, ref } from 'vue'
import Dialog from 'primevue/dialog'

import type { Todo } from '../types/todo.d.ts'

import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'
import InputText from 'primevue/inputtext'
import type { DataForm } from '../types/data'
import { useTodoStore } from '../store/todo'

const props = defineProps<{
  visible: boolean
  todo: Todo | null
}>()

const store = useTodoStore()

const $emits = defineEmits(['cancel', 'closeModal'])

const formValue = reactive<DataForm>({
  title: props.todo?.title || '',
  description: props.todo?.description || ''
})

const loading = ref<boolean>(false)

const onSubmitData = (id?: string) => {
  loading.value = true
  if (id) {
    store.updateTodo(id, formValue)
  } else {
    store.createNewTodo(formValue)
  }
  loading.value = false
  $emits('closeModal')
}
</script>
<template>
  <Dialog
    v-model:visible="props.visible"
    maximizable
    :modal="true"
    :header="todo !== null ? 'Editar Todo' : 'Crear Todo'"
    :style="{ width: '50rem' }"
    :breakpoints="{ '1199px': '75vw', '575px': '90vw' }"
    @update:visible="$emits('closeModal')"
  >
    <div class="flex flex-column justify-content-center align-items-center p-5">
      <FloatLabel class="mb-4">
        <InputText id="title" v-model="formValue.title" />
        <label for="title">Title</label>
      </FloatLabel>
      <FloatLabel>
        <InputText id="description" v-model="formValue.description" />
        <label for="description">Descripción</label>
      </FloatLabel>
    </div>
    <template #footer>
      <Button
        type="button"
        :label="todo ? 'Editar' : 'Crear'"
        icon="pi pi-check"
        :loading="loading"
        @click="onSubmitData(todo?.id)"
      />
    </template>
  </Dialog>
</template>
