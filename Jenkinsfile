node{
    stage('SCM CheckOut')
    {
        git 'https://github.com/kesavanrangan/Node-Web-App.git'
    }
    stage('Build Docker Image')
    {
        sh 'docker build -t kesavanrangan/node-pipeline:v${BUILD_NUMBER} .'
    }
    stage('Push Docker Image')
    {
        withCredentials([string(credentialsId: 'DockerHub_Password', variable: 'DockerHub_Password')])
        {
            sh "docker login -u kesavanrangan -p ${DockerHub_Password}"
        }
        sh 'docker push kesavanrangan/node-pipeline:v${BUILD_NUMBER}'
    }
    stage('Deploy Docker Image')
    {
        def dockerRun = 'docker run -p 3000:3000 -d --name Web-Server kesavanrangan/node-pipeline:v${BUILD_NUMBER}'
        def containerstop = "docker stop \$(docker ps | grep -w Web-Server | awk '{ print \$1 }')"
        def dockerstop = 'docker system prune -a -f'
        
        sshagent(['Prod_Server'])
        {
            sh "ssh -o StrictHostKeyChecking=no ubuntu@172.31.18.96 /home/af_check/trigger.sh"
            sh "ssh -o StrictHostKeyChecking=no ubuntu@172.31.18.96 ${dockerRun}"
        }
    }
}
