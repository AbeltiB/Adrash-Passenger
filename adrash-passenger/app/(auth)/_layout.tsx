import { useEffect } from 'react';
import { Stack } from 'expo-router';
import { QueryClientProvider } from '@tanstack/react-query';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { GestureHandlerRootView } from 'react-native-gesture-handler';

// Init i18n side-effect before any component renders
import '../../src/lib/i18n';
import { queryClient } from '../../src/lib/queryClient';

export default function RootLayout() {
    return (
        <GestureHandlerRootView style={{ flex: 1 }}>
            <SafeAreaProvider>
                <QueryClientProvider client={queryClient}>
                    <StatusBar style="auto" />
                    <Stack screenOptions={{ headerShown: false }}>
                        <Stack.Screen name="(auth)" />
                        <Stack.Screen name="(tabs)" />
                        <Stack.Screen name="route/[id]" options={{ presentation: 'card' }} />
                        <Stack.Screen name="booking/pickup" />
                        <Stack.Screen name="booking/seats" />
                        <Stack.Screen name="booking/passengers" />
                        <Stack.Screen name="booking/summary" />
                        <Stack.Screen name="booking/payment" />
                        <Stack.Screen name="booking/waiting" />
                        <Stack.Screen name="booking/confirmation" />
                        <Stack.Screen name="trip/[id]" />
                        <Stack.Screen name="trip/[id]/tracking" options={{ presentation: 'fullScreenModal' }} />
                        <Stack.Screen name="agreement" />
                    </Stack>
                </QueryClientProvider>
            </SafeAreaProvider>
        </GestureHandlerRootView>
    );
}