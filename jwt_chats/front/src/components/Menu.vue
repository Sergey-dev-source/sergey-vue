<template>
     <div id="nav">
        <div class="menu">
        <router-link to="/">Home</router-link>
          <ul>
            <li>
                <router-link to="/register">Register</router-link> | 
                <router-link to="/login">Login</router-link>            
            </li>
        </ul>
        </div>
      </div>
</template>

<script>


export default {
 
 mounted() {
   let user = localStorage.getItem('token');
        let user1 = sessionStorage.getItem('token');
        if(user || user1){
            this.$router.push('/user')
        }
 },
}
</script>
<style>
  #nav{
    background-color: black;
    text-align: end;
}

.menu{
  padding: 16px 30px;
    color: white;
    display: flex;
    justify-content: space-between;
}

#nav a {
  font-weight: bold;
  color: white;
  margin: 0 15px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>