<script>
  export let alt = "placeholder alt";
  export let src;
  export let heading = "placeholder heading";
  export let description= "placeholder description";
  export let slug = "/"
</script>


<a href={slug}>
  <article class="max-w-fit bg-slate-800 p-5 text-white rounded-xl hover:bg-slate-600 hover:scale-110 border-double border-slate-400 border-4">
    <img class="block w-56 h-56" {src} {alt}>
    <h2 class="text-2xl text-center my-4">{heading}</h2>
    <p class="w-56">{description}</p>
  </article>
</a>
