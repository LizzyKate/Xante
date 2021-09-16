import aave from '~/assets/images/Aave.png'
import binance from '~/assets/images/Binance.png'
import compound from '~/assets/images/Compound.png'

import ma1 from '~/assets/images/Group 30 (3).png'
import ma2 from '~/assets/images/Group 30 (4).png'
import ma3 from '~/assets/images/Group 30 (5).png'

import tether from '~/assets/images/Group 30.png'
import usd from '~/assets/images/Group 30 (1).png'
import busd from '~/assets/images/Group 30 (2).png'
import husd from '~/assets/images/HUSD.png'
import gem from '~/assets/images/Gem Dollar.png'

export const state = () => ({

  coins: [{
      platform: 'Aave',
      img: aave,
      categories: ['DEX', 'DEX', ],
      locked_value: '$10.3B',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%'
    },
    {
      platform: 'Binance',
      img: binance,
      categories: ['ETH', 'AMM', 'All Chains'],
      locked_value: '$10.3B',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%'
    },
    {
      platform: 'compound',
      img: compound,
      categories: ['DEX', 'DEX', ],
      locked_value: '$10.3B',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%',
      ETH_APY: '23.5%',
      BCH_APY: '23.5%',
      KCS_APY: '23.5%'
    },
  ],

  stablecoins: [{
      name: 'Tether',
      img: tether,
      chain: 'Bsc',
      borrow_apy: '$15.0 B',
      lend_apy: '$15.0 B'
    },
    {
      name: 'USD Coin',
      img: usd,
      chain: 'Bsc',
      borrow_apy: '$15.0 B',
      lend_apy: '$15.0 B'
    },
    {
      name: 'BInance USD',
      img: busd,
      chain: 'Bsc',
      borrow_apy: '$15.0 B',
      lend_apy: '$15.0 B'
    },
    {
      name: 'HUSD',
      img: husd,
      chain: 'Bsc',
      borrow_apy: '$15.0 B',
      lend_apy: '$15.0 B'
    },
    {
      name: 'Gem Dollar',
      img: gem,
      chain: 'Bsc',
      borrow_apy: '$15.0 B',
      lend_apy: '$15.0 B'
    },
  ],

  marketAnalytics: [{
      name: 'Provider name',
      img: ma1,
      chain: 'Bsc',
      category: ['DEX'],
      locked_value: '$15.0 B'
    },
    {
      name: 'Provider name',
      img: ma2,
      chain: 'Bsc',
      category: ['DEX', 'DEX'],
      locked_value: '$15.0 B'
    },
    {
      name: 'Provider name',
      img: ma3,
      chain: 'Bsc',
      category: ['DEX', 'DEX'],
      locked_value: '$15.0 B'
    },
  ],

  params: [{
      name: 'Price',
      value: '$15.0 B'
    },
    {
      name: 'Market Cap',
      value: '$15.0 B'
    },
    {
      name: 'Trading Volume',
      value: '$15.0 B'
    },
    {
      name: 'Available supply',
      value: '$15.0 B'
    },
    {
      name: 'Trading Volume ',
      value: '$15.0 B'
    },
    {
      name: 'Available supply',
      value: '$15.0 B'
    },
    {
      name: 'All Time High',
      value: '$15.0 B'
    },
    {
      name: 'Trading Volume ',
      value: '$15.0 B'
    },
    {
      name: 'Available supply',
      value: '$15.0 B'
    },
    {
      name: 'All Time High',
      value: '$15.0 B'
    },
    {
      name: 'Available supply',
      value: '$15.0 B'
    },
    {
      name: 'All Time High',
      value: '$15.0 B'
    },
    {
      name: 'Trading Volume',
      value: '$15.0 B'
    },
    {
      name: 'Available supply',
      value: '$15.0 B'
    },
    {
      name: 'All Time High',
      value: '$15.0 B'
    },
  ]
})

export const mutations = {

}

export const actions = {

}

export const getters = {
  filteredstablecoins: (state) => {
    return state.stablecoins.slice(0, 3)
  },
  filteredMarketAnalytics: (state) => {
    return state.marketAnalytics.slice(0, 3)
  },
}

export default {
  state,
  mutations,
  actions,
  getters,
}
