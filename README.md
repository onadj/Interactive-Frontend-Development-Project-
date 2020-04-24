# Code Institute Milestone Project 2 - Interactive Frontend Development

---

Live Website: https://onadj.github.io/Motorhome-Lovers/

GitHub Repo: https://github.com/onadj/Motorhome-Lovers

---

My Milestone Project 2 is to used to display my skills learned in the following sections: HTML Fundamentals, CSS Fundamentals and  Javascript Fundamentals.

---

# UX

User stories:

I want to find out web page about MotorHomes.
I want to find some interest facts of MotorHomes.
I want to see what is benefits of RV's and why I would choose RV's for my holiday,... etc?
I want to find what are the most famous destinations to drive with RV's and point of interest.
I want to see top destinations on google maps.
I want to recommend a destination from my own experience via email.
I want to make my own checklist before travelling.
I want to join Club of MotorHome Lovers and find where is.
Strategy
Create a reading schedule for books, offering 2 tracks of information as an output:
How long does it take to read the entire book by reading n pages every n day(s)
How many pages do I need to read per n day(s) to be finished by a certain date

---

# Scope

Initial Input from the user:
Book title
Number of pages
Reading goal (date to finish or number of pages per read)
Further options selectable such as:
7 weekdays to enable or disable
What time the reading is happening (used for Google export)
How long a reading session normally is (used for Google export)
Output: Calendar with the days marked when the reading needs to happen, or a detailed schedule. The user has the following options to proceed:
Print a reading schedule
Export schedule to Google Calendar as calendar events (main calendar)
Structure
Four page designs:
 1.HOME PAGE =  (Dream Vacation) with a hero image, three short fact's about RV's, 5 benefits of traveling with MotorHome and Footer with Information about Motorhome Lovers(who we are etc), location on google maps where is Club of MotorHome Lovers, and Contact
 2.TOP DESTINATION = At this page user can see 8 top destination in the world to drive RV's:  in Scotland, California, East Coast Australia, Namibia, Japan, New Zealand, Chile and Canada. Every destination has description and map with markers with point of interest.
 3.RECOMEND TRIP = At this page user can recommend trip, there is form where user can put his own name, e-mail and text with recommended destination
 4. BEFORE YOU GO = At this page user can make his own checklist before going on trip(such as check house before leaving, money, documents, its RV ok for drive, spare tyre, water... User can add, mark as completed and delete when some of things is done.

---

# Skeleton
Wireframe


# Surface

Minimalistic design in shape of grey color.
I gave a lot of attention to the pages according to the photos and videos, so that the user would have a great travel experience and to get his attention.

---

# Features

Current Features:

Visualizing a information of MotorHome concept idea
Goals: Find page which has simplified information about RV's, find some facts about, find destination to travel, inform yourself of benefits, recommend trip, if choose to travel make own checklist
Responsive Design


Features Left to Implement:

Choosing Starting and End point of travel with Road route
Adding options to send images and videos from  RECOMEND TRIP page.
Adding calendar with Club Of MotorHome Lovers meeting
Adding parkways for Rv's

---

# Technologies used

HTML

CSS

JavaScript

Bootstrap 4.4.1 (getbootstrap.com)

jQuery 3.4.1 (jQuery.com) to access DOM elements quicker, and react to user input

Google Fonts (fonts.google.com)

GitPod (gitpod.io) IDE

GitHub (github.com) for sharing

Git (for version control)

Google Maps API for creating maps, markers

JS Software Development Kit (SDK) for sending emails (EmailJS)

---

# Deployment

This project was developed using the GitHub IDE, committed to git and pushed to GitHub
with following commands:

git init 

git add .

git commit -m "text-description of working stage on project"

git push -u origin master

python3 -m http.server(while working on project)


To deploy my website to GitHub Pages, the following steps were taken:

Log into GitHub.

Selected repository from GitHub dashboard.

Select ‘Settings’ at the top of the chosen repository.

Scroll down to GitHub Pages section.

Under ‘Source’ click the drop-down menu and select ‘Master Branch’.

Once selected, the page auto refreshed, and the website was deployed.
---

# Testing

I ran the code through validation services (https://validator.w3.org/, http://jigsaw.w3.org/css-validator/ and https://jshint.com/). The following errors still appear:

HTML: Attribute onreadystatechange not allowed on element script at this point. I left it as it is because this is the recommended link from the Google API.
CSS warning: ...is an unknown vendor extended pseudo-class. I left it in the code because it's the recommentded solution of w3schools to avoid displaying arrows in the number-inputfields. And: it works anyway.

---

# Credits

https://www.tripsavvy.com/ 
https://rvlifestyle.com/ 

https://en.wikipedia.org/ 

https://www.shutterstock.com/home 

https://coverr.co/

https://www.pexels.com/ 


Code
https://www.w3schools.com/ 

https://watchandcode.com/  

https://www.udemy.com/ 
https://developedbyed.com/ 

---

Whish to thanks all members of Code Institute active on Slack and ready to help on everything at random times, Tutors from Code Institute for big help, especially: Michael, Luca, Stephen, Kevin, Tim, Haley, Anna and Samantha.


