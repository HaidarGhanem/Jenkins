// CODE_CHANGES = getGitChanges()
pipeline {
    agent any
    environment {
        NEW_VERSION = '13.8.5'
    }
    // tools {
    //     maven "maven-3.9"
    // }
    parameters {
        choice(name: 'VERSION', choices: ['1.1.0','2.0.0','3.0.1'], description:'')
        booleanParam(name: 'executeTest', defaultValue: true, description:'')
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
            when {
                expression {
                    params.executeTest
                }
            }
            steps {
                echo 'testing...'
            }
        }

        stage("deploy") {
            steps {
                echo 'deploying....'
                // withCredentials([
                //     usernamePassword(credentialsId: 'github-jenkins', usernameVariable: 'USER', passwordVariable: 'PWD')
                // ]){
                //     echo "${USER}"
                // }
                echo "version: ${params.VERSION}"
            }
        }
    }

}