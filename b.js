// // import Wallet from 'ethereumjs-wallet';

// // export function generateAddressFromSecret(secret) {
// //   const wallet = Wallet.default.fromPrivateKey(Buffer.from(secret, 'hex'));
// //   const privateKey = wallet.getPrivateKeyString();
// //   const address = wallet.getAddressString();

// //   return {
// //     privateKey,
// //     address,
// //   };
// // }

// const Wallet = require('ethereumjs-wallet');
// const ethers = require('ethers')

//  function generateAddressFromSecret(secret) {
//   const wallet = Wallet.default.fromPrivateKey(Buffer.from(secret, 'hex'));
//   const privateKey = wallet.getPrivateKeyString();
//   const address = wallet.getAddressString();
// console.log(address)
//   return address

// }

// const generateDecoysAddresses = ()=>{
//   const wallet = ethers.Wallet.createRandom()
//   return (wallet.address)
// }

// const generateAllAddresses=(secret)=>{
//   const rand = (Math.random()*10).toFixed(0)
//   const addresses=[]
//   for(let i=0;i<10;i++){
//     if(i != rand){
//    addresses.push( generateDecoysAddresses())
//     }else{
//       addresses.push( generateAddressFromSecret(secret))

//     }
//   }
//   console.log(addresses)
//   return addresses
// }
// generateAllAddresses('d3f7aef9d3d2e09558e3dc04db0386849d0fc1c00d4a717ff859e8a559427c67')
// [
//   [
//     "0x2ec088f65c820b4428881cf859bcf587a45b88a2c247930d1391c382194ab061",
//     "0x273f14d79c48f89e8e8e84e8befa928c0fde3d90994c0c78d54163d04fb533c9"
//   ],
//   [
//     [
//       "0x1ffe82ba262a82489e9cd9341ee763ed436377807dfaa4e0bdb7e69cc8065f87",
//       "0x25fb65d1a0a8b5c14cd7f7ed6090d9ddfd4639450617d460aed39114bde9db73"
//     ],
//     [
//       "0x2091435a18f43eb5b21db76f0d1f775d17e080746189dc67f370f03658006a98",
//       "0x03ecdd8afe3b4e31f7edff58f8d1a0d9f81777ca608575e1940bf8e613209d3b"
//     ]
//   ],
//   [
//     "0x117371a08ad905505c69e3867af1ab24cb68ac80980d26712838275c3d2ae75e",
//     "0x08af658ce72e801280ffaf8da377083d74d6953d196908d6646241c45efded26"
//   ]
// ]
