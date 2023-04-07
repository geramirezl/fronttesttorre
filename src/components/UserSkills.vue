<template>
    <div>

        <label for="username-input">Enter your Torre username:</label>
        <input type="text" id="username-input" v-model="username">
        <button @click="getSkills">Get Skills</button>
    
        <h1>{{ username }}</h1>
        <ul v-if="skills.length">
        
            <li v-for="skill in skills" :key="skill.id">
            <b>{{ skill.name }}:</b> 
            <button @click="showSkillsInfo(skill)">Show Skills Info</button>
            
            </li>

        </ul>

        <p v-else>No skills found</p>

        <SkillInfoModal :selectedSkill="selectedSkill" :show="showModal" @close="closeSkillsInfo" />
     

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SkillInfoModal from './SkillInfoModal.vue';
  
  export default {
    data() {
      return {
        username: '',
        skills: [],
        showModal: false,
        selectedSkill: {},
      };
    },


    methods: {
    getSkills() {
      axios.get(`https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/${this.username}`, {
        headers: {
          'x-requested-with': 'XMLHttpRequest',
        },
      })
        .then(response => {
          this.skills = response.data.strengths;
          
          
        })
        .catch(error => {
          console.error(error);
        });
    },

    
    showSkillsInfo(skill) {
      this.selectedSkill = skill;
      this.showModal = true;
      
    },
    closeSkillsInfo() {
      this.selectedSkill = {};
      this.showModal = false;
      
    }
  },
  components: {
    SkillInfoModal,
  },
  };
  </script>