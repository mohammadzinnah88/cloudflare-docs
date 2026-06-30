'use client'

import type { ReactNode } from 'react'
import { Heading, Stack, Text } from '@primer/react'

type Role = 'success' | 'severe' | 'accent'

const roleTokens: Record<
  Role,
  { header: string; muted: string; border: string; fg: string }
> = {
  success: {
    header: 'var(--bgColor-success-emphasis)',
    muted: 'var(--bgColor-success-muted)',
    border: 'var(--borderColor-success-emphasis)',
    fg: 'var(--fgColor-success)',
  },
  severe: {
    header: 'var(--bgColor-severe-emphasis)',
    muted: 'var(--bgColor-severe-muted)',
    border: 'var(--borderColor-severe-emphasis)',
    fg: 'var(--fgColor-severe)',
  },
  accent: {
    header: 'var(--bgColor-accent-emphasis)',
    muted: 'var(--bgColor-accent-muted)',
    border: 'var(--borderColor-accent-emphasis)',
    fg: 'var(--fgColor-accent)',
  },
}

export function Panel({
  title,
  role,
  children,
}: {
  title: string
  role: Role
  children: ReactNode
}) {
  const t = roleTokens[role]
  return (
    <section
      style={{
        borderRadius: 'var(--borderRadius-large)',
        backgroundColor: t.muted,
        border: `var(--borderWidth-thin) solid ${t.border}`,
        overflow: 'hidden',
        height: '100%',
      }}
    >
      <header
        style={{
          backgroundColor: t.header,
          padding: 'var(--base-size-16) var(--base-size-20)',
        }}
      >
        <Heading
          as="h2"
          style={{
            fontSize: 'var(--text-title-size-medium)',
            color: 'var(--fgColor-onEmphasis)',
            textAlign: 'center',
          }}
        >
          {title}
        </Heading>
      </header>
      <div style={{ padding: 'var(--base-size-24) var(--base-size-20)' }}>
        <Stack direction="vertical" gap="spacious">
          {children}
        </Stack>
      </div>
    </section>
  )
}

export function InputItem({
  icon,
  title,
  subtitle,
  role,
}: {
  icon: ReactNode
  title: ReactNode
  subtitle?: ReactNode
  role: Role
}) {
  const t = roleTokens[role]
  return (
    <Stack direction="horizontal" gap="normal" align="center">
      <div
        aria-hidden
        style={{
          flexShrink: 0,
          width: 'var(--base-size-44)',
          height: 'var(--base-size-44)',
          display: 'grid',
          placeItems: 'center',
          borderRadius: 'var(--borderRadius-medium)',
          backgroundColor: 'var(--bgColor-default)',
          border: `var(--borderWidth-thin) solid ${t.border}`,
          color: t.fg,
        }}
      >
        {icon}
      </div>
      <Stack direction="vertical" gap="none">
        <Text
          style={{
            fontWeight: 'var(--base-text-weight-semibold)',
            color: 'var(--fgColor-default)',
            lineHeight: 'var(--text-body-lineHeight-medium)',
          }}
        >
          {title}
        </Text>
        {subtitle ? (
          <Text size="small" style={{ color: 'var(--fgColor-muted)' }}>
            {subtitle}
          </Text>
        ) : null}
      </Stack>
    </Stack>
  )
}
