<script>
  import {galleryData} from "$lib/data.js"
  import Card from "../lib/components/Card.svelte";
  console.log(galleryData);
</script>

<main class="flex gap-x-36 gap-y-10 flex-wrap justify-center p-8">
  {#each galleryData as galleryCard}
    <Card {...galleryCard} />
  {/each}
</main>


