<script setup lang="ts">
import Logo from '@/shared/components/Logo.vue'
import LoginForm from '../components/LoginForm.vue'

import Card from 'primevue/card'
</script>
<template>
  <main class="h-screen flex-row flex-wrap flex align-items-center justify-content-center">
    <Card class="card-width">
      <template #title>
        <div class="flex align-items-center flex-column">
          <Logo />
          <h5 class="mt-2">Login</h5>
        </div>
      </template>
      <template #content>
        <LoginForm />
      </template>
    </Card>
  </main>
</template>
<style scoped>
.card-width {
  width: 25rem;
  @media screen and (max-width: 425px) {
    width: 100%;
  }
}
</style>
