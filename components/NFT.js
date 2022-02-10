import CustomContainer from "./CustomContainer";
import {Text, Image, Box} from "@chakra-ui/react"
import { useNFTBalances } from "react-moralis";
import { useEffect } from "react";
import { Link } from "@chakra-ui/react";


export default function NFT({user,session}){

    const {getNFTBalances, data, isLoading, isFetching} = useNFTBalances()

    useEffect( () => {
      
            getNFTBalances({
                params:{
                    chain:"mainnet",
                    address: user.get("ethAddress")
                }   
        
            })
    
        
    }, [])

    


    return(
        <CustomContainer>
             <Box boxSize='m'>

                <Text fontSize="xl" fontWeight="bold">
                    My NFTs:    

                </Text>
                {data && data.result.map(nft=>(
                    
                    <Box  bg = "green.100" mt="4" px = "2" py = "2" borderWidth="1px" borderRadius="md" key={nft.token_uri}>
                        
                        <Text fontSize="xl" fontWeight = "bold"> {nft.name}</Text>
                        <Text fontSize="xl" fontWeight = "bold"> {nft.token_id}</Text>
                        {nft.image && <Image src={nft.image} boxSize = "40%"/>}
                        <Link color='blue.400' href={nft.token_uri} isExternal> Metadata</Link>
                        
                    </Box>
                    
                ))}
                
             </Box>
        </CustomContainer>
    
    )

}