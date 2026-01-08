@Library('jenkins-shared-library')_
pipeline {
    agent any 
    stages {
        stage("test"){
             when {
                        expression {
                            BRANCH_NAME == 'test'
                        }
            }
            steps{
                script{
                    npm()
                    sshagent(['my-vps']) {
                        sh 'ssh -o StrictHostKeyChecking=no haidar@172.17.0.1 "docker ps"'
                    }
            }
        }}
        stage("build"){
             when {
                        expression {
                            BRANCH_NAME == 'dev'
                        }
            }
            steps{
                script{
                    echo "testing application ..."
                }
            }
        }
        stage("deploy"){
            when {
                        expression {
                            BRANCH_NAME == 'main'
                        }
            }
            steps{
                script{
                    echo "deploying application ..."
                }
            }
        }
    }
}