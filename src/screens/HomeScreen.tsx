import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';


export const HomeScreen = () => {
    const productos = [
        { name: 'mouse', price: 50 },
        { name: 'laptop', price: 1500 },
        { name: 'teclado', price: 80 },
        { name: 'monitor', price: 120 },
    ];
    const total = productos.reduce((sum, item) => sum + item.price, 0);

    return (
        <View style={styles.container}>
            <FlatList
                data={productos}
                keyExtractor={(item) => item.name}
                renderItem={({ item }) => (
                    <View style={styles.item}>
                        <Text>{item.name}</Text>
                        <Text>{item.price}</Text>
                    </View>
                )}
            />
            <Text style={styles.total}>Total a pagar: {total}</Text>
        </View>
    );
};

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20 },
    item: { flexDirection: 'row', justifyContent: 'space-between', padding: 10, borderBottomWidth: 1 },
    total: { fontSize: 20, fontWeight: 'bold', textAlign: 'center', marginTop: 20 }
});

export default HomeScreen;
