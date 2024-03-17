import { Html, Head, Main, NextScript } from 'next/document'
import Navbar from '@/components/navbar'
import { DocumentHeadTags, documentGetInitialProps } from '@mui/material-nextjs/v14-pagesRouter'
import theme from '@/theme'
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

const MainBody = styled(Container)(() => ({
  maxWidth: '1440px !important',
  minHeight: 'calc(100vh - 10rem)',
  padding: '1.5rem',
}))

export default function MyDocument(props) {
  return (
    <Html lang="en">
      <Head>
        <meta name="theme-color" content={theme.palette.primary.main} />
        <link rel="shortcut icon" href="/favicon.ico" />
        <meta name="emotion-insertion-point" content="" />
        <DocumentHeadTags {...props} />
      </Head>
      <body>
        <Navbar />
        <MainBody>
          <Main />
        </MainBody>
        <NextScript />
      </body>
    </Html>
  )
}

MyDocument.getInitialProps = async ctx => {
  const finalProps = await documentGetInitialProps(ctx);
  return finalProps;
}