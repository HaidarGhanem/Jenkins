// CODE_CHANGES = getGitChanges()
pipeline {
    agent any
    environment {
        NEW_VERSION = '13.8.5'
    }
    stages {
        stage("build") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev' && CODE_CHANGES == true
            //     }
            // }
            steps {
                echo 'building...'
            }
        }

        stage("test") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev' | 'main'
            //     }
            // }
            steps {
                echo 'testing...'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying....'
                withCredentials([
                    usernamePassword(credentialsId: 'github-jenkins', usernameVariable: 'USER', passwordVariable: 'PWD')
                ]){
                    echo "${USER}"
                }
            }
        }
    }

}