import styles from "../styles/Login.module.css";
import Image from "next/image";
import animated_logo from "./animated/MetaGreysAnimatedLogoMatrix.gif";
import mm_logo from "./images/MetaMask_Fox.svg";
import { useMoralis } from "react-moralis";
import { useSession, signIn, signOut } from "next-auth/react";
import { useRouter } from 'next/router'



export default function Login() {



  const router = useRouter();
  const {setUserData,authenticate,user} = useMoralis();



  function authwMoralis(){

    authenticate({onSuccess : () => {



      async function getOpenseaItems() {
        

        const osContainer = [];

        
        if (!user) { return }
  
        const options = {
            method: 'GET',
            headers: {Accept: 'application/json', 'X-API-KEY': '2fe149332c264e008aa46f2fce2301d1'}
          };
          
        const items = await fetch(`https://api.opensea.io/api/v1/assets?owner=${user.get("ethAddress")}&order_direction=desc&offset=0&limit=20&collection=metagreysofficial`,options)
          .then((res) => res.json())
          .then((res) => {
            return res.assets
          })
          .catch((e) => {
            console.error(e)
            console.error('Could not talk to OpenSea')
            return null
          })
  
        if (items == null) { return }
  
        items.forEach((nft) => {
          const { name } = nft
         

          if(nft.creator.address=="0x169ed44e61d704fe373af5e0b4d33a7d55e3c9c6"){
            osContainer.push(nft.name)
            
          }
          
        })
        
        if(osContainer.length >= 1){

          setUserData({
            numberofMGs: osContainer.length,
            
          })
        


            signIn('discord',{callbackUrl : "/dashboard"})           
        }
        else{
          return(
 
            
            router.push("/buynftpage")      
              
          )

        }
        

      }

      if(user && user.get("numberofMGs")>=1){
        signIn('discord',{callbackUrl : "/dashboard"})

      }

      else{
        
        getOpenseaItems();
      }


   
    
    } });
    
  }
  function MetamaskDesign() {
    const {authError} = useMoralis();
    return( 
    <div className={styles.login_container}>
        <div className={styles.login_card} >
    
            <Image className={styles.iframe} src={animated_logo}  width={100} height={100}/>
            <Image src={mm_logo} width={50} height={50}/>           
            <div className={styles.sign_in_container}>
              {
                authError && (
                  
                  <div className={styles.mm_error_msg}>
                    <p>
                    {authError.name}
                    {authError.message}
                    </p>
                  </div>

                )
                

              }

              
              <button className="LoginMMButton" onClick={authwMoralis}> Login with Metamask</button>
              
              
            </div>
        
        </div>  
        

    </div>
    );
  }

  return(
      MetamaskDesign()
  )

}
