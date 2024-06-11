import { Config } from '../../../../build/config'
import { Wrapped } from '../../../Page'
import { getDefaultPageMetadata } from '../../../metadata'
import { DataAvailabilityPagesData } from '../types'
import { ScalingDataAvailabilityPageProps } from '../view/ScalingDataAvailabilityPage'
import { getScalingDataAvailabilityView } from './getScalingDataAvailabilityView'

export function getProps(
  config: Config,
  pagesData: DataAvailabilityPagesData,
): Wrapped<ScalingDataAvailabilityPageProps> {
  return {
    props: {
      dataAvailabilityView: getScalingDataAvailabilityView(
        [...config.layer2s, ...config.layer3s],
        pagesData,
      ),
    },
    wrapper: {
      metadata: getDefaultPageMetadata({
        image:
          'https://l2beat.com/meta-images/pages/og-scaling-data-availability.png',
        url: 'https://l2beat.com/scaling/data-availability',
      }),
      banner: config.features.banner,
    },
  }
}
