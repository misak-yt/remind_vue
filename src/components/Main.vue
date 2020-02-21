<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <p>
      このアプリは買うべきリストやTodoリストを作ることができるアプリです！！
    </p>
    <router-link to="/buy">
      <button class="btn btn-outline-success" @click="to_buy">買い物</button>
    </router-link>
    <router-link to="/todo">
      <button class="btn btn-outline-success" @click="to_toDo">やること</button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'Hello',
  data () {
    return {
      msg: '！！Welcome to Remind App！！'
    }
  },
  methods: {
    to_buy: function () {
      this.$router.push('/buy')
    },
    to_toDo: function () {
      this.$router.push('/todo')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
