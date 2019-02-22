pipeline {
    agent {
        docker {
            image 'node:8.12-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
               // sh 'npm install'
               // sh 'ng version'
               sh 'node -v'
               sh 'npm install'
               sh 'npm run test'
               //sh 'npm run build'
               //sh 'ng build --no-aot --no-build-optimizer --base-href ./'
               //sh 'ls'
            }
        }
        // stage('Test') {
        //     steps {
        //         sh 'ng test --progress=false --watch false'
        //     }
           
        //     // withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
        //     //     sh 'ng test --progress=false --watch false'
        //     // }
        // }
        
        // stage('Deliver') { 
        //     steps {
        //         sh './jenkins/scripts/deliver.sh' 
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)' 
        //         sh './jenkins/scripts/kill.sh' 
        //     }
        // }
    }
}