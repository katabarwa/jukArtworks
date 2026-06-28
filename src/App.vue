<!-- App.vue -->
<script setup>
import ImageRow from './components/ImageRow.vue'
import Widget from './components/Widget.vue';
import { rows } from './data/artworks.js'



 
</script>

<template>
  <header>

<div class="header-container">
      <div class="left">
            <Widget

            />
      </div>
      <div class="right">
            <ImageRow
                v-for="(row, index) in rows"
                :key="index"
                :images="row.images"
                :title="row.title"
                :location="row.location"
                :details="row.details"
                :background-color="row.backgroundColor"
                :margin="row.margin"
                :padding="row.padding"
            />
      </div>
</div>


  </header>

  <main></main>
  <footer></footer>
</template>

<style scoped>

@media screen and (max-width: 580px) {
  
 .left{
    display: none!important;
  }


}

.left {
  background-color: var(--accent-bg);
  width: 100%;

  overflow: hidden;
  position: sticky;
  top: 0;
  align-self: flex-start; 
}


.header-container {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.right .left {
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
}
header {
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
</style>