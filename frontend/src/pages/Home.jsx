import React from 'react'
import { useTranslation } from "react-i18next"

function Home() {
  const { t } = useTranslation(['translationGeneral'])

  return (
    <div>
      <div className='info'>{t('no-translation')}</div>
      <h1>Home component</h1>
      <div>About site content</div>
    </div>
  )
}

export default Home