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
                sh 'npm install @angular/cli -g'
                sh 'npm i --unsafe-perm' 
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