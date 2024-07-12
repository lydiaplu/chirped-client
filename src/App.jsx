import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import Home from './components/home/Home'
import Profile from './components/profile/Profile'
import SocialPostList from './components/socialPostList/SocialPostList'
import FollowingList from './components/follow/followingList/FollowingList'
import FollowerList from './components/follow/followerList/FollowerList'

import Login from './components/login/Login'
import ProfileEdit from './components/profileEdit/ProfileEdit'
import RequireAuth from './components/requireAuth/RequireAuth'
import UserDirectory from './components/userDirectory/UserDirectory'


import { GlobalStyle } from './styles/Global.styles'
import ScrollTestFromOnline from './components/scrollTestFromOnline/ScrollTestFromOnline'
import RegisterUser from './components/registerUser/RegisterUser'

function App() {
  return (
    <>
      <GlobalStyle />

      <Router>
        <Routes>
          <Route path="/login" element={<Login />} />

          {/* <Route path="/" element={<RequireAuth><Home /></RequireAuth> } />
          <Route path="/profile" element={<RequireAuth><Home profile={true} /></RequireAuth> } />
          <Route path="/profile/following" element={<RequireAuth><Home profile={true} /></RequireAuth> } />
          <Route path="/profile/followers" element={<RequireAuth><Home profile={true} /></RequireAuth> } /> */}

          <Route path="/" element={<RequireAuth><Home /></RequireAuth>} >
            <Route index element={<SocialPostList postStyle={"public"} />} />
            <Route path="/profile" element={<SocialPostList postStyle={"profile"} />} />
            <Route path="/profile/:username" element={<SocialPostList postStyle={"profile"} />} />
            <Route path="/profile/following" element={<FollowingList />} />
            <Route path="/profile/followers" element={<FollowerList />} />
          </Route>

          <Route path="/profile/add" element={<RequireAuth><ProfileEdit /></RequireAuth>} />
          <Route path="/profile/edit/:userId" element={<RequireAuth><ProfileEdit /></RequireAuth>} />

          <Route path="/userdirectory" element={<RequireAuth><UserDirectory /></RequireAuth>} />


          <Route path="/register" element={<RegisterUser />} />

          <Route path="/scrolltest2" element={<ScrollTestFromOnline />} />



        </Routes>
      </Router>
    </>
  )
}

export default App
