export const dropdownNavbarLabels = ['Everyday Banking', 'Investments', 'Payments', 'Borrowing'];

export const leftNavbarLabels = ['Personal Banking', 'About us', 'Education Centre', 'Help'];

export const navInfo = [
    {
        mainLabel: { mainLabelName: 'Sign in' },
    },
    {
        id: 1,
        mainLabel: {
            mainLabelName: 'Personal banking',
            subTitle: [
                {
                    name: 'Everyday banking',
                    links: [
                        'Savings plus Account',
                        'Joint Savings plus Account',
                        'TSFA Savings Account',
                        'US Dollar Account',
                    ],
                },
                {
                    name: 'Investments',
                    links: ["GIC's", 'RSP Savings Account', 'TSFA Savings Account'],
                },
                {
                    name: 'Payments',
                    links: ['International Money Transfers'],
                },
                {
                    name: 'Borrowing',
                    links: ['Mortgage Marketplace'],
                },
            ],
        },
    },
    {
        id: 2,
        mainLabel: {
            mainLabelName: 'About us',
            subTitle: [
                {
                    links: ['Our Company', 'Community', 'Careers', 'News'],
                },
            ],
        },
    },

    {
        mainLabel: { mainLabelName: 'Education Centre' },
    },

    {
        id: 3,
        mainLabel: {
            mainLabelName: 'Help',
            subTitle: [
                {
                    links: ['FAQ', 'Contact Us', 'Estates'],
                },
            ],
        },
    },

    {
        mainLabel: { mainLabelName: 'Contact us' },
    },

    {
        mainLabel: { mainLabelName: 'Français' },
    },
];
