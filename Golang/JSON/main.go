package main

import (
	"encoding/json"
	"fmt"
	"log/slog"
)

func main() {
	fmt.Println("Hello world!!")

	newUser := User{
		ID: 1,
		FirstName: "Hope",
		LastName: "Sain",
		Age: 24,
	}

	n, err := json.MarshalIndent(newUser, "", " ")
	if err != nil {
		slog.Error("Unable to marshal", "error", err)
	}

	fmt.Println(string(n))
}

type User struct {
	ID int `json:"id"`
	FirstName string `json:"first_name"`
	LastName string `json:"last_name"`
	Age int `json:"age"`
}

