# CGS Test project

## Implemented Features

1. **Todo list - CRUD operations on backend**;

- _Each `PUT` `POST` rout should has validation of `req.body` and throw `400` error in case of failed validation_
- _Separate your logic from routes. You should perform all interactions with `DB` inside your `services/<filename>.service.ts` file and import it to `controllers/<filename>.controller.ts`. After that you can call your controllers in routes_
- _Create GENERIC validator, isExist (for put, delet and get by id), tryCatch middlewares _

2. **Todo list - Connect your CRUD operations with mobile**;

- _You should split your code on logical components ( `<TodoContainer />`, `<TodoElement/>` etc);_
- _For Edit/Add you should use forms written with [Formik](https://formik.org/docs/overview);_
- _Put logic related to server interactions inside `service/http.ts` file (check [Our Documentation](https://github.com/CodeGeneration-2020/code-generation-code-style/blob/main/docs/javascript.md#server-interactions-))_
- _For data fetching you can use [React Query](https://react-query.tanstack.com/), it also help you to globally store your data_
- _Use `<FlatList />` for render dynamic list (reed RN docs: https://reactnative.dev/docs/flatlist)_
- _Use React Native EXPO in order to install RN for both iOS & Android (https://docs.expo.dev/index.html)_
- _Your font sizes, colors, margins, paddings should be in THEME const_
- _Create QUERY_KEYS and ROUTER_KEYS const for routing_

3. **Authorization (login/signup) backend;**

- _Use jwt [authorization](https://nodejsdev.ru/doc/jwt/) and [Passport](http://www.passportjs.org/) for that_
- _Logic related to token processing should be stored in `middlewares/auth.middleware.ts`_
- _Private todos should be accessible only for Todo creators_

4. **Authorization (login/signup) frontend;**

- _Should store token in localStorage_
- _Use Formik for handling validation and submit func_
- _Extend your http service for intracting with auth requests (check our codestyle)_

5. **Filters for todo list by title and statuses (private and completed);**

- _You should pass filter params through `req.params`(`localhost:3000/todo?search=test&status=completed`)_

6. **Button pagination;**

- _All pagination should be handled by backend_
- _Change frontend request with pagination params_
