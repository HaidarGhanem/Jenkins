def deployApp(){
    echo 'deploying....'
                // withCredentials([
                //     usernamePassword(credentialsId: 'github-jenkins', usernameVariable: 'USER', passwordVariable: 'PWD')
                // ]){
                //     echo "${USER}"
                // }
    echo "version: ${params.VERSION}"
}
return this