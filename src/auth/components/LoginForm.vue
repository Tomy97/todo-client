<script setup lang="ts">
import { reactive, ref } from 'vue'
import { RouterLink } from 'vue-router'

import InputText from 'primevue/inputtext'
import Password from 'primevue/password'
import Button from 'primevue/button'
import FloatLabel from 'primevue/floatlabel'

const formValue = reactive({
  username: '',
  password: ''
})

const loading = ref<boolean>(false)

const handleLogin = async () => {
  loading.value = true

  setTimeout(() => {
    loading.value = false
  }, 2000)
}
</script>
<template>
  <div class="flex flex-column">
    <div class="flex justify-content-center">
      <div>
        <FloatLabel>
          <InputText v-model="formValue.username" class="w-full" />
          <label for="email">Email</label>
        </FloatLabel>
        <FloatLabel class="my-4">
          <Password v-model="formValue.password" toggleMask />
          <label for="password">Password</label>
        </FloatLabel>
        <div class="text-center mb-2">
          <span>
            No tengo cuenta
            <RouterLink :to="{ name: 'register' }" class="text-primary"> registrarme </RouterLink>
          </span>
        </div>
      </div>
    </div>
    <div class="flex flex-column">
      <Button type="button" label="Ingresar" class="mt-4" :loading="loading" @click="handleLogin" />
    </div>
  </div>
</template>
