'use client'

import { BeakerIcon, GearIcon, PackageIcon, HubotIcon } from '@primer/octicons-react'
import { Panel, InputItem } from './panel'

export function EcoEnzymePanel() {
  return (
    <Panel title="Eco-Enzyme Inputs" role="success">
      <InputItem
        role="success"
        icon={<PackageIcon size={20} />}
        title="Readily biodegradable substrates"
        subtitle="Simple sugars & organic acids"
      />
      <InputItem
        role="success"
        icon={<GearIcon size={20} />}
        title="Hydrolytic enzymes"
        subtitle="Proteases, lipases, amylases"
      />
      <InputItem
        role="success"
        icon={<BeakerIcon size={20} />}
        title="Trace nutrients"
        subtitle="K, Ca, Mg"
      />
      <InputItem
        role="success"
        icon={<HubotIcon size={20} />}
        title="Beneficial microorganisms"
        subtitle="Active microbial consortia"
      />
    </Panel>
  )
}
