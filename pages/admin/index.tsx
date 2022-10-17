import type { NextPage } from 'next'
import { FixedPanel, LoginForm, TabPanel } from '@components'
import { useAuthorized } from '@helpers'

const Admin: NextPage = () => {

  const [authorized] = useAuthorized()

  if(!authorized) return <LoginForm />

  return (
    <div className="mt-12 flex flex-row justify-center">
      <FixedPanel />
      <TabPanel />
    </div>
  )
}

export default Admin