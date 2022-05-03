<template>
  <v-app>
    <v-main>
      <!-- <HelloWorld /> -->
      <WorkflowTable />
    </v-main>
  </v-app>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue';
import WorkflowTable from './components/WorkflowTable.vue';

export default {
  name: 'App',

  components: {
    // HelloWorld,
    WorkflowTable,
  },
};
</script>
