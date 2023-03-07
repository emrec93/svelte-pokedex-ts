export const pokemonType = (type: string) => {
  let color: string;
  switch (type) {
    case "fire":
      color = "#ff0000";
      break;
    case "electric":
      color = "#ffea00";
      break;
    case "normal":
      color = "#94938b";
      break;
    case "fighting":
      color = "#9c715a";
      break;
    case "flying":
      color = "#d5e8e6";
      break;
    case "poison":
      color = "#7e59c9";
      break;
    case "ground":
      color = "#4d261b";
      break;
    case "rock":
      color = "#615b59";
      break;
    case "bug":
      color = "#a1e05e";
      break;
    case "ghost":
      color = "#211254";
      break;
    case "steel":
      color = "#425663";
      break;
    case "water":
      color = "#0095ff";
      break;
    case "grass":
      color = "#177527";
      break;
    case "psychic":
      color = "#9436cf";
      break;
    case "ice":
      color = "#36b8ff";
      break;
    case "dragon":
      color = "#a31b0b";
      break;
    case "dark":
      color = "#04092e";
      break;
    case "fairy":
      color = "#cf06b7";
      break;
    case "unknown":
      color = "#141214";
      break;
    case "shadow":
      color = "#0f0b0f";
      break;
    default:
      break;
  }
  return color;
};
