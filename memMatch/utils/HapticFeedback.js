// utils/HapticFeedback.js
import * as Haptics from 'expo-haptics';

export const triggerHapticFeedback = () => {
    Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Medium);
};