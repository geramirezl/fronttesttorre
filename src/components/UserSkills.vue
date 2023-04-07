<template>
    <div class="container">
        <div class="row mt-4">
            <div class="col-md-6">
                <h2>Find user skills</h2>

                <label for="username-input" class="form-label">Enter your Torre username:</label>
                <div class="d-flex justify-content-between align-items-center">
                    <input type="text" id="username-input" class="form-control" v-model="username">
                    <button class="btn btn-primary my-3 btn-sm" @click="getSkills">Get Skills</button>
                </div>
            </div>
        </div>

        <div class="row mt-12 " v-if="skills.length">
            <div class="col-md-12 ">
                <h2>{{personInfo.name}}</h2>
                
                <h3>Percent complete user profile:</h3>
                <div class="progress col-md-6">
                    <div class="progress-bar bg-success" role="progressbar" :style="{ width: percent + '%' }" aria-valuenow="{{ percent }}" aria-valuemin="0" aria-valuemax="100" data-bs-toggle="progressbar">{{ percent }}%</div>
                </div>
                <h3>Skills:</h3>

                <ul class="list">
                
                    <li v-for="skill in skills" :key="skill.id" >
                        <button class="btn btn-success" @click="showSkillsInfo(skill)">Show Skills Info</button>
                        <b class="text-secondary" >{{ skill.name }}</b> 
                        
                    
                    </li>

                </ul>
            </div>
        </div>
        
        <div class="row mt-4" v-else>
            <div class="col-md-12">
                <p class="text-danger" v-if=botonBoolean>No skills or user found</p>
            </div>
        </div>
        

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
        percent: 0,
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
          this.percent= this.personInfo.completion * 100 
          
          
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
  <style scoped>
.btn {
  margin-left: 10px;
  margin: 10px
}
.list{
  list-style-type: none;
  margin: 0;
  padding: 0;
}
</style>