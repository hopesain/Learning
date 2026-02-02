package main

import (
	"fmt"
	"net/http"
	"html/template"
	"path/filepath"
)

func renderTemplate(w http.ResponseWriter, template_path string) {
	t, err := template.ParseFiles(template_path)
	if err != nil {
		http.Error(w, "Internal Server Error", http.StatusInternalServerError)
		return 
	}
	t.Execute(w, nil)
}

func homeHandler(w http.ResponseWriter, r *http.Request) {
	if r.URL.Path != "/" {
		w.WriteHeader(http.StatusNotFound)
		fmt.Fprintln(w, "<h1>Not found, this page does not exist.</h1>")
		return
	}

	template_path := filepath.Join("templates", "home", "home.html")

	renderTemplate(w,template_path)
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
