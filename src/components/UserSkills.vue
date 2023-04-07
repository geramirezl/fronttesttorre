<template>
    <div>
      <h1>{{ username }}</h1>
      <ul>
        <li v-for="skill in skills" :key="skill.id">
          <b>{{ skill.name }}:</b> {{ skill.proficiency }}
        </li>
      </ul>
    </div>
  </template>
  
  <script>
  import axios from 'axios';
  
  export default {
    data() {
      return {
        username: 'gaenrale',
        skills: [],
      };
    },
    mounted() {
      axios.get('https://cors-anywhere.herokuapp.com/https://torre.bio/api/bios/gaenrale', {
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
    },
  };
  </script>