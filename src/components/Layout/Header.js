import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Header.module.css';

const Header = props => {
  return (
    <>
      <header className={classes.header}>
        <h1>React Eats</h1>
        <HeaderCartButton />
      </header>
      <div className={classes['main-image']}>
        <img src={mealsImg} alt='A table full of delicious food' />
      </div>
    </>
  );
};

export default Header;
