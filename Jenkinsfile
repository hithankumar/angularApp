pipeline {
    agent {
        docker {
            image 'node:6-alpine' 
            args '-p 3000:3000' 
        }
    }
    environment {
        CI = 'true'
    }
    stages {
        stage('Build') { 
            steps {
                sh 'npm install -g @angular/cli@6.1.4'
                sh 'npm view @angular/cli'
                //sh 'npm install' 
            }
        }
        // stage('Test') {
        //     withEnv(["CHROME_BIN=/usr/bin/chromium-browser"]) {
        //         sh 'ng test --progress=false --watch false'
        //     }
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