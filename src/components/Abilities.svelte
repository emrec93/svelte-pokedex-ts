<script lang="ts">
  export let data;
  const abilities = data.abilities;

  const getAbilityDescription = async (i) => {
    let text;
    await fetch(data.abilities[i].ability.url).then(async (res) => {
      const response = await res.json();
      const abilityText = response.flavor_text_entries[0].flavor_text;
      text = abilityText;
    });
    return text;
  };
</script>

<div>
  <h4>Abilities</h4>
  <div class="abilities-container">
    {#each abilities as ability, i}
      <p class="ability title">{ability.ability.name}</p>
      {#await getAbilityDescription(i)}
        <p>...</p>
      {:then abilityDescription}
        <p class="ability">{abilityDescription}</p>
      {/await}
    {/each}
  </div>
</div>

<style>
  .abilities-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 2px;
    border-radius: 30px 5px 5px 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .ability {
    text-transform: capitalize;
    font-size: small;
  }

  .title {
    font-weight: 450;
  }

  h4 {
    font-weight: 400;
  }
</style>
