import React from 'react'
import { PagesWrapper } from '..'
import { HeaderTitle, PageHeaderTitle } from '@/components/section-header'
import PageHeader from './../../components/page-header/index';

const ContactUs = () => {
  return (
    <PagesWrapper>
      <PageHeader>contact us</PageHeader>
      <HeaderTitle sx={{ mt: 15, color: 'text.disabled' }}>Comming soon...</HeaderTitle>
    </PagesWrapper>
  )
}

export default ContactUs