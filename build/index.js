"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const drand_client_1 = require("drand-client");
async function main() {
    const testnetUnchainedUrl = "https://pl-eu.testnet.drand.sh/ddb3665060932c267aacde99049ea31f3f5a049b1741c31cf71cd5d7d11a8da2";
    const chain = new drand_client_1.HttpCachingChain(testnetUnchainedUrl);
    const client = new drand_client_1.HttpChainClient(chain);
    const beacon = await (0, drand_client_1.fetchBeacon)(client);
    console.log("Última aleatoriedad:", beacon.randomness);
}
main().catch(console.error);
