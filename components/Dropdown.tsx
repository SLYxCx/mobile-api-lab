import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import AntDesign from '@expo/vector-icons/AntDesign';


const data = [
    { label: 'January', value: '1' },
    { label: 'February', value: '2' },
    { label: 'March', value: '3' },
    { label: 'April', value: '4' },
    { label: 'May', value: '5' },
    { label: 'June', value: '6' },
    { label: 'July', value: '7' },
    { label: 'August', value: '8' },
    { label: 'September', value: '9' },
    { label: 'October', value: '10' },
    { label: 'November', value: '11' },
    { label: 'December', value: '12' },
];

    const DropdownComponent = () => {
    const [value, setValue] = useState(null);
    const [isFocus, setIsFocus] = useState(false);

    const renderLabel = () => {
        if (value || isFocus) {
            return (
                <Text style={[isFocus && { color: 'blue' }]}>
                    Dropdown label
                </Text>
            );
    }
    return null;
    };

    return (
    <View style={styles.container}>
        {renderLabel()}
        <Dropdown
        style={[ isFocus && { borderColor: 'blue' }]}
        data={data}
        search
        maxHeight={300}
        labelField="label"
        valueField="value"
        placeholder={!isFocus ? 'Select item' : '...'}
        searchPlaceholder="Search..."
        value={value}
        onFocus={() => setIsFocus(true)}
        onBlur={() => setIsFocus(false)}
        onChange={item => {
            setValue(item.value);
            setIsFocus(false);
        }}
        renderLeftIcon={() => (
            <AntDesign
            color={isFocus ? 'blue' : 'black'}
            name="Safety"
            size={20}
            />
        )}
        />
    </View>
    );
};

export default DropdownComponent;

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: 16,
        
    },
    //dropdown: {
    //    height: 50,
    //    borderColor: 'gray',
    //    borderWidth: 0.5,
    //    borderRadius: 8,
    //    paddingHorizontal: 8,
    //},
    //icon: {
    //    marginRight: 5,
    //},
    // label: {
    //     position: 'absolute',
    //     backgroundColor: 'white',
    //     left: 22,
    //     top: 8,
    //     zIndex: 999,
    //     paddingHorizontal: 8,
    //     fontSize: 14,
    //},
    //placeholderStyle: {
    //    fontSize: 16,
    //},
    //selectedTextStyle: {
    //    fontSize: 16,
    //},
    //iconStyle: {
    //    width: 20,
    //    height: 20,
    //},
    //inputSearchStyle: {
    //    height: 40,
    //    fontSize: 16,
    //},
});
