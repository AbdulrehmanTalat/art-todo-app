'use client'
import { Box, ButtonGroup, Container, IconButton, Stack, Text } from '@chakra-ui/react'
import { Logo } from './logo'

export const Footer = () => (
    //   <Container bg='#0987A0' margin='auto' alignContent='center' w='100%' as="footer" role="contentinfo" py={{ base: '12', md: '16' }}>
    //     <Stack spacing={{ base: '4', md: '5' }}>
    //       <Stack justify="space-between" direction="row" align="center">
    //         <Logo />
    //         <ButtonGroup variant="ghost">
    //           <IconButton
    //             as="a"
    //             href="#"
    //             aria-label="LinkedIn"

    //           />
    //           <IconButton as="a" href="#" aria-label="GitHub"  />
    //           <IconButton
    //             as="a"
    //             href="#"
    //             aria-label="Twitter"

    //           />
    //         </ButtonGroup>
    //       </Stack>
    //       <Text fontSize="sm" color="subtle">
    //         &copy; {new Date().getFullYear()} Designed by ART.
    //       </Text>
    //     </Stack>
    //   </Container>
    <Box w='100%' bg={['#0987A0', '#0987A0', '#0987A0', '#0987A0', '#0987A0', '#0987A0']} margin='auto' p='10' mt='10'>
        <Text fontSize="sm" textAlign='center' color="white">
            &copy; {new Date().getFullYear()} Designed by ART.
        </Text>
    </Box>
)