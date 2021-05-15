// the number of digits in input string in less than 12
// O(1) Time | O(1) Space
// at most 2^32 valid ip address  
function validIPAddresses(string) {
    const IPAddressesFound = [];

    for (let i = 1; i < Math.min(string.length, 4); i++) {
        const validIPAddressParts = ["", "", "", ""];
        validIPAddressParts[0] = string.slice(0, i);

        if (!isValid(validIPAddressParts[0])) continue;

        for (let j = i; j < i + Math.min(string.length - i, 4); j++) {
            validIPAddressParts[1] = string.slice(i ,j);

            if (!isValid(validIPAddressParts[1])) continue;

            for (let k = j; k < j + Math.min(string.length - j, 4); k++) {
                validIPAddressParts[2] = string.slice(j, k);
                validIPAddressParts[3] = string.slice(k);

                if (isValid(validIPAddressParts[2]) && isValid(validIPAddressParts[3])) {
                    IPAddressesFound.push(validIPAddressParts.join("."));
                }
                
            }
        }
    }
    
    return IPAddressesFound;
}

function isValid(IPAddress) {
    const IPAddressAsInt = parseInt(IPAddress);
    if (IPAddressAsInt > 255) return false;

    // check for 0 leading
    return IPAddress.length === IPAddressAsInt.toString().length;
}


console.log(validIPAddresses("1921680")); 
console.log(validIPAddresses("1072310"));