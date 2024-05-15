<template>
    <ion-page>
        <ion-header>
            <ion-toolbar>
                <ion-buttons slot="start">
                    <ion-icon v-if="pageDefaultBackLink" :icon=" backBtn" style="color: white;" size="large" @click="handleRouterChange" ></ion-icon>
                    <!-- <ion-back-button id="abc" :default-href="pageDefaultBackLink" ></ion-back-button> -->
                </ion-buttons>
                <ion-title>{{ pageTitle }}</ion-title>
                <ion-buttons slot="end">
                    <slot name="actions-end"></slot>
                </ion-buttons>
            </ion-toolbar>
        </ion-header>
        <ion-content>
           <slot/>
        </ion-content>
    </ion-page>
    </template>
    <script setup>
    import {IonPage,IonHeader,IonTitle, IonContent,IonToolbar,IonButtons, IonBackButton} from '@ionic/vue'
    import { chevronBackOutline } from 'ionicons/icons'
    import { useRouter } from 'vue-router'
    import { Haptics } from '@capacitor/haptics';
    const router = useRouter()
    import {ref} from 'vue'
    const backBtn = ref(chevronBackOutline)
    const props = defineProps([
        'pageTitle',
        'pageDefaultBackLink'
    ])
    const handleRouterChange = async() =>{
        router.push(props.pageDefaultBackLink)
        await Haptics.selectionChanged();
    }
    </script>
