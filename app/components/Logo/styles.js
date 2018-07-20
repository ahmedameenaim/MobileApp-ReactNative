import EStyleSheet from 'react-native-extended-stylesheet';
import {Dimensions} from 'react-native';

const imageWidth = Dimensions.get('window').width / 2 ;


export default EStyleSheet.create({
    
    $largeContainerSize: imageWidth,
    $largeImageSize: imageWidth / 2 ,
    $smallContainerSize: imageWidth / 2 ,
    $smallImageSize: imageWidth / 4 ,
    
    container: {
        alignItems: 'center',

    },
    containerImage: {
        alignItems: 'center',
        justifyContent: 'center',
        width : 'largeContainerSize',
        height: 'largeImageSize',
    },
    Image: {
        width: imageWidth / 2 ,
    },
    text: {
        fontSize: 28,
        fontWeight: '600',
        letterSpacing: -0.5,
        marginTop: 15,
        color: '$white',
    },
    
});