import React from 'react';
import Link from 'next/link'
import Image from 'next/image'
import { Container } from './styles';

import facebook from '../../image/facebook.png'
import instagram from '../../image/instagram.png'
import twitter from '../../image/twitter.png'
import linkedin from '../../image/linkedin.png'

const Footer: React.FC = () => {
  return (
    <Container>
      <div>
        <h3>Copyright © Alerta Assalto 2021</h3>
        <h4>Política de privacidade</h4>
      </div>

      <div className="containersocial">
        <div className="imagesocial">
          <Link href="https://www.facebook.com/alertaassalto" >
            <a >
              <Image src={facebook} alt="facebook" />
            </a>
          </Link>
        </div>

        <div className="imagesocial">
          <Link href="/" >
            <a>
              <Image className="imagesocial" src={instagram} alt="instagram" />
            </a>
          </Link>
        </div>
        <div className="imagesocial">
          <Link href="https://twitter.com/alertaassalto" >
            <a>
              <Image className="imagesocial" src={twitter} alt="twitter" />
            </a>
          </Link>
        </div>
        <div className="imagesocial">
          <Link href="/" >
            <a>
              <Image className="imagesocial" src={linkedin} alt="linkedin" />
            </a>
          </Link>
        </div>
      </div>
    </Container>
  )
}

export default Footer;