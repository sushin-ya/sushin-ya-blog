import Head from 'next/head'

const Meta = () => {
  return (
    <Head>
      <link
        rel="apple-touch-icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐈</text></svg>"
      />
      <link
        rel="icon"
        href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text x=%2250%%22 y=%2250%%22 style=%22dominant-baseline:central;text-anchor:middle;font-size:90px;%22>🐈</text></svg>"
      />
      <link
        rel="icon alternate"
        type="image/png"
        href="https://twemoji.maxcdn.com/v/14.0.2/72x72/1f408.png"
      />
      <meta name="theme-color" content="#16161D" />
      <title>Sushin-ya Blog</title>
      <meta name="description" content={`Personal blog by Sushin-ya.`} />
      {/* TODO: OGP設定すること */}
      {/* <meta property="og:image" content={HOME_OG_IMAGE_URL} /> */}
    </Head>
  )
}

export default Meta
