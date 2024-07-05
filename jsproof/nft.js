let NFTs = [];

function mintNFT(name, color, shape, material, size) {
    let nft = {
        name,
        color,
        shape,
        material,
        size
    }
    NFTs.push(nft);
}

function listNFTs() {
    for (let i = 0; i < NFTs.length; i++) {
        let nft = NFTs[i];
        console.log(
            "Name: ", nft.name,
            "Color: ", nft.color,
            "Shape: ", nft.shape,
            "Material: ", nft.material,
            "Size: ", nft.size
        );
    }
}

function getTotalSupply() {
    console.log("Number of NFTs minted: ", NFTs.length);
}

const nftData = [
    { name: "Sunshine", color: "Yellow", shape: "Round", material: "Plastic", size: "Small" },
    { name: "Rainbow", color: "Multicolor", shape: "Arched", material: "Fabric", size: "Medium" },
    { name: "Mountain", color: "Gray", shape: "Triangular", material: "Stone", size: "Large" },
    { name: "Ocean", color: "Blue", shape: "Wavy", material: "Water", size: "Huge" }
];

for (let i = 0; i < nftData.length; i++) {
    let { name, color, shape, material, size } = nftData[i];
    mintNFT(name, color, shape, material, size);
}

listNFTs();

getTotalSupply();