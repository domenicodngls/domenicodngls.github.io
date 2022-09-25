import {theme} from "./themeProvider";
import {sectionList} from "../content/section";

export const style = {
    body: {
        containerFlexColumn: {
            display: 'flex',
            flexDirection: 'column',
            alignItems: {lg: 'flex-end', md: 'center'}
        },
        containerFlex: {
            display: 'flex',
            alignItems: 'center'
        },
        description: {
            mt: 5,
            mr: 5,
            ml: 5,
            display: 'flex',
            letterSpacing: '.1rem',
            textDecoration: 'none',
            fontSize: '2.5vmin'
        }
        ,
        logo: {
            display: 'flex',
            height: '20vmin'
        },
        logoContainer: {
            display: {
                xs: 'none',
                sm: 'none',
                lg: 'flex'
            },
            flexBasis: 'fit-content'
        },
        subtitle: {
            mr: 2,
            display: 'flex',
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '2vmin'
        },
        title: {
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '9vmin',
        }
    },
    common: {
        backgroundColor: "#EEEEEE",
        borderBottom: `solid 10px`,
        margin: {
            m: 5
        },
        title: {
            fontSize: '5vmin',
        }
    },
    header: {
        logo: {
            height: '10vmin',
        },
        reverseColorTitle: {
            backgroundColor: theme.palette.primary.contrastText,
            color: theme.palette.primary.main,
        },
        title: {
            mr: 2,
            display: 'flex',
            fontWeight: 700,
            letterSpacing: '.3rem',
            textDecoration: 'none',
            fontSize: '3.2vmin'
        }
    },
    navigationBar: {
        button: {
            mr: 1,
            ml: 1,
            width: `${90 / sectionList.length}%`,
            fontWeight: 600,
            fontSize: '2vmin',
            borderColor: theme.palette.primary.contrastText
        }
        ,
        buttonGroup: {
            mt: 2,
            mb: 2,
            height: 'fit-content',
            width: '100%',
            justifyContent: 'center'
        }
    }
}