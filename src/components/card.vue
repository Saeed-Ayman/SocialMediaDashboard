<script setup>
defineProps({
    fill: String,
    name: String,
    icon: String,
    title: String,
    number: String,
    increment: String
})
</script>

<template>
    <div
        class="bg-grayish-blue text-sm text-center w-full h-56 flex flex-col justify-evenly rounded border-t-4 dark:bg-desaturated-blue">
        <div class="text-xs flex justify-center items-center gap-1">
            <v-icon :class="fill" :name="icon" />
            <span class="font-bold text-grayish-blue dark:text-desaturated-blue">{{ name }}</span>
        </div>

        <div>
            <div class="text-6xl font-bold text-dark-blue dark:text-white">{{ number }}</div>
            <div class="uppercase text-xs text-grayish-blue tracking-[0.5em] dark:text-desaturated-blue">{{ title }}</div>
        </div>

        <div class="font-bold text-xs flex justify-center items-center"
            :class="{ 'text-lime-green': increment[0] != '-', 'text-bright-red': increment[0] == '-' }">
            <v-icon :name="increment[0] != '-' ? 'md-arrowdropup' : 'md-arrowdropdown'" />
            <span>{{ Math.abs(increment) }} Today</span>
        </div>
    </div>
</template>