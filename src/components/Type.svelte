<script lang="ts">
  import { pokemonType } from "../functions/pokemonType";

  export let data;
  const typesArr = data.types.map((types) => {
    return types.type.name;
  });

  const noOfTypes = typesArr.length;

  let getTypeColors = () => {
    let typesArr = [];
    let colorArr = [];
    for (let i = 0; i < data.types.length; i++) {
      typesArr.push(data.types[i].type.name);
      colorArr.push(pokemonType(typesArr[i]));
    }
    return colorArr;
  };
  let colourArr = getTypeColors();
</script>

<div class="type-container">
  <h3>{noOfTypes > 1 ? "Types" : "Type"}</h3>
  <div class="grid">
    {#each typesArr as type, i}
      <h3 class="type" style={`background-color:${colourArr[i]}`}>
        {type}
      </h3>
    {/each}
  </div>
</div>

<style>
  .type-container {
    display: grid;
    grid-template-columns: 1fr 2fr;
    margin: 0px auto;
    width: 100%;
  }

  .grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    margin: 0px 20px;
  }

  .type {
    border-radius: 10px;
    max-width: 100px;
    padding: 5px;
    text-transform: capitalize;
    font-weight: 300;
  }

  h3 {
    font-weight: 300;
  }
</style>
