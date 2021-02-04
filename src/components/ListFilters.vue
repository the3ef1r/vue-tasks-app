<template>
  <div class="row">
    <div class="input-field col s3">
      <select ref="select" v-model="filter" @change="">
        <option value="" disabled selected>Choose status</option>
        <option value="active">Active</option>
        <option value="expired">Expired</option>
        <option value="completed">Completed</option>
      </select>
      <label>Status Filter</label>
    </div>
  </div>
</template>

<script>
export default {
  name: "ListFilters",
  props: ['tasks'],
  data() {
    return {
      filter: null,
    }
  },
  computed: {


  },
  mounted() {
    this.select = M.FormSelect.init(this.$refs.select, {});
  }
}
</script>

<style scoped>

</style>