import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import { Platform } from 'react-native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

const FONT_HREF =
  'https://fonts.googleapis.com/css2?family=Noto+Sans+Telugu:wght@400;600;700&family=Noto+Sans:wght@400;600;700&family=Poppins:wght@600;700&display=swap';

export default function RootLayout() {
  useEffect(() => {
    if (Platform.OS !== 'web' || typeof document === 'undefined') return;
    if (!document.getElementById('rytuvo-fonts')) {
      const link = document.createElement('link');
      link.id = 'rytuvo-fonts';
      link.rel = 'stylesheet';
      link.href = FONT_HREF;
      document.head.appendChild(link);
    }
    document.body.style.margin = '0';
    document.body.style.background = '#E7E1D6';
    document.body.style.color = '#14241B';
    document.body.style.fontFamily = '"Noto Sans", "Noto Sans Telugu", sans-serif';
  }, []);

  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style="dark" />
      <Stack screenOptions={{ headerShown: false }} />
    </GestureHandlerRootView>
  );
}
