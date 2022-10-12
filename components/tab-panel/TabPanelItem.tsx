import { Tab } from '@headlessui/react'
import React from 'react'
import { classNames } from '../../utils'

interface IProps {
  index: number,
  children: JSX.Element
}

export default function TabPanelItem({ index, children }: IProps) {
  return (
    <Tab.Panel
      key={index}
      className={classNames(
        'rounded-xl bg-white p-3',
        'ring-white ring-opacity-60 ring-offset-2 ring-offset-blue-400 focus:outline-none focus:ring-2'
      )}
    >
      {children}
    </Tab.Panel>
  )
}
