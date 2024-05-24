<template>
  <base-layout
    page-title="Capacitor Plugins"
    page-default-back-link="/memories"
  >
    <ion-grid>
      <!-- Browser Plugin Card -->
      <ion-row>
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Browser</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button expand="block" @click="openBrowser">Open browser</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Device Plugin Card -->
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Device</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button expand="block" @click="logDeviceInfo">Device Info</ion-button>
              <ion-button expand="block" @click="logBatteryInfo">Battery Info</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Network Plugin Card -->
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Network</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button expand="block" @click="logCurrentNetworkStatus">Status</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Status Bar Plugin Card -->
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Status Bar</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button expand="block" @click="setStatusBarStyleDark">Light</ion-button>
              <ion-button expand="block" @click="setStatusBarStyleLight">Dark</ion-button>
              <ion-button expand="block" @click="hideStatusBar">Hide</ion-button>
              <ion-button expand="block" @click="showStatusBar">Show</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>

        <!-- Haptics Plugin Card -->
        <ion-col size="12" size-md="6" size-lg="4">
          <ion-card>
            <ion-card-header>
              <ion-card-title>Haptics</ion-card-title>
            </ion-card-header>
            <ion-card-content>
              <ion-button expand="block" @click="hapticsImpactMedium">Medium</ion-button>
              <ion-button expand="block" @click="hapticsImpactLight">Light</ion-button>
              <ion-button expand="block" @click="hapticsVibrate">Vibrate</ion-button>
              <ion-button expand="block" @click="hapticsSelectionStart">Selection start</ion-button>
              <ion-button expand="block" @click="hapticsSelectionChanged">Selection changed</ion-button>
              <ion-button expand="block" @click="hapticsSelectionEnd">Selection end</ion-button>
            </ion-card-content>
          </ion-card>
        </ion-col>
      </ion-row>
    </ion-grid>
  </base-layout>
</template>

<script setup>
import { IonGrid, IonRow, IonCol, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from "@ionic/vue";
import { Browser } from '@capacitor/browser';
import { Device } from '@capacitor/device';
import { Dialog } from '@capacitor/dialog';
import { Network } from '@capacitor/network';
import { Haptics, ImpactStyle } from '@capacitor/haptics';
import { ref, onMounted } from "vue";

const openBrowser = async() =>{
    await Browser.open({ url: 'http://capacitorjs.com/' });
}

const logDeviceInfo = async () => {
  const info = await Device.getInfo();
  await Dialog.alert({
    title: 'Device Information',
    message: `Model: ${info.model}\nOperating system: ${info.operatingSystem}\nPlatform: ${info.platform}`,
  });
};

const logBatteryInfo = async () => {
  const info = await Device.getBatteryInfo();
  await Dialog.alert({
    title: 'Battery Information',
    message: `Battery Info: ${info.batteryLevel}\nIs Charging: ${info.isCharging}` ,
  });
};

import { StatusBar, Style } from '@capacitor/status-bar';
// iOS only
window.addEventListener('statusTap', function () {
  alert('statusbar tapped');
});

const setStatusBarStyleDark = async () => {
  await StatusBar.setStyle({ style: Style.Dark });
};

const setStatusBarStyleLight = async () => {
  await StatusBar.setStyle({ style: Style.Light });
};

const hideStatusBar = async () => {
  await StatusBar.hide();
};

const showStatusBar = async () => {
  await StatusBar.show();
};

Network.addListener('networkStatusChange', status => {
  console.log('Network status changed', status);
});
const logCurrentNetworkStatus = async () => {
  const status = await Network.getStatus();

  await Dialog.alert({
    title: 'Network Status',
    message: `Connected: ${status.connected}\nConnection Type: ${status.connectionType}` ,
  });
};

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
</script>
<style>
.capacitor{
    margin:50px
}
.title{
  margin-right: 20px;
}
.plugin-item{
  display: flex;
  justify-content: space-between;
}
.plugin-btn{
  display: flex;
}
</style>
