<template>
    <ion-list >
       <MemoryListItem v-for="memory in memories"
       :key="memory.id" :memory="memory"/>
    </ion-list>
   </template>
   <script setup>
   import {IonList} from '@ionic/vue'
   import MemoryListItem from './MemoriesListItem.vue'
   const props = defineProps([
       'memories'
   ])
   </script>