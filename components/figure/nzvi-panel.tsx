'use client'

import { ZapIcon, PulseIcon, GitMergeIcon, DotFillIcon } from '@primer/octicons-react'
import { Panel, InputItem } from './panel'

export function NzviPanel() {
  return (
    <Panel title="nZVI Inputs" role="severe">
      <InputItem
        role="severe"
        icon={<ZapIcon size={20} />}
        title="Electron donation"
        subtitle={
          <>
            Fe<sup>0</sup> &rarr; Fe<sup>2+</sup> + 2e<sup>&minus;</sup>
          </>
        }
      />
      <InputItem
        role="severe"
        icon={<PulseIcon size={20} />}
        title="Reducing conditions"
        subtitle="ORP: -368 mV"
      />
      <InputItem
        role="severe"
        icon={<GitMergeIcon size={20} />}
        title="DIET facilitation"
        subtitle="Direct interspecies electron transfer"
      />
      <InputItem
        role="severe"
        icon={<DotFillIcon size={20} />}
        title="Alkalinity generation"
        subtitle="& iron nutrients (OH⁻, Fe)"
      />
    </Panel>
  )
}
