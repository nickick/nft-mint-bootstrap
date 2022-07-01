import { Box } from '@mui/material';

type Props = {
  sx: object;
}

export default function TelegramIcon({ sx }: Props) {
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
        src="/icons/telegram.png"
        style={{
          width: '20px',
          marginLeft: '0',
        }}
        alt="Telegram logo"
      />
    </Box>
  );
}
