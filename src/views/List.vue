<template>
  <div class="container">
    <h1>List</h1>
    <hr>
<!--    <list-filters :tasks="tasks">filters</list-filters>-->
    <div class="input-field col s3">
      <select ref="select" v-model="filter" >
        <option value="" disabled selected>Choose status</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="completed">Completed</option>
      </select>
      <label>Status Filter</label>
    </div>
    <button v-if="filter" class="btn-small" @click="filter = null">Clear Filter</button>
    <table v-if="tasks && tasks.length > 0">
      <thead>
      <tr>
        <th>Number</th>
        <th>Name</th>
        <th>Date & Time</th>
        <th>Description</th>
        <th>status</th>
        <th></th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="(task,idx) in displayTasks" :key="task.id">
        <td>
          <div class="cell">{{ idx + 1 }}</div>
        </td>
        <td>
          <div class="cell">{{ task.title }}</div>
        </td>
        <td>
          <div class="cell">{{ new Date(task.date).toLocaleDateString()}},{{new Date(task.time).toLocaleTimeString() }}</div>
        </td>
        <td class="default-td">
          <div class="cell description">{{ task.description }}</div>
        </td>
        <td>
          <div class="cell">{{ task.status }}</div>
        </td>
        <td>
          <div class="cell">
            <router-link tag="button" :to="`/task/` + task.id">
              Show Details
            </router-link>
          </div>
        </td>
      </tr>
      </tbody>
    </table>
    <p v-else>No tasks</p>
  </div>
</template>

<script>
import ListFilters from "@/components/ListFilters";
export default {
  name: "List",
  components: {ListFilters},
  data: () => ({
    filter: null,
  }),
  computed: {
    tasks() {
      return this.$store.getters.getTasks
    },
    displayTasks() {
      return this.tasks.filter(t => {
        if (!this.filter) {
          return true
        }
        return t.status === this.filter
      })
    },

  },
  mounted() {
    console.log(this.tasks.date);
    this.select = M.FormSelect.init(this.$refs.select, {});
  },
  methods: {
    formatDateTime(date,time) {

      //  moment().format('MMMM Do YYYY, h:mm:ss a')
    }
  }
}
</script>

<style scoped lang="scss">
.default-td {
  max-width: 400px;
}
.cell {
  &.description {
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
    display: block;
  }
}
</style>