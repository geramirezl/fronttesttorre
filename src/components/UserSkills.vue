<template>
    <div>

        <label for="username-input">Enter your Torre username:</label>
        <input type="text" id="username-input" v-model="username">
        <button @click="getSkills">Get Skills</button>
    
        <h1>{{ username }}</h1>
        <ul v-if="skills.length">
        
            <li v-for="skill in skills" :key="skill.id">
            <b>{{ skill.name }}:</b> {{ skill.proficiency }}
            </li>

        </ul>

        <p v-else>No skills found</p>

    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: '',
        skills: [],
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
          console.log(this.skills)
          console.log("exist?")
        })
        .catch(error => {
          console.error(error);
        });
    }
  }
  };
  </script>