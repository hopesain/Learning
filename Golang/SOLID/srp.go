/*
	SINGLE RESPONSIBILITY PRINCIPLE
	This principle states that a class should have only one reason to change.

	Let's imagine that we have a File Manager, one approach adheres to SRP and the first one doesn't.

*/

// Without SRP adherence

package main

import (
	"fmt"
)

type BadFileManager struct {
	file_name string
}

func (bad_file_manager *BadFileManager) ReadFile() string {
	message := fmt.Sprintf("Opening file: %s", bad_file_manager.file_name);
	return message;
}

func (bad_file_manager *BadFileManager) WriteFile() string {
	message := fmt.Sprintf("Editing file: %s", bad_file_manager.file_name);
	return message;
}

func (bad_file_manager *BadFileManager) CompressFile() string {
	message := fmt.Sprintf("Compressing file: %s", bad_file_manager.file_name);
	return message;
}

func (bad_file_manager *BadFileManager) DecompressFile() string {
	message := fmt.Sprintf("Decompressing file: %s", bad_file_manager.file_name);
	return message;
}

// Adhering to the principle.
type FileManager struct {
	filename string
}

func (f *FileManager) ReadFile() string {
	message := fmt.Sprintf("Reading file: %s", f.filename);
	return message;
}

func (f *FileManager) WriteFile() string {
	message := fmt.Sprintf("Editing file: %s", f.filename);
	return message;
}

type ZipFileManager struct {
	filename string
}

func (z *ZipFileManager) Compress() string {
	message := fmt.Sprintf("Compressing file: %s", z.filename);
	return message;
}

func (z *ZipFileManager) Decompress() string {
	message := fmt.Sprintf("Decompressing file: %s", z.filename);
	return message;
}

// Usage.
