<template>
    <div class="memory-card">
        <ion-card class="memory-content">
            <img :src="image" :alt="title"/>
            <ion-card-header>
              <ion-card-title style="color: blueviolet;">{{ title }},{{ location }}</ion-card-title>
            </ion-card-header>
            <ion-card-content>
                {{ description }}
            </ion-card-content>

            <ion-button @click="shareFile">Share Memory</ion-button>
          </ion-card>
    </div>
</template>
<script setup>
import {IonImg, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle,IonButton} from '@ionic/vue'
import { Share } from '@capacitor/share';
const props = defineProps([
    'title',
    'image',
    'location',
    'description'
])
const shareFile = async() =>{
  await Share.share({
  title: `${props.title}, ${props.location}`,
  text: props.description,
  url: props.image,
  dialogTitle: 'Share with buddies',
});

}
 </script>
 <style scoped>
.memory-card{
    display: flex;
    justify-content: center;
}
.memory-content{
    display: flex;
    flex-direction: column;
    justify-content: center;
}
ion-card-content,ion-card-title{
    display: flex;
    justify-content: center;
}
</style>