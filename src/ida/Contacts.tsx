import { Stack, Typography } from '@mui/material'

type Contact = {
  title: string,
  body: JSX.Element
}

type Props = {
  contacts: Contact[]
}

export default function Contacts({ contacts }: Props) {
  return <Stack
    direction={{ xs: 'column', sm: 'row' }}
    spacing={{ xs: 2, sm: 8 }}
    sx={{ mb: 4 }}
  >
    {
      contacts.map(c => <div>
        <Typography variant="overline">{c.title}</Typography>
        <Typography component="address" variant="body2" sx={{ fontStyle: 'normal' }}>
          {c.body}
        </Typography>
      </div>)
    }
  </Stack>
}