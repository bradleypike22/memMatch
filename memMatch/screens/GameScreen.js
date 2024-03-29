// GameScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, Button, FlatList } from 'react-native';
import FlipCard from '../components/FlipCard'; // Assuming FlipCard component is as defined previously
import { playSound } from '../utils/sounds';
import { triggerHapticFeedback } from '../utils/HapticFeedback';
import Timer from '../components/Timer';

// Dummy data for illustration
const cardData = Array.from({ length: 10 }, (_, index) => ({
    id: String(index),
    text: `Card ${index + 1}`,
    isFlipped: false,
}));

const GameScreen = () => {
    const [cards, setCards] = useState(cardData);
    const [selectedCards, setSelectedCards] = useState([]);

    const handleCardPress = (id) => {
        const newCards = cards.map(card => {
            if (card.id === id) {
                return { ...card, isFlipped: !card.isFlipped };
            }
            return card;
        });
        setCards(newCards);
        playSound(); // Trigger a sound effect
        triggerHapticFeedback(); // Trigger haptic feedback

        // Implement matching logic here
    };

    return (
        <View style={styles.container}>
            <Timer />
            <FlatList
                data={cards}
                renderItem={({ item }) => (
                    <FlipCard
                        key={item.id}
                        frontComponent={<Text>{item.text}</Text>}
                        backComponent={<Text>Back of {item.text}</Text>}
                        onPress={() => handleCardPress(item.id)}
                    />
                )}
                keyExtractor={(item) => item.id}
                numColumns={3}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
});

export default GameScreen;
