import * as React from "react"
import { StaticImage } from "gatsby-plugin-image"
import styled from "styled-components"

import Layout from "../components/Layout"
import Seo from "../components/Seo"
import {
  H1Black,
  H1SeaWeedGreen,
  H1LightKhaki,
  H2Black,
  H2DarkGreen,
  H3Black,
  H3GunMetal,
  H4Black,
  H4GunMetal,
  B1GunMetal,
  HomeHeaderBlack,
  standardWrapper,
  Btn1One,
  Btn1Two,
} from "../styles/helpers"

const IndexPage = () => {
  return (
    <Layout>
      <Seo title="Home" />
      <div>
        {/* <StaticImage
          src="../images/example.png"
          loading="eager"
          width={64}
          quality={95}
          formats={["auto", "webp", "avif"]}
          alt=""
          style={{ marginBottom: `var(--space-3)` }}
        /> */}
        <h1>
          Welcome to <b>Gatsby!</b>
        </h1>
        <Typography>
          <h1>
            HOME HEADER: Lorem ipsum dolor sit amet, consectetuer adipiscing
            elit.
          </h1>
          <h2>
            H1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio.
          </h2>
          <h2 className="green">
            H1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h2>
          <h2 className="khaki">
            H1: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h2>
          <h3>
            H2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h3>
          <h3 className="green">
            H2: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h3>
          <h4>
            H3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h4>
          <h4 className="gunmetal">
            H3: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h4>
          <h5>
            H4: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h5>
          <h5 className="gunmetal">
            H4: Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Donec
            odio. pede.
          </h5>

          <p>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus libero, faucibus
            adipiscing, commodo quis, gravida id, est. Sed lectus. Praesent
            elementum hendrerit tortor. Sed semper lorem at felis. Vestibulum
            volutpat, lacus a ultrices sagittis, mi neque euismod dui, eu
            pulvinar nunc sapien ornare nisl. Phasellus pede arcu, dapibus eu,
            fermentum et, dapibus sed, urna.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Phasellus
            hendrerit. Pellentesque aliquet nibh nec urna. In nisi neque,
            aliquet vel, dapibus id, mattis vel, nisi. Sed pretium, ligula
            sollicitudin laoreet viverra, tortor libero sodales leo, eget
            blandit nunc tortor eu nibh. Nullam mollis. Ut justo. Suspendisse
            potenti.
          </p>
          <p>
            Morbi interdum mollis sapien. Sed ac risus. Phasellus lacinia, magna
            a ullamcorper laoreet, lectus arcu pulvinar risus, vitae facilisis
            libero dolor a purus. Sed vel lacus. Mauris nibh felis, adipiscing
            varius, adipiscing in, lacinia vel, tellus. Suspendisse ac urna.
            Etiam pellentesque mauris ut lectus. Nunc tellus ante, mattis eget,
            gravida vitae, ultricies ac, leo. Integer leo pede, ornare a,
            lacinia eu, vulputate vel, nisl.
          </p>
          <button className="btnone">View Projects</button>
          <button disabled className="btnone">
            View Projects
          </button>
          <button className="btntwo">View Projects</button>
          <button disabled className="btntwo">
            View Projects
          </button>
        </Typography>
      </div>
    </Layout>
  )
}

const Typography = styled.div`
  ${standardWrapper};

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    width: 100%;
  }

  h1 {
    ${HomeHeaderBlack};
  }

  h2 {
    ${H1Black};

    &.green {
      ${H1SeaWeedGreen};
    }

    &.khaki {
      ${H1LightKhaki};
    }
  }

  h3 {
    ${H2Black};

    &.green {
      ${H2DarkGreen};
    }
  }

  h4 {
    ${H3Black};

    &.gunmetal {
      ${H3GunMetal};
    }
  }

  h5 {
    ${H4Black};

    &.gunmetal {
      ${H4GunMetal};
    }
  }

  p {
    ${B1GunMetal};
  }

  .btnone {
    ${Btn1One};
  }

  .btntwo {
    ${Btn1Two};
  }
`

export default IndexPage
