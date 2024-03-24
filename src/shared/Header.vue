<script setup lang="ts">
import Avatar from 'primevue/avatar'
import Button from 'primevue/button'
import Menubar from 'primevue/menubar'
import { ref } from 'vue'
import Logo from './components/Logo.vue'
import { RouterLink, useRouter } from 'vue-router'

const showAvatar = ref<boolean>(false)

const router = useRouter()

const onRoutingLogin = () => {
  router.push({ name: 'login' })
}
</script>
<template>
  <header>
    <Menubar>
      <template #start>
        <RouterLink :to="{ name: 'todo' }">
          <Logo />
        </RouterLink>
      </template>

      <template #end>
        <div class="flex align-items-center gap-2">
          <template v-if="showAvatar">
            <Avatar
              image="https://primefaces.org/cdn/primevue/images/avatar/amyelsner.png"
              shape="circle"
            />
          </template>
          <template v-else>
            <Button icon="pi pi-user" label="Login" @click="onRoutingLogin" />
          </template>
        </div>
      </template>
    </Menubar>
  </header>
</template>
