<template>
  <div id="tasks">
    <ul>
      <li v-for="(task, index) in tasks" :key="index">
        <input v-model="task.checked" type="checkbox" />
        <span :class="{ 'line-through': task.checked }">
          {{ task.title }}
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    tasks: {
      type: Array,
      default() {
        return [{ title: "tarefa de rotina", checked: false }];
      },
    },
  },
};
</script>

<style></style>
