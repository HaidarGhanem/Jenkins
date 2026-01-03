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
            when {
                expression {
                    BRANCH_NAME == 'dev'
                }
            }
            steps {
                echo 'testing...'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying....'
            }
        }
    }

    post {
        always {
            echo "Basically ${NEW_VERSION}"
            echo BRANCH_NAME
        }
        success {
            echo "Successfully ${NEW_VERSION}"
        }
        failure {

        }
    }
}