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
    - [Wireframes](#wireframes)
    - [React Components](#react-components)
    - [Database Design](#database-design)
      - [NavBar](#navbar)
      - [NotFound](#notfound)
      - [Home](#home)
      - [DropDownMenu](#dropdownmenu)
      - [ProfileEditDropdown](#profileeditdropdown)
      - [Avatar](#avatar)
      - [Asset](#asset)
  - [Features](#features)
  - [Languages and Frameworks](#languages-and-frameworks)
    - [Languages](#languages)
    - [Frameworks](#frameworks)
    - [Libraries Used](#libraries-used)
  - [Testing](#testing)
    - [Validation](#validation)
    - [Lighthouse](#lighthouse)
    - [User Stories Testing](#user-stories-testing)
    - [Bugs](#bugs)
  - [Acknowledgments](#acknowledgments)
    - [Code Used](#code-used)
    - [Resouces](#resources)  

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

### Colour
![](./readme-assets/coolors.png)

### Wireframes
Wireframes were created using [Figma](https://www.figma.com/).
<details>
  <summary>Home Page</summary>
  
  ![](./readme-assets/wireframe-home.png)
</details>

<details>
  <summary>Sign In Page</summary>
  
  ![](./readme-assets/wireframe-signin.png)
</details>

<details>
  <summary>Sign Up Page</summary>
  
  ![](./readme-assets/wireframe-signup.png)
</details>

<details>
  <summary>Discover Page</summary>
  
  ![](./readme-assets/wireframe-discover.png)
</details>

<details>
  <summary>Feed Page</summary>
  
  ![](./readme-assets/wireframe-feed.png)
</details>

<details>
  <summary>Post Page</summary>
  
  ![](./readme-assets/wireframe-post-page.png)
</details>

### React Components

#### NavBar

##### Description:
The NavBar component is responsible for rendering a navigation bar at the top of the web application. It adapts its content and behaviour based on the user’s authentication status. When a user is logged in, it displays links for various user-related actions and features, such as creating posts, discovering content, and signing out. When a user is logged out, it provides links for signing up and signing in.

##### Props:
None

##### Usage:
To use this component in your application, you can import it and place it within your application’s layout or wherever navigation is needed. Depending on the user’s authentication status, the NavBar component will dynamically display relevant links and actions.

```
<NavBar />
```

#### NotFound

##### Description:
The NotFound component is responsible for rendering a user-friendly “404 Not Found” error page in the web application. When a user navigates to a non-existent page or resource, this component is displayed to inform the user that the requested page cannot be found. It includes an image, a message, and a button to navigate back to the home page.

##### Props
None

##### Usage:
To use this component in your application, you can import it and display it whenever a 404 error is encountered. It provides a user-friendly way to handle cases when a page is not found.

```
<NotFound />
```

#### Home

##### Description:
The Home component represents the landing page of the web application. It provides an introduction to the application’s purpose, encouraging users to sign up. The page features a title, a brief description, and an image, all designed to create an inviting atmosphere for potential users.

##### Props
None

##### Usage:
This component is typically used as the initial landing page for the application. It’s where users first arrive when they access the application’s URL.

```
<Home />
```

#### DropDownMenu

##### Description:
The DropDownMenu component represents a generic dropdown menu typically used to provide options or actions for an item or element. It is designed to be a reusable dropdown menu component. When activated, it displays a toggle button with three dots (”…”) that, when clicked, opens a dropdown containing items like “Edit” and “Delete.”

##### Props
- handleEdit: A function to be executed when the “Edit” option is clicked.
- handleDelete: A function to be executed when the “Delete” option is clicked.

##### Usage:
This component can be used in various parts of the application to provide dropdown menus for items that need editing or deleting.

```
<DropDownMenu />
```

#### ProfileEditDropdown

##### Description:
The ProfileEditDropdown component is specifically designed for a profile editing menu. It provides options for editing a user’s profile, changing their username, and changing their password. The dropdown contains options with icons and labels, making it easy for users to navigate to different parts of their profile for editing.

##### Props
id: The ID of the user’s profile.

##### Usage:
This component can be used in the user profile section to provide a menu for editing various aspects of the user’s profile.

```
<ProfileEditDropdown />
```

#### Avatar

##### Description:
The Avatar component is responsible for displaying user avatars or profile pictures within the web application. It can display both an image (specified by the src prop) and optional text or additional content. The component allows customization of the avatar’s height and width.

##### Props
- src (string): The source URL of the image to be displayed as the avatar.
- height (number, optional): The height of the avatar image. Default is 45 pixels.
- text (string, optional): Additional text or content to be displayed alongside the avatar image.

##### Usage:
This component can be used to display user avatars or profile pictures throughout the application, customizing the avatar’s appearance and optionally adding associated text or content.

```
<Avatar />
```

#### Asset

##### Description:
The Asset component is a versatile component for rendering assets in a web application. It can display different types of content based on the props provided, including a loading spinner, an image, and an optional message. This flexibility makes it suitable for showing content while loading, images, or messages within different parts of the application.

##### Props
- spinner (boolean): Indicates whether to display a loading spinner (true) or not (false).
- src (string): The source URL of an image to display.
- message (string, optional): An optional message or text content to be displayed below the spinner or image

##### Usage:
This component can be used in various parts of the application to display different types of assets, whether it’s a loading spinner during data retrieval, images, or accompanying messages

```
<Asset />
```

### Databse Design
![](./readme-assets/erd.png)

## Features

### NavBar
- Depending on the user's sign-in status, the navigation links will vary.
- When the user is signed in, additional features and functionality will be accessible.

<details>
  <summary>Navbar Unregister</summary>
  
  ![](./readme-assets/feature-navbar-unregister.png)
</details>

<details>
  <summary>Navbar register</summary>
  
  ![](./readme-assets/feature-navbar-register.png)
</details>

### Home Page
- The homepage features an image introductory text designed to provide users with information about the site

<details>
  <summary>Home Page</summary>
  
  ![](./readme-assets/feature-home.png)
</details>

### Discover Page
- The Discover page includes a search bar that enables users to search for posts or usernames.
- It also features a popular user section, allowing users to view the most followed users.
- Furthermore, all users' posts are displayed on the Discover page.

<details>
  <summary>Discover Page</summary>
  
  ![](./readme-assets/feature-discover.png)
</details>

### Sign Up Page
- On the sign-up page, users will find a registration form requiring the input of a username and password.
- This form is equipped with validation mechanisms to assess the credibility of the provided information.

<details>
  <summary>Sign Up</summary>
  
  ![](./readme-assets/feature-signup.png)
</details>

### Sign In Page
- On the sign-in page, users will encounter a login form where they are prompted to enter a username and password.
- This form is equipped with validation mechanisms to verify the credibility of the provided information.

<details>
  <summary>Sign In</summary>
  
  ![](./readme-assets/feature-sign-in.png)
</details>

### Feed Page
- The feed page contains all posts from users that the user follows

<details>
  <summary>Feed</summary>
  
  ![](./readme-assets/feature-feed.png)
</details>

### Create Post
- The Create Post page includes a form where users can upload an image, share their thoughts, and add tags to their post.

<details>
  <summary>Create Post</summary>
  
  ![](./readme-assets/feature-create-post.png)
</details>

### Edit Post Page
- Users have the ability to edit their posts to make modifications or updates.
- Users also have the ability to delete a post

<details>
  <summary>Edit Post</summary>
  
  ![](./readme-assets/feature-edit-post.png)
</details>

### Saved Posts Page
- Users can access a list of saved posts for viewing.

<details>
  <summary>Saved Posts</summary>
  
  ![](./readme-assets/feature-saved.png)
</details>

### Post Page
- Users can view individual posts and, if available, a list of comments on the page.
- If logged in, users can create comments.
- Additionally, users can edit their own comments if they have posted them.

<details>
  <summary>Post</summary>
  
  ![](./readme-assets/feature-post-page.png)
</details>

### Profile Page
- Users have a dedicated profile page where they can access their personal information.
- On this page, users can view their post count, as well as the number of users they follow and their followers.
- Users can also specify their supported country and club team.

<details>
  <summary>Profile</summary>
  
  ![](./readme-assets/feature-profile.png)
</details>

### Edit Profile
- Users have the option to edit their profile, allowing them to change their username, password, and personal details.

<details>
  <summary>Edit Profile</summary>
  
  ![](./readme-assets/feature-edit-profile.png)
</details>

<details>
  <summary>Change Username</summary>
  
  ![](./readme-assets/feature-username.png)
</details>

<details>
  <summary>Change Password</summary>
  
  ![](./readme-assets/feature-password.png)
</details>

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
- whitenoise==6.4.0

## Testing

### Validation

#### Python
Python code was validated using [Pep8ci](https://pep8ci.herokuapp.com/). No errors when validating code.

##### drf_api

<details>
  <summary>settings.py</summary>
  
  ![](./readme-assets/drf-settings.png)
</details>

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/drf-views.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/drf-serializer.png)
</details>

<details>
  <summary>permissions.py</summary>
  
  ![](./readme-assets/drf-permissions.png)
</details>

<details>
  <summary>urls.py</summary>
  
  ![](./readme-assets/drf-url.png)
</details>

##### profiles

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/profile-views.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/profile-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/profile-model.png)
</details>

##### posts

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/post-view.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/post-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/post-model.png)
</details>

##### comments

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/comment-view.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/comment-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/comment-model.png)
</details>

##### likes

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/like-view.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/like-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/like-model.png)
</details>

##### saves

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/save-view.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/save-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/save-model.png)
</details>

##### followers

<details>
  <summary>views.py</summary>
  
  ![](./readme-assets/follower-view.png)
</details>

<details>
  <summary>serializer.py</summary>
  
  ![](./readme-assets/follower-serializer.png)
</details>

<details>
  <summary>models.py</summary>
  
  ![](./readme-assets/follower-model.png)
</details>

#### HTML
HTML was validated using [Wc3 Markup Validation](https://validator.w3.org/). No errors were found.

<details>
  <summary>Home</summary>
  
  ![](./readme-assets/home-html.png)
</details>

<details>
  <summary>Sign Up</summary>
  
  ![](./readme-assets/signup-html.png)
</details>

<details>
  <summary>Sign Up</summary>
  
  ![](./readme-assets/signin-html.png)
</details>

<details>
  <summary>Discover</summary>
  
  ![](./readme-assets/discover-html.png)
</details>

<details>
  <summary>Feed</summary>
  
  ![](./readme-assets/feed-html.png)
</details>

<details>
  <summary>Post Create</summary>
  
  ![](./readme-assets/post-create-html.png)
</details>

<details>
  <summary>Post Edit</summary>
  
  ![](./readme-assets/posts-edit.png)
</details>

<details>
  <summary>Post Page</summary>
  
  ![](./readme-assets/post-edit-html.png)
</details>

<details>
  <summary>Profile</summary>
  
  ![](./readme-assets/profile-html.png)
</details>

<details>
  <summary>Profile Edit</summary>
  
  ![](./readme-assets/profile-edit-html.png)
</details>

<details>
  <summary>Profile Edit Username</summary>
  
  ![](./readme-assets/profile-edit-username-html.png)
</details>

<details>
  <summary>Profile Edit Password</summary>
  
  ![](./readme-assets/profile-password-html.png)
</details>


#### HTML
CSS was validated using [jigsaw CSS Validation](https://jigsaw.w3.org/css-validator/). No errors were found.

<details>
  <summary>App.module.css</summary>
  
  ![](./readme-assets/app-css.png)
</details>

<details>
  <summary>Asset.module.css</summary>
  
  ![](./readme-assets/asset-css.png)
</details>

<details>
  <summary>Avatar.module.css</summary>
  
  ![](./readme-assets/avatar-css.png)
</details>

<details>
  <summary>Button.module.css</summary>
  
  ![](./readme-assets/button-css.png)
</details>

<details>
  <summary>Comment.module.css</summary>
  
  ![](./readme-assets/comment-css.png)
</details>

<details>
  <summary>DropDown.module.css</summary>
  
  ![](./readme-assets/dropdown-css.png)
</details>

<details>
  <summary>Home.module.css</summary>
  
  ![](./readme-assets/home-css.png)
</details>

<details>
  <summary>NavBar.module.css</summary>
  
  ![](./readme-assets/navbar-css.png)
</details>

<details>
  <summary>NotFound.module.css</summary>
  
  ![](./readme-assets/not-found-css.png)
</details>

<details>
  <summary>Post.module.css</summary>
  
  ![](./readme-assets/post-css.png)
</details>

<details>
  <summary>PostCreate.module.css</summary>
  
  ![](./readme-assets/post-create.png)
</details>

<details>
  <summary>PostPage.module.css</summary>
  
  ![](./readme-assets/post-page-css.png)
</details>

<details>
  <summary>SignUp.module.css</summary>
  
  ![](./readme-assets/signup-css.png)
</details>

#### JSX
JSX was validated using [EsLint](https://eslint.org/). No errors were found.

<details>
  <summary>App.js</summary>
  
  ![](./readme-assets/app.png)
</details>

<details>
  <summary>Components</summary>
  
  ![](./readme-assets/components.png)
</details>

<details>
  <summary>api</summary>
  
  ![](./readme-assets/api.png)
</details>

<details>
  <summary>contexts</summary>
  
  ![](./readme-assets/context.png)
</details>

<details>
  <summary>hooks</summary>
  
  ![](./readme-assets/hooks.png)
</details>

<details>
  <summary>auth</summary>
  
  ![](./readme-assets/auth.png)
</details>

<details>
  <summary>comments</summary>
  
  ![](./readme-assets/comment.png)
</details>

<details>
  <summary>posts</summary>
  
  ![](./readme-assets/posts.png)
</details>

<details>
  <summary>profiles</summary>
  
  ![](./readme-assets/app.png)
</details>

<details>
  <summary>utils</summary>
  
  ![](./readme-assets/utils.png)
</details>

### Lighthouse
I used Google Chrome developer tools to test the performance and accessibility of the site. The results came back good.

<details>
  <summary>Lighthouse Desktop</summary>
  
  ![](./readme-assets/lighthouse-desktop.png)
</details>

<details>
  <summary>Lighthouse mobile</summary>
  
  ![](./readme-assets/lighthouse-mobile.png)
</details>

### User Stories Testing

#### As a **User**, I can **view a navbar on every page** so that **I can navigate between pages**

| Action  |  Expected | Results  |
|---|---|---|
| Navigate to every page  | Navbar should be present on every page  | Pass  |

#### As a **User**, I can **navigate through pages quickly**  so that **I can view content without pages refreshing**

| Action  |  Expected | Results  |
|---|---|---|
| Navigate to every page  | Page should not refresh when navigating   | Pass  |

#### As a **User**, I can **create an account**  so that **I can gain full features of the website**

| Action  |  Expected | Results  |
|---|---|---|
| Signup for an account  | When I sign up I should gain access to the website's full features   | Pass  |

#### As a **User**, I can **sign in**  so that **I can regain site full features**

| Action  |  Expected | Results  |
|---|---|---|
| Sigin to my account  | When I sign in, I should be logged in to my account   | Pass  |

#### As a **User**, I can **tell if I’m logged in** so that **gain full functionality of the website**

| Action  |  Expected | Results  |
|---|---|---|
| Display logged-in nav links  | When I sign in, I should see a different nav link   | Pass  |

#### As a **User**, I can **see sign-in and sign-out pages**  so that **I can sign in/sign up**

| Action  |  Expected | Results  |
|---|---|---|
| Click sign out button  | When I sign out I should be logged out of my account  | Pass  |

#### As a **User**, I can **view avatars** so that **I can identify other other users**

| Action  |  Expected | Results  |
|---|---|---|
| User's avatars display  | User's avatars should be visible   | Pass  |

#### As a **User**, I can **have my logged-in status until I choose to log out** so that **my experience isn't compromised**

| Action  |  Expected | Results  |
|---|---|---|
| No action  | Refresh token is activated until 24 hours without activity | Pass  |

#### As a **Logged In User**, I can **create a post** so that **I can share my latest updated**

| Action  |  Expected | Results  |
|---|---|---|
| Click the Create Post Link  | When I create a post it should be shared with other users | Pass  |

#### As a **User**, I can **view a post** so that **I can learn more about that post**

| Action  |  Expected | Results  |
|---|---|---|
| Click on a post  | When I click on a post I should be brought to the post detail page | Pass  |

#### As a **Logged In User**, I can **like a post** so that **I can show my support to other users**

| Action  |  Expected | Results  |
|---|---|---|
| Like a post  | When I click the like button I should be able to like the post | Pass  |

#### As a **User**, I can **view the most recent posts in order by the most recently created**  so that **keep up to date with new content**

| Action  |  Expected | Results  |
|---|---|---|
| Click the Discover page  | When I click the Discover page I should see the latest posts | Pass  |

#### As a **User**, I can **search for posts that have tags** so that **I can find posts related to my search**

| Action  |  Expected | Results  |
|---|---|---|
| Input text into search bar  | When I search for a post I should be able to see that post | Pass  |

#### As a **Logged In User**, I can see a list of posts from users that I follow so that I can keep up to date with their posts

| Action  |  Expected | Results  |
|---|---|---|
| Click the Feed link  | When I click the feed link I should see posts from users that I follow | Pass  |

#### As a **User**, I can **keep scrolling through posts automatically** so that **I don’t have to click next page**

| Action  |  Expected | Results  |
|---|---|---|
| Scroll through posts  | When scrolling through posts I should see new posts loading | Pass  |

#### As a **User**, I can **view a post** so that **I can view a list of comments on posts**

| Action  |  Expected | Results  |
|---|---|---|
| Click on post  | When I click on a post I should see a list of comments on that post | Pass  |

#### As a **Post Owner**, I can **edit my post** so that **I can make any corrections or update the post**

| Action  |  Expected | Results  |
|---|---|---|
| Click the edit post menu  | When I click the edit post menu I should be brought to the edit post page | Pass  |

#### As a **Logged In User**, I can **post a comment on a post** so that **I can share my opinion on the post**

| Action  |  Expected | Results  |
|---|---|---|
| Create a comment on a post  | When I post a comment I should see it listed | Pass  |

#### As a **User**, I can **see the date on a comment** so that **I know how old the comment is**

| Action  |  Expected | Results  |
|---|---|---|
| Display comment date  | I should see when the comment was posted | Pass  |

#### As a **User**, I can **comment on a post** so that **I can see what other users thought about the post**

| Action  |  Expected | Results  |
|---|---|---|
| Display a list of comments  | When I click on a post I should see a list of comments | Pass  |

#### As a **Comment Owner**, I can **delete my own comment on a post** so that **I can control my own comments**

| Action  |  Expected | Results  |
|---|---|---|
| Click the comment menu on comment  | When I click the comment menu and click the delete the comment should be deleted | Pass  |

#### As a **comment Owner**, I can **edit a comment on a post** so that **I can correct or update the comment**

| Action  |  Expected | Results  |
|---|---|---|
| Click the comment menu on comment  | When I click the comment menu and click the edit button I should be able to edit my comment  | Pass  |

#### As a **User**, I can **view other users** so that **I can see their posts and learn more about them**

| Action  |  Expected | Results  |
|---|---|---|
| Click on a user profile  | When I click on a user profile I should be brought to their page  | Pass  |

#### As a **User**, I can **see a list of the most followed user profiles** so that **I can see which profiles are popular**

| Action  |  Expected | Results  |
|---|---|---|
| Display popular users list  | I should see the most popular users  | Pass  |

#### As a **User**, I can **see stats on a specific user profile page** so that **I can learn more about the user**

| Action  |  Expected | Results  |
|---|---|---|
| Click on user profile  | When I go to a user profile I should see stats about the user  | Pass  |

#### As a **Logged In User**, I can **follow and unfollow other users** so that **I can see or remove posts by specific users**

| Action  |  Expected | Results  |
|---|---|---|
| Click the follow/unfollow button  | When I click the follow button I should be able to follow a user. When I click the unfollow button I should be able to unfollow the user  | Pass  |

#### As a **Logged In User**, I can **edit my profile** so that **I can keep my profile update**

| Action  |  Expected | Results  |
|---|---|---|
| Click the edit profile menu  | When I click the edit profile menu I should be brought to the profile edit page  | Pass  |

#### As a **User**, I can **update my username and password** so that **I can change my displayed name and keep my account secure**

| Action  |  Expected | Results  |
|---|---|---|
| Click edit profile menu  | I should be able to change username and password  | Pass  |

#### As a **Logged In User**, I can **save a post** so that I can view it later

| Action  |  Expected | Results  |
|---|---|---|
| Click the save post icon  | When I save a post it should be saved into the saves pages   | Pass  |

### Bugs

#### Fixed Bugs
- When I was deploying my project I left out the "api/" at the start of my drf_api urls. The website wasn't working the way it should have. I put "api/" at the start every url and that fixed the error

#### Known Bugs
When I tried to add a success message alert it never showed up.

## Deployment

### How to Clone
1. Open up a terminal
2. Change to the directory where you want the location of the cloned depository 
3. Copy the code below and paste it into the terminal:
```console
git clone https://github.com/EdwardShanahan07/gaelic-games-network.git
```
4. Hit the enter key to clone the repository

### How to Fork
1. Login or signup to Github
2. Search for this repository: [EdwardShanahan07/gaelic-games-network](https://github.com/EdwardShanahan07/gaelic-games-network)
3. Ont the top right corner, click Fork

### Database

1. Register or log in to [ElephantSQL](https://www.elephantsql.com/)
2. At the home page click the "Create New Instance" button
3. Name your database (gaelic games network)
4. Select the free plan "Tiny Turtle"
5. Click the "Select Region" Button
6. Select your "data centre"
7. Click the "Review" Button
8. Click the "Create Instance" button
9. Click into the new instance, and copy the database URL (You need this URL for Heroku Variable later)

### Cloudinary

1. Register or log in to [Cloudinary](https://cloudinary.com/)
2. Open the dashboard tab
3. Copy API Environment Variable (When pasting the variable make sure to remove "CLOUDINARY_URL=" at the start of the varibale)

### Heroku

1. Register or log in to [Heroku](https://www.heroku.com/)
2. Click the "New" button and select "Create new app"
3. Name your app name
4. Select your region
5. Open the settings tab, and click the "Reval Config Vars"
6. Add DATABASE_URL to Config Vars and use your database URL as the value
7. Add SECRET_KEY to Config Vars and use your secret key
8. Add CLOUDINARY_URL to Config Vars and use your Cloudinary API Environment Variable
9. Add ALLOWED_HOST to Config Vars and use the deployed URL link
10. Select the Deploy tab, choose GitHub as your deployment method
11. Search for the project repo and connect
12. Deploy from the main branch to publish

### IDE 
## IDE

1. Create an env.py file
2. Import the os module, add DATABASE_URL and paste the database key

```
import os

os.es.environ["DATABASE_URL"] = "DATABASE URL"
```

3. Add your Django secret key to the env.py file, and cut the SECRET_KEY from
   the settings.py file (If the SECRET_KEY doesn't exist create your own)

```
os.es.environ["SECRET_KEY"] = "SECRET KEY"
```

4. Add your CLOUDINARY variable, copy your Cloudinary API Variable key from the website

```
os.es.environ["CLOUDINARY_URL"] = "CLODINARY API KEY"
```

5. Run project in the terminal

```
  python3 manage.py runserver
```

## Acknowledgments 

### Code Used
- I based the backend code of the Code Institute drf_api module. Using this code helped me build the backend for this project. [drf_api GitHub Link](https://github.com/Code-Institute-Solutions/drf-api/tree/master)
- I based the frontend code of the Code Institute Moments walkthrough project. Using this code helped me build the frontend for this project. [Moments Walkthrough Project Repo](https://github.com/Code-Institute-Solutions/moments/tree/bb6657e265fb18360b841e10d9d633dad06f4e5c)

### Resources
- [Unsplash](https://unsplash.com/) for the images used in this project.
- [Undraw](https://undraw.co/) for the 404 illustration
- [Font Awesome](https://fontawesome.com/) for the icons used in this project
- [Google Fonts](https://fonts.google.com/) for the font used in this project



