import * as React from 'react';
import { emphasize, styled } from '@mui/material/styles';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Chip from '@mui/material/Chip';
import HomeIcon from '@mui/icons-material/Home';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Container, useTheme } from '@nextui-org/react';

const StyledBreadcrumb = styled(Chip)(({ theme }) => {
    const backgroundColor =
        theme.palette.mode === 'light'
            ? theme.palette.grey[100]
            : theme.palette.grey[800];
    return {
        backgroundColor,
        height: theme.spacing(3),
        color: theme.palette.text.primary,
        fontWeight: theme.typography.fontWeightRegular,
        '&:hover, &:focus': {
            backgroundColor: emphasize(backgroundColor, 0.06),
        },
        '&:active': {
            boxShadow: theme.shadows[1],
            backgroundColor: emphasize(backgroundColor, 0.12),
        },
    };
}); // TypeScript only: need a type cast here because https://github.com/Microsoft/TypeScript/issues/26591


export default function BreadCrumbs(props) {
    const { theme } = useTheme();
    return (
        <Container>
            <div role="presentation" className='pt-2 px-3 f-rounded' style={{ backgroundColor: theme.colors.secondaryLight.value }}>
                <Breadcrumbs aria-label="breadcrumb" >
                    <StyledBreadcrumb
                        component="a"
                        href="/"
                        label="Dashboard"
                        icon={<HomeIcon style={{ marginBottom: '0.2rem' }} fontSize="small" />}
                    />
                    <StyledBreadcrumb component="a" label={props.stage1} />
                    <StyledBreadcrumb
                        label={props.stage2}
                        deleteIcon={<ExpandMoreIcon />}
                    />
                </Breadcrumbs>
            </div>
        </Container>
    );
}