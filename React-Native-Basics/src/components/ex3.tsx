
import { useState } from 'react';
import { View, Text, Button } from 'react-native';

function Ex3() {
    const [number, setNumber] = useState(5);
    const handleUp = () => {
        setNumber(number + 1);
    }
    const handleDown = () => {
        if (number > 0){
            setNumber(number - 1);
        }
        else {
            setNumber(0);
        }
        
    }
  return (
    <View style={{ flex: 5, backgroundColor: '#fff', marginTop:50 }} >
        <Text style={{fontWeight: 'bold'}}>Ex 3:</Text>
        <Text>count: {number}</Text>
        <Button title="+" onPress={handleUp} />
        <Button title="-" onPress={handleDown} />
        {number >= 10 && <Text>You made it to 10!!</Text>}
    </View>
  );
}

export { Ex3 };