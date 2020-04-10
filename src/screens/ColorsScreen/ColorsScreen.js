import React, { useContext } from 'react';
import { StyleSheet, Text, View, SafeAreaView } from 'react-native';
import PlusMinusButtons from '../../components/PlusMinusButtons/PlusMinusButtons';
import { Context as ColorsContext } from '../../contexts/ColorsContext';

const ColorsScreen = (props) => {
    const { state, affectRed, affectGreen, affectBlue } = useContext(ColorsContext);
    return (
        <SafeAreaView style={styles.container}>
            <Text>Colors Screen</Text>
            <PlusMinusButtons titre="Rouge" colorHandler={affectRed} />
            <PlusMinusButtons titre="Vert" colorHandler={affectGreen} />
            <PlusMinusButtons titre="Bleu" colorHandler={affectBlue} />
            <View
                style={{
                    ...styles.myDiv,
                    backgroundColor: `rgb(${state.red},${state.green},${state.blue})`,

                    width: '40%',
                    height: 90
                }}
            />
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,

        alignItems: 'center',
        marginTop: 28,
        backgroundColor: '#fff'
    },
    buttonsBlock: {
        padding: 10,
        flex: 1,
        flexDirection: 'column'
    },
    myDiv: {
        height: 60,
        width: 60,
        borderWidth: 1,
        backgroundColor: 'grey',
        margin: 15
    },
    buttonStyle: {
        height: 20,
        margin: 10,
        padding: 5
    }
});

export default ColorsScreen;