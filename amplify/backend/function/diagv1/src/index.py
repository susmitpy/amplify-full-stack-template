import awsgi
from flask_cors import CORS
from flask import Flask, jsonify, request

import pandas as pd
import thinkcellbuilder
import pptx
import xlrd

import boto3

app = Flask(__name__)
CORS(app)


BASE_ROUTE = "/v1"

@app.route(BASE_ROUTE, methods=['GET'])
def test():
    return jsonify(message="hello world")


def handler(event, context):
    return awsgi.response(app, event, context)