<template>
  <div class="container">
    <div class="row">
      <div class="task-info" v-if="task">
        <h2>{{task.title}}</h2>
        <form class="col s12" @submit.prevent="submitHandler">
          <div class="row">
            <div ref="chips" class="chips chips-initial"></div>
            <div class="input-field">
              <textarea v-model="description" id="textarea" class="materialize-textarea custom-textarea"></textarea>
              <label for="textarea">Description</label>
              <span class="character-counter" style="float: right;font-size: 12px;">{{description.length}}/400</span>
            </div>
            <div class="input-field">
              <input id="date" ref="datepicker" type="text" class="datepicker">
              <label for="date">Pick Due Date</label>
            </div>
            <div class="input-field">
              <input id="time" ref="timepicker" type="text" class="timepicker">
              <label for="time">Pick Due Time</label>
            </div>
            <div class="" v-if="task.status !== 'completed'">
              <button class="waves-effect waves-light btn-large" type="submit">Save Task</button>
              <button class="blue btn-large" type="submit" style="margin-left:1rem;" @click="completeTask">Complete Task</button>
            </div>
          </div>
        </form>
      </div>
      <p v-else>Task Not Found</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "Task",
  data() {
    return {
      description: '',
      date: null,
      time: null,
      chips: null,
    }
  },
  computed: {
    task() {
      const taskId = +this.$route.params.id
      console.log(typeof taskId)
      return this.$store.getters.getTaskById(taskId)
    }
  },
  mounted() {
    this.description = this.task.description;
    this.date = this.task.date;
    this.time = this.task.time;
    this.chips = M.Chips.init(this.$refs.chips, {
      placeholder: 'Task Tags',
      data: this.task.tags
    });
    this.date = M.Datepicker.init(this.$refs.datepicker, {
      format: 'dd.mm.yyyy',
      defaultDate: new Date(this.task.date),
      setDefaultDate: true,
      showClearBtn: true,
    });
    this.timepicker = M.Timepicker.init(this.$refs.timepicker, {
      autoClose: true,
      showClearBtn: true,
    });
    setTimeout(() => {
      M.updateTextFields();
    },0)
  },
  methods: {
    submitHandler() {
      this.$store.dispatch('updateTask',{
        id: this.task.id,
        description: this.description,
        date: this.date.date,
        // time: this.time.time,
      });
      this.$router.push('/list');
    },
    completeTask() {
      this.$store.dispatch('completeTask',this.task.id);
      this.$router.push('/list');
    }
  },
  destroyed() {
    if (this.date && this.date.destroy) {
      this.date.destroy()
    }if (this.chips && this.chips.destroy) {
      this.chips.destroy()
    }
  },
}
</script>

<style scoped>
.custom-textarea {
  min-height: 160px;
}
</style>