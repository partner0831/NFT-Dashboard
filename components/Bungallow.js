import {Text, Image, Box, StylesProvider} from "@chakra-ui/react"
import CustomContainer from "./CustomContainer"
import styles from "../styles/Login.module.css";


export default function Bungallow({user,session}){
    
    if(user.get("numberofMGs") >= 10 ){
        return(



            <CustomContainer>
                <Box className={styles.abvmjstc_bungallow} boxSize='m'>
        
        
                   
                    </Box>       
        
                    
        
                   
        
                    <Text  color = "blue" fontSize='20px' fontWeight="bold"  py = "2" textAlign="left">
                        Above Majestic Tier Bungallow
                        
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
                        Usual Bungallow Tier
                        
                    </Text>
        
        
        
            </CustomContainer>
                
        )
    }


}