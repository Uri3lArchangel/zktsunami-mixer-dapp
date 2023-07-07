import "@rainbow-me/rainbowkit/styles.css";
import { connectorsForWallets, getDefaultWallets, RainbowKitProvider, Theme } from "@rainbow-me/rainbowkit";
import { configureChains, createConfig, WagmiConfig } from "wagmi";
import { mainnet } from "wagmi/chains";
import { infuraProvider } from "wagmi/providers/infura";
import { publicProvider } from "wagmi/providers/public";

import {coinbaseWallet, injectedWallet, metaMaskWallet, trustWallet, walletConnectWallet} from '@rainbow-me/rainbowkit/wallets'

export const { chains, publicClient } = configureChains(
  [mainnet],
  [infuraProvider({apiKey:'874d9ca546c443be90882161ff27c213'}), publicProvider()]
);

const  connectors  = connectorsForWallets([
  {
    groupName:'Recommended',
    wallets:[
      injectedWallet({chains}),
      walletConnectWallet({projectId:"072dda5dd0ec7e265fcc7345db17e758",chains}),
      trustWallet({chains,projectId:"072dda5dd0ec7e265fcc7345db17e758"}),
      coinbaseWallet({appName:"ZK-Tsunami Mixer",chains}),
      metaMaskWallet({projectId:"072dda5dd0ec7e265fcc7345db17e758",chains}),
    ]
}]);
export const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

export const myCustomButtonTheme:Theme={
  blurs: {
    modalOverlay: 'high',
    
  },
  colors: {
    accentColor: '#566778',
    accentColorForeground: '#ffffff',
    actionButtonBorder: '...',
    actionButtonBorderMobile: '...',
    actionButtonSecondaryBackground: '#000000',
    closeButton: '#ffffff',
    closeButtonBackground: '#000000',
    connectButtonBackground: '...',
    connectButtonBackgroundError: '#ff0000',
    connectButtonInnerBackground: '#78899a',
    connectButtonText: '#000000',
    connectButtonTextError: '#ff0000',
    connectionIndicator: '#0f0f0f',
    downloadBottomCardBackground: '#ffffff',
    downloadTopCardBackground: '#00aa00',
    error: '#ff0000',
    generalBorder: '...',
    generalBorderDim: '...',
    menuItemBackground: '#000000',
    modalBackdrop: '#112233ee',
    modalBackground: '#000000',
    modalBorder: '#00cccc',
    modalText: '#ffffff',
    modalTextDim: '#020202',
    modalTextSecondary: '#ffffff',
    profileAction: '#121212',
    profileActionHover: '#ffffff22',
    profileForeground: '#000000',
    selectedOptionBorder: '...',
    standby: '...',
  },
  fonts: {
    body: '...',
  },
  radii: {
    actionButton: '0',
    connectButton: '0',
    menuButton: '0',
    modal: '0',
    modalMobile: '0',
  
  },
  shadows: {
    connectButton: '...',
    dialog: '...',
    profileDetailsAction: '...',
    selectedOption: '...',
    selectedWallet: '...',
    walletLogo: '....',
  },
}

