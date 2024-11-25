import React, { useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Linking } from 'react-native';
import LoginSuccessfully from '@/app/auth/LoginSuccessfully';
import { storeTokens } from '@/utils/StoreTokens';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { router } from 'expo-router';
import PersonalDetails from '../(tabs)/ProfilePage';

const Callback: React.FC = () => {
  useEffect(() => {
    const handleDeepLink = async () => {
      try {
        const url = await Linking.getInitialURL();
        if (url) {
          const queryParams = url.split('?')[1];
          const params = new URLSearchParams(queryParams);
          const accessToken = params.get('accessToken');
          const refreshToken = params.get('refreshToken');
          if (accessToken && refreshToken) {
            storeTokens('accessToken', accessToken);
            storeTokens('refreshToken', refreshToken);
            router.push('/(tabs)/ProfilePage')
          } else {
            console.log('Access or refresh token missing in URL');
          }
        } else {
          console.log('No URL provided');
        }
      } catch (error) {
        console.error('Error handling deep link:', error);
      }
    };
    handleDeepLink();
    const linkingListener = Linking.addEventListener('url', handleDeepLink);
    return () => {
      linkingListener.remove();
    };
  }, []);

  return (
    <View>
        <PersonalDetails/>
    </View>
  );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
})
export default Callback;

