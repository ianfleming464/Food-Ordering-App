import classes from './MealsSummary.module.css';

const MealsSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious Delights Delivered Daily</h2>
      <p>
        Don't fancy cooking? Choose from our selection of epicurean delights, delivered piping hot
        to your door. Yes, you love us already.
      </p>
      <p>
        Only the finest fresh local produce, prepared daily in-house by our experienced and
        dedicated team of chefs.
      </p>
    </section>
  );
};

export default MealsSummary;
