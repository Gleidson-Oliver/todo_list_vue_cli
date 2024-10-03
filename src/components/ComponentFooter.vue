<template>
  <footer id="footer" class="mt-5">
    <div class="row text-center">
      <div class="col-6">
        <a class="d-block" href="#">meus links</a>
        <a class="d-block" href="#">meus links</a>
        <a class="d-block" href="#">meus links</a>
      </div>
      <div class="col-6">
        <a class="d-block" href="#">meus links</a>
        <a class="d-block" href="#">meus links</a>
        <a class="d-block" href="#">meus links</a>
      </div>
    </div>
  </footer>
</template>
<script>
export default {};
</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}
#footer {
  margin: 0;
  padding: 0;
  background-color: #0055ff;
  color: #ffffff;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
#footer h3 {
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
  font-weight: bold;
  padding: 0.5rem;
}

a {
  text-decoration: none;
  color: #ffffff;
  margin: 0 0 0 20px;
}
.footer-links {
  gap: 1rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
</style>
