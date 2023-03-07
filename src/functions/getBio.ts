export const getBio = async (url) => {
  let pokemonBio: string;
  let base_happiness;
  let capture_rate;
  await fetch(url).then(async (res) => {
    const data = await res.json();
    base_happiness = data.base_happiness;
    capture_rate = data.capture_rate;
    const bio = data.flavor_text_entries.slice(1, 3).map((text) => {
      return text.flavor_text;
    });
    pokemonBio = bio.join("");
  });
  return { pokemonBio, base_happiness, capture_rate };
};
