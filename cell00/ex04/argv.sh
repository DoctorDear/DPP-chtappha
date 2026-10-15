#!/bin/bash

if [ "$#" -eq 0 ]; then
    printf '%s\n' 'No arguments supplied'
else
    for argument in "${@:1:3}"; do
        printf '%s\n' "$argument"
    done
fi
