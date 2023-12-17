<script setup>
import { useViewMode } from '../composables/useViewMode.js'

const viewMode = useViewMode()
</script>

<template>
    <button @click="viewMode.change" class="w-10 h-5 rounded-full m-1 bg-toggle-light dark:bg-toggle-dark">
        <div
            class="transition ease-in-out duration-300 w-4 h-4 m-0.5 rounded-full translate-x-5 bg-pale-blue dark:bg-very-dark-blue dark:translate-x-0">
        </div>
    </button>
</template>