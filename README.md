## Tools used for while developing the application
  1. React
  2. Redux (for state management)
  3. Redux Saga (as middleware for handling async tasks)
  4. React Router Dom (for navigation within application)
  5. Tailwind
  6. Material UI 5 (as component library)
  7. emotion/styled (for writing css within js and styling inner elements from Material UI components)

In this project, I have focused more on the functionality and code instead of styling because it was taking longer then expected. The website is pretty responsive as well for all screen sizes. Took care of following features as well:
 1. Role based routing: User will be redirected to `/login` when they try to access admin page since the role assigned to current user is `user` and not `admin`.
 2. Changes done in `Email` will persist until the app is refreshed.
 3. Email app supports single/multiple delete option with lots of flexibility. User can delete `checked` email via single delete option as well. 
 4. User will see `404` incase they to access invalid route.
Note: I had to remvoe Redux Saga since it felt like overkill for a simple task. Features like lazy loading, suspense can be implemented as well with not much effort.
