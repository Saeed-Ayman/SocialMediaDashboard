<script setup>
import Card from './components/card.vue';
import Panel from './components/panel.vue';
import StatusCard from './components/statusCard.vue';
import Switch from './components/switch.vue';
import Container from './components/container.vue';
import cards from './data/cards.json'
import statusCards from './data/statusCards.json';
</script>


<template>
  <nav class="pb-16 sm:pb-36 bg-pale-blue rounded-b-2xl flex flex-col justify-center dark:bg-very-dark-blue">
    <Container class="px-6 flex flex-col sm:flex-row sm:justify-between sm:items-center">
      <div class="border-b sm:border-b-0 py-6 border-dark-blue ">
        <div class="py-1 text-2xl font-bold text-dark-blue dark:text-white">Social Media Dashboard</div>
        <div class="text-sm font-bold text-grayish-blue dark:text-desaturated-blue">Total Followers: 23,004</div>
      </div>

      <div
        class="text-sm font-bold text-grayish-blue py-4 flex justify-between items-center gap-1 dark:text-desaturated-blue">
        <span>Dark Mode</span>
        <Switch />
      </div>
    </Container>
  </nav>

  <Container class="-mt-10 sm:-mt-28 px-6">
    <Panel>
      <Card v-for="card in cards" :fill="card.fill" :class="card.class" :name="card.name" :icon="card.icon"
        :title="card.title" :number="card.number" :increment="card.increment" />
    </Panel>
  </Container>

  <Container class="px-6 space-y-4 py-12">
    <div class="text-grayish-blue font-bold text-2xl mb-6 dark:text-white">Overview - Today</div>

    <Panel>
      <StatusCard v-for="card in statusCards" :fill="card.fill" :title="card.title" :number="card.number"
        :radio="card.radio" :icon="card.icon" />
    </Panel>
  </Container>
</template>
