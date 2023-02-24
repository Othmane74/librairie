<template>
  <form @submit.prevent="rechercher" method="GET">
    <input type="text" placeholder="Votre livre?" v-model="motcle" />
    <button type="submit">Rechercher</button>
  </form>
</template>

<script setup  >
import { ref, defineEmits } from "vue";

const emit = defineEmits(["rechercher"]);
const motcle = ref("");

function rechercher() {
  emit("rechercher", motcle.value);
  console.log(motcle);
}
</script>

<style scoped>
form {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 20px;
}

input[type="text"] {
  border: 1px solid #ddd;
  padding: 10px;
  border-radius: 5px;
  margin-right: 10px;
}

button[type="submit"] {
  background-color: #ff6b6b;
  color: #fff;
  border: none;
  border-radius: 5px;
  padding: 10px 20px;
  cursor: pointer;
  transition: background-color 0.2s ease;
}

button[type="submit"]:hover {
  background-color: #f15959;
}

button[type="submit"]:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3);
}

button[type="submit"]:active {
  transform: scale(0.98);
}
</style>
