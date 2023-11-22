<script>
  export let data;
</script>

<svelte:head>
  <title>{data.card.heading}</title>
</svelte:head>

<main class="bg-gradient-to-br {data.card.gradient1} {data.card.gradient2} p-4">
  <h1 class="text-5xl text-center text-white mt-5">{data.card.heading}</h1>
  <img class="mx-auto my-10 lg:w-80 md:w-64 sm:w-56" src={data.card.src} alt={data.card.alt}>
  <p class="text-white text-2xl text-center mb-10">Stanley Cups: {data.card.cups}</p>
  <p class="leading-8">{data.card.extendedInfo}</p>
</main>