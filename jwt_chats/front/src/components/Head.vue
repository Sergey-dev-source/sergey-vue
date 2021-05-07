<template>
    <div id="nav">
        <div class="menu">
            <div class="s">
                <form>
                    <div class="search">
                        <input type="text" v-model="searchVal" @keyup="send" >
                    </div>
                </form>
                <div class="result" >
                  <search-result @ok="ok" />
                </div>
            </div>
          <ul>
            <li>
              <router-link to="/user">User</router-link>
              <router-link to="/chat">Chat</router-link>

              <button type="button" @click="logout">Logout</button>           
            </li>
        </ul>
        </div>
        
      </div>
</template>

<script>
import {mapActions} from 'vuex'
import SearchResult from "./user/SearchResult"
export default {
    
    
    data() {
      return {
        searchVal: '',
        
      }
    },
    
    mounted() { 
        let user2 = localStorage.getItem('token');
        let user1 = sessionStorage.getItem('token');
        if(!user2 && !user1){
            this.$router.push('/')
        }
        
    },
    methods: {
        logout(){
           localStorage.removeItem('token')
           sessionStorage.removeItem('token')
           localStorage.removeItem('i')
           this.us = true;
           this.$router.push({path: '/'})
           
        },

        ...mapActions(['search']),
        send(){
         
          let data = {
            s: this.searchVal
          }
          
          this.search(data);
        },
        ok(){
          this.searchVal = '';
        }
    },
    components: {
      SearchResult
    }
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
.s{
  margin: auto;
  position: relative;
}

.search input{
    width: 335px;
    height: 10px;
    padding: 5px 15px;
    border: none;
    outline: none;
    border-radius: 10px;
}
.result{
    position: absolute;
    width: auto;
    top: 37px;
    left: 0;
    background: darkgrey;
    z-index: 9;
  }
</style>