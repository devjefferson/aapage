import type { NextPage } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { Container } from '../styles/home'

import logo from '../image/logo.png'
import android from '../image/android.png'
import Footer from '../components/Footer'
import Head from 'next/head'
const Home: NextPage = () => {

  return (
    <Container >
       <Head>
        <title>Alerta Assalto</title>
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta
          name="description"
          content="compartilhamento de ocorrências e tentativas de assaltos e furtos nas regiões próximas aos usuários da nossa plataforma."
        />
        <meta name="keywords" content='"aplicativo de ocorrência", "alerta assalto rio de janeiro", "alerta assalto RJ", "aplicativo de segurança", [alerta assalto, furto, roubo], "pais seguro", alerta assalto' />
      </Head>
      <main>
      <noscript dangerouslySetInnerHTML={{
            __html: `<iframe src="https://www.googletagmanager.com/ns.html?id=GTM-MDS48FL"
        height="0" width="0" style="display:none;visibility:hidden"></iframe>`,
          }}
          />
        <div className="content">
          <div className="contentLeft">
            <Image src={logo} className="imageLogo" alt="logo" />
          </div>
          <div className="contentRight">
            <div>
              <h1>Alerta Assalto</h1>
            </div>
            <div>
              <p>
                O objetivo do aplicativo ALERTA ASSALTO é o compartilhamento de ocorrências e tentativas de assaltos e furtos nas regiões próximas aos usuários da nossa plataforma. Tem como diferencial apontar em um mapa ilustrativo a localização de diferentes tipos de ocorrências relatadas pelas vítimas ou testemunhas, evidenciando os locais de mais incidências. É um aplicativo gratuito com informações compartilhadas por pessoas comuns que tem como preocupação a segurança e o bem-estar social.
              </p>
            </div>
            <div className='imageAndroid'>
              <Link href="https://play.google.com/store/apps/details?id=com.alertaassalto" >
                <a>
                  <Image src={android} alt="android-button" />
                </a>
              </Link>
            </div>
          </div>

        </div>
      </main>

      <div className="footercontainer">
        <Footer />
      </div>

    </Container>
  )
}


export default Home
