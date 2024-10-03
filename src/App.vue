<template>
  <div id="app">
    <ComponentHeader :value="title" />
    <div class="container">
      <AddNewTask @addNewTask="addNewTask" @save="addNewTask" />
      <div class="mt-3">
        <TasksList :tasks="tasks" />
        <div class="d-block">
          <em>
            Total de tarefas: <span>{{ totalTasks }}</span>
          </em>
          <br />
          <em>
            pendentes: <span>{{ totalTasksPending }}</span>
          </em>
          <br />
          <em>
            concluidas: <span>{{ totalTasksCompleted }}</span>
          </em>
        </div>
      </div>
      <footer>
        <hr />
        <em>Altere o titulo da lista de tarefas aqui: </em>
        <div class="input-group">
          <InputData v-model="title" />
        </div>
      </footer>
    </div>
    <ComponentFooter />
  </div>
</template>

<script>
import ComponentHeader from "@/components/ComponentHeader";
import ComponentFooter from "@/components/ComponentFooter";
import TasksList from "@/components/TasksList";
import AddNewTask from "./components/AddNewTask.vue";
import InputData from "./components/templates/InputData.vue";

export default {
  name: "App",
  components: {
    ComponentHeader,
    ComponentFooter,
    TasksList,
    AddNewTask,
    InputData,
  },
  data() {
    return {
      title: "Lista de tarefas  com vue cli",
      tasks: [
        { title: "buscar novas features para o Ofertea", checked: false },
      ],
    };
  },

  methods: {
    addNewTask(newTask) {
      let task_exists = this.tasks.find(
        (item) => item.title.toLowerCase() === newTask.toLowerCase()
      );
      if (newTask.trim() !== "" && !task_exists) {
        this.tasks.push({ title: newTask.toLowerCase(), checked: false });
      }
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
}

.container {
  width: 40%;
  margin: 60px 0 20px 0;
}

.container li {
  list-style: none;
}

.line-through {
  text-decoration-line: line-through;
  color: gray;
}
</style>
