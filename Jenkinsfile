// CODE_CHANGES = getGitChanges()
// def gv
// pipeline {
//     agent any
//     environment {
//         NEW_VERSION = '13.8.5'
//     }
    // tools {
    //     maven "maven-3.9"
    // }
    // parameters {
    //     choice(name: 'VERSION', choices: ['1.1.0','2.0.0','3.0.1'], description:'')
    //     booleanParam(name: 'executeTest', defaultValue: true, description:'')
    // }
    // stages {
    //     stage("build") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev' && CODE_CHANGES == true
            //     }
            // }
            
        //     steps {
        //         echo 'building...'
        //         script {
        //             gv = load "script.groovy"
        //         }
        //     }
        // }

        // stage("test") {
            // when {
            //     expression {
            //         BRANCH_NAME == 'dev' | 'main'
            //     }
            // }
//             when {
//                 expression {
//                     params.executeTest
//                 }
//             }
//             steps {
//                 echo 'testing...'
//             }
//         }

//         stage("deploy") {
//             input {
//                 message "select env to deploy"
//                 ok "done"
//                 parameters{
//                     choice(name: 'ENV', choices: ['dev','staging','prod'], description:'')
//                 }
//             }
//             steps {
//                 script {
//                     gv.deployApp()
//                     echo "Deploying to ${ENV}"
//                 }
//             }
//         }
//     }

// }
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
                    withCredentials([sshUserPrivateKey(credentialsId: 'my-vps', 
                                   keyFileVariable: 'SSH_KEY', 
                                   usernameVariable: 'VM_USER')]) {
                        sh "ssh -i ${SSH_KEY} ${VM_USER}@${VM_IP} 'docker ps'"
                    }
                }
            }
        }
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

// testing GITHUB trigger auto
// testing GITHUB trigger auto
// testing GITHUB trigger auto
// testing GITHUB trigger auto
// testing GITHUB trigger auto
// testing GITHUB trigger auto
// testing GITHUB trigger auto