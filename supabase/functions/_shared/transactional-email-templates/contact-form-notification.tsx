import * as React from 'npm:react@18.3.1'
import {
  Body,
  Container,
  Head,
  Heading,
  Hr,
  Html,
  Preview,
  Section,
  Text,
} from 'npm:@react-email/components@0.0.22'
import type { TemplateEntry } from './registry.ts'

const SITE_NAME = 'Stock Storage Containers'

interface ContactFormNotificationProps {
  name?: string
  email?: string
  company?: string
  message?: string
}

const ContactFormNotificationEmail = ({
  name,
  email,
  company,
  message,
}: ContactFormNotificationProps) => (
  <Html lang="en" dir="ltr">
    <Head />
    <Preview>New contact form submission from {name || 'website visitor'}</Preview>
    <Body style={main}>
      <Container style={container}>
        <Heading style={h1}>New contact form submission</Heading>
        <Text style={text}>
          You received a new message via the {SITE_NAME} website.
        </Text>

        <Section style={card}>
          <Text style={label}>Name</Text>
          <Text style={value}>{name || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Email</Text>
          <Text style={value}>{email || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Company</Text>
          <Text style={value}>{company || '—'}</Text>

          <Hr style={hr} />

          <Text style={label}>Message</Text>
          <Text style={{ ...value, whiteSpace: 'pre-wrap' }}>{message || '—'}</Text>
        </Section>

        <Text style={footer}>
          Sent automatically by the {SITE_NAME} website contact form.
        </Text>
      </Container>
    </Body>
  </Html>
)

export const template = {
  component: ContactFormNotificationEmail,
  subject: (data: Record<string, any>) =>
    `New contact form submission${data?.name ? ` from ${data.name}` : ''}`,
  to: 'sales@stockstoragecontainers.com',
  displayName: 'Contact form notification',
  previewData: {
    name: 'John Doe',
    email: 'john@example.com',
    company: 'Acme Shipping Co.',
    message: 'I am interested in 20ft and 40ft containers. Please contact me.',
  },
} satisfies TemplateEntry

const main = {
  backgroundColor: '#ffffff',
  fontFamily: 'Inter, Arial, sans-serif',
}
const container = {
  padding: '32px 24px',
  maxWidth: '560px',
  margin: '0 auto',
}
const h1 = {
  fontFamily: 'Space Grotesk, Inter, Arial, sans-serif',
  fontSize: '24px',
  fontWeight: 700,
  color: '#1f3a52',
  margin: '0 0 16px',
}
const text = {
  fontSize: '14px',
  color: '#4a5560',
  lineHeight: '1.6',
  margin: '0 0 24px',
}
const card = {
  backgroundColor: '#f5f7fa',
  borderRadius: '8px',
  padding: '20px 24px',
  border: '1px solid #e1e6ed',
}
const label = {
  fontSize: '11px',
  textTransform: 'uppercase' as const,
  letterSpacing: '0.08em',
  color: '#7a8794',
  margin: '0 0 4px',
  fontWeight: 600,
}
const value = {
  fontSize: '15px',
  color: '#1f3a52',
  margin: '0 0 4px',
  lineHeight: '1.5',
}
const hr = {
  border: 'none',
  borderTop: '1px solid #e1e6ed',
  margin: '14px 0',
}
const footer = {
  fontSize: '12px',
  color: '#99a3ad',
  margin: '24px 0 0',
  textAlign: 'center' as const,
}
