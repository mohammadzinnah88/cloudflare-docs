'use client'

import type { ReactNode } from 'react'
import { ArrowDownIcon } from '@primer/octicons-react'
import { Heading, Stack, Text } from '@primer/react'

function FlowLabel({ children }: { children: ReactNode }) {
  return (
    <Text
      style={{
        color: 'var(--fgColor-muted)',
        fontWeight: 'var(--base-text-weight-medium)',
      }}
    >
      {children}
    </Text>
  )
}

function Arrow() {
  return (
    <div
      aria-hidden
      style={{
        display: 'grid',
        placeItems: 'center',
        color: 'var(--fgColor-accent)',
      }}
    >
      <ArrowDownIcon size={20} />
    </div>
  )
}

function Stage({
  name,
  detail,
}: {
  name: string
  detail: ReactNode
}) {
  return (
    <div
      style={{
        backgroundColor: 'var(--bgColor-default)',
        border:
          'var(--borderWidth-thin) solid var(--borderColor-accent-emphasis)',
        borderRadius: 'var(--borderRadius-medium)',
        padding: 'var(--base-size-12) var(--base-size-16)',
        textAlign: 'center',
      }}
    >
      <Text
        style={{
          display: 'block',
          fontWeight: 'var(--base-text-weight-semibold)',
          color: 'var(--fgColor-accent)',
        }}
      >
        {name}
      </Text>
      <Text style={{ color: 'var(--fgColor-default)' }}>{detail}</Text>
    </div>
  )
}

export function AdProcess() {
  return (
    <section
      style={{
        borderRadius: 'var(--borderRadius-large)',
        backgroundColor: 'var(--bgColor-accent-muted)',
        border:
          'var(--borderWidth-thin) solid var(--borderColor-accent-emphasis)',
        padding: 'var(--base-size-24)',
        height: '100%',
      }}
    >
      <Stack direction="vertical" gap="condensed" align="center">
        <FlowLabel>Waste sludge</FlowLabel>
        <Arrow />
        <Heading
          as="h2"
          style={{
            fontSize: 'var(--text-title-size-medium)',
            color: 'var(--fgColor-default)',
            textAlign: 'center',
          }}
        >
          Anaerobic Digestion Process
        </Heading>

        <Stage
          name="Hydrolysis"
          detail={<>complex organics &rarr; soluble compounds</>}
        />
        <Arrow />
        <Stage
          name="Acidogenesis"
          detail={<>soluble compounds &rarr; VFAs</>}
        />
        <Arrow />
        <Stage
          name="Acetogenesis"
          detail={
            <>
              VFAs &rarr; acetate, H<sub>2</sub>, CO<sub>2</sub>
            </>
          }
        />
        <Arrow />
        <Stage
          name="Methanogenesis"
          detail={
            <>
              acetate / H<sub>2</sub> + CO<sub>2</sub> &rarr; CH<sub>4</sub>
            </>
          }
        />
        <Arrow />
        <FlowLabel>
          Biogas (CH<sub>4</sub> + CO<sub>2</sub>)
        </FlowLabel>
      </Stack>
    </section>
  )
}
