<template>
    <div class="container">
      

      <div class="welcome">
        <h1>Welcome to my website!</h1>
        <p>My name is Gabriel Ramírez and this website showcases the results of the Torre SW Engineering Technical Testing. </p>
        <p>You can use the navbar or the buttons below to navigate and view the results.</p>
        <p>The test consists of building a page to list the skills of any given user. This is the Skill Finder component:</p>
        <button><router-link to="/skills" class="link"> Skills Finder </router-link> </button>
        <p>And to explain the deliverables, I built a component that provides detailed information about the website, including possible bugs and future developments:
        </p>
        <button><router-link to="/about" class="link">Deliverables </router-link> </button>
      </div>

    </div>
  </template>
  
  <script>
  export default {
    
  }
  </script>
  <style scoped>
  .welcome {
  max-width: 700px;
  margin: 0 auto;
  text-align: center;
  padding: 50px 20px;
}
  h1 {
    margin-bottom: 1em;
}
  button {
  margin-top: 1em;
  padding: 0.5em 1em;
  border-radius: 0.5em;
  background-color: #0d134e;
  color: white;
  font-size: 1rem;
  cursor: pointer;
}

button:hover {
  background-color: #8d99ae;
}

p {
  font-size: 1.2rem;
  line-height: 1.5em;
  margin-bottom: 1em;
}
.link {
  color: white;
  text-decoration: none;
  font-size: 1.2em;
}
  </style>