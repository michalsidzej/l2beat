import React, { SVGAttributes } from 'react'

import { Icon } from '../Icon'

export function RiskIcon(props: SVGAttributes<SVGElement>) {
  return (
    <Icon width="20" height="20" viewBox="0 0 20 20" fill="none" {...props}>
      <path
        d="M18.4945 4C18.4945 4 18.994 15.5 10.5865 20C2.00596 15.5 2.50546 4 2.50546 4C6.50296 4 10.5 0 10.5 0C10.5 0 13.9975 4 18.4945 4Z"
        fill="#FFC107"
      />
      <path
        d="M9.49997 14.071C9.49997 13.9365 9.52347 13.8135 9.57147 13.698C9.61847 13.584 9.68597 13.485 9.77297 13.402C9.85847 13.318 9.96397 13.2525 10.085 13.2055C10.207 13.1595 10.344 13.135 10.497 13.135C10.65 13.135 10.788 13.1595 10.911 13.2055C11.036 13.2525 11.1415 13.318 11.227 13.402C11.3145 13.485 11.382 13.584 11.4285 13.698C11.4765 13.8135 11.5 13.9365 11.5 14.071C11.5 14.206 11.4765 14.329 11.4285 14.441C11.3815 14.5535 11.314 14.6505 11.227 14.735C11.1415 14.818 11.036 14.883 10.911 14.931C10.788 14.977 10.65 15 10.497 15C10.3435 15 10.207 14.977 10.085 14.9305C9.96397 14.8825 9.85847 14.8175 9.77297 14.7345C9.68547 14.65 9.61797 14.553 9.57147 14.4405C9.52347 14.3285 9.49997 14.2055 9.49997 14.071ZM11.24 12H9.75347L9.54297 6H11.45L11.24 12Z"
        fill="#5D4037"
      />
    </Icon>
  )
}
