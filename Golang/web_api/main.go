// Reference: https://opyjo.hashnode.dev/building-a-simple-rest-api-in-go

package main

import (
	"encoding/json"
	"fmt"
	"log/slog"
	"net/http"
	"os"
)

func init() {
	books = []Book{
		{ID: "1", Title: "1984", Author: "George Orwell"},
		{ID: "2", Title: "To Kill a Mockingbird", Author: "Harper Lee"},
		{ID: "3", Title: "The Great Gatsby", Author: "F. Scott Fitzgerald"},
	}
}

func main() {
	logger := slog.New(slog.NewJSONHandler(os.Stderr, nil))
	slog.SetDefault(logger)

	http.HandleFunc("/", helloworldHandler)
	http.HandleFunc("/greet", greetHandler)
	http.HandleFunc("/books", getBooks)
	http.HandleFunc("/book", getBook)

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

type Book struct {
	ID     string `json:"id"`
	Title  string `json:"title"`
	Author string `json:"author"`
}

var books []Book

func getBooks(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	json.NewEncoder(w).Encode(books)
}

//http://localhost:8080/book?id=1
func getBook(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	id := r.URL.Query().Get("id")

	for _, book := range books {
		if book.ID == id {
			json.NewEncoder(w).Encode(book)
			return 
		}
	}

	http.Error(w, "book not found", http.StatusNotFound)
}