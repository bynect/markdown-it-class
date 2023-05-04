#!/bin/bash

echo '{ "private": true }' > package.json
npm i markdown-it @bynect/markdown-it-class --save
node sample.js
