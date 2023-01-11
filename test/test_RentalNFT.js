const { expect } = require("chai");

let rentalNFT;

const ADDRESS_ZERO = "0x0000000000000000000000000000000000000000";

describe("Test RentalNFT", function () {

  before(async () => {
    [owner1, owner2, user1, user2] = await ethers.getSigners();

    let RentalNFT = await ethers.getContractFactory("RentalNFT")  
    rentalNFT = await RentalNFT.deploy("NFT_name", "NFT_symbol")
    await rentalNFT.deployed()
  }) 

  it("Should mint a first NFT for owner1", async function () {
    await expect(rentalNFT.connect(owner1).nftMint())
      .to.emit(rentalNFT, 'Transfer')
      .withArgs(ADDRESS_ZERO, owner1.address, 1);
  }) 

  it("Should mint a second NFT for owner2", async function () {
    await expect(rentalNFT.connect(owner2).nftMint())
      .to.emit(rentalNFT, 'Transfer')
      .withArgs(ADDRESS_ZERO, owner2.address, 2);
  }) 

  it("Check the balance of owner1", async function () {
    expect(await rentalNFT.balanceOf(owner1.address)).to.equal(1);
  }) 

  it("Check the balance of owner2", async function () {
    expect(await rentalNFT.balanceOf(owner2.address)).to.equal(1);
  }) 

  it("Check the owner of the first NFT", async function () {
    expect(await rentalNFT.ownerOf(1)).to.equal(owner1.address);
  }) 

  it("Check the owner of the second NFT", async function () {
    expect(await rentalNFT.ownerOf(2)).to.equal(owner2.address);
  }) 

  it("Check the user of the first NFT", async function () {
    expect(await rentalNFT.userOf(1)).to.equal(ADDRESS_ZERO);
  }) 

  it("Check the user of the second NFT", async function () {
    expect(await rentalNFT.userOf(2)).to.equal(ADDRESS_ZERO);
  }) 

})