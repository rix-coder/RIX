/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.

let numberOfNfts = 0;

function mintNFT(BrandName, TypeOfShoe, ClassOfShoe, Size, Color) {

let newNft = {
    BrandName: BrandName,
    TypeOfShoe: TypeOfShoe,
    ClassOfShoe: ClassOfShoe,
    Size: Size,
    Color: Color
};

nfts.push(newNft);

numberOfNfts++;

return newNft;
}


function listNFTs() {
    for (let i = 0; i < nfts.length; i++)
    {
    console.log("Brand Name: " + nfts[i].BrandName);
    console.log("Type of Shoes: " + nfts[i].TypeOfShoe);
    console.log("Class of Shoes: " + nfts[i].ClassOfShoe);
    console.log("Size: " + nfts[i].Size);
    console.log("Color: " + nfts[i].Color);
    console.log("\n")
    }
}

function getTotalSupply () {
    return numberOfNfts;
}

let nfts = [];


let myNFT1 = mintNFT("Adidas","Running Shoes", "Class A", 41, "Red");
let myNFT2 = mintNFT("Jordan","Basketball Shoes", "Class B", 44, "Black");
let myNFT3 = mintNFT("Vans","Rubber Shoes", "Class C", 40, "Blue");


listNFTs();


let totalNfts = getTotalSupply();
console.log("Total NFTs: " + totalNfts);
