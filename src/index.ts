import { ENS } from "@ensdomains/ensjs";
import { ethers } from "ethers";

const provider = new ethers.providers.JsonRpcProvider(providerUrl);

const ENSInstance = new ENS();
await ENSInstance.setProvider(provider);
