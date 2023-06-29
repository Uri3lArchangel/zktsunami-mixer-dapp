// SPDX-License-Identifier: MIT
pragma solidity 0.8.20
;

import "./verifier.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";


contract ZkTunami_Mixer is Verifier,ReentrancyGuard{
    mapping(uint256 => uint8) tracking1;
    mapping(uint256 => uint8) tracking2;
    uint256 public totalAmount;

   address payable public mixer;
    constructor (){
        mixer =  payable (address(this));
    }

    
   function depositBase(uint256 amount) public payable  returns (uint8){
     totalAmount += amount;
        return 0;

   }

   function transfer(address payable account,uint256 amount) internal returns (bytes memory) {
     (bool status,bytes memory data) =account.call{value:amount,gas:32000}("");
     require(status);
     return  data;
   }
   function withdrawBase(address payable [] memory accounts,uint256[] memory amounts,uint256[2] memory xy,Proof calldata proof) public payable nonReentrant() returns (uint8){
      require(tracking1[xy[0]] == 0 || tracking2[xy[1]] == 0,"already withdrawn");
      require(Verifier.verifyTx(proof, xy),"not verified");
      require(accounts.length == amounts.length,"account and amount must match");
      uint256 total=0;
      for (uint256 i=0; i<amounts.length; i++)
      {
        transfer(accounts[i], amounts[i]);
        total+=amounts[i];
      }

      tracking1[xy[0]] = 1;
      tracking2[xy[1]] = 1;
      totalAmount -= total;
    return 0;
   }
}