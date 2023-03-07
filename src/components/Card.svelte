<script lang="ts">
  import { getBio } from "../functions/getBio";
  import RadarChart from "./RadarChart.svelte";
  import Grid from "./Grid.svelte";
  import Type from "./Type.svelte";
  import Pictures from "./Pictures.svelte";
  import Abilities from "./Abilities.svelte";
  import Evolutions from "./Evolutions.svelte";

  export let data;
</script>

<div class="card">
  <div class="name-type-container">
    <h2 class="pokemon-name">{data.name}</h2>
    <Abilities {data} />
    <Type {data} />
  </div>

  <div class="pic-container">
    <Pictures {data} />
    <div class="data-container">
      <RadarChart {data} />
      <Grid {data} />
    </div>
  </div>

  {#await getBio(data.species.url)}
    <p>Loading bio...</p>
  {:then data}
    <div class="bio-container">
      <p class="bio">{data.pokemonBio}</p>
      <div class="sub-bio-container">
        <p class="sub-bio-header">Base Happiness</p>
        {#if data.base_happiness > 100}
          <img src="smile.png" alt="happy-face" />
        {:else if 30 < data.base_happiness && data.base_happiness < 100}
          <img src="speechless.png" alt="mild-face" />
        {:else}
          <img src="angry.png" alt="angry" />
        {/if}
        <p class="sub-bio-header">Capture Rate</p>
        <p>{data.capture_rate}</p>
      </div>
    </div>
  {:catch error}
    <p>{error}</p>
  {/await}

  <div class="evolutions-container">
    <Evolutions {data} />
  </div>
</div>

<style>
  .pic-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }
  .name-type-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
  }

  .data-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 10px;
    padding: 10px;
  }

  .pokemon-name {
    color: rgb(70, 70, 70);
    text-transform: uppercase;
    font-size: 3em;
    font-weight: 100;
  }

  .bio-container {
    border-radius: 5px;
    margin: 10px;
    padding: 5px;
    display: grid;
    grid-template-columns: 2fr 1fr;
  }

  .sub-bio-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .bio {
    text-align: left;
    font-weight: 300;
    padding: 10px 50px;
  }

  .card {
    max-width: 900px;
    margin: 5px auto;
    padding-bottom: 200px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .sub-bio-header {
    text-transform: capitalize;
    font-size: small;
  }
  img {
    max-width: 35px;
    max-height: 35px;
    margin: auto;
    padding: 2px;
    opacity: 0.8;
  }
</style>
