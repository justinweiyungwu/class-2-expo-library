import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView } from 'react-native';
import { Tooltip, Skeleton, SearchBar, PricingCard, lightColors, CheckBox, Switch} from '@rneui/themed';
import { useState } from 'react';


export default function Home({ navigation }) {
    
    const [open, setOpen] = useState(false);
    const [checked, setChecked] = useState(true);
    const toggleCheckbox = () => setChecked(!checked);
    const toggleSwitch = () => {
        setChecked(!checked);
      };
    const [search, setSearch] = useState("");

    const updateSearch = (search) => {
        setSearch(search);
    };
    



    return (
        <ScrollView>
        <View style={styles.container}>
            <View style={styles.view}>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={updateSearch}
                    value={search}
                />
            </View>
            <StatusBar style="auto" />

            <Tooltip
                visible={open}
                onOpen={() => setOpen(true)}
                onClose={() => setOpen(false)}
                popover={<Text style={{ color: "#fff" }}>Hi There!</Text>}
            >
                <Text>Click Me</Text>
                <View style={styles.row}>
                <CheckBox
                    checked={checked}
                    onPress={toggleCheckbox}
                    // Use ThemeProvider to make change for all checkbox
                    iconType="material-community"
                    checkedIcon="checkbox-marked"
                    uncheckedIcon="checkbox-blank-outline"
                    checkedColor="red"
                />
                  <Switch
      value={checked}
      onValueChange={(value) => setChecked(value)}
    />
                </View>
            </Tooltip>
            <Skeleton width={120} height={40} />
            <Skeleton circle width={40} height={40} />
            <Skeleton width={120} height={40} />
            <PricingCard
                color={lightColors.primary}
                title="A Tester"
                price="Wow"
                info={['1 User', 'Basic Layout', 'All Core Features']}
                button={{ title: ' Learn More', icon: 'more' }}
            />

        </View>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        gap: 10,
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    view: {
        margin: 1,
        width: "50%"
    },
    row: {
        display: "flex",
        flexDirection: "row"
    }
});
