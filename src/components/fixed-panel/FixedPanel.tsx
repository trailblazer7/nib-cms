import React from 'react'
import { userService } from '../../services'
import { Button } from '../forms/Button'

export function FixedPanel() {

  const onLogout = userService.logout

  return (
    <div className="bg-teal-600 flex flex-row justify-between fixed top-0 left-0 right-0 py-2 px-5">
      <div className="leading-9 font-semibold text-slate-50">Top Panel</div>
      <div className="flex flex-row">
        {/* <ProfileDropdown /> */}
        <Button label='Log Out' onClick={onLogout} />
      </div>
    </div>
  )
}
