import React from 'react';
import { StyleSheet, Text, useWindowDimensions } from 'react-native';
import { SECONDARY_COLOR } from '../commons/constants';

interface Props {
    title: string;
}

export const TitleComponent = ({ title }: Props) => {
    const { height } = useWindowDimensions();
    return (
        <Text style={{
            ...styles.title,
            height: height * 0.12
        }}>
            {title}
        </Text>
    )
}

const styles = StyleSheet.create({
    title: {
        color: SECONDARY_COLOR,
        fontSize: 25,
        fontWeight: 'bold',
        paddingHorizontal: 30,
        paddingVertical: 30
    }
})