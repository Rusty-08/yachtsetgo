import { AppBar, Box, Divider, Drawer, Hidden, IconButton, Menu, MenuItem, Toolbar, useMediaQuery } from '@mui/material'
import Image from 'next/image'
import Link from 'next/link'
import { links } from './links'
import { styled } from '@mui/material/styles'
import { usePathname, useRouter } from 'next/navigation'
import CustomButton from '../ui/button'
import { useEffect, useRef, useState } from 'react'
import { useWindowScroll } from 'react-use'
import { Icon } from '@iconify/react'

const StyleLink = styled(Link)(({ theme }) => ({
  textDecoration: 'none',
  letterSpacing: '1.5px',
  color: 'white',
  fontSize: '0.8rem',
}))

const MainAppBar = styled(AppBar)(({ theme }) => ({
  padding: '0 0.5rem',
  transition: 'transform 0.3s ease-in-out',
  [theme.breakpoints.down('sm')]: {
    padding: '0 0.2rem',
  }
}))

const Navbar = () => {
  const router = useRouter()
  const activePage = usePathname()
  const { y } = useWindowScroll()
  const navbarRef = useRef(null)
  const [lastY, setLastY] = useState(y)
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const [open, setOpen] = useState(false);

  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen)
  };

  const navbarHeight = navbarRef.current?.offsetHeight
  const isScrolling = y > navbarHeight

  useEffect(() => {
    setLastY(y)
    if (y > navbarHeight) {
      // setHideOnScroll(y > lastY) is not working haha
      if (y > lastY) return setHideOnScroll(true)
      if (y < lastY) return setHideOnScroll(false)
    } else {
      setHideOnScroll(true)
    }
  }, [lastY, navbarHeight, y])

  const isMobile = useMediaQuery(theme => theme.breakpoints.down('sm'))

  const linkLists = (direction, color) => {
    return (
      <Box sx={{
        display: 'flex',
        gap: 3,
        alignItems: 'center',
        py: direction ? 4 : 0,
        flexDirection: direction ?? 'row'
      }}
      >
        {links.map(link => (
          <StyleLink
            style={{
              color: // spagetthi pababa haha
                color
                  ? activePage == link.route
                    ? 'rgb(0, 156, 194)'
                    : 'rgba(47, 43, 61, 0.62)'
                  : activePage == link.route
                    ? isScrolling
                      ? 'rgb(0, 156, 194)'
                      : activePage == '/'
                        ? 'white'
                        : 'rgb(0, 156, 194)'
                    : activePage == '/'
                      ? isScrolling
                        ? 'rgba(47, 43, 61, 0.62)'
                        : 'rgba(255, 255, 255, 0.60)'
                      : 'rgba(47, 43, 61, 0.60)',
            }}
            key={link.id}
            href={link.route}
          >
            {link.name}
          </StyleLink>
        ))}
        <CustomButton
          color={
            activePage == '/'
              ? isScrolling ? 'dark' : 'light'
              : 'dark'
          }
          variant="contained"
          onClick={() => router.push('/login')}
        >
          LOGIN
        </CustomButton>
      </Box>
    )
  }

  return (
    <MainAppBar
      ref={navbarRef}
      position={isScrolling ? 'fixed' : 'absolute'}
      sx={{
        bgcolor:
          activePage === '/'
            ? isScrolling ? 'primary.light' : 'transparent'
            : 'white',
        transform: hideOnScroll ? 'translateY(0)' : 'translateY(-100%)',
        boxShadow:
          isScrolling
            ? 'rgba(0, 0, 0, 0.05) 0px 1px 3px 0px, rgba(0, 0, 0, 0.05) 0px 1px 2px 0px'
            : 'none',
      }}>
      <Toolbar sx={{ height: isMobile ? '4rem' : '5.5rem', justifyContent: 'space-between' }}>
        <Link href="/" style={{ display: 'flex' }}>
          <Image
            src={
              activePage === '/'
                ? isScrolling
                  ? "/landingassets/images/ysgcolored.svg"
                  : "/landingassets/images/ysgwhite.svg"
                : "/landingassets/images/ysgcolored.svg"
            }
            alt="Yachtsetgo Logo"
            width='0'
            height='0'
            style={{
              width: 'auto',
              height: isMobile ? '2.5rem' : '3.5rem',
              objectFit: 'cover',
            }} />
        </Link>

        {/* Mobile Screens */}
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={toggleDrawer(true)}
            sx={{ color: isScrolling || activePage !== '/' ? 'primary.dark' : 'primary.light' }}
          >
            <Icon icon="solar:hamburger-menu-broken" width="2rem" />
          </IconButton>
          <Drawer anchor='right' open={open} onClose={toggleDrawer(false)}>
            <Box
              sx={{
                width: 300,
                pb: 4,
                pt: '0.75rem',
                px: 2,
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
              }}
              role="presentation"
              onClick={toggleDrawer(false)}
            >
              <Image
                src='/landingassets/images/ysgcolored.svg'
                alt='Yachtsetgo Logo'
                width='0'
                height='0'
                style={{
                  width: 'auto',
                  height: '2.5rem',
                  objectFit: 'cover',
                  marginBottom: '0.75rem',
                }} />
              <Divider sx={{ width: '100%' }} />
              {linkLists('column', 'colored')}
            </Box>
          </Drawer>
        </Hidden>

        {/* Large Screens */}
        <Hidden mdDown>
          {linkLists()}
        </Hidden>
      </Toolbar>
    </MainAppBar >
  )
}

export default Navbar