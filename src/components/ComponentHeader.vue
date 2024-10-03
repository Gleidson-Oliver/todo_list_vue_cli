<template>
  <header id="header">
    <h3>{{ value }}</h3>
  </header>
</template>
<script>
export default {
  props: ["value"],
};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#header {
  margin: 0;
  padding: 0;
  background-color: #0055ff;
  color: #ffffff;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
#header h3 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bold;
  padding: 0.5rem;
}
</style>
