# Gaelic Games Network
The Gaelic Games Network (GGN) is a dynamic and interactive social media platform designed specifically for enthusiasts and followers of Gaelic Athletic Association (GAA) events, teams, and topics. This application provides a space for GAA fans to connect, discuss, and engage with the vibrant GAA community.

## Contents
- [Gaelic Games Network](#gaelic-games-network)
  - [Contents](#contents)
  - [User Experience](#user-experience)
    - [Project Objective](#project-objective)
    - [User Stories](#user-stories)
      - [Sprint 1](#sprint-1)
    - [Sprint 2](#sprint-2)
    - [Sprint 3](#sprint-3)
    - [Sprint 4](#sprint-4)
    - [Sprint 5](#sprint-5)
  - [Agile Methodology](#agile-methodology)
  - [Design](#design)
    - [Typography](#typography)
  - [Languages and Frameworks](#languages-and-frameworks)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Libraries Used](#libraries-used)

## User Experience

### Project Objective
Design and develop a social media application, Gaelic Games Network (GGN), that enables users to create and share posts related to Gaelic Athletic Association (GAA) events, teams, and topics. The app should allow users to tag posts with relevant hashtags, like, comment, and follow other users. The backend will be implemented using Django REST API, while the front end will be built using React, ensuring a seamless and engaging user experience. The objective is to provide a platform for GAA enthusiasts to connect, discuss, and engage with the GAA community.

### User Stories

#### Sprint 1
1. As a **User**, I can **view a navbar on every page** so that **I can navigate between pages**
2. As a **User**, I can **navigate through pages quickly**  so that **I can view content without pages refreshing**
3. As a **User**, I can **create an account**  so that **I can gain full features of the website**
4. As a **User**, I can **sign in**  so that **I can regain site full features**
5. As a **User**, I can **tell if I’m logged in** so that **gain full functionality of the website**
6. As a **User**, I can **see sign-in and sign-out pages**  so that **I can sign in/sign up**
7. As a **User**, I can **view avatars** so that **I can identify other other users**
8. As a **User**, I can **have my logged-in status until I choose to log out** so that **my experience isn't compromised**

### Sprint 2
1. As a **Logged In User**, I can **create a post**  so that **I can share my latest updated**
2. As a **User**, I can **view a post** so that **I can learn more about that post**
3. As a **Logged In User**, I can **like a post** so that **I can show my support to other users**

### Sprint 3
1. As a **User**, I can **view the most recent posts in order by the most recently created**  so that **keep up to date with new content**
2. As a **User**, I can **search for posts that have tags** so that **I can find posts related to my search**
3. As a **Logged In User**, I can see a list of posts from users that I follow so that I can keep up to date with their posts
4. As a **User**, I can **keep scrolling through posts automatically** so that **I don’t have to click next page**

### Sprint 4
1. As a **User**, I can **view a pos** so that **I can view a list of comments on posts**
2. As a **Post Owner**, I can **edit my post** so that **I can make any corrections or update the post**
3. As a **Logged In User**, I can **post a comment on a post** so that **I can share my opinion on the post**
4. As a **User**, I can **see the date on a comment** so that **I know how old the comment is**
5. As a **User**, I can **comment on a post** so that **I can see what other users thought about the post**
6. As a **Comment Owner**, I can **delete my own comment on a post** so that **I can control my own comments**
7. As a **comment Owner**, I can **edit a comment on a post** so that **I can correct or update the comment**

### Sprint 5
1. As a **User**, I can **view other users** so that **I can see their posts and learn more about them**
2. As a **User**, I can **see a list of the most followed user profiles** so that **I can see which profiles are popular**
3. As a **User**, I can **see stats on a specific user profile page** so that **I can learn more about the user**
4. As a **Logged In User**, I can **follow and unfollow other users** so that **I can see or remove posts by specific users**
5. As a **Logged In User**, I can **edit my profile** so that **I can keep my profile update**
6. As a **User**, I can **update my username and password** so that **I can change my displayed name and keep my account secure**
7. As a **Logged In User**, I can **save a post** so that I can view it later

## Agile Methodology 
To create the Gaelic Games Network, I embraced the Agile methodology, ensuring a flexible and iterative development process. I initiated the project with a well-defined mascot method, establishing the project’s identity and vision. I then categorized features into “Must-Have” for core functionality, “Should-Have” for important but not critical elements, “Could-Have” for desirable additions, and “Won’t-Have” for items outside the project’s scope.

In addition to this, I incorporated the “Sprints” approach within Agile. By dividing the project timeline into sprints, typically lasting one to two weeks, I focused on delivering specific sets of features and functionalities. This allowed for incremental progress and regular feedback, enhancing the project’s adaptability.

GitHub Projects’ Kanban board was instrumental in tracking and managing tasks during each sprint. It provided a visual representation of the project’s status, enabling me to move tasks through various stages, prioritize them based on their importance, and react to changing requirements.

This combined approach ensured that the Gaelic Games Network was developed efficiently and effectively, accommodating adjustments and improvements along the way, ultimately leading to a successful outcome.

Link to [Gaelic Games Network GitHub Project Board](https://github.com/users/EdwardShanahan07/projects/11)

## Design

### Typography
Games Network features the [Montserrat](https://fonts.google.com/specimen/Montserrat) font as its primary typeface. Montserrat is a contemporary and elegant font that complements the website beautifully.
![](./readme-assets/typography.png)

## Languages and Frameworks

### Languages
- Python3
- JavaScript
- HTML and CSS

### Frameworks
- Django
- React
- Bootstrap

### Libraries Used
- django-3.2.22
- django-cloudinary-storage-0.3.0
- Pillow-8.2.0
- djangorestframework==3.12.4
- django-filter-23.2
- dj-rest-auth==2.1.9
- dj-rest-auth[with_social]
- djangorestframework-simplejwt==4.7.2
- dj_database_url
- gunicorn
- django-cors-headers
- psycopg2
- urllib3==1.26.15
- react==17.0.2
- react-bootstrap
- react-infinite-scroll-component
- msw
- jwt-decode
- eslint
