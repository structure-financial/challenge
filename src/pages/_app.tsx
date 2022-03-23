import type { AppProps } from "next/app";

import "@/styles/global.css";

/**
 * The main entrypoint to the app
 *
 * No editing is necessary in this file.
 *
 * @component
 */
const App = ({ Component, pageProps }: AppProps) => {
  /* https://github.com/yannickcr/eslint-plugin-react/blob/master/docs/rules/jsx-props-no-spreading.md#when-not-to-use-it */
  /* eslint-disable-next-line react/jsx-props-no-spreading */
  return <Component {...pageProps} />;
};

export default App;
