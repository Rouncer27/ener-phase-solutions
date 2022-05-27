import { colors } from "./index"
import { fontSizer } from "./index"
import { css } from "styled-components"

// Headline Styles #1 //
export const HomeHeaderBase = css`
  ${fontSizer(6, 10, 76.8, 150, 5)};
  font-weight: 900;
  font-stretch: normal;
  font-style: normal;
  line-height: 0.98;
  letter-spacing: normal;
`

export const HomeHeaderBlack = css`
  ${HomeHeaderBase};
  color: ${colors.black};
`

export const HomeHeaderWhite = css`
  ${HomeHeaderBase};
  color: ${colors.white};
`

// Headline Styles #1 //
export const H1Base = css`
  ${fontSizer(3, 5.6, 76.8, 150, 3)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H1Black = css`
  ${H1Base};
  color: ${colors.black};
`

export const H1White = css`
  ${H1Base};
  color: ${colors.white};
`

export const H1SeaWeedGreen = css`
  ${H1Base};
  color: ${colors.colorAccent};
`
export const H1LightKhaki = css`
  ${H1Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #2 //
export const H2Base = css`
  ${fontSizer(2.5, 3.5, 76.8, 150, 2.5)};
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`

export const H2White = css`
  ${H2Base};
  color: ${colors.white};
`

export const H2Black = css`
  ${H2Base};
  color: ${colors.black};
`

export const H2DarkGreen = css`
  ${H2Base};
  color: ${colors.colorPrimary};
`

export const H2ightKhaki = css`
  ${H2Base};
  color: ${colors.colorSecondary};
`

// Headline Styles #3 //
export const H3Base = css`
  ${fontSizer(2.2, 2.8, 76.8, 150, 2)}
  font-weight: normal;
  font-stretch: normal;
  font-style: normal;
  line-height: 1.43;
  letter-spacing: normal;
`

export const H3White = css`
  ${H3Base};
  color: ${colors.white};
`

export const H3Black = css`
  ${H3Base};
  color: ${colors.black};
`

export const H3GunMetal = css`
  ${H3Base};
  color: ${colors.colorTertiary};
`

// Headline Styles #4 //
export const H4Base = css`
  ${fontSizer(2, 2.6, 76.8, 160, 2)};
  font-weight: bold;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
`

export const H4White = css`
  ${H4Base};
  color: ${colors.white};
`

export const H4Black = css`
  ${H4Base};
  color: ${colors.black};
`

export const H4GunMetal = css`
  ${H4Base};
  color: ${colors.colorTertiary};
`

export const H4Green = css`
  ${H4Base};
  color: ${colors.colorPrimary};
`
