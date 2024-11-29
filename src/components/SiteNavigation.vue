<template>
    <header class="sticky top-0 bg-weather-primary shadow-lg">
        <nav class="container flex flex-col sm:flex-row items-center gap-4 py-6 text-white">
            <RouterLink :to="{ name: 'home' }">
                <div class="flex items-center gap-3">
                    <i class="fa-solid fa-sun text-2xl"></i>
                    <p class="text-2xl">The Local Weather</p>
                </div>
            </RouterLink>
            <div class="flex gap-3 flex-1 justify-end">
                <i @click="toggleModal"
                    class="fa-solid fa-circle-info text-xl hover:text-weather-secondary duration-150 cursor-pointer"></i>
            </div>
            <BaseModal :modalActive="modalActive" @close-modal="toggleModal">
                <h1 class="text-black">Salom! ushbu site sizga ob-havoni bilishingiz uchun yordam beradi</h1>
                <p></p>
            </BaseModal>
        </nav>
    </header>
</template>
<script setup>
import { ref } from "vue"
import { RouterLink } from 'vue-router'
import BaseModal from './BaseModal.vue'

const modalActive = ref(null)

const toggleModal = () => {
    modalActive.value = !modalActive.value
}
</script>
<style scoped></style>