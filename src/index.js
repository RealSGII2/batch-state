import { useState } from 'react'

function batchState(...values) {
	const states = []

	for (const value of values) {
		let [state, setNewState] = useState(value)
		states.push(Object.assign(state, { set(v) { setNewState(v) } }))
	}

	return states
}

export default batchState
