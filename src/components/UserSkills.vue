<template>
    <div>

        <label for="username-input">Enter your Torre username:</label>
        <input type="text" id="username-input" v-model="username">
        <button @click="getSkills">Get Skills</button>
    
        <h1 v-if="skills.length">{{personInfo.name}}</h1>
        <h2 v-if="skills.length">Percent complete user profile: {{personInfo.completion}}</h2>
        <ul v-if="skills.length">
        
            <li v-for="skill in skills" :key="skill.id">
            <b>{{ skill.name }}:</b> 
            <button @click="showSkillsInfo(skill)">Show Skills Info</button>
            
            </li>

        </ul>
        <div v-else><p v-if=botonBoolean>No skills or user found</p></div>
        

        <SkillInfoModal :selectedSkill="selectedSkill" :show="showModal" @close="closeSkillsInfo" />
     

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  import SkillInfoModal from './SkillInfoModal.vue';
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';

  
  export default {
    data() {
      return {
        username: '',
        skills: [],
        showModal: false,
        selectedSkill: {},
        personInfo: {},
        botonBoolean: false,
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
          this.personInfo=response.data.person;
          this.botonBoolean=true;
          
          
        })
        .catch(error => {
          console.error(error);
        });
    },

    
    showSkillsInfo(skill) {
      this.selectedSkill = skill;
      this.showModal = true;
      console.log(skill)
      
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