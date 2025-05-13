import { HttpCachingChain, HttpChainClient, fetchBeacon } from "drand-client";

async function main() {
  const testnetUnchainedUrl =
    "https://pl-eu.testnet.drand.sh/ddb3665060932c267aacde99049ea31f3f5a049b1741c31cf71cd5d7d11a8da2";
  const chain = new HttpCachingChain(testnetUnchainedUrl);
  const client = new HttpChainClient(chain);
  const beacon = await fetchBeacon(client);
  console.log("Última aleatoriedad:", beacon.randomness);
}

main().catch(console.error);
