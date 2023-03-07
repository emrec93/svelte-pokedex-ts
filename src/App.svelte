<script lang="ts">
  import Card from "./components/Card.svelte";

  let name: string = "pikachu";
  let URL: string = "https://pokeapi.co/api/v2/pokemon";
  let data: string;

  async function search() {
    const res = await fetch(`${URL}/${name.toLowerCase()}`);
    data = await res.json();
    if (res.ok) {
      return data;
    } else {
      throw new Error(data);
    }
  }

  let promise = search();

  function handleClick() {
    promise = search();
  }
</script>

<main>
  <h3>Search for A Pokemon</h3>
  <input type="text" bind:value={name} placeholder="e.g. Squirtle, Bulbasaur" />
  <button on:click={handleClick}>search</button>

  {#await promise}
    <p>...Searching for <span class="searched-for">"{name}"</span></p>
  {:then data}
    <Card {data} />
  {:catch error}
    <p style="color: red">Pokemon not found, please try again!</p>
    {console.log(error)}
  {/await}
</main>

<style>
  main {
    text-align: center;
    padding: 1em;
    max-width: 240px;
    margin: 0 auto;
    padding: 0;
  }

  @media (min-width: 640px) {
    main {
      max-width: none;
    }
  }
</style>
