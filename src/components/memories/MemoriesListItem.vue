<template>
    <ion-item
       :router-link="`/memories/${memory.id}`">
           <ion-thumbnail slot="start">
               <ion-img :src="memory.image" :alt="memory.title"></ion-img>
           </ion-thumbnail>

       {{memory.title}}</ion-item>
</template>
<script setup>
import {IonItem,IonThumbnail,IonImg} from '@ionic/vue'
const props = defineProps([
'memory'
])
</script>