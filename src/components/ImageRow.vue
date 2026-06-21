<!-- ImageRow.vue -->
<script setup>
import { ref, computed } from 'vue'

const props = defineProps({
  images: { type: Array, required: true },
  title: { type: String, required: true },
  location: { type: String, default: '' },
  details: { type: String, default: '' },
  backgroundColor: { type: String, default: 'transparent' },
  margin: { type: String, default: '0px' },
  padding: { type: String, default: '12px' }
})

const gridColumns = computed(() =>
  props.images.map(img => img.width || '1fr').join(' ')
)


const isExpanded = ref(false)

function toggleExpand() {
  isExpanded.value = !isExpanded.value
}
</script>

<template>
  <div class="row" :style="{ backgroundColor, margin, padding }"">

    <div class="imgGroup" :style="{ gridTemplateColumns: gridColumns }">
      <template v-for="(item, i) in images" :key="i">
        <video
          v-if="item.type === 'video'"
          :src="item.src"
          autoplay
          muted
          loop
          playsinline
        ></video>
        <img alt="Jesse Katabarwa Visual Artist Art Artworks"
          v-else
          :src="item.src"
        >
      </template>
    </div>

    <div class="description">
      <h4>{{ title }}</h4>

      <div class="expandDets" @click="toggleExpand">
        <h4>{{ isExpanded ? '✦ collapse information' : '✦ expand information' }}</h4>

        <Transition name="expand">
          <div class="detailsBox" v-if="isExpanded">
            <h4>{{ details }}</h4>
          </div>
        </Transition>
      </div>

      <h4>{{ location }}</h4>
    </div>

  </div>
</template>

<style scoped>


.row {
  display: flex;
  flex-direction: column;
  justify-content: center;
width: 100%;
/* height: 750px; */

  overflow-y: hidden;
  overflow-x: scroll;
  margin-bottom: 24px;
}

.imgGroup {
  width:98%;
display: grid;
grid-auto-flow: column;
height: 100%; /* fills .row */
  gap: 12px;
}

.row img, .row video {
  width:100%;
  height: 100%; /* fills its grid cell, which fills .imgGroup, which fills .row */
  object-fit: cover;
  min-width: 0; 
  border-radius: 14px;
}





.description {
  width: 98%;
  height: auto;
  display: flex;
  flex-direction: row;
}

h4 {
  margin: 8px 8px 0px 8px;
  font-weight: 400;
  text-align: left;
  flex-shrink: 0;
}

.expandDets {
  flex-grow: 1;
  position: relative;
  border-radius: 20px;
  margin-left: 50px;
  cursor: pointer;
  user-select: none;
}

.expandDets h4 {
  margin-left: 100px;
  text-align: left;
  line-height: normal;
  margin: 4px 8px 8px 8px;
}

.detailsBox {
  /* width: 100%; */
  /* margin-top: 4px; */
  padding: 2px 12px 12px 12px;
  box-sizing: border-box;
  border-radius: 14px;
  overflow: hidden;
  z-index: 10;
}

.detailsBox h4 {
  /* white-space: pre-line; */
}

.expand-enter-active,
.expand-leave-active {
  transition: all 0.2s ease;
}

.expand-enter-from,
.expand-leave-to {
  opacity: 0;
  transform: translateY(-4px);
}

.expand-enter-to,
.expand-leave-from {
  opacity: 1;
  transform: translateY(0);
}


</style>