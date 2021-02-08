<template>
  <div class="container">
    <h1>Create Task</h1>
    <div class="row">
      <form class="col s12" @submit.prevent="submitHandler">
        <div class="row">
          <div class="input-field">
            <input v-model="title" id="tasks" type="text" class="validate" required>
            <label for="tasks">Task Name</label>
            <span class="helper-text" data-error="Please input Title"
                  data-success="Successfull">Title is required</span>
          </div>
          <div ref="chips" class="chips chips-initial"></div>
          <div class="input-field">
            <textarea v-model="description" id="textarea" class="materialize-textarea"></textarea>
            <label for="textarea">Description</label>
            <span class="character-counter" style="float: right;font-size: 12px;">{{ description.length }}/400</span>
          </div>
          <div class="input-field">
            <input id="date" ref="datepicker" type="text" class="datepicker">
            <label for="date">Pick Due Date</label>
          </div>
          <div class="input-field">
            <input id="time" ref="timepicker" type="text" class="timepicker">
            <label for="time">Pick Due Time</label>
          </div>
          <button class="waves-effect waves-light btn-large" type="submit">Add Task</button>
        </div>
      </form>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Create',
  components: {},
  data() {
    return {
      description: '',
      title: ' ',
      date: null,
      time: null,
      chips: null,
    }
  },
  mounted() {
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task Tags'
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(),
      setDefaultDate: true,
      showClearBtn: true,
    });
    this.timepicker = M.Timepicker.init(this.$refs.timepicker, {
      autoClose: true,
      showClearBtn: true,
    });
  },
  methods: {
    submitHandler() {
      const task = {
        title: this.title,
        description: this.description,
        id: Date.now(),
        tags: this.chips.chipsData,
        date: this.date.date,
        time: this.date.time,
        status: 'active'
      }
      this.$store.dispatch('createTask', task);
      this.$router.push('/list');
      console.log(task)
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }
    if (this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  },
}
</script>
