<template>
    <Transition name="modal-outer">
        <div v-show="modalActive" style="z-index: 999999;"
            class="absolute w-full bg-black bg-opacity-30 h-screen top-0 left-0 flex justify-center px-8">
            <Transition name="modal-inner">
                <div v-if="modalActive" class="p-4 bg-white self-start mt-64 max-w-screen-md">
                    <slot />
                    <button @click="$emit('close-modal')" class="text-white mt-8 bg-weather-primary py-2 px-6">Close</button>
                </div>
            </Transition>
        </div>
    </Transition>
</template>
<script setup>
defineEmits(['close-modal'])
defineProps({
    modalActive: {
        type: Boolean,
        default: false,
    },
});
</script>