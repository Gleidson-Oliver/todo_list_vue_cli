<template>
  <input
    type="text"
    class="form-control"
    v-model="valueInputData"
    placeholder="digite nova tarefa..."
    @keyup="$emit('input', valueInputData)"
    @keyup.enter="cleanInput" />
</template>

<script>
export default {
  props: ["value"],
  data() {
    return {
      valueInputData: this.value,
    };
  },
  methods: {
    cleanInput() {
      this.$emit("save");
      this.valueInputData = "";
      console.log("valor de valueInputData =>", this.valueInputData);
      console.log("valor de value props =>", this.value);
    },
  },
};
</script>

<style></style>
