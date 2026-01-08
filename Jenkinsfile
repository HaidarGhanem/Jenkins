@Library('jenkins-shared-library')_
pipeline {
    agent any 
    environment {
        USER="haidarghanem"
        IMAGE="profile"
        DOCKER_ID="docker-hub"
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

                    sshagent(['my-vps']) {
                        sh "scp -o StrictHostKeyChecking=no docker-compose.yml haidar@172.17.0.1:/home/haidar/app"
                        sh "ssh -o StrictHostKeyChecking=no haidar@172.17.0.1 'cd /home/haidar/app && export IMAGE_TAG=${env.BUILD_NUMBER} && docker compose up -d'"
                    }
                }
            }
        }
    }
}