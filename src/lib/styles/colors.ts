type ColorShade = {
    50: string;
    100: string;
    200: string;
    300: string;
    400: string;
    500: string;
    600: string;
    700: string;
    800: string;
    900: string;
}

type ColorTheme = {
    [key: string]: ColorShade;
}

export const gray_colors: ColorTheme = {
    dark_gray: {
        50: '#575553',
        100: '#4F4D4C',
        200: '#474645',
        300: '#403E3D',
        400: '#383838',
        500: '#2B2A2A',
        600: '#292827',
        700: '#212020',
        800: '#1A1918',
        900: '#121212',
    }
}

export const synthwave_colors: ColorTheme = {
    rose_1: {
        50: '#FFF1F3',
        100: '#FFE4E8',
        200: '#FECDD6',
        300: '#FDA4B4',
        400: '#FB7790',
        500: '#D9436B',  // Base color
        600: '#BE325A',
        700: '#9C1F45',
        800: '#801434',
        900: '#670B28',
    },
    magenta_2: {
        50: '#FDF2FF',
        100: '#FAE6FF',
        200: '#F5CCFF',
        300: '#E9A3F5',
        400: '#D66DC2',
        500: '#BF3990',  // Base color
        600: '#A32A7B',
        700: '#851C65',
        800: '#6B1151',
        900: '#550840',
    },
    gold_3: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#F7E07C',
        400: '#F5D870',
        500: '#F2CF63',  // Base color
        600: '#D4B44D',
        700: '#B69939',
        800: '#997D28',
        900: '#7C651B',
    },
    amber_5: {
        50: '#FFFBEB',
        100: '#FEF3C7',
        200: '#FDE68A',
        300: '#F7D375',
        400: '#F5BC60',
        500: '#F2A74B',  // Base color
        600: '#D48B35',
        700: '#B67024',
        800: '#995816',
        900: '#7C450C',
    },
    coral_6: {
        50: '#FFF1F1',
        100: '#FFE2E2',
        200: '#FFC9C9',
        300: '#FFA7A7',
        400: '#FF8989',
        500: '#F26B6B',  // Base color
        600: '#D45555',
        700: '#B64141',
        800: '#993030',
        900: '#7C2222',
    }
}