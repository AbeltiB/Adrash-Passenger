import { Tabs, Redirect } from 'expo-router';
import { useTranslation } from 'react-i18next';
import { useAuthStore } from '../../src/features/auth/store/authStore';
import { Colors } from '../../src/constants';

export default function TabsLayout() {
    const { isAuthenticated } = useAuthStore();
    const { t } = useTranslation();

    if (!isAuthenticated) return <Redirect href="/(auth)/phone" />;

    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.brand.primary,
                tabBarInactiveTintColor: Colors.neutral.gray400,
                tabBarStyle: {
                    backgroundColor: Colors.background.primary,
                    borderTopColor: Colors.border.light,
                },
            }}
        >
            <Tabs.Screen
                name="index"
                options={{ title: t('home.search_placeholder', 'Home') }}
            />
            <Tabs.Screen
                name="my-trips"
                options={{ title: t('trips.title') }}
            />
            <Tabs.Screen
                name="rewards"
                options={{ title: t('rewards.title') }}
            />
            <Tabs.Screen
                name="profile"
                options={{ title: t('profile.title') }}
            />
        </Tabs>
    );
}