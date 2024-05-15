<template>
    <base-layout page-title="Map"  page-default-back-link="/memories/add">
        <!-- <MemoriesList :memories="memories" /> -->
        <capacitor-google-map ref="myDiv"></capacitor-google-map>

    </base-layout>

</template>
<script setup>
import { GoogleMap } from '@capacitor/google-maps';
import { ref, onMounted } from 'vue'

const myDiv = ref(null)
onMounted(() => {
    createMap()
})
const createMap = async () => {
    const mapRef = myDiv.value;

    const newMap = await GoogleMap.create({
        id: 'my-map', // Unique identifier for this map instance
        element: mapRef, // reference to the capacitor-google-map element
        apiKey: import.meta.env.VITE_API_KEY, // Your Google Maps API Key
        config: {
            center: {
                // The initial position to be rendered by the map
                lat: 23.022505,
                lng: 72.571365,
            },
            zoom: 8, // The initial zoom level to be rendered by the map
        },
    });
    // newMap.addMarker({
    //     position: {
    //         lat: 23.014509,
    //         lng: 72.591759,
    //     },
    //     title: 'Marker Title',
    //     snippet: 'Marker Description',
    // });
    // newMap.addListener('click', (event) => {
    //     // Get the clicked location
    //     const clickedLocation = event.latLng;

    //     // Do something with the clicked location, e.g., add a marker
    //     newMap.addMarker({
    //         position: clickedLocation,
    //         title: 'Selected Location',
    //     });
    // });
};
</script>
<style>
capacitor-google-map {
    display: inline-block;
    width: 100%;
    height:100%;
}
</style>