import { ChainId, EthereumAddress } from '@l2beat/shared-pure'
import { DaBridge } from '../../../types/DABridge'

/**
 * THIS IS EXAMPLE DATA FOR SKETCH PURPOSES
 */
export const blobStream = {
  type: 'OnChain',
  display: {
    name: 'Blob Stream',
    slug: 'blob-stream',
    description: 'Celestia with Blob Stream bridge on Ethereum.',
  },
  chain: ChainId.ETHEREUM,
  usedIn: [],
  contracts: {
    name: 'BlobStreamBridge',
    address: EthereumAddress('0x1234567890123456789012345678901234567890'),
  },
  permissions: [],
  risks: {
    attestations: {
      type: 'SigVerified',
      areSignersTracked: true,
      description: 'Attestations are signed by known signers.',
    },
    exitWindow: {
      party: 'EOA',
      delay: 1000,
      description: 'There is little to no delay.',
    },
    accessability: {
      type: 'NotEnshrined',
      description: 'Data is not enshrined.',
    },
  },
} satisfies DaBridge
