<template>
  <head>
  <link rel="stylesheet" href="node_modules/bootstrap/dist/css/bootstrap.min.css">
</head>
  <div>
    <UserSkills />
  </div>

  <div>
    <nav>
      <ul>
        <li>
          <router-link to="/">Home</router-link>
        </li>
        <li>
          <router-link to="/about">About</router-link>
        </li>
        <li>
          <router-link to="/skills"> Skills Finder </router-link>
        </li>
      </ul>
    </nav>
    <router-view />
  </div>
</template>

<script>

import router from './router';


export default {
  name: 'App',
  
  router
};
</script>
<style scoped>
nav {
  background-color: #f8f9fa;
  padding: 10px;
}

nav ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

nav li {
  display: inline-block;
  margin-right: 10px;
}

nav a {
  text-decoration: none;
  color: #343a40;
  font-weight: bold;
}


nav li:hover {
  background-color: #007bff;
  border-radius: 5px;
  
}

nav a:hover{
  color:#f8f9fa
}
</style>
