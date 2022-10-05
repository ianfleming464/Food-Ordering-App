import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Because Pizza Matters...</h2>
      <p>
        The best Neapolitan pizza in the world is eaten here! Angelino Conte, former chef of Nostra
        opens his own restaurant. Our 100% homemade cuisine will take you directly to the heart of
        Naples.
      </p>
      <p>
        Only the finest fresh mix of Italian and local produce, prepared daily in-house by our
        experienced and dedicated team of piazzolas.
      </p>
    </section>
  );
};

export default MealsSummary;
