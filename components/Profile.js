import {Text, Image, Box, StylesProvider} from "@chakra-ui/react"
import CustomContainer from "./CustomContainer"
import styles from "../styles/Login.module.css";


export default function Profile({user,session}){



    
    if(user.get("numberofMGs") >= 10 ){
        return(



            <CustomContainer className={styles.user_profile_container}>
                <Box className={styles.user_profile_container} boxSize='m'>
        
        
                    <Image  src={session.user.image} alt='user-discord-avatar' borderRadius="full" align = "left" boxSize = "100%"  />
                   
                    </Box>       
        
                    
        
                   
                    
                    <Text  color = "blue" fontSize='20px' fontWeight="bold"  py = "2" textAlign="left">
                        Discord name: {session.user.name}
                        
                    </Text>
        
                    <Text  color = "blue" fontSize='20px' fontWeight="bold"  py = "2" textAlign="left">
                        Discord id: {user.get("discordId") }
                        
                    </Text>
        
        
                    <Text  color = "blue" fontSize='20px' fontWeight="bold"  py = "2" textAlign="left">
                        Wallet Address: {user.get("ethAddress")}
                        
                    </Text>
        
                    <Text  color = "blue" fontSize='20px' fontWeight="bold"  py = "2" textAlign="left">
                        MGs in wallet: {user.get("numberofMGs") }
                        
                    </Text>
        
        
        
            </CustomContainer>
                
        )

    }

    else{

        return(



            <CustomContainer>
                <Box boxSize='m'>
        
        
                    <Image src={session.user.image} alt='user-discord-avatar' borderRadius="full" align = "left" boxSize = "100px"  />
                    </Box>       
        
                    
        
                   
                    
                    <Text py = "2" textAlign="left">
                        Discord name: {session.user.name}
                        
                    </Text>
        
                    <Text py = "2" textAlign="left">
                        Discord id: {session.user.id }
                        
                    </Text>
        
        
                    <Text py = "2" textAlign="left">
                        Wallet Address: {user.get("ethAddress")}
                        
                    </Text>
        
                    <Text py = "2" textAlign="left">
                        MGs in wallet: {user.get("numberofMGs") }
                        
                    </Text>
        
        
        
            </CustomContainer>
                
        )
    }


}