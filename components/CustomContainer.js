import {Box} from "@chakra-ui/react"
import styles from "../styles/Login.module.css";

export default function CustomContainer({children}){
    return(

        <Box   minWidth = "50vh" maxWidth="100%" resize="horizontal" backgroundSize="100%" bg = "green.200"  px = "20" py = "10" rounded="lg" shadow="lg" textAllign = "left">
            {children}
        </Box>
        
    )

}