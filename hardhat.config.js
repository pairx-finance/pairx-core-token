require("@nomiclabs/hardhat-waffle");

// This is a sample Hardhat task. To learn how to create your own go to
// https://hardhat.org/guides/create-task.html
task("accounts", "Prints the list of accounts", async () => {
  const accounts = await ethers.getSigners();

  for (const account of accounts) {
    console.log(account.address);
  }
});

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.6.10",
  defaultNetwork : 'localhost' ,
  networks: {
    localhost: {
      live: true,
      saveDeployments: true,
      tags: ["local"] ,
    },
    // main: {
    //   live: true ,
    //   saveDeployments: true,
    //   url : 'https://mainnet.infura.io/v3/349a8025dc474959822b544539e4d7d9'  ,
    //   tags: ["main"] ,
    //   // accounts : ['']
    // },
    ropsten : {
      live: true ,
      url : 'https://ropsten.infura.io/v3/349a8025dc474959822b544539e4d7d9'  ,
      accounts : ["0x8fb4808edadbc45d9c5426f7684fe0ad7ea37a9e97da72cd8f1c946eb3102df4"],
      saveDeployments: true,
      tags: ["ropsten"]
    } ,
    kovan : {
      live : true ,
      url : 'https://kovan.infura.io/v3/349a8025dc474959822b544539e4d7d9' ,
      accounts : ["0x8fb4808edadbc45d9c5426f7684fe0ad7ea37a9e97da72cd8f1c946eb3102df4"],
      saveDeployments: true,
      tags: ["kovan"]
    } ,
    genache : {
      live : true ,
      url : 'http://127.0.0.1:7545' ,
      accounts : ["0x23ead7c0940fd30bf79c7233fe4f14f384178384611ed90b99d85e7ba0458c85"],
      saveDeployments: true,
      tags: ["genache"]
    }
  }
};

