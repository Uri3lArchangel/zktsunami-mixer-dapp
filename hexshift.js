function combineParts(parts) {
    // Ensure that the input array contains exactly 8 parts
    if (parts.length !== 8) {
      throw new Error("Input array must contain exactly 8 parts");
    }
  
    // Concatenate the parts into a single string
    var combinedHex = "";
    for (var i = 0; i < parts.length; i++) {
      // Convert each part to a string and pad with leading zeros if necessary
      var partHex = parts[i].toString(16).padStart(8, "0");
      combinedHex += partHex;
    }
  
    return combinedHex;
  }
  
  // Example usage
  var parts = [
    0x12345678,
    0x9abcdef0,
    0xdeadbeef,
    0xabcdef12,
    0x34567890,
    0xfedcba98,
    0x76543210,
    0x98765432
  ];
  
  var combinedHex = combineParts(parts);
  console.log("Combined Hex: " + combinedHex);
  