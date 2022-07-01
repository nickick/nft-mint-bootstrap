import {
  Box, Container, Link, Typography,
} from '@mui/material';
import { Spin as Hamburger } from 'hamburger-react';
import React, { FC, useCallback, useState } from 'react';
import ConnectButton from '../ConnectButton';
import { entranceAnimationDelay, entranceAnimationDuration, fadeIn } from '../utils/animations';
import MobileDrawer from './Drawer';
import { sectionNav } from './social-links';

type Props = {
  link: string,
  text: string
}

const HeaderLink: FC<Props> = ({ link, text }) => {
  const onClick = useCallback((e: React.SyntheticEvent) => {
    e.preventDefault();
    document.getElementById(link)?.scrollIntoView({
      behavior: 'smooth',
    });
  }, []);

  return (
    <Link
      href={`#${link}`}
      sx={{
        mr: 4,
      }}
      onClick={onClick}
    >
      <Typography
        variant="overline"
        color="secondary"
      >
        {text}
      </Typography>
    </Link>
  );
};

const Header = () => {
  const [isOpen, setOpen] = useState(false);

  const closeDrawer = useCallback(() => {
    setOpen(false);
  }, []);

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        zIndex: 2,
        width: '100%',
        background: 'linear-gradient(180deg, #080808ff 0%, #080808ab 50%, #08080800 100%)',
        p: 4,
      }}
    >
      <Container
        sx={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
        }}
        maxWidth="xl"
      >
        <Typography
          variant="h1"
          color="secondary"
        >
          NFT Mint
          {' '}
          <br />
          BØØSTRAP
        </Typography>
        <Box
          sx={{
            flex: 1,
            display: {
              xs: 'flex',
              md: 'none',
              animation: `${fadeIn} ${entranceAnimationDuration}s both ${entranceAnimationDelay}s`,
              justifyContent: 'flex-end',
            },
          }}
        >

          <Hamburger toggled={isOpen} toggle={setOpen} direction="left" size={20} color="white" />
          <MobileDrawer isOpen={isOpen} setOpen={setOpen} closeDrawer={closeDrawer} />
        </Box>
        <Box
          sx={{
            display: {
              xs: 'none',
              md: 'flex',
            },
            animation: `${fadeIn} ${entranceAnimationDuration}s both ${entranceAnimationDelay}s`,
            alignItems: 'center',
          }}
        >
          {sectionNav.map(({ id, text }) => (
            <HeaderLink
              link={id}
              text={text}
              key={text}
            />
          ))}
          <ConnectButton />
        </Box>
      </Container>
    </Box>
  );
};

export default Header;
