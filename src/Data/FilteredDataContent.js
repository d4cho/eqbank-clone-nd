import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import CameraFrontIcon from '@mui/icons-material/CameraFront';

export const filteredDataContent = [
    {
        id: 1,
        Label: 'Online',
        listItems: [
            { suggestionOne: 'Take a photo of your ID', whatIDNeed: 'what ID will i need?' },
            { suggestionTwo: 'Take a selfie' },
            { suggestionThree: 'Be good to go in minutes' },
        ],
        icon: <LocationOnOutlinedIcon fontSize='large' />,
        mainText: 'Want to nail it on your first try?',
        subText: 'Review photography tips',
    },
    {
        id: 2,
        Label: 'In Person',
        listItems: [
            { suggestionOne: 'We’ll email you a barcode' },
            {
                suggestionTwo: 'Bring your barcode and ID to Canada Post',
                whatIDNeed: 'what ID will i need?',
            },
            { suggestionThree: 'Be good to go within 1-2 days' },
        ],
        icon: <CameraFrontIcon fontSize='large' />,
        mainText: 'Want to visit Canada Post?',
        subText: 'View eligible Canada Post outlets',
        href: 'https://www.canadapost-postescanada.ca/information/app/fpo/personal/findpostoffice',
        legalText:
            'Your photos are deleted once you’re verified. By using this service, you agree to the collection, use and disclosure of your personal information in accordance with our Privacy Agreement ',
    },
];
