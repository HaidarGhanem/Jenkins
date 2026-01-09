@Library('jenkins-shared-library')_
pipeline {
    agent any 
    environment {
        USER="haidarghanem"
        IMAGE="profile:2.0"
        DOCKER_ID="docker-hub"
        // IMAGE_TAG = sh(script: "git rev-parse --short HEAD", returnStdout: true).trim()
    }
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
            }
        }}
        stage("build & push"){
             when {
                        expression {
                            BRANCH_NAME == 'dev'
                        }
            }
            steps{
                script{
                    buildDockerImage(user: "${USER}", image: "${IMAGE}")
                    pushDockerImage(dockerId: "${DOCKER_ID}", user: "${USER}", image: "${IMAGE}")
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
                    def ec2Instance = "haidar@172.17.0.1"
                    sshagent(['my-vps']) {
                        sh "scp -o StrictHostKeyChecking=no docker-compose.yml ${ec2Instance}:/home/haidar/app"
                        sh "ssh -o StrictHostKeyChecking=no ${ec2Instance} 'cd /home/haidar/app && export IMAGE_NAME=${IMAGE} && docker-compose up -d'"
                    }
                }
            }
        }
    }
}