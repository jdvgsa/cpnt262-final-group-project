<script>
  export let data;
</script>

<svelte:head>
  <title>{data.card.heading}</title>
</svelte:head>

<main class="bg-gradient-to-br from-purple-600 to-blue-600">
  <h1>{data.card.heading}</h1>
  <img src={data.card.src} alt={data.card.alt}>
  <p>{data.card.extendedInfo}</p>
</main>