import { defineStore } from 'pinia'
import { ref, computed } from 'vue'
export const useMemoryStore = defineStore('car', () => {
    const memories = computed(() => {
        return memoryList
    })
    const memory = computed((memoryId) => {
        return (memoryId) => {
            return memoryList.value.find(memory => memory.id === memoryId)
        }
    })
    const memoryList = ref([
        {
            id: 'm1',
            image: 'https://img.freepik.com/free-photo/travel-concept-with-landmarks_23-2149153256.jpg',
            title: 'A trip into the mountains',
            location: 'US',
            description: 'It was a really nice trip'
        },
        {
            id: 'm2',
            image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQL5LWsafTKsdu4gkBo0PszRF8M-ou_GJhzay4x0xAqOw&s',
            title: 'Surfing the sea side',
            location: 'UK',
            description: 'Feeling the cool breeze'
        },
        {
            id: 'm3',
            image: 'https://media.istockphoto.com/id/1457979959/photo/snack-junk-fast-food-on-table-in-restaurant-soup-sauce-ornament-grill-hamburger-french-fries.webp?b=1&s=170667a&w=0&k=20&c=A_MdmsSdkTspk9Mum_bDVB2ko0RKoyjB7ZXQUnSOHl0=',
            title: 'Foodie zone',
            location: 'UK',
            description: 'Tasty yummy foodp'
        }

    ])
    return {
        memories, memory, memoryList
    }
})