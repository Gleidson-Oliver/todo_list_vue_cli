<template>
  <div id="app">
    <h1>{{ title }}</h1>
    <hr />
    <div class="container">
      <div class="input-group">
        <input
          type="text"
          class="form-control"
          v-model="newTask"
          @keyup.enter="addNewTask" />
        <span class="input-group-btn">
          <button @click="addNewTask" class="btn btn-primary">Adicionar</button>
        </span>
      </div>
      <div class="mt-3">
        <ul>
          <li v-for="(task, index) in tasks" :key="index">
            <input v-model="task.checked" type="checkbox" />
            <span :class="{ 'line-through': task.checked }">
              {{ task.title }}
            </span>
          </li>
        </ul>
        <div class="d-block">
          <em>
            Total de tarefas <span>{{ totalTasks }}</span>
          </em>
          <br />
          <em>
            pendentes <span>{{ totalTasksPending }}</span>
          </em>
          <br />
          <em>
            concluidas <span>{{ totalTasksCompleted }}</span>
          </em>
        </div>
      </div>
      <footer>
        <hr />
        <em>Altere o titulo da lista de tarefas aqui: </em>
        <input
          type="text"
          v-model="title"
          class="rounded-4 ps-4 fs-6 form-control" />
      </footer>
    </div>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      title: "Lista de tarefas  com vue cli",
      newTask: "",
      tasks: [
        { title: "buscar novas features para o Oferteaê", checked: false },
      ],
    };
  },

  methods: {
    addNewTask() {
      this.tasks.push({ title: this.newTask, checked: false });
      this.newTask = "";
    },
  },

  computed: {
    totalTasks() {
      return this.tasks.length;
    },
    totalTasksPending() {
      return this.tasks.filter((task) => !task.checked).length;
    },

    totalTasksCompleted() {
      return this.tasks.filter((task) => task.checked).length;
    },
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #2c3e50;
  margin-top: 60px;
}

.container {
  width: 40%;
  margin: 20px 0 20px 0;
}

.container li {
  list-style: none;
}

.line-through {
  text-decoration-line: line-through;
  color: gray;
}
</style>
