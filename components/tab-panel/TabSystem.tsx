import { Tab } from '@headlessui/react'
import PostList from '../post/PostList'
import AddPost from '../post/AddPost'
import TabItem from './TabItem'
import TabPanelItem from './TabPanelItem'

export default function TabPanel() {
  return (
    <div className="w-full max-w-md px-2 py-16 sm:px-0">
      <Tab.Group>
        <Tab.List className="flex space-x-1 rounded-xl bg-blue-900/20 p-1">
          <TabItem label='Dashboard' />
          <TabItem label='Posts' />
          <TabItem label='Settings' />
        </Tab.List>
        <Tab.Panels className="mt-2">
          <TabPanelItem index={0}>
            <h3>Dashboard content</h3>
          </TabPanelItem>
          <TabPanelItem index={1}>
            <>
              <PostList />
              <AddPost />
            </>
          </TabPanelItem>
          <TabPanelItem index={2}>
            <h3>Settings</h3>
          </TabPanelItem>
        </Tab.Panels>
      </Tab.Group>
    </div>
  )
}
