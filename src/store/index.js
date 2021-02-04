import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        tasks: JSON.parse(localStorage.getItem('tasks') || '[]').map(task => {
            if (new Date(task.date) < new Date()) {
                task.status = 'expired'
            }
            return task
        })
    },
    mutations: {
        createTask(state, task) {
            state.tasks.push(task)

            localStorage.setItem('tasks', JSON.stringify(state.tasks)) // put new task in Localstorage
        },
        updateTask(state, {id, description, date}) {
            const tasks = state.tasks.concat() // new copy of massive
            const idx = tasks.findIndex(t => t.id === id) // find index in modify task
            const task = tasks[idx] // current task which update
            const status = new Date(date) > new Date() ? 'active' : 'expired' // check current date and comparsion with task date & give it status

            tasks[idx] = {...task, description, date, status} // new object with all

            state.tasks = tasks

            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        },
        completeTask(state, id) {
            const idx = state.tasks.findIndex(t => t.id === id)
            state.tasks[idx].status = 'complete'
            localStorage.setItem('tasks', JSON.stringify(state.tasks))
        }
    },
    actions: {
        createTask({commit}, task) {
            commit('createTask', task)
        },
        updateTask({commit}, task) {
            commit('updateTask', task)
        },
        completeTask({commit}, id) {
            commit('completeTask', id)
        }
    },
    getters: {
        getTasks: s => s.tasks,
        getTaskById: s => id => s.tasks.find(t => t.id === id) // find by match id
    },
    modules: {}
})
