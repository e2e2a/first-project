# Simple Scraper Project

This project is a simple web scraper built using Node.js and Puppeteer. It extracts data from a website, processes it, and saves the results into a JSON file. Perfect for beginners or anyone looking to automate web data extraction.

## Features

- Automates browsing using Puppeteer.
- Extracts and processes data from web pages.
- Saves scraped data to a JSON file.

---

## Requirements

1. **Node.js**: Ensure Node.js is installed on your system. [Download Node.js](https://nodejs.org/)

---

## Getting Started

Follow these steps to set up and run the scraper:

1. **Install Node.js**  
   - Download and install the latest version of Node.js from the [official website](https://nodejs.org/).

2. **Clone or Download this Project**  
   - Download or clone this repository to your local machine.

3. **Install Dependencies**  
   - Open a terminal in the project directory and run the following command:  
     ```bash
     npm install
     ```

4. **Start the Server**  
   - To start the server, run the following command in the terminal:  
     ```bash
     npm start
     ```

5. **Access the Scraper**  
   - Open your browser and go to:  
     ```
     http://localhost:8080/scrape
     ```
   - Input the location you want to scrape before proceeding.

---

## Output

- The scraped data will be saved to a JSON file named `product_data.json` in the project directory.

---

## Project Structure

- `controllers/scrape.js`: Contains the scraping logic.
- `product_data.json`: Stores the output of the scraper.

---

## Notes

- Ensure the target website allows scraping and complies with its terms of service.
- Modify the scraper logic as needed to suit your requirements.

---

## License

This project is open-source and available for personal or educational use.
