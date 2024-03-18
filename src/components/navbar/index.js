import { AppBar, Box, IconButton, Toolbar, Typography } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { links } from './links'
import { styled } from '@mui/material/styles'
import { Icon } from '@iconify/react'
import { usePathname } from 'next/navigation'

const StyleLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  letterSpacing: '1.5px',
  color: 'white',
  fontSize: '0.85rem',
  '&:hover': {
    opacity: 1,
  }
}))

const Navbar = () => {
  const activePage = usePathname()

  return (
    <AppBar position="fixed"
      sx={{
        bgcolor: activePage === '/' ? 'transparent' : 'white',
        px: 4,
        boxShadow: 'none',
      }}>
      <Toolbar sx={{ height: '6rem' }}>
        <Link href="/">
          <Image
            src={activePage === '/' ? "/images/ysgwhite.svg" : "/images/ysgcolored.svg"}
            alt="Yachtsetgo Logo"
            width={200}
            height={60}
            style={{
              objectFit: 'cover',
            }} />
        </Link>
        <Box sx={{ display: 'flex', flexGrow: 1, justifyContent: 'flex-end', gap: 2 }}>
          {links.map(link => (
            <StyleLink
              style={{
                opacity: activePage == link.route ? 1 : 0.7,
                color: activePage == '/' ? 'white' : 'black',
              }}
              key={link.id}
              href={link.route}
            >
              {link.name}
            </StyleLink>
          ))}
          {/* <IconButton
          size="large"
          edge="start"
          color="inherit"
          aria-label="menu"
          sx={{ mr: 2 }}
        >
          <Icon icon="solar:hamburger-menu-line-duotone" width="1.2em" height="1.2em" />
        </IconButton> */}
        </Box>
      </Toolbar>
    </AppBar>
  )
}

export default Navbar