import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  //for login
    container: {
      flex: 1,
      backgroundColor: '#c8dec8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    inner_container: {
      flex: 1,
      backgroundColor: '#c8dec8',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginBtn: {
      backgroundColor: '#3f9e77', 
      padding: 10,
      borderRadius: 12
      
    },
    loginTxt: {
      color: 'white',
      paddingHorizontal: '29%',
      paddingVertical: 4,

    },
    headerTxt: {
      fontSize: 40,
      zIndex: 1,
      paddingTop: 94

      },
    EmailTxt: {
      paddingRight: '60%',
      paddingTop: 0

    },
    emainInput: {
      backgroundColor: 'white', 
      width: '94%',
      borderWidth: 1,
      borderColor: '#c9c9c9',
      borderRadius: 4,
      margin: 12,
      height: 50
    },
    or: {
      margin: 20,
      paddingBottom: 4,
      fontSize: 13
    },
    TxtBelow: {
      alignItems: 'center',
      marginTop: '46%'
    }, 
    TxtB: {
      color: 'grey',
      fontSize: 11
    },
    logInImg: {
      top: -45,
      width: 300,
      height: 200,
      borderRadius: 100
    },

  //cut for login


    tabStyles: {
      // bottom: -10,
      paddingTop: 10,
      paddingBottom: 10,
      backgroundColor: '#086E3D',
      borderTopWidth: 0,
      position: 'absolute',
      elevation: 0,
      height: 60,
      flex: 1,
      justifyContent: 'center',

      
      
      
    },
    curvedLogo: {
      position: 'absolute',
      left: -28,
      bottom: 5,
      width: '100%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      
    },
    curvedLogoBox: {
      position: 'absolute',
      top: -30,
      left: 16,
      margin: 'auto',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: 56,
      width: 56,
      backgroundColor: '#086E3D',
      borderRadius: 35,
      shadowColor: 'black',
      shadowOffset: { width: 2, height: 2 },
      shadowOpacity: 0.6,
      elevation: 10
    }



    
    
  });


  export default styles;
  