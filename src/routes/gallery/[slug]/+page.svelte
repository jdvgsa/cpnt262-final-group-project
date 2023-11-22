<script>
  export let data;
  console.log(data);
</script>

<h1>{data.card.heading}</h1>
<img src={data.card.src} alt={data.card.alt}>
<p>{data.card.extendedInfo}</p>