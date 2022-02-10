
import '../styles/globals.css'
import {MoralisProvider} from "react-moralis";
import { SessionProvider } from "next-auth/react"
import {ChakraProvider} from "@chakra-ui/react"


export default function MyApp({
  Component, 
  pageProps:{session, ...pageProps },
}){
  return( 
    <ChakraProvider>
      <MoralisProvider 
          appId="W0zPQtM861mHT4sZ3BVF7sOxBrlqNbm1KUk2RSTm"
          serverUrl="https://7lpqbunv4qcl.usemoralis.com:2053/server"
          >
            <SessionProvider session={session}>

              <Component {...pageProps} />  
            
            </SessionProvider>
      </MoralisProvider>
    </ChakraProvider>
    
  );
}

