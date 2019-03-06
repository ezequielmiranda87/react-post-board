const initialState = {
    posts: [
      {
        id: 1,
        title: " How to be a superhero",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sem, ligula porta mi ad etiam accumsan lectus rhoncus semper, parturient habitasse nostra est augue curabitur bibendum."
      },
      {
        id: 2,
        title: " How to turn  the water into wine ",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sem, ligula porta mi ad etiam accumsan lectus rhoncus semper, parturient habitasse nostra est augue curabitur bibendum."
      },
      {
        id: 3,
        title: " How return to the past",
        body:
          "Lorem ipsum dolor sit amet consectetur adipiscing elit sem, ligula porta mi ad etiam accumsan lectus rhoncus semper, parturient habitasse nostra est augue curabitur bibendum."
      }
    ]
  };

const rootReducer = (state = initialState, action) => {
  if(action.type == 'DELETE_POST'){
    // Return all post with differt id 
    const newPosts = state.posts.filter( post => post.id !== action.id)
    return {
      ...state,
      posts : newPosts,
    }
  }
  return state;
}

export default rootReducer;

