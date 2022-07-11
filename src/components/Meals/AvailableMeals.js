import Card from '../UI/Card';
import MealItem from './MealItem/MealItem';
import classes from './AvailableMeals.module.css';

const DUMMY_MEALS = [
  {
    id: 'm1',
    name: 'Vegan Sushi',
    description: 'Nemo remains safe! No fish harmed.',
    price: 17.99,
  },
  {
    id: 'm2',
    name: 'Dhal Palak',
    description: 'Lentils and spinach - a pulsating green combo.',
    price: 16.5,
  },
  {
    id: 'm3',
    name: 'Spicy Blackbean Burger',
    description: 'Hot, meaty, moreish.',
    price: 12.99,
  },
  {
    id: 'm4',
    name: 'Cauliflower Wings',
    description: 'Spicy and crispy. Served with Hot Sauce and Ranch.',
    price: 18.99,
  },
];

const AvailableMeals = () => {
  const mealsList = DUMMY_MEALS.map(meal => (
    <MealItem key={meal.id} name={meal.name} description={meal.description} price={meal.price} />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
