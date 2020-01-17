#!/bin/bash
export cont=$(docker ps | grep -w Web-Server | awk '{ print $1 }')
if [ -z "$cont" ]
then
        docker stop $(docker ps | grep -w Web-Server | awk '{ print $1 }')
else
        docker stop $(docker ps | grep -w Web-Server | awk '{ print $1 }')
        echo "Containers are running with ID $cont"
fi
