// FlipCard.js (Assuming FlipCard component)
import React from 'react';
import { View, TouchableOpacity } from 'react-native';

const FlipCard = ({ frontComponent, backComponent, onPress }) => {
  const renderSide = (isFront) => {
    return isFront ? frontComponent : backComponent;
  };

  return (
    <TouchableOpacity onPress={onPress}>
      <View>{renderSide()}</View>
    </TouchableOpacity>
  );
};

export default FlipCard;