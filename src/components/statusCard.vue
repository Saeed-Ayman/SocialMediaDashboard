<script setup>
defineProps({
    title: String,
    number: String,
    radio: String,
    icon: String,
    fill: String
})
</script>

<template>
    <div class="bg-grayish-blue rounded px-8 py-6 flex flex-col gap-5 dark:bg-desaturated-blue">
        <div class="flex justify-between items-end">
            <div class="text-sm text-grayish-blue font-bold dark:text-desaturated-blue">{{ title }}</div>
            <v-icon :class="fill" :name="icon" scale="1.25" />
        </div>
        <div class="flex justify-between items-end"
            :class="{ 'text-lime-green': radio[0] != '-', 'text-bright-red': radio[0] == '-' }">
            <div class="text-3xl font-bold text-dark-blue dark:text-white">{{ number }}</div>
            <div class="flex items-center">
                <v-icon class="-mr-0.5" :name="radio[0] != '-' ? 'md-arrowdropup' : 'md-arrowdropdown'" />
                <span class="text-xs font-bold">{{ Math.abs(radio) }}%</span>
            </div>
        </div>
    </div>
</template>