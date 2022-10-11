import { NextPage } from 'next'
import React, { useState } from 'react'
import { RegisterForm, RegisterLending } from '../../components'


const Register: NextPage = () => {

	const [showSetUpForm, setShowSetUpForm] = useState(false)
	const onStart = () => setShowSetUpForm(true)

	return showSetUpForm 
						? <RegisterForm /> 
						: <RegisterLending clickHandler={onStart}/> 
}

export default Register
