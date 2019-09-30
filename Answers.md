1. What problem does the context API help solve?

It helps you stop having to drill your props through multiple levels of components.

1. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

An action in redux is some kind of data that you dipsatch to reducers to let it know how it should update the state. Reducers in redux are pure functions that will return NEW state for the application to use. The store is an object that holds all your state logic for your application. 

1. What is the difference between Application state and Component state? When would be a good time to use one over the other?

Application state deals with state on a global scale and any number of components can use the state so long as they have access to it through something like a store in redux, component state deals with local state inside the specific component and can only pass that state down to children components using props.

1. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?

Redux-thunk allows us to make asynchronous actions in our app, such as api calls.

1. What is your favorite state management system you've learned and this sprint? Please explain why!

Redux because i always hated prop drilling.