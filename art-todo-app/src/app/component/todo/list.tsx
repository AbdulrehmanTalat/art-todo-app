'use client'
import { DeleteIcon } from '@chakra-ui/icons';
import { Tooltip } from '@chakra-ui/react'
import { Box, Table, Tr, Th, Tbody, Td, Thead, TableCaption } from '@chakra-ui/react'
import { useEffect } from 'react';
import { useGlobalContext } from '@/app/context/store';
export default function List({ }) {
    const { userId, setUserId, data, setData } = useGlobalContext();
    function removeItem(item: any) {
        let temp = [...data];
        let index = temp.findIndex(x => x.todoName == item);
        if (index != -1) {
            temp.splice(index,1);
            setData(temp);
        }
    }
    return (
        <>
            <Box bg='#553C9A' mx={'auto'} w='80%' mt='10' p={[4, 12, 12, 12, 20, 20]}>
                <Table bg='white' variant='striped' size={['md', 'md', 'md', 'lg', 'lg', 'lg']} overflowX='auto' whiteSpace='nowrap' >
                    <TableCaption bg={'white'}>List of Todos</TableCaption>
                    <Thead w={['320px', '375px', '425px', '1024px', '1024px', '1800px']}>
                        <Tr>
                            <Th w={['320px', '375px', '425px', '1024px', '10000136px', '1800px']} ml={['0px,0px,0px,0px,0px,30px']}>Name</Th>
                            <Th  >Action</Th>
                        </Tr>
                    </Thead>
                    <Tbody>
                        {data.map((item) =>
                            <Tr key={item.todoName}>
                                <Td >{item.todoName}</Td>
                                <Td textAlign='center'><Tooltip label='click to delete record' bg='#0987A0' fontSize='sm'>
                                    <DeleteIcon color='#553C9A' onClick={() => removeItem(item.todoName)} />
                                </Tooltip></Td>
                            </Tr>
                        )}{''}
                    </Tbody>
                </Table>
            </Box>
        </>
    );
}