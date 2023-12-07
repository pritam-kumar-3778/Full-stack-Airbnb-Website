# Full-stack-Airbnb-Website
It is a full stack Airbnb type website using MERN stack.

[[[ Basic Introduction about this project ]]]


1 : This a full responsive, full stack web application.

2 : In this website a person can create account then rent the house, apartment or hotel by upload basic information, like photo, price, location etc.

3: Those who are interested to visit, they can explore the home for rent and as their choice and they can easily get.

[[[ Name of the project ]]]

[[ HouseHarbor ]]

The name HouseHarbor means : The name "HouseHarbor" is a combination of two words: "House" and "Harbor." In this context, it's intended to convey the idea of a secure and welcoming place to stay, much like a harbor provides a safe and sheltered place. The combination suggests a comforting and secure environment for individuals looking for a home, apartment, or hotel to rent. It conveys a sense of refuge and a place where people can find comfort and peace during their stay.

[[[ Technology used ]]]


1 : Front End : HTML, CSS, JavaScript

2 : Back End : Node JS, Express JS

3 : database : MongoDB

{ I devide this website into three phases to build. }

[[[ Phase 1 ]]]


1 : Create listing

2 : Click on cards and go to the details.

3 : Make changes or edit the info

4 : Add new list (home, appartment, hotel etc)

[ Getting Started ]


1 : Database setup

2 : REST APIs for CRUD (Create, Read, Update, Delete)

[ Basic setup ]

1 : npm init -y ( package. json )

2 : npm i express ( Install express )

3 :  npm i ejs ( ejs files )

4 : npm i mongoose ( mongoose( mongoDB ) )

5 : Create a folder ( app.js )

(In app.js file I write code of : require express,ejs,mongoose), define post number, test the server working or not, connect mongo db, 

[ Model : Listing ]

> title (String)

> description (String)

> image (URL / Link) (String)

> price (Number)

> location (String)

>country (String)

-- Create a folder called "models" and inside that I create all the models --