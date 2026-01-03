// CODE_CHANGES = getGitChanges()
def gv
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
                script {
                    gv = load "script.groovy"
                }
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
                script {
                    gv.deployApp()
                }
            }
        }
    }

}