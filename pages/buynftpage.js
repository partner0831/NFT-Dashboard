
import { Flex, Box, Text, Button, Link } from "@chakra-ui/react";
import { useRouter } from 'next/router'

export default function buyNFTpage() {
    
    function Gobackhome(){
        const router = useRouter();

        router.push("/")
    }

    return(

    
    <Flex direction="column" height="100vh" >
        <Box flex = "1" bgGradient='linear(to-t, green.200, green.300)' px = "44" py = "20" >
            <Text fontWeight = "bold">There is no MG found in your wallet, buy at least one at <Link color='teal.500' href='https://opensea.io/collection/metagreysofficial' isExternal> Opensea </Link> to use your personalized Bungallow.</Text>
        
            <Button onClick={Gobackhome}>Back to Login Page</Button>
        </Box> 

    </Flex>


    

    )

}