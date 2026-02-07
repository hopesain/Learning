package main

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"os"

	"github.com/sanity-io/litter"
)

func main() {
	fmt.Println("Hello world!!")

	newUser := User{
		ID:        1,
		FirstName: "Hope",
		LastName:  "Sain",
		Age:       24,
	}

	n, err := json.MarshalIndent(newUser, "", " ")
	if err != nil {
		slog.Error("Unable to marshal", "error", err)
	}

	fmt.Println(string(n))

	var secondUser User

	byteFile, err := os.ReadFile("data.json")
	if err != nil {
		slog.Error("Unable to read the file", "error", err)
	}

	err = json.Unmarshal(byteFile, &secondUser)
	if err != nil {
		slog.Error("unable to marshal the json", "error", err)
	}

	litter.Dump(secondUser)
}

type User struct {
	ID        int    `json:"id"`
	FirstName string `json:"first_name"`
	LastName  string `json:"last_name"`
	Age       int    `json:"age"`
}
