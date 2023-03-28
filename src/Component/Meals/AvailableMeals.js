import Card from '../Cart/Card';
import classes from './AvailableMeals.module.css'
import MealItem from './MealItem';
const DUMMY_MEALS = [
    {
      id: 'm1',
      name: 'Sushi',
      description: 'Finest fish and veggies',
      price: 280.00,
    },
    {
      id: 'm2',
      name: 'Schnitzel',
      description: 'A german specialty!',
      price: 650.50,
    },
    {
      id: 'm3',
      name: 'Barbecue Burger',
      description: 'American, raw, meaty',
      price: 125.99,
    },
    {
      id: 'm4',
      name: 'Green Bowl',
      description: 'Healthy...and green...',
      price: 180.25,
    },
  ];

const AvailableMeals = () => {
    const mealsList = DUMMY_MEALS.map((item)=><li><MealItem key={item.id} name={item.name} price={item.price} description={item.description} id={item.id}/></li>)
return(
<section className={classes.meals}>
    <Card>
<ul>
    {mealsList}
</ul>
</Card>
</section>
)
}

export default AvailableMeals