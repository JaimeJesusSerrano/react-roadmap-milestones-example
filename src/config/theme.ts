import { Breakpoints, Devices, ThemeOverride } from 'types/Theme'

const breakpoints: Breakpoints = {
  mobile: 0,
  laptop: 900,
}

const devices: Devices = {
  mobileMin: `(min-width: ${breakpoints.mobile}px)`,
  laptopMax: `(max-width: ${breakpoints.laptop}px)`,
  laptopMin: `(min-width: ${breakpoints.laptop}px)`,
}

const theme: ThemeOverride = { breakpoints, devices }

export default theme
