<template>
  <div id="AddNewTask">
    <div class="input-group">
      <!-- Adicione a diretiva ref aqui -->
      <InputData
        ref="InputDataComponent"
        :value="newTask"
        @input="returnValue"
        @save="addNewTask" />
      <span class="input-group-btn">
        <button @click="addNewTask" class="btn btn-primary">Adicionar</button>
      </span>
    </div>
  </div>
</template>

<script>
import InputData from "@/components/templates/InputData";

export default {
  components: { InputData },
  data() {
    return {
      newTask: "",
    };
  },
  methods: {
    returnValue(value) {
      this.newTask = value;
    },
    addNewTask() {
      if (this.newTask.trim() !== "") {
        // Emite a nova tarefa para o componente pai
        this.$emit("addNewTask", this.newTask);

        // Limpa o campo newTask
        this.newTask = "";

        // Acessa o componente InputData e limpa o valor do input
        this.$refs.InputDataComponent.cleanInput();
      }
    },
  },
};
</script>

<style></style>
