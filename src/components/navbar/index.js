import { AppBar, Box, Hidden, IconButton, Menu, MenuItem, Toolbar } from '@mui/material'
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
    padding: '0 0.5rem',
  }
}))

const Navbar = () => {
  const router = useRouter()
  const activePage = usePathname()
  const { y } = useWindowScroll()
  const navbarRef = useRef(null)
  const [lastY, setLastY] = useState(y)
  const [hideOnScroll, setHideOnScroll] = useState(true)

  const [anchorEl, setAnchorEl] = useState(null)

  const handleMenuOpen = (event) => {
    setAnchorEl(event.currentTarget)
  }

  const handleMenuClose = () => {
    setAnchorEl(null)
  }

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
      <Toolbar sx={{ height: '5.5rem', justifyContent: 'space-between' }}>
        <Link href="/">
          <Image
            src={
              activePage === '/'
                ? isScrolling
                  ? "/images/ysgcolored.svg"
                  : "/images/ysgwhite.svg"
                : "/images/ysgcolored.svg"
            }
            alt="Yachtsetgo Logo"
            width={200}
            height={60}
            style={{
              objectFit: 'cover',
            }} />
        </Link>

        {/* Mobile Screens */}
        <Hidden mdUp>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            sx={{ color: isScrolling || activePage !== '/' ? 'primary.dark' : 'primary.light' }}
          >
            <Icon icon="solar:hamburger-menu-broken" width="2rem" />
          </IconButton>
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
          >
            {links.map(link => (
              <MenuItem onClick={handleMenuClose} key={link.id}>
                <StyleLink href={link.route}>
                  {link.name}
                </StyleLink>
              </MenuItem>
            ))}
          </Menu>
        </Hidden>
        {/* Large Screens */}
        <Hidden mdDown>
          <Box sx={{ display: 'flex', gap: 3, alignItems: 'center' }}>
            {links.map(link => (
              <StyleLink
                style={{
                  color:
                    activePage == link.route
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
              Sign In
            </CustomButton>
          </Box>
        </Hidden>
      </Toolbar>
    </MainAppBar>
  )
}

export default Navbar