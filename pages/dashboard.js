import styles from "../styles/Dashboard.module.css";
import { useSession, signIn, signOut } from "next-auth/react";
import { useMoralis } from "react-moralis";
import { useRouter } from "next/router";
import { Box, Button, Flex, TabList, Tabs, Text, Tab, TabPanels, TabPanel } from "@chakra-ui/react";
import Header from "../components/Header";
import Profile from "../components/Profile";
import NFT from "../components/NFT";
import Bungallow from "../components/Bungallow";


export default function dashboard() {


    const osContainer = [];
    var verifiedMG = false;
    
    function Gobackhome(){
        const router = useRouter();

        router.push(process.env.NEXTAUTH_URL);

    }

    function Renderdash(){
        const { data: session } = useSession();
        const {isAuthenticated, logout, user, setUserData} = useMoralis();
        if(session && isAuthenticated){
    
            setUserData({
                discordId: session.user.id,
                
            })
    
    
            return(
    
        
    
                <>
                    <meta name="viewport" 
                  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0"></meta>
                    <Flex direction="column" height="100vh" >
                        <Header/> 
                        <Box flex = "1" bgGradient='linear(to-t, green.200, green.300)' px = "44" py = "20" >
                            <Tabs size="lg" colorScheme="green" align = "center" variant = "enclosed">
                                <TabList>
                                    <Tab fontWeight = "bold" > Profile</Tab>
                                    <Tab fontWeight = "bold" > NFTs</Tab>
                                    <Tab fontWeight = "bold" > Bungallow</Tab>
    
    
                                </TabList>
                                <TabPanels>
    
                                    <TabPanel>
                                        <Text>
                                            <Profile user = {user} session = {session}/>
                                        </Text>
    
                                    </TabPanel>
    
                                    <TabPanel>
                                        <Text>
                                            <NFT user = {user} session = {session}/>
                                        </Text>
                                    
                                    </TabPanel>
    
                                    <TabPanel>
                                        <Text>
                                            <Bungallow user = {user} session = {session}/>
                                        </Text>
                                    
                                    </TabPanel>
                                </TabPanels>
                            
                            </Tabs>   
                        </Box> 
    
                    </Flex>
    
    
                </>
                )
            
            
        }
    
        else{
    
            return(
                <div className={styles.dashboard}>
                    <p>
                       Only verified members can visit this site...
    
                        <h2>
                            <button onClick={Gobackhome}>Go to login</button>
                        </h2>
                    </p>
                </div>
    
            )
    
        }
    
    }

    return Renderdash();

}
