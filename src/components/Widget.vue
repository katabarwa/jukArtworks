<!-- ImageRow.vue -->
<script setup>
import { ref, onMounted, onUnmounted } from 'vue'
 
 const cities = [
   { name: 'Tokyo', tz: 'Asia/Tokyo' },
   { name: 'NY', tz: 'America/New_York' },
  //  { name: 'LA', tz: 'America/Los_Angeles' },
   { name: 'CDMX', tz: 'America/Mexico_City' },
   { name: 'London', tz: 'Europe/London' },
 ]
 
 const times = ref(cities.map(() => ({ time: '--:--', date: '' })))

 const timeFormatter = (tz) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    hour: '2-digit',
    minute: '2-digit',
    hour12: true,
  })
 
  const dateFormatter = (tz) =>
  new Intl.DateTimeFormat('en-US', {
    timeZone: tz,
    // weekday: 'short',
    month: 'short',
    day: 'numeric',
  })

  let intervalId
  
  function updateTimes() {
  const now = new Date()
  times.value = cities.map((c) => ({
    time: timeFormatter(c.tz).format(now),
    date: dateFormatter(c.tz).format(now),
  }))
}

onMounted(() => {
  updateTimes()
  intervalId = setInterval(updateTimes, 1000)
})

onUnmounted(() => clearInterval(intervalId))

</script>

<template>

    <div class="widget-main">

            <iframe
                class="oasis-embed"
                src="https://oasis.ssome.how"
                title="Oasis music player"
                loading="lazy"
                allow="autoplay; encrypted-media"
            ></iframe>
            <a href="https://oasis.ssome.how/">oasis.ssome.how/</a>
            <div class="city-clock-grid">
                    <div v-for="(city, i) in cities" :key="city.tz" class="city-clock-card">
                            <h4 class="city-name">{{ city.name }}</h4>
                            <h4 class="city-time">{{ times[i].time }}</h4>
                            <h4 class="city-date">{{ times[i].date }}</h4>
                    </div>
            </div>

            
    </div>


</template>

<style scoped>

a {
  margin-top: 8px;
  margin-bottom: 2px;
  text-decoration: none;
  color: black;
}

.widget-main {
  height: 100vh;
  display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    overflow: hidden;
}

.oasis-embed {
  width: 90%;
  height: 5905px;
  border: none;
  border-radius: 8px;
  margin-top: 12px;
  overflow: hidden!important;
}

.city-clock-grid {
    margin: 8px 5px;
    padding: 9px 5px;
    display: flex;
  flex-wrap: nowrap;
  gap: 0px;
  background-color: var(--bg);
  border-radius: 8px;
}

.city-clock-card {   
    width: 50px;

    padding: 3px;
    margin:0px 3px;
    text-align: center;
   
}

.city-name {
  font-size: 9px;
  margin: 0 0 4px;
  font-weight: 800;
}

.city-time {
  font-size: 8px;
  font-weight: 600;
  margin: 0;
}

.city-date {
    font-size: 8px;
  margin: 4px 0 0;
  font-weight: 600;
}

h4 {
    line-height: 95%;

}

</style>