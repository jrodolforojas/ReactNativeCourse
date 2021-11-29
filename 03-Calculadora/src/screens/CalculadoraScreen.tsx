import React, { useRef, useState } from 'react';
import { Text, View } from 'react-native';
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';
import { useCalculadora } from '../hooks/useCalculadora';



export const CalculadoraScreen = () => {

    const {
        numero,
        numeroAnterior,
        armarNumero,
        limpiar,
        positivoNegativo,
        borrarDel,
        botonDividir,
        botonMultiplicar,
        botonRestar,
        botonSumar,
        calcular,
    } = useCalculadora();

    return (
        <View style={styles.calculadoraContainer}>
            {
                (numeroAnterior !== '0') && (
                    <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
                )
            }
            <Text
                style={styles.resultado}
                numberOfLines={1}
                adjustsFontSizeToFit>
                {numero}
            </Text>

            {/* Fila de botones */}
            <View style={styles.fila}>
                <BotonCalc text="C" color="#9B9B9B" action={limpiar} />
                <BotonCalc text="+/-" color="#9B9B9B" action={positivoNegativo} />
                <BotonCalc text="del" color="#9B9B9B" action={borrarDel} />
                <BotonCalc text="/" color="#FF9427" action={botonDividir} />
            </View>

            <View style={styles.fila}>
                <BotonCalc text="7" action={armarNumero} />
                <BotonCalc text="8" action={armarNumero} />
                <BotonCalc text="9" action={armarNumero} />
                <BotonCalc text="x" color="#FF9427" action={botonMultiplicar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc text="4" action={armarNumero} />
                <BotonCalc text="5" action={armarNumero} />
                <BotonCalc text="6" action={armarNumero} />
                <BotonCalc text="-" color="#FF9427" action={botonRestar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" action={armarNumero} />
                <BotonCalc text="2" action={armarNumero} />
                <BotonCalc text="3" action={armarNumero} />
                <BotonCalc text="+" color="#FF9427" action={botonSumar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho action={armarNumero} />
                <BotonCalc text="." action={armarNumero} />
                <BotonCalc text="=" color="#FF9427" action={calcular} />
            </View>
        </View>
    )
}
