# Final-Hackathon---YourCard

## Problem Statement

This commercial bank’s international travel card is very popular with not just its own customers, but also many other bank customers. Business team is keen to provide various card usage analysis as dashboard to consumers that shows consumer spend and allows users to search easily. Could you think and create personalized dashboard that consumer can access from any of his / her devices/computers?

# Pro-Tip :Go to https://github1s.com/Amanhacker/YourCard-A-Full-Stack-Application for browsing through the code in the browser itself.

## Work Done
- Created a full-stack application "YourCard" from scratch which provides the card usage analysis of International Travel Card in the form of a customized dashboard for their users.
- Used Chart.js library for displaying the real-time user data in the form of different Charts in the dashboard. Added Card Blocking functionality for registered users.
- Users can see their consumer spend based on some filters such as category wise, month wise, etc and it also allows users to search any of their past transactions easily.
- This application has    
                1). Register Page for non-registered users. <br>
                2). Login page for registered users. <br>
                3). Personalized Dashboard to display the real-time transaction data in form of charts. <br>
                4). Search functionality module to search and filter out any of their past transactions. <br>
                5). Added Card Blocking functionality in case the card is stolen or lost. <br>
                6). A header, Hero-unit made using ng-carousel component of Angular, and a footer in Homepage of Application. <br>

## Technologies Used :

### FrontEnd
HTML, CSS, Carousel, Angular, Angular Material, JS Charts, Currency Layer API

### BackEnd
Spring Boot

### DataBase
MongoDb (since the data was unstructured)


Note:  "payment-done" is the main and final branch

## Steps to run the applications :-

1). Open the front-end folder in Visual Studio and run 
                               npm install
                               ng serve -o

2). Run Mongodb in your local system.                         
 
3). Open the BackEnd folder in IntelliJ Idea and run the below java folders in the below shown order :
            ServicediscoveryApplication.java -> GatewayApplication.java -> then Contact, Payment & UserAuthentication Application java files in any order.
            
4). You are good to open the full stack application in your local machine and play with all the functionalites of the website.
