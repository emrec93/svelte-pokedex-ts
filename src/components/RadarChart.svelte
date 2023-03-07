<script>
  import { Radar } from "svelte-chartjs";
  import { Chart as ChartJS, Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement } from "chart.js";

  ChartJS.register(Title, Tooltip, Legend, PointElement, RadialLinearScale, LineElement);

  export let data;
  data = {
    labels: ["HP", "Attack", "Defense", "Sp. Atk", "Sp. Def", "Speed"],
    datasets: [
      {
        label: "Base Stats",
        backgroundColor: "rgba(194, 116, 161, 0.5)",
        borderColor: "rgb(194, 116, 161)",
        data: [...data.stats.map((stat) => stat.base_stat)],
      },
    ],
  };
</script>

<div class="container">
  <Radar {data} options={{ responsive: true }} />
</div>

<style>
  .container {
    max-width: 200px;
    max-height: 200px;
    background-color: #fff;
    margin: 10px;
    padding: 10px;
    border-radius: 30px;
    box-shadow: rgba(0, 0, 0, 0.17) 0px -23px 25px 0px inset, rgba(0, 0, 0, 0.15) 0px -36px 30px 0px inset,
      rgba(0, 0, 0, 0.1) 0px -79px 40px 0px inset, rgba(0, 0, 0, 0.06) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
      rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px;
  }
</style>
