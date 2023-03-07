<script lang="ts">
  export let data;

  let slidesContainer;
  let slide;
  let prevButton;
  let nextButton;

  let prev = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft -= slideWidth;
  };

  let next = () => {
    const slideWidth = slide.clientWidth;
    slidesContainer.scrollLeft += slideWidth;
  };
</script>

<section class="slider-wrapper">
  <button class="slide-arrow" id="slide-arrow-prev" bind:this={prevButton} on:click={prev}> &#8249; </button>

  <button class="slide-arrow" id="slide-arrow-next" bind:this={nextButton} on:click={next}> &#8250; </button>

  <ul class="slides-container" id="slides-container" bind:this={slidesContainer}>
    <li class="slide">
      <img width="180" height="180" src={data.sprites.front_default} alt={data.name} class="image" />
    </li>
    <li class="slide" bind:this={slide}>
      <img width="180" height="180" src={data.sprites.other.dream_world.front_default} alt={data.name} class="image" />
    </li>
    <li class="slide" bind:this={slide}>
      <img width="180" height="180" src={data.sprites.other.home.front_default} alt={data.name} class="image" />
    </li>
    <li class="slide" bind:this={slide}>
      <img width="180" height="180" src={data.sprites.back_default} alt={data.name} class="image" />
    </li>
    <li class="slide" bind:this={slide}>
      <img width="180" height="180" src={data.sprites.front_shiny} alt={data.name} class="image" />
    </li>

    <li class="slide" bind:this={slide}>
      <img
        width="180"
        height="180"
        src={data.sprites.other["official-artwork"].front_default}
        alt={data.name}
        class="image"
      />
    </li>
  </ul>
</section>

<style>
  .image {
    padding: 30px 50px;
  }

  .slider-wrapper {
    margin: 0.5rem;
    position: relative;
    overflow: hidden;
  }
  .slides-container {
    height: 300px;
    width: 100%;
    display: flex;
    list-style: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
    scroll-behavior: smooth;
  }
  .slide {
    width: 50%;
    height: 50%;
    flex: 1 0 100%;
  }

  .slide-arrow {
    position: absolute;
    display: flex;
    top: 0;
    bottom: 0;
    margin: auto;
    height: 4rem;
    border: none;
    width: 2rem;
    font-size: 3rem;
    padding: 0;
    cursor: pointer;
    opacity: 0.4;
    transition: opacity 100ms;
    background-color: rgb(230, 230, 230);
  }
  .slide-arrow:hover,
  .slide-arrow:focus {
    opacity: 0.7;
  }
  #slide-arrow-prev {
    left: 0;
    padding-left: 0.25rem;
    border-radius: 0 2rem 2rem 0;
  }
  #slide-arrow-next {
    right: 0;
    padding-left: 0.75rem;
    border-radius: 2rem 0 0 2rem;
  }
</style>
