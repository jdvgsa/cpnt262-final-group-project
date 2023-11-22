<script>
  export let data;
</script>

<svelte:head>
  <title>{data.card.heading}</title>
</svelte:head>

<main class="bg-gradient-to-br from-blue-800 to-white p-4">
  <h1 class="text-5xl text-center mt-5">{data.card.heading}</h1>
  <img class="mx-auto my-10" src={data.card.src} alt={data.card.alt}>
  <p class="leading-8">{data.card.extendedInfo}</p>
</main>