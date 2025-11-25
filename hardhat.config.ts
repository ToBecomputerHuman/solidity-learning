import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "@nomiclabs/hardhat-vyper";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
  vyper: {
    version: "0.3.0",
  },
  networks: {
    kairos: {
      url: "https://public-en-kairos.node.kaia.io",
      accounts: ["0x8aae162b1161f30b043a901cfe319ac8cf1386fb8320c249ff4fe312e124b35d"]
    }, //0x24f05DF9d919A2B8BafDC2f72Fc70Ad9B043cd77 account
  },
  etherscan: {
      apiKey: {
        kairos: "unnecessary",
      },
      customChains: [
        {
          network: "kairos",
          chainId: 1001,
          urls: {
            apiURL: "https://kairos-api.kaiascan.io/hardhat-verify",
            browserURL: "https://kairos.kaiascan.io",
          }
        },
      ]
},
};

export default config;

// MyTokenDeploy#MyToken - 0x8979a6195E242712040a3803212b520c0B36c834
// MyTokenDeploy#TinyBank - 0x0e40Ef566508568F28E8Ec950C41D4644bA39523