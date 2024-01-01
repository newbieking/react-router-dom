import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.css';

import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

// Put any other imports below so that CSS from your
// components takes precedence over default styles.

import Root, { loader as rootLoader, action as rootAction } from './routes/root';
import ErrorPage from './error-page';
import Contact, { loader as contactLoader, action as contactAction } from './routes/contact';
import EditContact, { action as editAction } from './routes/edit';
import { action as destroyAction } from "./routes/destroy";
import Index from './routes';

// const router = createBrowserRouter([
//   {
//     path: "/", element: <Root />, loader: rootLoader, action: rootAction, errorElement: <ErrorPage />, children: [
//       // pathless route
//       {
//         errorElement: <ErrorPage />,
//         children: [
//           { index: true, element: <Index /> },
//           { path: "contacts/:contactId", element: <Contact />, loader: contactLoader, action: contactAction },
//           { path: "contacts/:contactId/edit", element: <EditContact />, loader: contactLoader, action: editAction },
//           { path: "contacts/:contactId/destroy", action: destroyAction },
//         ]
//       }
//     ]
//   },
//   { path: "/app", element: <App /> },
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route
      path="/"
      element={<Root />}
      loader={rootLoader}
      action={rootAction}
      errorElement={<ErrorPage />}
    >
      <Route errorElement={<ErrorPage />}>
        <Route index element={<Index />} />
        <Route
          path="contacts/:contactId"
          element={<Contact />}
          loader={contactLoader}
          action={contactAction}
        />
        <Route
          path="contacts/:contactId/edit"
          element={<EditContact />}
          loader={contactLoader}
          action={editAction}
        />
        <Route
          path="contacts/:contactId/destroy"
          action={destroyAction}
        />
      </Route>
    </Route>
  )
);

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <RouterProvider router={router} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
