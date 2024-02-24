import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20,
      },
      input: {
        width: '100%',
        borderColor: '#575DFB',
        borderWidth: 1,
        padding: 10,
        marginTop:20,
        marginBottom: 20,
        borderRadius: 5,
      },
      connect: {
        color: '#575DFB',
        fontSize: 30,
        fontWeight: 'bold',
        position: 'absolute',
        top: 50
      },
      connectYou: {
        position: 'absolute',
        top: 100,
      },
      label: {
        marginRight: 'auto',
        marginLeft: 18
      },
      imgInput:{
        position: 'absolute',
        left: 25,
        bottom: 23,
        height: 20,
        width: 20
      },
      formInput: {
        borderColor: '#575DFB',
        borderWidth: 1,
        borderRadius: 10,
        fontSize: 22,
        width: 340,
        padding: 10,
        margin: 10,
        paddingLeft: 48,
        fontSize: 20,
      },
      formButton: {
        backgroundColor: '#575DFB',
        width: 340,
        padding: 12,
        margin: 10,
        borderRadius: 10,
        alignItems: 'center',
        marginTop: 20
      },
      textButton: {
        color:'white',
        fontSize: 20,
        fontWeight: 'bold',
      },
});
