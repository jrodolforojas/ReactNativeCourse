import React, { useState } from 'react'
import { Text, View } from 'react-native'
import { BotonCalc } from '../components/BotonCalc';
import { styles } from '../theme/appTheme';

export const CalculadoraScreen = () => {

    const [numero, setNumero] = useState('0');
    const [numeroAnterior, setNumeroAnterior] = useState('0');

    const limpiar = () => {
        setNumero('0');
    }

    const armarNumero = (numeroTexto: string) => {
        // No aceptar doble punto
        if (numero.includes('.') && numeroTexto === '.') return;

        if (numero.startsWith('0') || numero.startsWith('-0')) {
            // Punto decimal
            if (numeroTexto === '.') {
                setNumero(numero + numeroTexto);
            }
            // Evaluar si es otro cero y hay un punto
            else if (numeroTexto === '0' && numero.includes('.')) {
                setNumero(numero + numeroTexto);
            }
            // Evaluar si es diferente de cero y no tiene un punto
            else if (numeroTexto !== '0' && !numero.includes('.')) {
                setNumero(numeroTexto);
            }
            // Evitar 0000.0
            else if (numeroTexto === '0' && !numero.includes('.')) {
                setNumero(numero);
            }
        }
        else {
            setNumero(numero + numeroTexto);
        }
    }

    const positivoNegativo = () => {
        if (numero.includes('-')) {
            setNumero(numero.replace('-', ''));
        }
        else {
            setNumero('-' + numero);
        }
    }

    return (
        <View style={styles.calculadoraContainer}>
            <Text style={styles.resultadoSmall}>{numeroAnterior}</Text>
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
                <BotonCalc text="del" color="#9B9B9B" action={limpiar} />
                <BotonCalc text="/" color="#FF9427" action={limpiar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc text="7" action={armarNumero} />
                <BotonCalc text="8" action={armarNumero} />
                <BotonCalc text="9" action={armarNumero} />
                <BotonCalc text="x" color="#FF9427" action={limpiar} />
            </View>

            <View style={styles.fila}>
                <BotonCalc text="4" action={armarNumero} />
                <BotonCalc text="5" action={armarNumero} />
                <BotonCalc text="6" action={armarNumero} />
                <BotonCalc text="-" color="#FF9427" action={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="1" action={armarNumero} />
                <BotonCalc text="2" action={armarNumero} />
                <BotonCalc text="3" action={armarNumero} />
                <BotonCalc text="+" color="#FF9427" action={limpiar} />
            </View>
            <View style={styles.fila}>
                <BotonCalc text="0" ancho action={armarNumero} />
                <BotonCalc text="." action={armarNumero} />
                <BotonCalc text="=" color="#FF9427" action={limpiar} />
            </View>
        </View>
    )
}
