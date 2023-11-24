<script>

  import dayjs from "dayjs";
  import { onMount } from "svelte";
  
  // declaring my variables 
  
  let currentDate = dayjs().format("YYYY-MM-DD");
  let currentTime = dayjs().format("HH:mm:ss"); 
  
  let randomHours = Math.floor(Math.random() * 24);
  let randomMinutes = Math.floor(Math.random() * 60); 
  let randomSeconds = Math.floor(Math.random() * 60);
  
  // these will be the randomized times for the made up "scheduled hockey games"
  
  let gameOne = dayjs().add(randomHours, +4, "hour").add(randomMinutes, "minute").add(randomSeconds, "second").format("HH:00:00");
  let gameTwo = dayjs().add(randomHours, "hour").add(randomMinutes, "minute").add(randomSeconds, "second").format("HH:00:00");
  let gameThree = dayjs().add(randomHours + 1, "hour").add(randomMinutes, "minute").add(randomSeconds, "second").format("HH:30:00");
  let gameFour = dayjs().add(randomHours + 3, "hour").add(randomMinutes, "minute").add(randomSeconds, "second").format("HH:15:00");
  let gameFive = dayjs().add(randomHours + 5, "hour").add(randomMinutes, "minute").add(randomSeconds, "second").format("HH:15:00");
  
  // function for currentTime to be updated, this should update the time every second and should work like an actual digital clock.
  
  const updateTime = () => {
      currentTime = dayjs().format("HH:mm:ss");
    };
  
    onMount(() => {
      
      const interval = setInterval(updateTime, 1000);
  
   });
    
  
  </script>
  
  <h1 class="pb-6 pt-3 text-6xl text-center bg-slate-700 text-white">Regular Season Schedule</h1>
  
    
  <section class ="relative h-screen bg-slate-700 pb-12">


  <!-- First set of games schedule -->
  
  <div>
    <h1 class="text-4xl mb-6 text-center text-white">Today's Games:</h1>
    <h1 class="text-4xl mb-6 text-center text-white">{currentDate} {currentTime}</h1>
    <div class="grid gap-4">
      <p class="text-2xl bg-cyan-600 rounded-xl p-4 text-white w-96 mx-auto text-center">Canucks vs Canadiens {gameTwo}</p>
      <p class="text-2xl bg-orange-800 rounded-xl p-4 text-white w-96 mx-auto text-center">Oilers vs Flames {gameOne}</p>
      <p class="text-2xl bg-yellow-500 rounded-xl p-4 text-white w-96 mx-auto text-center">Sabers vs Senators {gameThree}</p>
    </div>
  </div>
  
  <!-- Second set of games schedule -->
  
  <div class="pt-4">
    <h1 class="text-4xl mb-6 text-white text-center">Tomorrow's Schedule</h1>
    <div class="grid gap-4">
      <p class="text-2xl bg-red-700 rounded-xl p-4 text-white w-96 mx-auto text-center">Red Wings vs Jets {gameFour}</p>
      <p class="text-2xl bg-blue-800 rounded-xl p-4 text-white w-96 mx-auto text-center">Leafs vs Canucks {gameFive}</p>
    </div>
  </div>

</section>