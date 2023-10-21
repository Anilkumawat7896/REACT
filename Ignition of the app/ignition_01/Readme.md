# ignition 01

    in the package.josn file we have depaindencies like

        <code>
            "devDependencies": {
                "parcel": "^2.8.3"
            }
         </code>

<br>

    here the symbol "^" is calles carrot if i didnot misspell it then.And it is responsible for the minar updateds in the depaindencies

    we could sometime see another symbol like "~" this that is clled tilde and it is responsible for major updates

## package-lock.json

    this files keeps the record of the exect version of the depaindencies not the minor or major updates versions

    in the mean time package.json keeps a approx version of the depaindencies but at the other hand package-lock.json keeps the exect version of the depaindencies

## other depaindencies

    package-lock.josn keeps a hash to avoid the funny situation like it is workin in my local enviourment but not on my production somehting like that ...... continues......😂

## node modules

    it is the directory/folder that contains all the code which we have fetched from npm hope you understand that !!!

# to ignite our app

use this --:

    <code>
         npx parcel index.html(source file name)
    </code>

    

   ```
     to change the port number use this

        npx parcel index.html --port 3000 / any_port_number

   ```

## now the difference between npm and npx

    NPM is a package management that is used to install, uninstall, and update Javascript packages on your workstation, whereas NPX is a package executer that is used to directly execute Javascript packages without installing them


## React Import methods

    using CDN likes is not prefered we have done this in this little project ( if we call it a project then 😂 ) .Otherwise we can use `npm create-react-app app_name`  .Because npm has hosted the react app so we do not need to go through that tedious way to make a react app and host it!!!



