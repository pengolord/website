import { Router } from "@solidjs/router";
import { Component, lazy, ParentComponent } from "solid-js";

import Header from './components/Header';

/*
  Glob for every file in the ./routes directory.
  This gives me access to everything there so I can import it later.
*/
const modules = import.meta.glob('./routes/**/*.{md,mdx,tsx}') as Record<
  string,
  () => Promise<{ default: Component }>
>;

/*
  This takes the above modules and converts them each into a solid-js route.
  The route path is based of the path to the file and follows a few rules (see below).
*/
const routes = Object.keys(modules).map((file) => {
  const route = file
    // Removes the 'routes' prefix from the file.
    .replace(/^\.\/routes/, '')
    // Makes files named 'index' just point to the directory they're in.
    .replace(/\/index\./, '/.')
    // Removes any file extension.
    .replace(/\..+$/, '') || '/';

  return {
    path: route,
    component: lazy(modules[file]),
  };
});

const Layout: ParentComponent = (props) => {
  return (
    <>
      <Header />
      <main>
        {props.children}
      </main>
    </>
  );
}

const App: Component = () => {
  return (
    <Router root={Layout}>
      {routes}
    </Router>
  );
};

export default App;
