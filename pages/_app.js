import React from "react";
import GoogleFonts from "next-google-fonts";
import Head from "next/head";
import Layout from "@/containers/layout";
import GlobalStyles from "@/constants/globalStyles";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/scale.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { AuthProvider } from "@/contexts/AuthContext";
import { Fuego, FuegoProvider } from "@nandorojo/swr-firestore";
import { config } from "@/lib/firebase";

const fuego = new Fuego(config);

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Historias de Malvinas</title>
        <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-analytics.js"></script>
        <script src="https://www.gstatic.com/firebasejs/8.0.1/firebase-app.js"></script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
        />
      </Head>
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap" />
      <GoogleFonts href="https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap" />
      <FuegoProvider fuego={fuego}>
        <AuthProvider>
          <Layout>
            <Component {...pageProps} />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `(function () {
              function $MPC_load() {
                window.$MPC_loaded !== true &&
                  (function () {
                    var s = document.createElement("script");
                    s.type = "text/javascript";
                    s.async = true;
                    s.src =
                      document.location.protocol +
                      "//secure.mlstatic.com/mptools/render.js";
                    var x = document.getElementsByTagName("script")[0];
                    x.parentNode.insertBefore(s, x);
                    window.$MPC_loaded = true;
                  })();
              }
              window.$MPC_loaded !== true
                ? window.attachEvent
                  ? window.attachEvent("onload", $MPC_load)
                  : window.addEventListener("load", $MPC_load, false)
                : null;
            })();`,
              }}
            />
            <script
              type="text/javascript"
              dangerouslySetInnerHTML={{
                __html: `  window.fbAsyncInit = function() {
              FB.init({
                appId      : '{360926591896361}',
                cookie     : true,
                xfbml      : true,
                version    : '{8.0}'
              });
              FB.AppEvents.logPageView();   
            };
            (function(d, s, id){
               var js, fjs = d.getElementsByTagName(s)[0];
               if (d.getElementById(id)) {return;}
               js = d.createElement(s); js.id = id;
               js.src = "https://connect.facebook.net/en_US/sdk.js";
               fjs.parentNode.insertBefore(js, fjs);
             }(document, 'script', 'facebook-jssdk'));}`,
              }}
            />
          </Layout>
        </AuthProvider>
      </FuegoProvider>
      <GlobalStyles />
    </>
  );
}

export default MyApp;
