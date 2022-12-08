import React from 'react'
import { Container, useTheme, Button, Text } from '@nextui-org/react'
import AddCircleIcon from '@mui/icons-material/AddCircle';

export default function TitleBar(props) {
    const { theme } = useTheme()
    return (
        <Container>
            <div className='d-flex justify-content-between align-items-center py-2 px-4 f-rounded-top' style={{ backgroundColor: theme.colors.secondaryLight.value }}>
                <Text h4 css={{textTransform: 'uppercase'}} color='fff'>{props.title}</Text>
                {
                    (props.isButton) ? <Button icon={<AddCircleIcon/>} color="secondary" auto ghost>
                    {props.buttonName}
                  </Button> : ""
                }
            </div>
        </Container>    
    )
}