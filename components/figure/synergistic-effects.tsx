'use client'

import type { ReactNode } from 'react'
import { Heading, Text } from '@primer/react'

const effects: { label: ReactNode }[] = [
  { label: 'Substrate-electron coupling' },
  { label: 'pH-ORP balance' },
  {
    label: (
      <>
        Enhanced methane production <strong>(266 mL)</strong>
      </>
    ),
  },
  {
    label: (
      <>
        High COD removal <strong>(85.9%)</strong>
      </>
    ),
  },
  {
    label: (
      <>
        VS reduction <strong>(46.2%)</strong>
      </>
    ),
  },
]

export function SynergisticEffects() {
  return (
    <section
      style={{
        borderRadius: 'var(--borderRadius-large)',
        backgroundColor: 'var(--bgColor-accent-emphasis)',
        padding: 'var(--base-size-24)',
      }}
    >
      <Heading
        as="h2"
        style={{
          fontSize: 'var(--text-title-size-medium)',
          color: 'var(--fgColor-onEmphasis)',
          textAlign: 'center',
          marginBottom: 'var(--base-size-20)',
        }}
      >
        Synergistic Effects
      </Heading>
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))',
          gap: 'var(--base-size-16)',
        }}
      >
        {effects.map((e, i) => (
          <div
            key={i}
            style={{
              textAlign: 'center',
              padding: 'var(--base-size-8) var(--base-size-12)',
            }}
          >
            <Text
              style={{
                color: 'var(--fgColor-onEmphasis)',
                lineHeight: 'var(--text-body-lineHeight-medium)',
              }}
            >
              {e.label}
            </Text>
          </div>
        ))}
      </div>
    </section>
  )
}
