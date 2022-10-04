import { NextPage } from 'next'
import React, { useState } from 'react'
import { SetUpForm, SetUpLending } from '../../components/forms/SetUpForm'


const SetUp: NextPage = () => {

	const [showSetUpForm, setShowSetUpForm] = useState(false)

	const onStart = () => setShowSetUpForm(true)

	return showSetUpForm ? <SetUpForm /> : <SetUpLending clickHandler={onStart}/> 
}

export default SetUp
