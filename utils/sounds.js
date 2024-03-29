// utils/sounds.js
import { Audio } from 'expo-av';

export const playSound = async (soundFile) => {
    const sound = new Audio.Sound();
    try {
        await sound.loadAsync(soundFile);
        await sound.playAsync();
    } catch (error) {
        console.error("Couldn't play sound", error);
    }
};