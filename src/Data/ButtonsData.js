import CameraAltOutlinedIcon from '@mui/icons-material/CameraAltOutlined';
import PermIdentityOutlinedIcon from '@mui/icons-material/PermIdentityOutlined';

export const filterButtonDesktop = [
    {
        id: 1,
        width: '210px',
        Label: 'Online',
        color: 'black',
        backgroundColor: '#fcf5fa',
        cursor: 'pointer',
        icon: <CameraAltOutlinedIcon />,
        borderRadius: '5px',
    },
    {
        id: 2,
        width: '210px',
        Label: 'In Person',
        color: 'black',
        backgroundColor: '#fcf5fa',
        cursor: 'pointer',
        icon: <PermIdentityOutlinedIcon />,
        borderRadius: '5px',
    },
];

export const filterButtonMobile = [
    {
        id: 1,
        width: '100%',
        Label: 'Online',
        color: 'black',
        cursor: 'pointer',
    },
    {
        id: 2,
        width: '100%',
        Label: 'In Person',
        color: 'black',
        cursor: 'pointer',
    },
];
