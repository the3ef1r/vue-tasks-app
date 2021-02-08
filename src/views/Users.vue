<template>
  <div class="container">
    <h1>Users</h1>
    <!--    <div class="row">-->
    <!--    TODO: mobile-view cards-->
    <!--      <div class="col s4" v-for="(user,idx) in users" :key="idx">-->
    <!--        <div class="card horizontal">-->
    <!--          <div class="card-stacked">-->
    <!--            <div class="card-content">-->
    <!--              <div class="name">{{ user.name }}</div>-->
    <!--              <div class="gender">{{ user.gender }}</div>-->
    <!--            </div>-->
    <!--            <div class="card-action">-->
    <!--              <router-link :to="`/users/user/` + user.id">View profile</router-link>-->
    <!--            </div>-->
    <!--          </div>-->
    <!--        </div>-->
    <!--      </div>-->
    <!--    </div>-->
    <div class="preloader-wrapper big active" v-if="loading">
      <div class="spinner-layer spinner-blue-only">
        <div class="circle-clipper left">
          <div class="circle"></div>
        </div>
        <div class="gap-patch">
          <div class="circle"></div>
        </div>
        <div class="circle-clipper right">
          <div class="circle"></div>
        </div>
      </div>
    </div>
    <div class="">
      <table v-if="users && users.length > 0">
        <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Age</th>
          <th>Gender</th>
          <th></th>
        </tr>
        </thead>
        <tbody>
        <tr v-for="(user,idx) in users" :key="idx">
          <td>
            <div class="cell">{{ idx + 1 }}</div>
          </td>
          <td>
            <div class="cell">{{ user.name }}</div>
          </td>
          <td>
            <div class="cell">{{ user.birth_year }}</div>
          </td>
          <td>
            <div class="cell">{{ user.gender }}</div>
          </td>
          <td>
            <div class="cell">
              <router-link :to="`/users/user/` + user.id">View profile</router-link>
            </div>
          </td>
        </tr>
        </tbody>
      </table>
      <ul class="pagination">
        <li class="disabled"><a href="#!"><i class="material-icons">chevron_left</i></a></li>
        <li class="active"><a href="#!">1</a></li>
        <li class="waves-effect"><a href="#!">2</a></li>
        <li class="waves-effect"><a href="#!">3</a></li>
        <li class="waves-effect"><a href="#!">4</a></li>
        <li class="waves-effect"><a href="#!">5</a></li>
        <li class="waves-effect"><a href="#!"><i class="material-icons">chevron_right</i></a></li>
      </ul>
    </div>
    <p v-if="errored">Error with request</p>
    <!--    <button @click="loadMoreHandler">Load more</button>-->
  </div>
</template>

<script>
import axios from 'axios'

const url = "http://swapi.dev/api/people/"
export default {
  name: "Users",
  data() {
    return {
      users: null,
      loading: false,
      errored: false
    }
  },
  methods: {},
  mounted() {
    axios
        .get(url)
        .then(
            response => (this.users = response.data.results),
            this.loading = true
        )
        .catch(error => this.errored = true)
        .finally(() => (this.loading = false))
  }
}
</script>

<style scoped>

</style>