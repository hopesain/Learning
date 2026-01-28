/*
	OPEN CLOSED PRINCIPLE

	Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

	We will implement a mechanism of unlock devices (phones and laptops), both bad approach and a good one.
*/


package main

var stored_password = "password1234"

// Bad Approach.
type BadUnlockDevice struct {
	password string
}

func (b *BadUnlockDevice) Unlock() string {
	if (b.password != stored_password) {
		return "Incorrect password, try again"
	}
	return "Device unlocked, welcome back"
}

func (b *BadUnlockDevice) Lock() string {
	return "Device locked"
}

/*
	You might ask, why is this bad. Guess we have multiple ways of unlocking devices.
	You can use a fingerPrint, faceRecognition, Pattern, Voice, Password etc.
	So using the above code snippet, how do you plan to include these approaches.
	You mind must be going through if statements chaining.
	Relax my friend, we will use a strategy pattern to make sure that we adhere to OCP.
*/

