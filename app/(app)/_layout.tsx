import { Drawer } from 'expo-router/drawer';

export default function Layout() {
  return (
    <Drawer>
      <Drawer.Screen 
        name="index" 
        options={{ title: "Home" }} 
      />
      <Drawer.Screen 
        name="contact" 
        options={{ title: "Contact" }} 
      />
      <Drawer.Screen 
        name="settings" 
        options={{ title: "Settings" }} 
      />
    </Drawer>
  );
}