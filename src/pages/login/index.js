import { PagesWrapper } from '..'
import { HeaderTitle } from '@/components/section-header'
import PageHeader from './../../components/page-header/index'

const Login = () => {
  return (
    <PagesWrapper>
      <PageHeader>login</PageHeader>
      <HeaderTitle sx={{ mt: 15, color: 'text.secondary' }} variant='h5'>Coming soon...</HeaderTitle>
    </PagesWrapper>
  )
}

export default Login