import IconButton from '@material-ui/core/IconButton'
import CloseIcon from '@material-ui/icons/Close'
import { useState } from 'react'
import { useTranslation } from 'react-i18next'

import IOSShareIcon from './IOSShareIcon'
import { StyledWrapper, StyledHeader, StyledContent } from './style'

export function PWAInstallationGuide() {
  const [isOpen, setIsOpen] = useState(!JSON.parse(localStorage.getItem('pwaNotificationIsClosed')))
  const { t } = useTranslation()

  return (
    <StyledWrapper isOpen={isOpen}>
      <StyledHeader>
        <img src='/apple-icon-180.png' width={50} alt='ts-icon' />

        {t('PWAGuide.Header')}

        <IconButton
          size='small'
          aria-label='close'
          color='inherit'
          onClick={() => {
            setIsOpen(false)
            localStorage.setItem('pwaNotificationIsClosed', true)
          }}
        >
          <CloseIcon fontSize='small' />
        </IconButton>
      </StyledHeader>

      <StyledContent>
        <p>{t('PWAGuide.Description')}</p>

        <p>{t('PWAGuide.VLC')}</p>

        <p>
          1. {t('PWAGuide.FirstStep')} <IOSShareIcon />
        </p>

        <p>
          2. {t('PWAGuide.SecondStep.Select')} <span>{t('PWAGuide.SecondStep.AddToHomeScreen')}</span>
        </p>
      </StyledContent>
    </StyledWrapper>
  )
}
