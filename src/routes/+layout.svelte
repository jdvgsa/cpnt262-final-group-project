<script>
  import "../app.css";
  import Header from "../lib/components/Header.svelte";
  import Home from "../lib/components/Home.svelte";
  import Footer from "../lib/components/Footer.svelte";
</script>

<Header />

<Home />


<slot />
<Footer />