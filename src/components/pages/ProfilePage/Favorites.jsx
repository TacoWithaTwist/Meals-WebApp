import ExploreMeal from '../HomePage/ExploreMeal';

export default function Favorites() {
  const spliced = [];

  for (let i = 0; i < 10; i++) {
    const thing = JSON.parse(localStorage.getItem(`${i}`));
    if (thing !== null) {
      spliced.push(thing);
    }
  }

  const FavoriteList = spliced.filter((item) => item !== null);
  return (
    <>
      {FavoriteList.map((item, index) => (
        <ExploreMeal key={index} meal={item} />
      ))}
    </>
  );
}
