pipeline {
    agent any

    stages {
        stage('Build Image') {
            steps {
                sh 'docker build -t node-app:${BUILD_NUMBER} .'
            }
        }
        stage('Run Container') {
            steps {
                sh '''
                docker rm -f node-app || true
                docker run -d -p 3000:3000 --name node-app node-app:${BUILD_NUMBER}
                '''
            }
        }
    }
}

