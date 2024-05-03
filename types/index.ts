import {SVGProps} from "react";

export type IconSvgProps = SVGProps<SVGSVGElement> & {
  size?: number;
};

export interface RoughData {
  labels: string[];
  values: number[];
}

export interface ApiPool {
  provider: Provider;
  tokens: TokenInfo;
  category: string;
  tvl: number;
  apy: number;
  risk: string;
  stakedAmount: StakedAmount;
}

interface Provider {
  name: string;
  logo: string;
  chain: Chain;
}

interface Chain {
  name: string;
  logo: string;
}

interface TokenInfo {
  name: string;
  logos: string[];
}

interface StakedAmount {
  token: Token;
  amountReadable: number;
}

interface Token {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  abi: AbiItem[];
  assets?: Asset[];
}

interface AbiItem {
  type: string;
  name?: string;
  inputs?: InputOutput[];
  outputs?: InputOutput[];
  stateMutability: string;
  anonymous?: boolean;
  indexed?: boolean;
  components?: Component[];
}

interface InputOutput {
  name: string;
  type: string;
  internalType: string;
  indexed?: boolean;
}

interface Component {
  name: string;
  type: string;
  internalType: string;
}

interface Asset {
  chainId: number;
  address: string;
  name: string;
  symbol: string;
  decimals: number;
  logoURI: string;
  abi?: AbiItem[];
}
