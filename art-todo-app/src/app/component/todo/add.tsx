'use client'
import { useGlobalContext } from '@/app/context/store'
import { Input, Stack, WrapItem } from '@chakra-ui/react'
import { Button } from '@chakra-ui/react'
import { Box } from '@chakra-ui/react'
import { useRef, useState } from 'react'
export default function AddTodo({ }) {
    const formRef = useRef();
    type DataType = {
        todoName: string
    }
    const { userId, setUserId, data, setData } = useGlobalContext();
    const [val, setVal] = useState("");
    const [todoName, setTodoName] = useState('');
    function addName() {
        if (todoName != '') {
            let mytodo = { todoName: val };
            setData([...data, mytodo]);
            setTodoName('');
        }
    }
    function inputChange(val: string) {
        setVal(val);
        setTodoName(val);
    }
    return (
        <Box mt='-20'>
            <Box bg='#0987A0' mx={'auto'} w='80%' p={[8, 12, 14, 14, 20, 20]} color='white'>
                <Stack spacing={[1, 2, 2, 2, 3, 4]} direction='row' align='center'>
                    <Input variant='outline' value={todoName} onChange={(e) => inputChange(e.target.value)} w={['320px', '375px', '425px', '768px', '1024px', '1740px']} height={['40']} size={['xs', 'sm', 'md', 'lg', 'lg', 'lg']} _placeholder={{ color: 'white' }} placeholder='add text here...' colorScheme='telegram' h={5} />
                    <WrapItem>
                        <Button onClick={() => addName()} w={['38px', '32px', '70px', '86px', '70px', '220px']} h={['10']} size={['xs', 'sm', 'md', 'lg', 'lg', 'xl']} _hover={{ color: 'telegram' }} bg='#553C9A'>Add</Button>
                    </WrapItem>
                </Stack>
            </Box>
        </Box>
    );
}