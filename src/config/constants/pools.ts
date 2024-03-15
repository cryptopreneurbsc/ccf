import { serializeTokens } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens()

const pools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.cake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x9066FDd1F40E7FDEB51560AB3E1D5a29d95F5392',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.3',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 13,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.banana,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3710099d82F9B91339d8a5b96c5DD2A56c434222',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.00520833333333333',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 17,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.knight,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xEB2C1F3D90a7547623081f5547e00ed9d55E659D',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.034722222222222200',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 18,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.dsme,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x8753d743Ff1081971F1265E59E9856D855B1fC7f',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000138888888888889',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 11,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x351d468aded97d847159b5d01239bead43b38005',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000018',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 14,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.matic,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xE3eE281809399D9a29C0631f23c7Dce4FD7bc8B4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000173611111111111',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 19,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.dsme,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3788D5cA39Fb576D94f0DDF816AcbF9Bba1A08b4',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000121527777777778',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 16,
    stakingToken: serializedTokens.free,
    earningToken: serializedTokens.usdt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xDc1F999d78fd9567c8998071A2763D66B6B1a276',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000130208333333333',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 12,
    stakingToken: serializedTokens.free,
    earningToken: serializedTokens.idrt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xB9dF9C83a68aaC97718CAEa7E1dF7C5D3Cee032C',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.73611111111',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 21,
    stakingToken: serializedTokens.pps,
    earningToken: serializedTokens.fdusd,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xb04e4e1d0a0dE94543D2F6eb17052F7DFeB25a1c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000104166666666667',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 20,
    stakingToken: serializedTokens.dsme,
    earningToken: serializedTokens.idrt,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x89c8740bf3841563b34202f7ED203521e6b5330A',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '1.736111111111110000',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 1,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xcece7e90a5981054c9f278b20dae08c224a7eb0c',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 2,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x56308b80a28980f8c7b5279d072440916322c5bd',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.0000347',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 3,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x3733d01b3b0bd36c8bf6be7afaf009114c169ec6',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.000000347',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 4,
    stakingToken: serializedTokens.cake,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2ced32e46fa2122cd3b8b8d832631656b196b6da',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 5,
    stakingToken: serializedTokens.crf,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x274036520eb1f2f72288879106d13adc1a3801f7',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 6,
    stakingToken: serializedTokens.cpump,
    earningToken: serializedTokens.pancake,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xadf03f0c2529468bb82599b8ab1738479c992af0',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.000017',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  },
  {
    sousId: 7,
    stakingToken: serializedTokens.vitsco,
    earningToken: serializedTokens.trx,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x1cb4f7c55c8d112689ff980ceeb97cda0d4c017a',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.0034',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 8,
    stakingToken: serializedTokens.vitsco,
    earningToken: serializedTokens.matic,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x2156a2ff99a4459f8d55a9013c151edf1a63b039',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.000138',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 9,
    stakingToken: serializedTokens.hwc,
    earningToken: serializedTokens.busd,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0x0c941901e0ce661bc9b720075e39baf2976c2655',
    },
    poolCategory: PoolCategory.CORE,
    harvest: false,
    tokenPerBlock: '0.0017',
    sortOrder: 1,
    isFinished: true,
    enableEmergencyWithdraw: true,
  }
  ,
  {
    sousId: 10,
    stakingToken: serializedTokens.crevo,
    earningToken: serializedTokens.bsw,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xdd7b33d8e0eda9ddc6390a546e3cd4469b4c1a44',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.0034',
    sortOrder: 1,
    isFinished: false,
  }
  ,
  {
    sousId: 15,
    stakingToken: serializedTokens.rc,
    earningToken: serializedTokens.lgold,
    contractAddress: {
      97: '0xd3af5fe61dbaf8f73149bfcfa9fb653ff096029a',
      56: '0xccdC7349CE5362dfb5C3BAcf3D76c5eCEDe75394',
    },
    poolCategory: PoolCategory.CORE,
    harvest: true,
    tokenPerBlock: '0.000001736111111111',
    sortOrder: 1,
    isFinished: false,
  }
]

export default pools
