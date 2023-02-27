<template>
    <div class="loader-container">
      <div class="loader"></div>
    </div>
</template>

<script>
export default {
  name: 'Loader'
}
</script>

<style scoped>
.loader-container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.loader {
  border: 10px solid #f3f3f3;
  border-top: 10px solid #3498db;
  border-radius: 50%;
  width: 80px;
  height: 80px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>

