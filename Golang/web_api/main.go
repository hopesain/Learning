package main

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"os"
)

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stderr, nil))
	slog.SetDefault(logger)

	http.HandleFunc("/", helloworldHandler)
	http.HandleFunc("/greet", greetHandler)
	
	fmt.Println("Hello world, it's Hope!")
	http.ListenAndServe(":8080", nil)

}

func helloworldHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "GET" {
		http.Error(w, "Method not allowed", http.StatusMethodNotAllowed)
		return
	}
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(http.StatusOK)

	json.NewEncoder(w).Encode(map[string]string{"message": "Hello world, I am Hope!"})
}


func greetHandler(w http.ResponseWriter, r *http.Request) {
	if r.Method != "POST" {
		http.Error(w, "method not supported", http.StatusMethodNotAllowed)
		return 
	}

	var body struct {
		FullName string `json:"fullname"`
	}

	err := json.NewDecoder(r.Body).Decode(&body)
	if err != nil || body.FullName == "" {
		http.Error(w, "Invalid request body", http.StatusBadRequest)
		return 
	}

	message := fmt.Sprintf("Hello %s! Nice to meet you.", body.FullName)

	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(map[string]string{
		"message": message,
	})
}