package main

import (
	"fmt"
	"net/http"
)

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintln(w, "<h1>Not found, this page does not exist.</h1>")
		return
	}

	fmt.Fprintln(w, "<h1>Home Page</h1>")
}

func contactHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "<h1>Contact Page</h1>")
}

func aboutHandler(w http.ResponseWriter, r *http.Request) {
	fmt.Fprintln(w, "<h1>About Page</h1>")
}

func main() {
	http.HandleFunc("/", homeHandler)
	http.HandleFunc("/about/", aboutHandler)
	http.HandleFunc("/contact/", contactHandler)

	http.ListenAndServe(":8080", nil)

}
