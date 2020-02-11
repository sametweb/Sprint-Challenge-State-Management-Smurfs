1. What problem does the context API help solve?
   When top level state is needed in child/grandchild/grandgrandchild components it causes a prop drilling where we have to pass props to a component that is not even going to use that data, it just passes down. To prevent this, we use React's Context API. That way we can create different contexts in a different file and call that context with `useContext()` in child components.

2. In your own words, describe `actions`, `reducers` and the `store` and their role in Redux. What does each piece do? Why is the store known as a 'single source of truth' in a redux application?

- Actions are plain objects that have a mandatory `type` property, which describes what does the action do, and optional `payload` which is some data related to what action does. Payload is consumed in the reducer based on action's type.
- Reducers are functions that take two arguments: `state` and `action`. When we dispatch actions, they are dispatched to the reducer and reducer takes the payload and consume it based on the action type. At the end the reducer returns the new state. It always returns one single object that is our state.
- Store is the object that keeps our state in. We create it once and pass it to our `Provider` component.

3. What is the difference between Application state and Component state? When would be a good time to use one over the other?
   If the data concerns the entire application (for example a login token) then it needs to be stored in an application state. But some data only concerns one or very few components (usually form data in controlled components). In that case, that data belongs to component state.

4. Describe `redux-thunk`, what does it allow us to do? How does it change our `action-creators`?
   `redux-thunk` is a middleware that enables us to use asynchronus functions in our action creators. The way it works is, if the action creator returns a function rather than a simple object with type property, `redux-thunk` takes that function and resolves it for us. Our action creators now return another function that takes `dispatch` as an argument by which dispatch our own actions. In the case of an async API call, we dispatch our action creators right before the API call to let the application know that we are dispatching (`FETCH_DATA_START`) and in then/catch chain methods after it resolves (`FETCH_DATA_SUCCESS` or `FETCH_DATA_FAILURE`)

5. What is your favorite state management system you've learned and this sprint? Please explain why!
   I don't have favorites (my wife hates me for that lol)
   All of them have their own use cases. I would use Context API for a small to mid level project where the entire application is fetching data from a single API and represents it.
   Redux would be useful for a bigger project which I don't think I have ever seen.
   If I am to choose, I would choose Redux because nobody seems to understand it very well and I can implement Redux to a project without referring to any documentation and it makes me look cool.
