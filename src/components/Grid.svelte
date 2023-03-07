<script lang="ts">
  export let data;
  const height = data.height * 10 + "mm";
  const weight = data.weight / 10 + "kg";
</script>

<div class="table-container">
  <table class="size-table">
    <tbody>
      <tr>
        <td>Height</td>
        <td>Weight</td>
      </tr>
      <tr>
        <td>{height}</td>
        <td>{weight}</td>
      </tr>
    </tbody>
  </table>
</div>

<style>
  .size-table {
    width: 100%;
    padding: 10px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }

  .table-container {
    max-width: 450px;
    height: 50px;
    margin: 10px;
    font-weight: 300;
  }

  td {
    padding: 15px;
  }
</style>
