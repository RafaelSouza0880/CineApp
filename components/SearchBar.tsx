type SearchBarProps = {
    value: string;
    onChange: (text: string) => void;
    onClear?: () => void;
}

import { StyleSheet, View } from "react-native";

export default function SearchBar({ value, onChange, onClear }: SearchBarProps) {
    return (
        <View>
            
        </View>
    )
}

const styles = StyleSheet.create({


})