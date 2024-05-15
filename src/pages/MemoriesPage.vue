<template>
    <base-layout page-title="All Memories">
    <template v-slot:actions-end>
    <ion-buttons router-link="/memories/add">
        <ion-icon slot="icon-only" :icon="addIcon"></ion-icon>
    </ion-buttons>
    </template>
          <MemoriesList :memories="memories"/>

          <!-- Action sheet -->
          <!-- <ion-button @click="showActions">Action sheet</ion-button> -->

          <!-- Haptics -->
          <!-- <ion-button @click="hapticsImpactMedium">Medium</ion-button>
          <ion-button @click="hapticsImpactLight">Light</ion-button>
          <ion-button @click="hapticsVibrate">Vibrate</ion-button>
          <ion-button @click="hapticsSelectionStart">Selection start</ion-button>
          <ion-button @click="hapticsSelectionChanged">Selection changed</ion-button>
          <ion-button @click="hapticsSelectionEnd">Selection end</ion-button> -->

          <!-- Status bar -->
          <!-- <ion-button @click="setStatusBarStyleDark">Dark</ion-button>
          <ion-button @click="setStatusBarStyleLight">Light</ion-button>
          <ion-button @click="hideStatusBar">Hide Status</ion-button>
          <ion-button @click="showStatusBar">Show status</ion-button> -->
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
// import { StatusBar, Style } from '@capacitor/status-bar';
import { Haptics, ImpactStyle } from '@capacitor/haptics';


// HAPTICS

const hapticsImpactMedium = async () => {
  await Haptics.impact({ style: ImpactStyle.Medium });
};

const hapticsImpactLight = async () => {
  await Haptics.impact({ style: ImpactStyle.Light });
};

const hapticsVibrate = async () => {
  await Haptics.vibrate();
};

const hapticsSelectionStart = async () => {
  await Haptics.selectionStart();
};

const hapticsSelectionChanged = async () => {
  await Haptics.selectionChanged();
};

const hapticsSelectionEnd = async () => {
  await Haptics.selectionEnd();
};

// ACTION SHEET

// const showActions = async () => {
//   const result = await ActionSheet.showActions({
//     title: 'Photo Options',
//     message: 'Select an option to perform',
//     options: [
//       {
//         title: 'Upload',
//       },
//       {
//         title: 'Share',
//       },
//       {
//         title: 'Remove',
//         style: ActionSheetButtonStyle.Destructive,
//       },
//     ],
//   });

//   console.log('Action Sheet result:', result);
// };



// STATUS BAR

// iOS only
window.addEventListener('statusTap', function () {
  console.log('statusbar tapped');
});

// Display content under transparent status bar (Android only)
// StatusBar.setOverlaysWebView({ overlay: true });

// const setStatusBarStyleDark = async () => {
//   await StatusBar.setStyle({ style: Style.Dark });
// };

// const setStatusBarStyleLight = async () => {
//   await StatusBar.setStyle({ style: Style.Light });
// };

// const hideStatusBar = async () => {
//   await StatusBar.hide();
// };

// const showStatusBar = async () => {
//   await StatusBar.show();
// };
</script>
