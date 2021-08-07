// Loading Indicator  https://www.npmjs.com/package/@badrap/bar-of-progress 03:02:15:00
// Little pink progress bar that runs from left to right on the very top of the screen
import "tailwindcss/tailwind.css";
import "../styles/global.css";

import ProgressBar from "@badrap/bar-of-progress";
import Router from "next/router";

{
  /* if you want to return JSX objects, you have to use parenthesis (). If you want to pass in several lines of code, then use {}, then use parenthesis to wrap up {} */
}
const progress = new ProgressBar({
  size: 8,
  color: "#FE595E",
  className: "z-50",
  delay: 100,
});

// when route changes, start the Progress bar. when route change is completes, finish the progress bar. when route change has error, then stop progress bar as well.
Router.events.on("routeChangeStart", progress.start);
Router.events.on("routeChangeComplete", progress.finish);
Router.events.on("routeChangeError", progress.finish);

function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

export default MyApp;
