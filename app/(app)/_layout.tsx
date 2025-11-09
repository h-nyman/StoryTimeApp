import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer
    screenOptions={{
        headerStyle: {
          backgroundColor: "#3D5A80",
        },
        headerTintColor: "#FFFFFF",
        drawerActiveTintColor: "#3D5A80",
        drawerInactiveTintColor: "#293241",
        drawerLabelStyle: {
          fontSize: 16,
        },
      }}
    >
      <Drawer.Screen 
        name="index" 
        options={{ title: "Story Time" }} 
      />
      <Drawer.Screen 
        name="contact" 
        options={{ title: "About & Contact" }} 
      />
      <Drawer.Screen 
        name="settings" 
        options={{ title: "Settings" }} 
      />
    </Drawer>
  );
}