// https://eth-rinkeby.alchemyapi.io/v2/IkdALguRXxqZiNuLY5bvLaTY_LzKZsbs

require('@nomiclabs/hardhat-waffle');
import key from './key'
module.exports = {
  solidity: '0.8.4',
  networks: {
    rinkeby: {
      url: 'https://eth-rinkeby.alchemyapi.io/v2/IkdALguRXxqZiNuLY5bvLaTY_LzKZsbs',
      accounts: [ key ]
    }
  }
}