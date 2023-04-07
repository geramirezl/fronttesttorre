<template>
    <div v-if="show">
      <div class="modal-overlay"></div>
      <div class="modal">
        <h2>{{ selectedSkill.name }}</h2>
        <p>Proficiency: {{ selectedSkill.proficiency }}</p>
        <p>Weight: {{ selectedSkill.weight }}</p>
        <p>Recomendations: {{ selectedSkill.recommendations }}</p>
        <button @click="close">Close</button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    props: {
      show: Boolean,
      selectedSkill: Object,
    },
    methods: {
      close() {
        this.$emit('close');
      },
    },
  };
  </script>
  
  <style scoped>
  .modal-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.5);
    z-index: 100;
  }
  .modal {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #fff;
    padding: 1em;
    z-index: 101;
  }
  </style>
  