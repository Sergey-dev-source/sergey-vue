<template>
    <div id="nav">
        <div class="menu">
            <div>
                <form>
                    <div class="search">
                        <input type="search" >
                    </div>
                </form>
            </div>
          <ul>
            <li>
                 <router-link to="/user">User</router-link>
               <button type="button" @click="logout">Logout</button>           
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
        if(!user && !user1){
            this.$router.push('/')
        }
        
    },
    methods: {
        logout(){
           localStorage.removeItem('token')
           sessionStorage.removeItem('token')
           this.us = true;
           this.$router.push({path: '/'})
           
        }
    },
}
</script>
<style scoped>

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

button{
    padding: 3px 5px;
    border: none;
    outline: none;
    font-size: 14px;
    background-color: crimson;
    color: white;
    border-radius: 3px;
    font-weight: bold;
    cursor: pointer;
}
</style>