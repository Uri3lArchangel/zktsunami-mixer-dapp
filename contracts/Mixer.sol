// SPDX-License-Identifier: MIT
pragma solidity 0.8.19;

import "./verifier.sol";

contract ZkTunami_Mixer is Verifier{
    mapping(uint256 => uint8) tracking1;
    mapping(uint256 => uint8) tracking2;

   address payable mixer;
    constructor (){
        mixer =  payable (address(this));
    }

    
   function deposit(uint256 amount) external payable  returns (uint8){
       require(amount >0,"amount must be greater than 0");
       require(msg.value == amount,"value not corect");
        return 0;

   }

   function transfer(address payable account,uint256 amount) internal returns (bytes memory) {
     (bool status,bytes memory data) =account.call{value:amount,gas:32000}("");
     require(status);
     return  data;
   }
   function withdraw(address payable [] memory accounts,uint256[] memory amounts,uint256[2] memory xy,Proof calldata proof) external payable  returns (uint8){
      require(tracking1[xy[0]] == 0 || tracking2[xy[1]] == 0,"already withdrawn");
      require(Verifier.verifyTx(proof, xy),"not verified");
      require(accounts.length == amounts.length,"account and amount must match");
      for (uint256 i=0; i<amounts.length; i++)
      {
        transfer(accounts[i], amounts[i]);
      }
      tracking1[xy[0]] = 1;
      tracking2[xy[1]] = 1;
      
    return 0;
   }
}