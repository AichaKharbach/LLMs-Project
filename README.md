# LLms Project - Intelligent Chatbot

## Team
- Guided by: Prof. Lotfi EL AACHAK
- Developers:
  - OUAHID Mariyam
  - KHARBACH Aicha
  - EL M’RABET Hanae
  - Fahmi Othmane

## Academic Year
2023/2024

## Introduction
This project aims to develop an intelligent chatbot using Retrieval-Augmented Generation (RAG), LangChain, and vector databases. The chatbot will be fine-tuned on a French corpus, primarily consisting of information about the Faculty of Sciences and Techniques of Tangier (FSTT) and its courses.

## Project Objective
The goal is to create a chatbot that can intelligently answer questions using advanced technologies like RAG, LangChain, and vector databases. The chatbot will be integrated into a web application using FastAPI for the backend and Angular for the frontend.

## Technologies Used
- LangChain
- Fine-Tuning
- BeautifulSoup and Selenium (for web scraping)
- FastAPI
- Angular

## Project Structure
1. *Backend*: Developed with FastAPI to handle requests and interactions with the language model.
2. *Frontend*: A single-page application (SPA) developed with Angular for a seamless user experience.
3. *Scraping*: Using BeautifulSoup and Selenium to collect necessary data.
4. *Language Model*: Fine-tuning language models on a corpus specific to FSTT.

## Prerequisites
- Python 3.8 or higher
- Node.js and npm

## Data Collection
To collect data on FSTT and its courses, we will use BeautifulSoup and Selenium. BeautifulSoup parses HTML pages to extract necessary information, while Selenium automates web navigation.

## Methodology

### Project Steps
1. *Requirements Definition*: Identify the needs and key features of the chatbot.
2. *Data Collection*: Use web scraping techniques to gather necessary information about FSTT.
3. *Data Preprocessing*: Clean and organize collected data to make it usable by language models.
4. *Backend Development*: Create the API with FastAPI to manage chatbot requests.
5. *Frontend Development*: Develop the user interface with Angular.
6. *Integration and Testing*: Integrate backend and frontend components and conduct tests to ensure the system functions properly.

### Backend Development
The backend will be developed using FastAPI for its high performance, scalability, and ease of development. It will manage user requests and integration with the language model.

### Frontend Development
The frontend will be a single-page application (SPA) developed in Angular, providing a smooth and responsive user experience.

### Model Training and Fine-Tuning
The language model will be fine-tuned on a corpus specific to FSTT. This step includes selecting the corpus, configuring fine-tuning parameters, and training the model to improve its performance on FSTT-related questions.

### User Interface Design
The user interface will be designed to be accessible and culturally aligned with the target audience. Emphasis will be placed on a smooth and intuitive user experience.

## Conclusion
This project aims to develop an intelligent chatbot capable of efficiently answering questions about the Faculty of Sciences and Techniques of Tangier (FSTT). By utilizing advanced technologies such as LangChain, vector databases, FastAPI, and Angular, we aim to provide a robust and responsive solution. A methodical approach and DevOps tools will ensure continuous integration and smooth deployment. For more details or to contribute, please refer to the specific sections of the project.
