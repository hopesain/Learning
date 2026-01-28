/*
	OPEN CLOSED PRINCIPLE

	Software entities (classes, modules, functions, etc.) should be open for extension, but closed for modification.

	We will implement a mechanism of unlock devices (phones and laptops), both bad approach and a good one.
*/


package main

var stored_password = "password";

// Bad Approach.
type BadUnlockDevice struct {
	password string;
}

func (b *BadUnlockDevice) Unlock() string {
	if (b.password != stored_password) {
		return "Incorrect password, try again";
	}
	return "Device unlocked, welcome back";
}

func (b *BadUnlockDevice) Lock() string {
	return "Device locked";
}

/*
	You might ask, why is this bad. Guess we have multiple ways of unlocking devices.
	You can use a fingerPrint, faceRecognition, Pattern, Voice, Password etc.
	So using the above code snippet, how do you plan to include these approaches.
	You mind must be going through if statements chaining.
	Relax my friend, we will use a strategy pattern to make sure that we adhere to OCP.
*/

var stored_fingerprint = "fingerprint";

var stored_face_id = "face_id";

var stored_pin = "pin";

type UnlockMethod interface {
	Unlock(credential string) string;
}

type PasswordMethod struct {}

func (p *PasswordMethod) Unlock(credential string) string {
	if (credential != stored_password) {
		return "Incorrect password, try again.";
	}
	return "Device unlocked using password.";
}

type FaceRecognitionMethod struct {}

func (f *FaceRecognitionMethod) Unlock(credential string) string {
	if (credential != stored_face_id) {
		return "face cannot be recognized";
	}
	return "Device unlocked using FaceID";
}

type FingerprintMethod struct {}

func (f *FingerprintMethod) Unlock(credential string) string {
	if (credential != stored_fingerprint) {
		return "Fingerprint not recognized, try again";
	}
	return "Device unlocked using fingerprint";
}

// Dependency Inversion Principle.
type UnlockDeviceService struct {
	method UnlockMethod
}

func UnlockDevice(method UnlockMethod) *UnlockDeviceService {
	return &UnlockDeviceService{
		method: method,
	}
}

func (u UnlockDeviceService) Unlock(credential string) string {
	return u.method.Unlock(credential)
}
