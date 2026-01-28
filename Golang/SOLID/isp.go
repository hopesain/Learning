/*
	Interface Segregation Principle (ISP)
	It states that do not force any clients to implement an interface which is irrelevant to them.
	This one is straight forward, lol.
*/

package main

type Animal interface {
	Eat() string
	Sleep() string
	Fly() string
	Speak() string
}

type Dog struct{}

func (d *Dog) Eat() string {
	return "Dog is eating."
}

func (d *Dog) Sleep() string {
	return "Dog is sleeping."
}

// Forced to implement Fly(), even though it makes no sense as a dog cannot fly.
func (d *Dog) Fly() string {
	return "Dog cannot fly."
}

func (d *Dog) Speak() string {
	return "Dog is barking."
}
