const ethers = require('ethers');
const provider = new ethers.providers.Web3Provider(window.ethereum);

const button = document.getElementById('runaway-button');

// myScamNFTButton
button.addEventListener('mouseover', () => {
button.style.position = 'absolute';
button.style.top = Math.random() * window.innerHeight + 'px';
button.style.left = Math.random() * window.innerWidth + 'px';
});

// HW content
document.getElementById("addressbutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {
        console.log(addresses[0]);
        document.getElementById("address").innerHTML = addresses[0];
    })

})

document.getElementById("balancebutton").addEventListener("click", function () {
    provider.send("eth_requestAccounts", []).then(addresses => {

        provider.getBalance(addresses[0]).then(myBalance => {
            console.log(ethers.utils.formatEther(myBalance));
            document.getElementById("balance").innerHTML = ethers.utils.formatEther(myBalance);
        })
    })
})