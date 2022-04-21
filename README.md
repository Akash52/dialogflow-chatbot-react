# Dialogflow ChatBot
---

[Live Demo](https://dialogflowchatbot.netlify.app/)

##  About <a name = "about"></a>

### Here I will make a chatbot using Dialogflow, that helps users to plan a trip. From booking flight tickets to booking hotel rooms. It also provides functionality to book taxis to make thir trip easy.

## Bot message input
 - user :  Book flight
 - bot : what date do you want me to book tickets for ?
 - user : 20th november
 - bot : where are you flying from ?
 - user : Banglore
 - bot : Where are you flying to ?
 - user : Rajkot
 - bot : Done! I've booked your flight tickets to 2021-10-20T12:00:00+06:00 , flying from Bengaluru to Rajkot


### Prerequisites

- [NodeJS](https://nodejs.org/en/)
- [Git Bash](https://git-scm.com/downloads)


### Installing 

#### Front-End

```
 # git clone https://github.com/Akash52/dialogflow-chatbot-react
   cd dialogflow-chatbot-react
  
 # npm install (these command install relevant dependencies)
   npm start 
  
  The demo will be live at http://localhost:3000/
 
```
#### Back-End

```
 # inside Server Folder
   npm install
   npm start
   The serve will be live at http://localhost:5000/
   
 # Setup Your Google Dialogflow Creadintial  
 
 - Create config.js file
 
 const dialogflowConfig = {
  type: 'service_account',
  project_id: 'rmcbot-srkm',
  private_key_id: '',
  private_key:
    '-----BEGIN PRIVATE KEY-----***----END PRIVATE KEY-----\n',
  client_email: '',
  client_id: '',
  auth_uri: 'https://accounts.google.com/o/oauth2/auth',
  token_uri: 'https://oauth2.googleapis.com/token',
  auth_provider_x509_cert_url: 'https://www.googleapis.com/oauth2/v1/certs',
  client_x509_cert_url:
    '',
}

module.exports = dialogflowConfig
 ```
[dialogflow-v2-authentication](https://medium.com/@tzahi/how-to-setup-dialogflow-v2-authentication-programmatically-with-node-js-b37fa4815d89)

 ## Features
 



## ⛏️ Built Using <a name = "built_using"></a>


- [ReactJS](https://reactjs.org/)
- [tailwindCSS](https://tailwindcss.com/)
- [NodeJS](https://react-bootstrap.github.io/)
- [ExpressJS](https://expressjs.com/)
- [Dialogflow](https://dialogflow.cloud.google.com/)

## Sample


                                                                                                                                                                                


### 🎉 Acknowledgements & Inspiration
- [sharmaritesh3312.medium](https://codeburst.io/building-scalable-chatbots-in-react-with-dialogflow-1091ff462e40)
- [https://github.com/Akash52/react-chat-ui](https://github.com/Akash52/react-chat-ui)  




