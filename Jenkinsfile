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

                    def dockerComposeCmd = "docker-compose -f docker-compose.yml up -d"
                    sshagent(['my-vps']) {
                        sh "scp -o StrictHostKeyChecking=no docker-compose.yml haidar@172.17.0.1:/home/haidar"
                        sh "ssh -o StrictHostKeyChecking=no haidar@172.17.0.1 ${dockerComposeCmd}"
                    }
                }
            }
        }
    }
}