pipeline {
    agent {
        docker {
             image 'node:8' 
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
               sh 'npm install cross-env'
               sh 'set -x'
               sh 'set +x'
               sh 'set -x'
               sh 'npm run test'
               
               //sh 'npm run build'
               //sh 'ng build --no-aot --no-build-optimizer --base-href ./'
               //sh 'ls'
            }
        }
        // stage('Test') {
        //     steps {
        //         // sh 'cd ${JENKINS_HOME}/path/to/unit/tests && phantomjs phantomjs-runner.js tests.html'
        //         //sh 'npm install -g phantomjs@2.1.1 --unsafe-perm'
        //        // sh 'cd ~/bin'
        //        // sh 'ln -s ../node_modules/phantomjs-prebuilt/bin/phantomjs'
        //         //sh 'phantomjs --version'
        //        // sh 'npm run test -- -cc -sr --browser HeadlessChrome'
        //        // sh 'ng test --progress=false --watch false'
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