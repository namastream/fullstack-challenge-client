# Client

## Set up local environment
- Make sure you have node 10.x+ installed
- Make sure you have Vue Cli installed 
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies
#### locally
```
npm run build
```
#### for production
```
npm run build:production
```


### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```

## Challenge

#### Functionality
This challenge consists of completing partially completed project which should support the following:
- fetching and listing available pages
- fetching and displaying page details
- retrieving and displaying page comments
- adding page comments
- replying to comments
 
#### Requirements
- create or use an existing Vue component, which enables mentioning users in comments and replies
- when you type @ in the comment component, a popup should offer the list of users where one should pick one of the users
- if @ contains any subsequent characters, popup should filter shown users - i.e. @jo would result in a popup which would contain "John Doe, Jonathan Rea, Jo Samson" but would not contain any users not starting with "jo" (case insensitive)
- comments can contain 0 or N mentions (N>=0)
- when comments are displayed, the mentions should be rendered as links to user profile page (see example page implementation)
- **IMPORTANT**: comments must be stored in such a format, that it's possible to render them in both browser and mobile app (this means that storing the comments as HTML with hardcoded links to the user profile may not be the best option)
- **IMPORTANT**: database can contain multiple users with same first and last name. App should be able to handle this.
- TIP: store the comments in JSON format and construct an HTML before rendering them

#### Bonus points
- you receive **bonus points** for deploying the Challenge as a functional demo

# Challenge completion
Please upload your solution to your github and send us your repository URL.
If you deployed the client, please also send us the URL.
