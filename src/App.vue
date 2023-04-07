<template>
  <head>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
  <div>
    <UserSkills />
  </div>
</template>

<script>
import UserSkills from './components/UserSkills.vue';

export default {
  name: 'App',
  components: {
    UserSkills,
  },
};
</script>

