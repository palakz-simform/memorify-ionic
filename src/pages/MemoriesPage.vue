<template>
    <base-layout page-title="All Memories">
    <template v-slot:actions-end>
    <ion-buttons router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="addIcon"></ion-icon>
    </ion-buttons>
    </template>
          <MemoriesList :memories="memories"/>
</base-layout>

</template>
<script setup>
import {IonButtons,IonIcon,IonButton} from '@ionic/vue'
import {add} from 'ionicons/icons'
import {ref} from 'vue'
import MemoriesList from '../components/memories/MemoriesList.vue'
import { useMemoryStore } from '../stores/memory'
const {memories} = useMemoryStore()
const addIcon = ref(add)


</script>
