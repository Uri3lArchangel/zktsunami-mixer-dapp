import Web3 from "web3";
import { message } from "antd";
import { ethers } from "ethers";

let web3: Web3;

const initialize = async (address: string) => {
  const provider = window.ethereum;
  web3 = new Web3(provider);
}