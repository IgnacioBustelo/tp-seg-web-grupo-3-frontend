import './App.css';
import {AppTheme} from "./theme/AppTheme";
import {AppRouter} from "./router/AppRouter";
import { GoogleReCaptchaProvider } from "react-google-recaptcha-v3";

export const App = () => {
  return (
      <GoogleReCaptchaProvider
          reCaptchaKey="6Ld2EGsqAAAAAGgaObHGmhxh2zo7u4W0oEYI3W1V"
          scriptProps={{
              async: false, // optional, default to false,
              defer: false, // optional, default to false
              appendTo: 'head', // optional, default to "head", can be "head" or "body",
              nonce: undefined // optional, default undefined
          }}
      >
          <AppTheme>
              <AppRouter/>
          </AppTheme>
      </GoogleReCaptchaProvider>
  );
};
