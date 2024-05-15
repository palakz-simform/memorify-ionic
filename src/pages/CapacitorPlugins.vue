<template>
  <base-layout
    page-title="Capacitor Plugins"
    page-default-back-link="/memories"
  >
    <ion-grid class="capacitor">
      <ion-row>
        <ion-col>1</ion-col>
        <ion-col>2</ion-col>
        <ion-col>3</ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>
<script setup>
import { IonCol, IonGrid, IonRow } from "@ionic/vue";
import { ref, onMounted } from "vue";


</script>
<style>
.capacitor{
    margin:50px
}
</style>
