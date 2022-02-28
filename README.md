# kitty-text


## project idea/description
What type of app would encourage people to once again, give up their personal email to try out?  I was suggested a cat rating app... like Rate-My-Chonk but it made me realize that I would be making another project that would exclude those who may be visually disabled or rely on assistive technology. This is my attempt to bridge that gap.  

It still involves ratings!  But instead of images, the user will be given prompts/[alt-texts] of cat images, and they will write a caption from just the prompt. Once entered, the actual image will show and users can vote on their favorite caption.  It's madlib sort of...with pictures... i don't know. :D

Users can continue to write captions or they can go "dev-mode" and write great alt-texts for other users.  This might be a stretch goal.

Hopefully, this will be entertaining to all participants including those using screen readers.

## User stories

- As a user, I want to vote my favorite captions.
- As a user, I want to look at my previous captions.
- As a user, I want to delete my captions.
- As a user, I want to play dev-mode. 
- As a user, I want to edit/delete my alt texts.
- As a user, I want to view my previous texts.
## MVP
- use TheCatApi and write out 20-30 alt-texts for images
- make sure those are saved looping as prompt
- working navbar 
- random cat facts api on main page?
- work on dev-mode where users can write their own alt-text from images
- make sure they are getting images without alt-texts assigned to them

## stretch goals
- voting for best alt-texts, and they'll be used as the prompts
- dev affirmation api on "dev mode"
- about page
## installation instructions

## link to deployed live site

## ERDS

![an ERD of my project](ERD.drawio.png)
## approach taken
## flow chart
![basic flow chart](flowchart.png)
## tech used
- nodeJS
- javascript
- express
- ejs-layouts
- bootstrap
- dotenv
- npm
- bcrypt 
- cryptoJS
- sequelize
- postgres
- postico 
- canva.com (wireframes)
- draw.io (ERD)
-TheCatApi


## wireframes
home page-basically, i want people to know what they are signing up for
![home page](index1.png)
home page-the image should carousel to show how it is played
![home page](index2.png)
user logged in index page
![logged-in page](cathome.png)
cat-tree page shows all collected cats of the user... cats the user has made captions for.
![cat-tree-page](cattree1.png)
cat-tree page includes all captions and alt-texts, has option to edit or delete
![logged-in page](cattree21.png)
captions mode instructions
![logged-in page](captionsinst.png)
captions prompt page
![logged-in page](caption2.png)
caption results page
![logged-in page](captionresult.png)
captions result page
![logged-in page](resultpage.png)
devmode instructions
![logged-in page](devmodeinst.png)
devmode gameplay
![logged-in page](devmode2.png)



## restful routing chart

## sources used