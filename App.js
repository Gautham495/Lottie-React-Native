import React, {useEffect, useRef} from 'react';
import {SafeAreaView, Text, View, Animated} from 'react-native';
import LottieView from 'lottie-react-native';

const App = () => {
  const progress = useRef(new Animated.Value(0)).current;

  const handleLikeAnimation = () => {
    Animated.timing(progress, {
      toValue: 1,
      duration: 3000,
      useNativeDriver: true,
    }).start();
  };
  useEffect(() => {
    handleLikeAnimation();
  }, []);

  return (
    <SafeAreaView>
      <Text>Lottie View Animation</Text>
      <View style={{height: 400, width: 400}}>
        <LottieView
          progress={progress}
          source={require('./lottie.json')}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;
