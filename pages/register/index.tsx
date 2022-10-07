import { NextPage } from 'next'
import React, { useState } from 'react'
import { RegisterForm, RegisterLending } from '../../components'


const SetUp: NextPage = () => {

	const [showSetUpForm, setShowSetUpForm] = useState(false)
	const onStart = () => setShowSetUpForm(true)

	return showSetUpForm 
						? <RegisterForm /> 
						: <RegisterLending clickHandler={onStart}/> 
}

export default SetUp
