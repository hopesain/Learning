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
