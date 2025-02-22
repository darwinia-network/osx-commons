import {SupportedNetworks} from '../networks';
import * as arbitrum from './json/arbitrum.json';
import * as arbitrumSepolia from './json/arbitrumSepolia.json';
import * as baseGoerli from './json/baseGoerli.json';
import * as baseMainnet from './json/baseMainnet.json';
import * as baseSepolia from './json/baseSepolia.json';
import * as crab from './json/crab.json';
import * as darwinia from './json/darwinia.json';
import * as goerli from './json/goerli.json';
import * as koi from './json/koi.json';
import * as mainnet from './json/mainnet.json';
import * as mumbai from './json/mumbai.json';
import * as polygon from './json/polygon.json';
import * as sepolia from './json/sepolia.json';
import * as zksyncMainnet from './json/zksyncMainnet.json';
import * as zksyncSepolia from './json/zksyncSepolia.json';
import {NetworkDeployment, SupportedVersions} from './types';

export {
  mainnet,
  goerli,
  sepolia,
  polygon,
  mumbai,
  baseMainnet,
  baseGoerli,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  zksyncSepolia,
  zksyncMainnet,
  koi,
  crab,
  darwinia,
};

export const contracts: {
  [network in SupportedNetworks]: {
    [version in SupportedVersions]?: NetworkDeployment;
  };
} = {
  mainnet,
  goerli,
  sepolia,
  polygon,
  mumbai,
  baseMainnet,
  baseGoerli,
  baseSepolia,
  arbitrum,
  arbitrumSepolia,
  zksyncSepolia,
  zksyncMainnet,
  koi,
  crab,
  darwinia,
  local: {
    [SupportedVersions.V1_0_0]: {} as NetworkDeployment,
    [SupportedVersions.V1_3_0]: {} as NetworkDeployment,
  },
};
