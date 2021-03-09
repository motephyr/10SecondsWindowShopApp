npm install
ionic build --prod

# scp -Cr ./www/* windowshopdeploy:~/www/
tar czf - ./www/* | ssh windowshopdeploy "tar xvzf -"
scp -r android/app/build/outputs/apk/debug/app-debug.apk windowshopdeploy:~/www/windowshop.apk
