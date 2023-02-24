<template>
  <div class="book">
    <div class="book-cover">
      <div class="book-cover-text">{{ livre.titre }}</div>
    </div>
    <div class="book-details">
      <h2 class="book-title">{{ livre.titre }}</h2>
      <div class="book-info">
        <div class="book-price">{{ livre.prix }} €</div>
        <div class="book-stock" :class="{ outOfStock: livre.qtestock === 0 }">
          {{ livre.qtestock }} en stock
        </div>
      </div>
      <div class="book-actions">
        <button class="button" @click="incrementerStock">+</button>
        <button class="button" @click="decrementerStock">-</button>
        <button class="button" @click="$emit('deleteC', livre.id)">
          Supprimer
        </button>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from "vue";

const props = defineProps(["livre"]);

const emit = defineEmits(["deleteC", "increment", "decrement"]);

const incrementerStock = () => {
  emit("increment", props.livre);
};

const decrementerStock = () => {
  emit("decrement", props.livre);
};
</script>

<style scoped>
.book {
  display: flex;
  align-items: center;
  margin: 20px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  border-color: #ff6b6b;
  overflow: hidden;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
}

.book-cover {
  width: 150px;
  height: 200px;
  flex-shrink: 0;
  background-color: #f7f7f7;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}

.book-cover-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.book-cover-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  opacity: 0;
  transition: opacity 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-cover-overlay:hover {
  opacity: 1;
}

.book-cover-overlay-text {
  color: #fff;
  font-size: 20px;
  font-weight: 500;
  text-align: center;
}

.book-details {
  display: flex;
  flex-direction: column;
  padding: 20px;
  position: relative;
}

.book-title {
  margin: 0 0 10px;
  font-size: 24px;
  font-weight: 500;
  color: #222;
  position: relative;
}

.book-title:before {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 50%;
  height: 2px;
  background-color: #ff6b6b;
}

.book-info {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.book-price {
  font-size: 20px;
  font-weight: 500;
  margin-right: 10px;
}

.book-stock {
  font-size: 20px;
  color: #333;
}

.outOfStock {
  color: #f00;
}

.book-actions {
  margin-top: 10px;
  display: flex;
  justify-content: flex-end;
}

.button {
  background-color: #ff6b6b;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.2s ease;
  margin-left: 10px;
}

.button:hover {
  background-color: #ff5252;
}

.button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(255, 107, 107, 0.3);
}

.button:active {
  transform: scale(0.98);
}
</style> 
