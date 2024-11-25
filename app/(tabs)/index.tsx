// import { Image, StyleSheet, Platform, View } from 'react-native';

// import { HelloWave } from '@/components/HelloWave';
// import ParallaxScrollView from '@/components/ParallaxScrollView';
// import { ThemedText } from '@/components/ThemedText';
// import { ThemedView } from '@/components/ThemedView';
// import LoginScreen from '@/app/auth/Login';
// import OtpScreen from '@/app/auth/Otp';
// import SignUpScreen from '@/app/auth/SignUp';
// import { useEffect } from 'react';
// import { setupDeepLinking } from '../../utils/deeplinking';


// export default function HomeScreen() {

//   useEffect(() => {
//     const cleanup = setupDeepLinking((accessToken, refreshToken) => {
//       // Handle the received tokens
//       console.log('Received Access Token:', accessToken);
//       console.log('Received Refresh Token:', refreshToken);
//       // Here, you can save tokens, navigate, etc.
//     });

//     return cleanup; // Cleanup listener on unmount
//   }, []);
//   return (
//     <View style={style.container}>

//       <LoginScreen/>
      
//     </View>

//   );
// }
// const style=StyleSheet.create({
//   container:{
//     flex:1
//   }
// })

// import { useRouter } from 'expo-router';
// import { useEffect } from 'react';

// export default function Index() {
//   const router = useRouter();

//   useEffect(() => {
//     router.replace('/auth/Login'); // Redirect to the "wellness" tab
//   }, []);

//   return null;
// }


import React, { useEffect, useState } from 'react';
import { useRouter } from 'expo-router'; // Or use your navigation library

export default function firstTab() {
  const [isReady, setIsReady] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (isReady) {      
      router.replace('/auth/Login'); 
    }
  }, [isReady, router]);

  return <></>;
}

