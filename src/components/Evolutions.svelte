<script lang="ts">
  export let data;
  let name = data.name;
  let evolutionChainLink: any;

  const getEvolutionsLink = async () =>
    await fetch(data.species.url).then(async (res) => {
      const response = await res.json();
      evolutionChainLink = await response.evolution_chain.url;
      return evolutionChainLink;
    });
  const getEvolutions = async () => {
    let evolutions = {
      baseForm: "",
      evolvesTo: "",
      nextStageEvolution: "",
    };

    const link = await getEvolutionsLink();
    await fetch(link).then(async (res) => {
      const data = await res.json();
      if (data.chain.evolves_to.length > 0) {
        evolutions.evolvesTo = data.chain.evolves_to.map((evolution) => {
          return evolution.species.name;
        });

        evolutions.nextStageEvolution = data.chain.evolves_to[0].evolves_to.map(
          (evolution: { species: { name: any } }) => {
            return evolution.species.name;
          }
        );

        evolutions.baseForm = data.chain.species.name;
      }
    });
    console.log(evolutions);

    return evolutions;
  };
</script>

{#await getEvolutions()}
  <p>...</p>
{:then data}
  <!-- {#if data.} if the pokemon has evolutions, display the evolutions table
  
{/if} -->
  <div class="table-container">
    <table>
      <tr>
        <th>I</th>
        <th>II</th>
        <th>III</th>
      </tr>
      <tr>
        <td class:current={data.baseForm === name}>{data.baseForm}</td>
        <td class:current={data.evolvesTo[0] === name}>
          {#each data.evolvesTo as potentialEvolution, i}
            <p class:current={data.evolvesTo[i] === name}>{potentialEvolution}</p>
          {/each}
        </td>
        <td class:current={data.nextStageEvolution[0] === name}>{data.nextStageEvolution}</td>
      </tr>
    </table>
  </div>
{/await}

<style>
  .table-container {
    max-width: fit-content;
    margin: 30px auto 0;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  table {
    padding: 5px 40px;
    text-transform: capitalize;
    font-weight: 300;
  }

  table th {
    padding: 10px 50px 10px;
    font-weight: 500;
  }

  table td {
    padding: 10px;
  }

  .current {
    font-weight: 600;
  }
</style>
