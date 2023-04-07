<template>
    <div v-if="show" >
        <div class="modal-overlay"></div>
        <div class="modal-dialog modal-o" role="document">
            <div class="modal-content">
                <div class="modal-header">
                <h4 class="modal-title">SKILL <h4 class=" text-r">{{ selectedSkill.name }}</h4></h4>
                
                
            
            </div>
      
            
            <div class="modal-body">
                <hr>
                <h6>The user has this information related to the skill: </h6>
                <hr>
                <p><h7 class="text-r">Proficiency: </h7>{{ selectedSkill.proficiency }}</p>
                <p><h7 class="text-r">Weight:</h7> {{ selectedSkill.weight }}</p>
                <p><h7 class="text-r">Recomendations:</h7> {{ selectedSkill.recommendations }}</p>
                
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-primary" data-dismiss="modal" @click="close">Close</button>
            </div>
            </div>
            
        </div>
    </div>
  </template>
  
  <script>
  import 'bootstrap';
  import 'bootstrap/dist/css/bootstrap.min.css';
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
.modal-o {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #f8f8f8;
    padding: 1em;
    z-index: 101;
  }
.text-r{
    color: #0c5c9a
}
</style>
  
