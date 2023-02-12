'use client'
import { Box, Button, Heading, Stack } from '@chakra-ui/react'
export default function Header() {
    return (
        <Box w='100%'  bg={['#553C9A','#553C9A','#553C9A','#553C9A','#553C9A','#553C9A']} margin='auto'  pt='10'>
            <Heading pb='20' color='white' textAlign='center' mb={4}>Simple Todo App</Heading>
        </Box>
    );
}