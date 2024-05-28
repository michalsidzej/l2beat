import { ChainId, EthereumAddress } from '@l2beat/shared-pure'
import { ZkCatalogProject } from './types/ZkCatalogProject'

export const worldcoin: ZkCatalogProject = {
  display: {
    slug: 'worldcoin',
    name: 'Worldcoin',
  },
  proofVerification: {
    aggregation: false,
    verifiers: [
      {
        name: 'OpWorldID_Zero',
        description:
          "Semaphore verifier for the 'phone' anonymity set. It contains many subverifiers from size 16 to 32, but only the one with size 30 is being actively used. The verification appears as unsuccessful due to circom@2.0.3 not being deterministic when producing the r1cs file.",
        contractAddress: EthereumAddress(
          '0x5eB2c4a34A82a329C3E5D9F97F78Dc5446C3A9FB',
        ),
        chainId: ChainId.OPTIMISM,
        verified: 'failed',
        subVerifiers: [
          {
            name: 'Semaphore30',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            mainPCS: 'N/A',
            trustedSetup: 'PPOT 14 + circuit specific',
            link: 'https://github.com/semaphore-protocol/semaphore/blob/main/packages/circuits/src/semaphore.circom',
          },
        ],
      },
      {
        name: 'OpWorldID_One',
        description:
          "Semaphore verifier of size 30 for the 'orb' anonymity set. The verification appears as unsuccessful due to circom@2.0.3 not being deterministic when producing the r1cs file.",
        contractAddress: EthereumAddress(
          '0x3D40F9b177aFb9BF7e41999FFaF5aBA6cb3847eF',
        ),
        chainId: ChainId.OPTIMISM,
        verified: 'failed',
        subVerifiers: [
          {
            name: 'Semaphore30',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            mainPCS: 'N/A',
            trustedSetup: 'PPOT 14 + circuit specific',
            link: 'https://github.com/semaphore-protocol/semaphore/blob/main/packages/circuits/src/semaphore.circom',
          },
        ],
      },
      {
        name: 'Size 100 Register',
        description: 'SMTB Register verifier of size 100.',
        contractAddress: EthereumAddress(
          '0xb5f23A0c92F2f4aeE506FA3B1Cc2813820d13258',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'RegisterCircuitSize100',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 23 + circuit specific',
            mainPCS: 'N/A',
          },
        ],
      },
      {
        name: 'Size 600 Register',
        description: 'SMTB Register verifier of size 600.',
        contractAddress: EthereumAddress(
          '0xFC1c26E964F791f81a33F49D91f79456891AA1c1',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'RegisterCircuitSize600',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 26 + circuit specific',
            mainPCS: 'N/A',
          },
        ],
      },
      {
        name: 'Size 1200 Register',
        description: 'SMTB Register verifier of size 1200.',
        contractAddress: EthereumAddress(
          '0xE44c83b9e1971A24EC698829297A0C4026B0CeF9',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'RegisterCircuitSize1200',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 27 + circuit specific',
            mainPCS: 'N/A',
          },
        ],
      },
      {
        name: 'Size 10 Delete',
        description: 'SMTB Delete verifier of size 10.',
        contractAddress: EthereumAddress(
          '0xCA7d6822b9c6913B1A1416cE30eF14c4e7f0bFb1',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'DeleteCircuitSize10',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 19 + circuit specific',
            mainPCS: 'N/A',
          },
        ],
      },
      {
        name: 'Size 100 Delete',
        description: 'SMTB Delete verifier of size 100.',
        contractAddress: EthereumAddress(
          '0x43B68ccBa7FC726540768fD1537c3179283140ed',
        ),
        chainId: ChainId.ETHEREUM,
        verified: 'no',
        subVerifiers: [
          {
            name: 'DeleteCircuitSize100',
            proofSystem: 'Groth16',
            mainArithmetization: 'R1CS+QAP',
            trustedSetup: 'PPOT 22 + circuit specific',
            mainPCS: 'N/A',
          },
        ],
      },
    ],
    requiredTools: [
      {
        name: 'snarkjs',
        version: 'v0.6.11',
        link: 'https://github.com/iden3/snarkjs/releases/tag/v0.6.11',
      },
      {
        name: 'circom',
        version: 'v2.0.3',
        link: 'https://github.com/iden3/circom/releases/tag/v2.0.3',
      },
    ],
  },
  type: 'zk-catalog',
}
