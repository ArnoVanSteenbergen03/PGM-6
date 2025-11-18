import { View, Text, FlatList, TextInput } from 'react-native';
import { useState } from 'react';


function Ex1() {
    const arr = ["apple", "banana", "orange", "grape", "strawberry", "blueberry", "watermelon", "mango", "pineapple", "peach"];

    const [value, setValue] = useState("");

    const filteredItems = arr.filter(item => item.toLowerCase().includes(value.toLowerCase()));
    
    return (
    <View style={{margin: 50, flex: 1, backgroundColor: '#fff' }} >
        <Text style={{fontWeight: 'bold'}}>Ex 1:</Text>
        <TextInput style={{height: 40, borderColor: 'gray', borderWidth: 1, marginBottom: 20}} value={value} onChangeText={(text) => setValue(text)}/>
        <FlatList style={{paddingBottom: 100}} data={filteredItems} renderItem={({item}) => <Text>{item}</Text>} keyExtractor={(item, index) => index.toString()} />
    </View>
    );
};

export { Ex1 };