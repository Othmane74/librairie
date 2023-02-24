<script setup>
import { reactive, onMounted } from "vue";
import ToDoListItem from "./ToDoListItem.vue";
import ToDoForm from "./ToDoForm.vue";
import Livre from "../Livre";
import SearchForm from "./SearchForm.vue";

const listeC = reactive([]);

// -- l'url de l'API
const url = "https://webmmi.iut-tlse3.fr/~pecatte/librairies/public/27/livres";

function handlerDelete(id) {
  const fetchOptions = {
    method: "DELETE",
  };
  // -- l'id de la chose à supprimer doit être
  //  ajouté à la fin de l'url
  fetch(url + "/" + id, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

function getLivres() {
  const fetchOptions = { method: "GET" };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des livres
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      // créer un objet instance de la classe Livre
      // et l'ajouter dans la liste listeLivres
      dataJSON.forEach((v) =>
        listeC.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}
// -- fonction du cycle de vie du composant
// exécutée 1 seule fois à la création
onMounted(() => {
  getLivres();
});

function handlerAdd(livre) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const fetchOptions = {
    method: "POST",
    headers: myHeaders,
    body: JSON.stringify({
      ...livre,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

function incrementstock(livre) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  livre.qtestock += 1;
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: livre.id,
      titre: livre.titre,
      prix: livre.prix,
      qtestock: livre.qtestock,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      getLivres();
    })
    .catch((error) => console.log(error));
}

function decrementstock(livre) {
  let myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  livre.qtestock -= 1;
  const fetchOptions = {
    method: "PUT",
    headers: myHeaders,
    body: JSON.stringify({
      id: livre.id,
      titre: livre.titre,
      prix: livre.prix,
      qtestock: livre.qtestock,
    }),
  };
  fetch(url, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      if (livre.qtestock === 0) {
        handlerDelete(livre.id);
      } else {
        getLivres();
      }
    })
    .catch((error) => console.log(error));
}
function recherche(motcle) {
  console.log(motcle);
  const fetchOptions = { method: "GET" };
  fetch(url + "?search=" + motcle, fetchOptions)
    .then((response) => {
      return response.json();
    })
    .then((dataJSON) => {
      console.log(dataJSON);
      // -- vider la liste des livres
      listeC.splice(0, listeC.length);
      // pour chaque donnée renvoyée par l'API
      // créer un objet instance de la classe Livre
      // et l'ajouter dans la liste listeLivres
      dataJSON.forEach((v) =>
        listeC.push(new Livre(v.id, v.titre, v.qtestock, v.prix))
      );
    })
    .catch((error) => console.log(error));
}
</script>



<template>
  <SearchForm @rechercher="recherche" />
  <h3>Liste des Livres</h3>
  <ToDoForm @addC="handlerAdd"></ToDoForm>
  <ul>
    <ToDoListItem
      v-for="livre of listeC"
      :key="livre.id"
      :livre="livre"
      @deleteC="handlerDelete"
      @increment="incrementstock"
      @decrement="decrementstock"
    />
  </ul>
</template>