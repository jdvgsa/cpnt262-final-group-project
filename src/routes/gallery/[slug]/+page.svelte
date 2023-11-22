<script>
  export let data;
</script>

<svelte:head>
  <title>{data.card.heading}</title>
</svelte:head>

<h1>{data.card.heading}</h1>
<img src={data.card.src} alt={data.card.alt}>
<p>{data.card.extendedInfo}</p>