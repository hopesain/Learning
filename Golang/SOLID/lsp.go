/*
	Liskov Substitution Principle (LSP)
	The Liskov Substitution Principle states that a subclass should be able to be used in place of its superclass, without causing any issues.
	In other words, subclasses should behave in a way that does not break the expectations set by their parent class.

	To see this in action, we will use a payment process example, where we will be accepting payments from multiple gateways, but one gateway should have minimum amount restriction.
*/

package main

import (
	"fmt"
)

type PaymentMethod interface {
	Pay(amount int) string
}

type PaychanguMethod struct{}

func (p *PaychanguMethod) Pay(amount int) string {
	message := fmt.Sprintf("K%d paid using payChangu.", amount)
	return message
}

type OnekhusaMethod struct{}

func (o *OnekhusaMethod) Pay(amount int) string {
	message := fmt.Sprintf("K%d paid using oneKhusa.", amount)
	return message
}

type MalipoMethod struct{}

// Let's assume that Malipo only accepts payment above K10,000.
func (m *MalipoMethod) Pay(amount int) string {
	if amount < 10000 {
		message := "Amount cannot be less than K10,000 when using Malipo."
		return message
	}
	message := fmt.Sprintf("K%d paid using Malipo.", amount)
	return message
}

// The above code violates the LSP, because they all do not have the same behaviour.

// Dependency Inversion Principle
type PaymentProcessor struct {
	method PaymentMethod
}

func ProcessPayment(method PaymentMethod) *PaymentProcessor {
	return &PaymentProcessor{
		method: method,
	}
}

// The restriction should be implemented here. Otherwise, refactor.
func (p *PaymentProcessor) Pay(amount int) string {
	return p.method.Pay(amount)
}
