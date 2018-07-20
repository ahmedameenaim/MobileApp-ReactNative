import EStyleSheet from 'react-native-extended-stylesheet';

export default EStyleSheet.create({

    container: {
        alignItems : 'center',

    },

    wrapper: {
        flexDirection: 'row',
        alignItems: 'center',

    },

    text: {
        color: '$white',
        fontSize: 14,
        fontWeight: '300',
        paddingVertical: 20,

    },

    icon: {
        width: 19,
        marginRight: 11,

    },
});