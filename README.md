# React Native TypeScript App

## Overview

This is a React Native mobile application built with TypeScript, utilizing Node.js as the runtime and npm as the package manager.

## Table of Contents

- [Installation](#installation)
- [CLI Installations](#cli-installations)
- [Configuration](#configuration)
- [Usage](#usage)

## Installation

1. Clone the repository:
   git clone https://github.com/kyratolnai11/peopleHouse.git

2. Navigate to the project directory:
   cd peopleHouse

3. Install all dependencies:
   npm install

## CLI Installation

1. In a shell terminal install the Expo CLI:
   npm install -g expo-cli

2. In a shell terminal install the Amplify CLI
   npm install -g @aws-amplify/cli

## Configuration

1. Log into your AWS account using the CLI:
   amplify configure

You need to make sure to have the necessary permissions to interact with the project, and ask the project's administrator to add you to the development team.

2. Initialize Amplify in your local environment:
   amplify init

If promted, select the People House project that you would like to get access to.

## Usage

To run the app locally, you need to download an IOS and Android emulator of your choosing. The development team used XCode and Android Studio.

1. To run the project on IOS, navigate the the project directory and run:
   npx expo start -i

2. To run the project on IOS, navigate the the project directory and run:
   npx expo start -a

3. If you would like to make changes to the AWS resources run:
   amplify push

4. To pull the recent changes from the cloud run:
   amplify pull
