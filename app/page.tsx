'use client'

import { Heading, Stack, Text } from '@primer/react'
import { EcoEnzymePanel } from '@/components/figure/eco-enzyme-panel'
import { NzviPanel } from '@/components/figure/nzvi-panel'
import { AdProcess } from '@/components/figure/ad-process'
import { SynergisticEffects } from '@/components/figure/synergistic-effects'

export default function Page() {
  return (
    <main
      style={{
        maxWidth: 1200,
        margin: '0 auto',
        padding: 'var(--base-size-48) var(--base-size-24) var(--base-size-64)',
      }}
    >
      <Stack direction="vertical" gap="spacious">
        <Stack direction="vertical" gap="condensed">
          <Text
            size="small"
            style={{
              color: 'var(--fgColor-accent)',
              fontWeight: 'var(--base-text-weight-semibold)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            Figure 7
          </Text>
          <Heading
            as="h1"
            style={{
              fontSize: 'var(--text-title-size-large)',
              textAlign: 'center',
              maxWidth: 820,
              margin: '0 auto',
              textWrap: 'balance',
            }}
          >
            Schematic illustration of synergistic mechanisms in anaerobic
            digestion enhanced by eco-enzyme and nZVI
          </Heading>
        </Stack>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
            gap: 'var(--base-size-24)',
            alignItems: 'stretch',
          }}
        >
          <EcoEnzymePanel />
          <AdProcess />
          <NzviPanel />
        </div>

        <SynergisticEffects />
      </Stack>
    </main>
  )
}
