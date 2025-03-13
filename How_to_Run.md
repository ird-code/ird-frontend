Install Git on your computer

Create a new folder and open it.

Right Click and Select (Open Git Bash Here)

type ---->
-----------------------------------------------------------------------------------------------------------------------

git clone https://github.com/Institute-for-Rural-Development/frontend.git      

-----------------------------------------------------------------------------------------------------------------------


Open the cloned folder using VS Code


Right Click the frontend folder in VS Code and select Open in Integrated Terminal


now type--->
--------------------------------------------------------------------------------------------------------------------------
npm run dev
--------------------------------------------------------------------------------------------------------------------------


now you might receive    - Local:        http://localhost:3000

if u did u can ctrl+click on link and website will open


if u run into this error
  'next' is not recognized as an internal or external command,


type ----->
----------------------------------------------------------------------------------------------------------------------------
npm install next@latest react@latest react-dom@latest
----------------------------------------------------------------------------------------------------------------------------

It'll take some time and you can "npm run dev" again to get the link







If u want to get changes made in the future instead of doing this again we can pull the updates

just type ---->
----------------------------------------------------------------------------------------------------------------------------
git pull origin main
----------------------------------------------------------------------------------------------------------------------------

