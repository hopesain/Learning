package main

import (
	"fmt"
)

func main() {
	// Single Responsibility Principle Usage.
	fileManager := &FileManager{
		filename: "NNDI_Report.csv",
	}
	fmt.Println(fileManager.ReadFile())
	fmt.Println(fileManager.WriteFile())

	zipFileManager := &ZipFileManager{
		filename: "fintech_report.doc",
	}
	fmt.Println(zipFileManager.Compress())
	fmt.Println(zipFileManager.Decompress())

	// Open Closed Principle Usage.
	
}
