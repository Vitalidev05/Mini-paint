# Innowise-Lab-Internship-Level-2-Mini-paint
[TASK](https://docs.google.com/document/d/1K79_NA4lMYfqQiIJGqLDek1K9z-oc2qg8n4AvrN1PXE/edit)

# Demo
[Clever-todo-list](https://determined-yonath-c75cd8.netlify.app/)

# How to run the app
1. Clone this repo:
  ```
  $ git clone https://github.com/KantyshVitali/Innowise-Lab-Internship-Level-2-Mini-paint.git
  ```
2. Open the directory in code editor
3. Run npm install
  ```$ npm install```
4. Using git checkout enter in branch(last branch feature is feature/publicDrawings)
	 ```$ git checkout feature/publicDrawings"``` 
5.  Run the application with the command
      ```$ npm run dev```

# npm scripts
- For run project locally 
```$ npm run dev```
- For build project 
```$ npm run build```
- For run prettier
```$ npm run prettier:format```
- For eslint check errors
```$ npm run lint```
- For eslint fix errors
```$ npm run lint:fix```
- For eslint fix errors and prettier
```$ npm run fix```

# Folders sturture
```
└──src
    ├──components					        # React components
        ├──AddNewPaint						# AddNewPaint component
            ├──AddNewPaint.tsx
            ├──index.ts
            └──AddNewPaint.scss
        ├──App						        # App component
            ├──App.tsx
            ├──index.ts
            └──App.scss
        ├──AppRouter				      # AppRouter component for routes
            ├──AppRouter.tsx
            └──index.ts  
        ├──Paint					        # Paint component
            ├──Canvas				      # Canvas component
                ├──Canvas.tsx
                ├──Canvas.scss
                └──index.ts
            ├──SettingBar					# SettingBar component
                ├──SettingBar.scss
                ├──SettingBar.tsx
                └──index.ts
            ├──Toolbar					  # Toolbar component
                ├──Toolbar.scss
                ├──Toolbar.tsx
                └──index.ts          
            ├──Paint.scss		
            ├──Paint.tsx
            └──index.ts       
         ├──Home					        # Home component
             ├──Home.tsx
             └──index.ts
         ├──Loader					      # Loader component
             ├──Loader.tsx
             └──index.ts
         ├──Login					        # Login component
             ├──Login.tsx
             └──index.ts
         ├──NavBar					      # NavBar component
             ├──NavBar.tsx
             ├──NavBar.scss	
             └──index.ts
         ├──Paints					      # Paints component
             ├──Paints.tsx
             ├──Paints.scss
             └──index.ts          
         └──publicDrawings        # PublicDrawings component
             ├──publicDrawings.tsx
             ├──publicDrawings.scss
             └──index.ts 
             
	├──const						            # const data for project
	    └──index.ts
    ├──hooks						          # custom hooks to connect redux
	    ├──useAction.ts
	    └──useTypedSelector.ts
	├──store						            # redux store
	    ├──actions					        # store actions
		    ├──actions.ts			
		    ├──actionTypes.ts
		    └──index.ts
	    ├──reducers					        # store reducers
		    ├──canvasState.ts         # reducer for canvas(create a draw)
		    ├──privatePaints.ts       # reducer for lists of your canvases
		    ├──publicDrawings.ts      # reducer for public drawings
        ├──rootReducer.ts         # combine reducers together 
        └──toolState.ts           # reducer for tool for canvas
	    └──index.ts
    ├──utils						          # utils for project
	    ├──arrayUtils.ts
	    └──index.ts
	├──index.tsx					
	├──initFirebase.ts				      # data for connect to firebase
	└──routes.ts					          # lists of public and private routes
	    
```
# FIRESTORE STRUCTURE

```
    └──users                        #main collection for users
	     └──userId                    #user id document
	        └──paints                 #collection of drawings
	           └──paintId             #paint id document				          
	              ├──isShare      	  #isShare (boolean)
                ├──paintName        #paint name (string)
                └──paintUrl         #paint url (string)
                
    └──publicDrawings               #publicDrawings collection for public drawings
	     └──authorName                #author name document
	        └──drawings               #collection of public drawings
	           └──drawingId           #drawing id document				          
	              ├──paintName        #paint name (string)
                └──paintUrl         #paint url (string)
               

```
 # APPLICATION STACK
 
### React

### TypeScript

### Redux

### Webpack

### ESLint 

### Prettier

### Firebase

### react-router
