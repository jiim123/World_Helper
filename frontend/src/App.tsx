import { useEffect } from 'react';
import { MiniKit } from '@worldcoin/minikit-js';
import ChatInterface from '@/@components/ChatInterface';

export default function App() {
  useEffect(() => {
    // Initialize MiniKit
    MiniKit.install();
    console.log('MiniKit installed:', MiniKit.isInstalled());
  }, []);

  return (
    <ChatInterface />
  );
}