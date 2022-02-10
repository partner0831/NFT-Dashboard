import Login from "../components/Login";
import { useMoralis } from "react-moralis";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from 'next/router'
import { route } from "next/dist/server/router";



function Home() {


  // Discord Oauth
  function DiscordLogin() {  
  const router = useRouter();
  const { data: session } = useSession();

    if (session) {

      return (
        
        <>
        <Login/>
      </>
             
      )
    }
    return (
      <>
        <Login/>
      </>
    )
  }





     
  return(
      DiscordLogin()
  )
  

}

export default Home;
