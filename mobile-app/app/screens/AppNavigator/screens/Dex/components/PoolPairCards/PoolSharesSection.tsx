import { View } from 'react-native'
import { tailwind } from '@tailwind'
import BigNumber from 'bignumber.js'
import NumberFormat from 'react-number-format'
import { ThemedTextV2 } from '@components/themed'

interface PoolSharesSectionProps {
  walletTokenPrice: BigNumber
  walletTokenAmount: BigNumber
  tokenID: string
  pairTokenSymbol: string
}
export function PoolSharesSection (props: PoolSharesSectionProps): JSX.Element {
  return (
    <View style={tailwind('flex flex-col')}>
      <NumberFormat
        decimalScale={8}
        displayType='text'
        renderText={(textValue) => (
          <ThemedTextV2 style={tailwind('text-sm font-semibold-v2')} testID={`${props.pairTokenSymbol}_pool_share_amount`}>
            {textValue}
          </ThemedTextV2>
        )}
        thousandSeparator
        value={props.walletTokenAmount.toFixed(8)}
      />
      <NumberFormat
        decimalScale={2}
        displayType='text'
        renderText={(textValue) => (
          <ThemedTextV2
            light={tailwind('text-mono-light-v2-700')}
            dark={tailwind('text-mono-dark-v2-700')}
            style={tailwind('text-sm font-normal-v2')}
            testID={`${props.pairTokenSymbol}_pool_share_value`}
          >
            {textValue}
          </ThemedTextV2>
        )}
        thousandSeparator
        value={props.walletTokenPrice.toFixed(2)}
        prefix='$'
      />
    </View>
  )
}
