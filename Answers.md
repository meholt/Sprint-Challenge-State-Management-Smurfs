1. What problem does the context API help solve?

It eliminates the need to constantly pass props

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

Actions are objects that are passed through reducer funtions altering different parts of the store. A store is a single source of truth that can only be changed by actions.

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Component state is held in the component and is relative to it, where as an application state is universal over an entire app and can be passed using various methods down to other components within the app. It would be more beneficial to use component states with states that will be used in just that single component or in smaller apps, vs if there are multiple components needing the same state, it would be more beneficial to use an application state.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux Thunk is middleware that allows us to handle asynchronous operations within action-creators.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

At first I thought context API was a lot easier to use but I love the power and possibilites with Redux. I just wish I had more time to play with everything.