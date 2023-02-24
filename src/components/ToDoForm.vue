<template>
  <form @submit.prevent="handleSubmit">
    <input type="text" v-model="titre" placeholder="Titre" />
    <input type="number" v-model="prix" placeholder="Prix" />
    <input type="number" v-model="quantite" placeholder="Quantité en stock" />
    <input type="submit" value="Valider" />
  </form>
</template>

<script setup>
import { ref } from "vue";
import { defineEmits } from "vue";

const titre = ref("");
const prix = ref(0);
const quantite = ref(0);

const emit = defineEmits(["addC"]);

function handleSubmit() {
  emit("addC", {
    titre: titre.value,
    qtestock: quantite.value,
    prix: prix.value,
  });
  titre.value = "";
  prix.value = 0;
  quantite.value = 0;
}
</script>

<style>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
}

input[type="text"],
input[type="number"],
input[type="submit"] {
  margin: 10px;
  padding: 10px;
  border: 2px solid #ff6b6b;
  border-radius: 5px;
  width: 100%;
  max-width: 300px;
}

input[type="submit"] {
  background-color: #ff6b6b;
  color: white;
  font-weight: bold;
  cursor: pointer;
}

input[type="submit"]:hover {
  background-color: white;
  color: #ff6b6b;
  transition: 0.3s ease-in-out;
}
form {
  display: flex;
  flex-direction: row;
}

input[type="text"],
input[type="number"],
button[type="submit"] {
  margin-right: 10px;
  border: 2px solid #ff6b6b;
  padding: 10px;
  border-radius: 5px;
}

button[type="submit"] {
  background-color: #ff6b6b;
  color: white;
}
</style>
