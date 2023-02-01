pipeline{
    agent any
    stages{
        stage("dependency"){
            steps{
                sh 'npm install'
            }
        }
        stage("test"){
            steps{
                sh "npm test"
            }
        }
    }
}

