<script setup lang="ts">
import Button from 'primevue/button'
import Toolbar from 'primevue/toolbar'
import FileUpload from 'primevue/fileupload'

const props = defineProps({
  isAvailableDeleteTodos: Boolean
})

const $emits = defineEmits(['openNew', 'confirmDeleteSelected', 'exportCSV'])
</script>
<template>
  <Toolbar class="mb-4">
    <template #start>
      <Button
        label="Nueva Tarea"
        icon="pi pi-plus"
        severity="success"
        class="mr-2"
        @click="$emits('openNew')"
      />
      <Button
        label="Borrar los seleccionados"
        icon="pi pi-trash"
        severity="danger"
        @click="$emits('confirmDeleteSelected')"
        :disabled="!props.isAvailableDeleteTodos"
      />
    </template>
    <template #end>
      <FileUpload
        mode="basic"
        accept="image/*"
        :maxFileSize="1000000"
        label="Import"
        chooseLabel="Import"
        class="mr-2 inline-block"
      />
      <Button
        label="Export"
        icon="pi pi-upload"
        severity="help"
        @click="$emits('exportCSV', $event)"
      />
    </template>
  </Toolbar>
</template>
