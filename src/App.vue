<template>
  <ion-app>
    <ion-router-outlet />
    <div class="extra">
      <div class="extra-icon">
        <ion-icon :icon="ionicLogo" style="color: white;" size="large"  @click="router.push('/capacitorPlugins')"></ion-icon>
      </div>
    </div>
  </ion-app>
</template>

<script setup>
import { IonApp, IonRouterOutlet } from '@ionic/vue';
import { logoIonic } from 'ionicons/icons'
import {ref} from 'vue'
const ionicLogo= ref(logoIonic)
import { useRouter } from 'vue-router'
const router = useRouter()
</script>
<style scoped>
.extra{
  position: absolute;
  bottom: 0;
  right: 0;
  margin: 25px 25px;
}
.extra-icon{
  height:50px;
  width: 50px;
  background-color: blueviolet;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;

}
</style>