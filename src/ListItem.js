import React from "react";
import { View, Text, StyleSheet, TouchableHighlight, Image,  } from 'react-native';

const ListItem = ({ data }) => {
    
    const click = (id) => {
        alert(`Id da conversa: ${id}`)
    };

    return (
        <TouchableHighlight onPress={() => click(data.id)} underlayColor="#ddd">
            <View style={styles.item}>
                <Image source={{ uri: data.img }} style={styles.image}/>
                <View style={styles.info}>
                    <Text numberOfLines={1} style={styles.name}>{data.name}</Text>
                    <Text numberOfLines={1} style={styles.msg}>{data.msg}</Text>
                </View>
            </View>
        </TouchableHighlight>
    )
};

const styles = StyleSheet.create({
    item: {
        height: 60,
        marginLeft: 10,
        marginRight: 10,
        borderBottomWidth: 1,
        borderColor: '#CCCCCC',
        flex: 1,
        flexDirection: 'row'
    },
    image: {
        width: 40,
        height: 40,
        marginTop: 10,
        borderRadius: 20
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'center',
        marginLeft: 10
    },
    name: {
        fontSize: 15,
        fontWeight: 'bold'
    },
    msg: {
        color: 'gray'
    }
});

export default ListItem;