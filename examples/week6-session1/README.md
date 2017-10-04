# week5-session1-summer-2017

Start by downloading and installing Android Studio and Android ADK.

## Setup ENV

Be sure to replace /home/bobby/.android-sdk with the folder location of your android sdk files

```sh
echo 'ANDROID_HOME=/home/bobby/.android-sdk' >> ~/.bashrc
echo 'PATH=$PATH:/home/bobby/.android-sdk/tools' >> ~/.bashrc
```

## Create cordova applicatoin

```sh
cordova create tempApp
cd tempApp
```

## setup github repository

```sh
echo "# week5-session1-summer-2017" >> README.md
git init
git add README.md
git commit -m "first commit"
git remote add origin git@github.com:okcoders/week5-session1-summer-2017.git
git push -u origin master
```

## Add Mobile Platform

cordova platform add android

## Test Run our Application

cordova run android