const { ethers } = require("ethers")

//npm run build
mybutton.addEventListener("click", function() {
    const provider = new ethers.providers.Web3Provider(window.ethereum);
    provider.send("eth_requestAccounts", []) .then(addresses => {

    console.log(addresses);
    const address = addresses[0];
    console.log(address);

    provider.getBalance(address).then(balance  => {

        console.log(balance.toString());
    })
})
});

