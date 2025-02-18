import RecipeItem from './recipe-item';
import classes from './recipe-list.module.css';

function RecipeList(props) {
  const { items } = props;
  // const firstImage = items

  return (

    <ul className={classes.list}>
      {items.map((recipe) => (
        <RecipeItem
          key={recipe.recipeId}
          recipeId={recipe.recipeId}
          title={recipe.title}
          description={recipe.description}
          instructions={recipe.date}
          category={recipe.category}
          image={recipe.imageUrls}
          date={recipe.date}
        />
      ))}
    </ul>


    // <ul className={classes.list}>
    //   {items.map((event) => (
    //     <EventItem
    //       key={event.id}
    //       id={event.id}
    //       title={event.title}
    //       location={event.location}
    //       date={event.date}
    //       image={event.image}
    //     />
    //   ))}
    // </ul>
  );
}

export default RecipeList;
