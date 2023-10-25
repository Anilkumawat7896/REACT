# ignition part 2

here we have replaced the cdn liks with the original import or the React and React-DOM

# parcel

- dev builds
- Local server
- HMR (Hot module replacement)
- file watching algorithum written in c++
- parcel is cacheing things for us (result is :-- faster builds) it is caching things in the ``.parcel-cache folder/directory` which was introduces at the time of parcel installation
- Image optimization
- minification of files (in the production builds)
- bundling
- compression
- consistent hashing
- code spliting for us
- diffential bundeling ( to support older browser )
- Dignostic
- Error handling
- https
- tree shaking (remove unused code for us)
- different dev and production bundle

      if by mistake the `.parcel-cache forlder/directory`is deleted than at the time of build it will be reganrated so don't worry to much Golu 😂😂

      parcel is in one of the most resones for the production ready apps to run faster

      after built of our app ` npx build index.html(or the starting or root file)` all the code we have written will be converted into 3 files which will be html css and javascript files and those files would contain the code we have written

## Browser's List

    we can give a list of brosers on which our app would be compaitible only --

      example --:
            " package.json"
            broserslist:[
                  "last 2 Chrome versions",
                  "last 2 firefox versions",
                  "last 2 versions",(this will cover all the broser with last two versions)
            ]

      here the "2" can very and it could be any versions of any browser
