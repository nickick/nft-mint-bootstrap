import { Box } from '@mui/material';

type Props = {
  sx: object;
}

export default function DiscordIcon({ sx }: Props) {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        ...sx,
      }}
    >
      <img
        src="/icons/discord.svg"
        style={{
          width: '20px',
          marginLeft: '0',
        }}
        alt="Discord logo"
      />
    </Box>
  );
}
